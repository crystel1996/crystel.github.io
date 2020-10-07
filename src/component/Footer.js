/* eslint-disable */
import React from 'react';

const Footer = (props) => {
    let date = props.date == "2020" ? '' : ' - '+props.date;
    return <React.Fragment>
        <footer>
            <p>Copyright 2020 {date} - Harimanana Ratsimbazafy - Tous droits résérvés.</p>
        </footer>
    </React.Fragment>
}

export default Footer;