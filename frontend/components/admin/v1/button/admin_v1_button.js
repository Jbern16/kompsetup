import application from "stimulus_application";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import "./admin_v1_button.scss";

const context = require.context('./', true, /_controller\.js$/);
application.load(definitionsFromContext(context));
