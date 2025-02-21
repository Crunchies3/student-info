import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';


const app = createApp(App)

DataTable.use(DataTablesCore);
app.use(router)


app.mount('#app')
