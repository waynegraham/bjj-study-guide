// Import our custom CSS
import '../scss/styles.scss'

// const Isotope = require('isotope-layout');
import Isotope from "isotope-layout";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import $ from 'jquery/dist/jquery'
// https://github.com/vitejs/vite/discussions/3744#discussioncomment-930429
import $ from 'jquery'
window.jQuery = window.$ = $

$(function() { 
    let title = $('#intro-title').text
    console.log(title);
});