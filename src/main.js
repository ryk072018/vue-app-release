import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { List, Cell, Toast, Uploader, CellGroup, Field, Button } from 'vant'
createApp(App).use(Toast).use(List).use(Cell).use(Uploader).use(CellGroup).use(Field).use(Button).use(store).use(router).mount('#app')
