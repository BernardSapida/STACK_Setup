import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = Vue;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode: "history",
    routes,
});

Vue.prototype.$appEvents = new Vue();

new Vue({
    apolloProvider,
    router,
}).$mount("#app");
