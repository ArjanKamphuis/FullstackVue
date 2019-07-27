import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import product from './modules/product';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
        product,
        login
    }
});