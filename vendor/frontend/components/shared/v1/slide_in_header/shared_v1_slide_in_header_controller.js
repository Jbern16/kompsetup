import { Controller } from "stimulus";
import $ from 'jquery';
import 'imports-loader?window.jQuery=jquery!../../../../../../node_modules/headroom.js/dist/jQuery.headroom.js';

export default class extends Controller {
  connect() {
    console.log('HII')
    $(".slide-in-header").headroom({
      offset : 220,
      tolerance : 0,
      tolerance : {
        up : 5,
        down : 0
      },
      classes : {
        initial : "headroom",
        top : "headroom--top",
        notTop : "headroom--not-top",
      },
    });
  }
}