import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import { createSlick } from "./logic";
import { putHtml } from "./logic";

$('#link1').click(function(){
    putHtml('mask.html');
})
