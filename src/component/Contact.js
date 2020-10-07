/* eslint-disable */
import React, { useRef} from 'react';
//import {useState,useCallback,useMemo,useContext} from 'react';

import {CONTACTS,SOCIALNETWORKS} from '../data/data.js';
//import {ContextContactForm} from '../Context/Context.js';

//import axios from 'axios';
//import Routing from '../Route';

//import useAxiosPost from '../hook/useAxiosPost';
//import useBool from '../hook/useBool';

//import Alert from './Alert';
//import useAlert from '../hook/useAlert';

//import Recaptcha from 'react-google-invisible-recaptcha';

const ListContact = ({title,lists}) => {
    let item = [];
    lists.forEach(list => {
        item.push(
            <li key={list.key}>
                <span><i className={list.icone}></i></span>
                <span>
                    <a href={list.link} target="_blank">{list.title}</a>
                </span>
            </li>
        );
    });
    return <div className="list-contact">
            <h3>{title}</h3>
            <ul>
                {item}
            </ul>
    </div>
}
/*
const FormContact = ({defaultValue,onSubmit,children,action}) => {
    
    const contactFormRef = useRef(null);

    const [data, setData] = useState(defaultValue);

    const change = useCallback((name,value) => {
        setData(d => Object.assign({}, d , {[name]: value}))
    },[]);
    
    const value = useMemo(() => {
        return Object.assign({}, data, {change:change})
    }, [data, change]);

    const handleSubmit = useCallback((e) => {
        
        e.preventDefault(); 

        onSubmit(value,contactFormRef.current,setData,action);

    },[onSubmit, value]);
    
    return <ContextContactForm.Provider value={value}>
        <form action="#" autoComplete="off" onSubmit={handleSubmit} ref={contactFormRef}>
            <div className="form-group">
                <p>Etes-vous convaincus à me confier votre projet? Veuillez bien m'expliquer votre projet pour que vous auriez un bon devis en remplissant le formulaire ci-dessous ou contactez-moi directement en appel téléphonique ou via email.</p>
            </div>
            {children}
        </form>        
    </ContextContactForm.Provider>
}

const ContactInputField = ({type,name,value = null}) => {
    const data = useContext(ContextContactForm);
    const handleChange = useCallback((e) => {
        data.change(e.target.name,e.target.value)
    },[data.change]);
    
    let label = type == "hidden" ? '' : <label htmlFor={name}>{value}</label>;

    return <div className="form-group"> 
        {label}
        <input type={type} name={name} id={name} onChange={handleChange}  value={data[name] || ''} />
    </div>
}

const ContactTextareaField = ({name,value}) => {
    const data = useContext(ContextContactForm);
    const handleChange = useCallback((e) => {    
        data.change(e.target.name, e.target.value)
    },[data.change]);

    return <div className="form-group">
        <label htmlFor={name}>{value}</label>
        <textarea name={name} id={name} cols="30" onChange={handleChange} value={data[name] || ''} rows="10"></textarea>
    </div>
}

const ContactSubmit = (props) =>  (     
     <div className="form-group">
        <button type={props.type} className={props.className}>{props.value}</button>
    </div> 
);
*/

