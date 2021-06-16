
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue'),
      name:'Home'
    },
    
    { path: '/about', component: () => import('src/pages/PageAbout.vue') ,
    name:'About'
  },
  { path: '/explore', component: () => import('src/pages/PageExplore.vue')  ,
  name:'Explore'},
  { path: '/notify', component: () => import('src/pages/PageNotify.vue')  ,
  name:'Notifications'}
]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
