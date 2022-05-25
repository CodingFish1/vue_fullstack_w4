import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import NavBar from './components/NavBar.vue'

// import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// import AllRules from '@vee-validate/rules'
// import { localize, setLocale } from '@vee-validate/i18n'
// import en from '@vee-validate/i18n/dist/locale/en.json'
// Object.keys(AllRules).forEach((rule) => { defineRule(rule, AllRules[rule]) })
// configure({
//   generateMessage: localize({ en: en }), // 載入En
//   validateOnInput: false// 當輸入任何內容直接進行驗證
// })
// // 設定預設語系
// setLocale('en')

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.component('NavBar', NavBar)
app.use(router)

app.use(router)
app.use(VueAxios, axios)

// Vue Validation
// app.component('vForm', Form)
// app.component('vField', Field)
// app.component('ErrorMessage', ErrorMessage)

app.mount('#app');