const Contact = () => {

    /*
    const resendRef = useRef(null);
    const recaptcha = useRef(null);
    
    /**
     * State de l'alerte apres submission
     
    const [alertShow,setAlertShow] = useAlert({isShow:false,type:"default",message:""});
    const alertClose = () => setAlertShow({isShow:false,type:"default",message:""}); 

    /**
     * State du loading pendant la submission
     
    const [loading,items] = useAxiosPost(Routing.generate("token.send.action"),{});

    /**
     * State du formulaire si on vérifie le code ou non
     
    const [toVerifyCode,verifyCode] = useBool(false);
    let defaultValue = !toVerifyCode ? {title:"", email:"", message:"", _token:items } : {title:"", email:"", message:"", code:"",_token:items};
    let contactActionForm = !toVerifyCode ? 'message.send.action' : 'verify.email';

    /**
     * 
     * Permettre de faire la submission du formulaire
     
    const handleSubmit = (value,contactRef,setData = null,action) => {
        let btnSubmit = '';

        contactRef.elements.forEach(el => {
            if(el.attributes.type !== undefined) {
                if(el.attributes.type.nodeValue == "submit") {
                    btnSubmit = el;
                }
            }
        });

        btnSubmit.textContent = "En attente . . .";

        if(typeof(recaptcha.current.execute) == 'function' || typeof(recaptcha.current.reset) == 'function' ) {
            axios.post(Routing.generate(action),value)
                .then((response) => {

                    const message = response.data.message;
                    recaptcha.current.execute();
                    
                    if(action == "message.send.action") {
                        btnSubmit.textContent = "Valider"; 
                        verifyCode(true);
                        setAlertShow({isShow:true,type:"success",message:message});
                    }
                    if(action == "verify.email") {
                        btnSubmit.textContent = "Obtenir un devis";
                        setData(defaultValue);
                        verifyCode(false);
                        setAlertShow({isShow:true,type:"success",message:message});
                    }
                    setTimeout(() => {
                        setAlertShow({isShow:false,type:"default",message:""});
                    },3000);
                })
                .catch((error) => {
                    
                    btnSubmit.textContent = toVerifyCode ? "Valider" : "Obtenir un devis";
                    let message = '';        
                    recaptcha.current.reset();
                    
                    if(error.response == undefined){
                        message = "Une erreur est survenue";
                    } else {
                        message = error.response.status !== 403 ? "Une erreur est survenue" : error.response.data.message;
                    }
                    setAlertShow({isShow:true,type:"danger",message:message});
                    
                })
        } else {
            btnSubmit.textContent = "Obtenir un devis";
            setAlertShow({isShow:true,type:"danger",message:"Erreur du connexion"});
            setTimeout(() => setAlertShow({isShow:false,type:"default",message:""}),2000);
        } 
    }

    const handleResendCode = useCallback((e) => {
        e.preventDefault();
        const form = resendRef.current.parentElement.parentElement;
        let value = defaultValue;
        
        form.elements.forEach(el=> {  
            if(el.attributes.name !== undefined) {
                let name = el.attributes.name.nodeValue;
                switch(name) {
                    case 'email':
                        value.email = el.value
                        break;
                    case 'title':
                        value.title = el.value
                        break;
                    case 'message':
                        value.message = el.value
                        break;
                    case 'code':
                        value.code = el.value
                        break;
                } 
            }
        });
        handleSubmit(value,form,null,'message.send.action');
        verifyCode(true);
    },[items]);
    
    */

    return <div className="contact-content">
        <div className="contact-item">
            <ListContact title={"Contact"} lists={CONTACTS} />
        </div>
        <div className="contact-item">
            <ListContact title={"Réseaux sociaux"} lists={SOCIALNETWORKS} />
        </div>        
    </div> 
}

export default Contact;

/*
{!loading 
    ?
    <FormContact onSubmit={handleSubmit} action={contactActionForm} defaultValue={defaultValue}>
        {alertShow.isShow && <Alert variant={alertShow.type} handleClose={alertClose}>{alertShow.message}</Alert>}
        <ContactInputField type="text" name="title" value="Sujet" />
        <ContactInputField type="email" name="email" value="Email" />
        <ContactTextareaField name="message" value="Message" />
        {toVerifyCode && 
            <React.Fragment>
                <ContactInputField type="text" name="code" value="Code de confirmation" />
                <p>
                    Si vous n'avez pas reçu le code de confirmation, veuillez cliquer 
                    <a href="#" className="resend-code-js" ref={resendRef} onClick={handleResendCode}> ici.</a>
                </p>
            </React.Fragment>                    
        }
        <ContactInputField type="hidden" name="_token" />
        <Recaptcha 
            ref={recaptcha}
            sitekey="6Lcs5MYZAAAAAEhptYC2QTPl5UmdQOaVv317qcx5"
        />              
        <ContactSubmit className="btn-theme btn-dark" type="submit" value="Obtenir un devis" />  
    </FormContact>
    :
    "Chargement ..."
}
*/
/*
<Recaptcha 
    ref={recaptcha}
    sitekey="6LeLkcQZAAAAAHcZmrBFtt6908XqEBbjqS9e0ZIb"
    onResolved={onResolved}
/>
*/