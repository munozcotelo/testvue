import * as vue       from "vue";
import * as vueRouter from "vue-router";

import { genRoutes } from "./../../../../../configuration/routing";

interface IProps {
    id : string;
}

interface IData { }

interface IComputed { }

interface IMethod  { }

interface IComponent extends IProps, IData, IMethod, IComputed {

    $router : vueRouter.Router;
    $route  : vueRouter.RouteLocationNormalized;

}

// const UserController : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const UserController = vue.defineComponent( {

    name  : "UserController",

    props : {
        id : String,
    },

} );

export default UserController;
