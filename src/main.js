import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes/routes'

// Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes: Routes

});

//custom directive

// Vue.directive('rainbow',{

//     bind(el){

//        el.style.color = "#" + Math.random().toString().slice(2,8);

//     }

// });

Vue.directive('theme',{
  bind(el,binding){
    if(binding.value == 'wide'){
      el.style.maxWidth="1400px";
    }else if(binding.value == 'narrow'){
      el.style.mixWidth="500px";
    }
    if(binding.arg == 'column'){
      el.style.background= "#ddd";
      el.style.padding= '20px';
    }
    // }else if(binding.arg == 'row'){
    //   el.style.background = "lightblue"
    //   el.style.padding = '20px';
    // }
  }
});
// filters donesn't come inbuilt
// this was a global decration now we have declared it locally
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});
Vue.filter('snippet',function(value){
  return value.slice(0,100)+ "...";
});
new Vue({
  router,
  render: h => h(App),
  routers : router
}).$mount('#app')
