/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import {Navigation} from './component/Navigation.js';
import Content from './component/Content.js';
import Footer from './component/Footer.js';

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './assets/scss/style.scss';

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/css/fontawesome.min.css');
require('@fortawesome/fontawesome-free/js/all.min.js');
require('@fortawesome/fontawesome-free/js/fontawesome.min.js');


ReactDOM.render(
    <Footer date={new Date().getFullYear()} />,
    document.querySelector('#root-footer')
);

ReactDOM.render(
    <Navigation />, 
    document.querySelector('#root-navigation')
);

ReactDOM.render(
    <Content />, 
    document.querySelector('#root-section')
); 