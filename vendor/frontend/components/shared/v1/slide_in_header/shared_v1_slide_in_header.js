import application from "stimulus_application";
import { definitionsFromContext } from "stimulus/webpack-helpers";
const context = require.context('./', true, /_controller\.js$/);
application.load(definitionsFromContext(context));

import "./shared_v1_slide_in_header.scss";

// const slidingHeader = () => {
//   $(".slide-in-header").headroom({
//     offset : 220,
//     tolerance : 0,
//     tolerance : {
//        up : 5,
//        down : 0
//     },
//     classes : {
//       initial : "headroom",
//       top : "headroom--top",
//       notTop : "headroom--not-top",
//     },
//   });
// }

// export default {
//   slidingHeader
// };