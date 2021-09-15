import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import maska from 'maska';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

const globalOptions = {
    mode: 'auto',
    autoDefaultCountry: false,
    inputOptions: {
        maxlength:13,
        placeholder: "Phone"
    }
  };


createApp(App).use(store).use(VueTelInput, globalOptions).use(maska).mount('#app')
