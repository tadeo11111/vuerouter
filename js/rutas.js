// define las rutas
const routes = [
    { path: '/', component: Home },//ruta inicial (intex)
    { path: '/login', component: Login },
    { path: '/indice',component: Indice},
    { path: '/rym',   component: RyM },

  ]
  
  // instancia del router
    const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // abreviacion para `routes: routes`
  })
  
  // crea instancia del router
    const { createApp } = Vue
    const app = Vue.createApp({})
  
    //inicia las rutas
  app.use(router)
    //monta la instancia raiz (app)
  app.mount('#app')