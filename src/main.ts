import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import {createApp} from 'vue';
import ElementPlus from "element-plus";
import ElementMagusIcons from '@/element-mage-icons';
import router from '@/routes';
import App from '@/App.vue';

const app = createApp(App);

/* 加载组件 */
app.use(ElementPlus);
app.use(ElementMagusIcons);

/* 加载路由 */
app.use(router);

/* 挂载app */
app.mount('#app');
