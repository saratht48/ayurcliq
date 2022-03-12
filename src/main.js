import Vue from 'vue'
import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import createPersistedState from "vuex-persistedstate"

const store= createStore({
    state(){
        return{
            counter:0,
            cartid:0,
            url1:5,
            name1:6,
            username:'',
            url2:'',
            url3:'',
            contactid:'',
            obj:{},
            userid:'',
            seenone:true,
            seentwo:false,
            loginotp:'',
            loginusername:'',
        }
    },
    plugins:[createPersistedState()],
    mutations:{
        addtocounter(state,payload){
            state.counter=payload;
        },
        mut(state,payload1){
            state.counter+=payload1;
        },
        updateurl(state,payload){
            state.url1=payload[0]['a'];
            state.name1=payload[0]['b'];

        },
        setcartid(state,payload){
            state.cartid=payload;

        },
        setusername(state,payload){
            state.username=payload;
        },
        seturl(state,payload){
            state.url2=payload;
        },
        updateurl3(state,payload){
            state.url3=payload;
        },
        setcontactid(state,payload){
            state.contactid=payload;
        },
        setobj(state,payload){
            state.obj=payload;
        },
        setuserid(state,payload){
            state.userid=payload;
        },
        setseenone(state,payload){
            state.seenone=payload;
        },
        setseentwo(state,payload){
            state.seentwo=payload;
        },
        setloginotp(state,payload){
            state.loginotp=payload;
        },
        setloginusername(state,payload){
            state.loginusername=payload;
        }
    },
    actions:{

       /* convert(context,payload){
            context.commit("addtocounter",payload)
        }*/

    }

}

)
const app=createApp(App);
app.use(store)
app.use(router)
app.mount('#app')


