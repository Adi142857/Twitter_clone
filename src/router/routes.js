
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
  { path: '/messages', component: () => import('src/pages/PageMessages.vue')  ,
  name:'Messages'},
  { path: '/c-1', component: () => import('src/pages/PageC-1.vue')  ,
  name:'Chats'},
  { path: '/notify', component: () => import('src/pages/PageNotify.vue')  ,
  name:'Notifications',

}
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
