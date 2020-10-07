/* eslint-disable */

const EMAIL = ["harimananadev","gmail.com"];

const ABOUTS = [
    {
        key:"about_1",
        title:{year:"Mars 2020 - Aujourd'hui: ",text:"Retour en autodidacte",content:"A cause du Covid-19, je suis de retour à l'apprenti autodidacte et je suis disponible pour votre projet web."}
    },
    {
        key:"about_2",
        title:{year:"2019- Mars 2020: ",text:"Stagiaire à Nir'Info",content:"Pour avoir plus d'une expérience professionnelle, je suis qualifié en tant que stagiaire dans cette entreprise."}
    },
    {
        key:"about_3",
        title:{year:"2018-2019: ",text:"Apprenti en autodidacte",content:"Pour accélérer mon étude, j'ai fait l'autodidacte pour améliorer mes compétences sur plusieurs différentes technologies."}
    },
    {
        key:"about_4",
        title:{year:"2018: ",text:"Obtention du diplôme en Licence professionnelle  ",content:"En 2018, j'ai réussi à obtenir mon diplôme en informatique spécialisé sur le web."}
    },
    {
        key:"about_5",
        title:{year:"2014: ",text:"Premier apprentissage de la  programmation",content:"Cette année-là que j'ai débuté l'étude du développement web au sein d'une université ISIME Madagascar."}
    }   
];

const CONTACTS = [
    {
        key:"phone",
        icone:"fas fa-phone",
        title:"+261 32 73 074 49",
        link:"tel:+261327307449"
    },
    {
        key:"email",
        icone:"fas fa-envelope",
        title:"harimananadev@gmail.com",
        link:"mai"+"lto"+":"+EMAIL.join("@")
    }
];

const SOCIALNETWORKS = [
    {
        key:"github",
        icone:"fab fa-github",
        title:"Github/Harimanana",
        link:"https://github.com/crystel1996"
    },
    {
        key:"facebook",
        icone:"fab fa-facebook",
        title:"Facebook/Harimanana Ratsimbazafy",
        link:"https://web.facebook.com/chris.ratsimbazafy"
    },
    {
        key:"linkedin",
        icone:"fab fa-linkedin",
        title:"Linkedin/Harimanana Ratsimbazafy",
        link:"https://www.linkedin.com/in/crystel-ratsimbazafy-996a5417a/"
    },
    {
        key:"codepen",
        icone:"fab fa-codepen",
        title:"Codepen/Harimanana Ratsimbazafy",
        link:"https://codepen.io/harimanana-ratsimbazafy"
    },
];

const NAVLINKS = [
    {href:"home", text:"Accueil"},
    {href:"skill", text:"Compétences"},
    {href:"portfolio", text:"Portfolio"},
    {href:"services", text:"Services"},
    {href:"about", text:"A propos"},
    {href:"contact", text:"Contact"}
];

const PORTFOLIOS = [
    {
        key:"project1",
        image:{link:"netWedding.jpg",alternative:"Net Wedding"},
        title:{text:"Net Wedding", link:"https://crystel1996.github.io/NetWedding", content:"C'est un prototype d'une portfolio pour les photographes créé en React JS et SASS."}
    }
];

const LISTSERVICES = [
    {
        title:
            {key:"integration_web",text:"Intégration web", content:"Besoin d'un intégrateur ? Je suis à votre disposition en intégrant vos maquettes en HTML/CSS ou SASS."}
    },
    {
        title:
            {
                key:"developpement_web",text:"Développement web", content:"Recherche d'un développeur web ? Je suis capable de créer des sites vitrines, portfolio, évènementiel, e-commerce et des applications web spécifiques."
            }
    },
    {
        title:
            {
                key:"responsive_design", text:"Responsive design", content:"Votre projet n'est pas supporter les différentes supports ? Vous pouvez à me confier pour faire la responsive de votre site web."
            }
    }
];

const LISTSKILL = [
    {
        key: "htmlcss",
        image:
            {link: "html5css3.png", alternative:"HTML5 / CSS3"}, 
        title:
            {text: "HTML 5 / CSS 3"},
        progress: "90"
    },
    {
        key: "sass",
        image:
            {link: "sass.png", alternative:"Sass"},
        title:
            {text: "Sass"},
        progress:"80"
    },
    {
        key: "javascript",
        image:
            {link: "javascript.png", alternative:"javascript"},
        title:
            {text: "Javascript"},
        progress:"80"
    },
    {
        key: "jquery",
        image:
            {link: "jquery.png", alternative:"Jquery"},
        title:
            {text: "Jquery"},
        progress: "75"
    },
    {
        key: "react",
        image:
            {link: "react.png", alternative:"React js"},
        title:
            {text: "React Js"},
        progress: "65"
    },
    {
        key: "webpack",
        image:
            {link:"webpack.png", alternative:"Webpack"},
        title:
            {text:"Webpack"},
        progress: "55"
    },
    {
        key: "bootstrap",
        image:
            {link:"bootstrap.png", alternative:"Bootstrap"},
        title:
            {text:"Bootstrap"},
        progress:"70"
    },
    {
        key: "php",
        image:
            {link:"php.png", alternative:"PHP"},
        title:
            {text:"PHP"},
        progress:"75"
    },
    {
        key: "symfony",
        image:
            {link:"symfony.png", alternative:"Symfony"},
        title:
            {text:"Symfony"},
        progress:"85"
    },
    {
        key: "mysql",
        image:
            {link:"mysql.png", alternative:"Mysql"},
        title:
            {text:"MySql"},
        progress:"70"        
    }
];

export {
    ABOUTS,
    CONTACTS,
    SOCIALNETWORKS,
    NAVLINKS,
    PORTFOLIOS,
    LISTSERVICES,
    LISTSKILL
};