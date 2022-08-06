import { createApp } from 'vue';
import App from './App.vue';
import Emitter from 'tiny-emitter';
import store from './store';

const app = createApp(App);
app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter();

app.use(store).mount('#app');
