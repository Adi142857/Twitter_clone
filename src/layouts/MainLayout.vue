<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
         <span class="gt-sm">{{$route.name}}</span>
        <q-icon 
      class="header-icon q-pa-md lt-md"
      name="fas fa-dove" 
      size="sm"
       color="primary"
       />
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered zwidth="283">
      
      <q-icon 
      class="q-pa-md"
      name="fas fa-dove" 
      size="lg"
       color="primary"
       />
       <q-list>
      <q-item
      to="/"
        v-ripple
        clickable
       exact>
        <q-item-section avatar>
          <q-icon name="home"  size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
      <q-item
      to="/about"
       v-ripple
        clickable
       exact>
        <q-item-section avatar>
          <q-icon  name="tag"  size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>
     <q-item
      to="/explore"
       v-ripple
        clickable
       exact>
        <q-item-section avatar>
          <q-icon  name="explore"  size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Explore</q-item-section>
      </q-item>
      <q-item
      to="/notify"
      v-ripple
        clickable
       exact>
        <q-item-section avatar>
          <q-icon  name="notifications"  size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Notifications</q-item-section>
      </q-item>
    
      <q-item
      to="/messages"
       clickable v-ripple>
        <q-item-section avatar>
          <q-icon  name="message"  size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Messsages</q-item-section>
      </q-item>
      
      

        
      </q-item>
      

  
  <br>
   <q-btn align="between" unelevated rounded color="primary"   class="btn-fixed" label="Tweet" />
    </q-list>
    </q-drawer>
 
    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input 
      placeholder="Search tweet"
      class="q-ma-md"
      outlined
      rounded>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list
      separator
      padding
      >

     
        <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class=" text-weight-bold">Something interesting happening!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Sports</q-item-label>
          <q-item-label class=" text-weight-bold">Something interesting happening!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Omicron</q-item-label>
          <q-item-label class=" text-weight-bold">Something interesting happening!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      
      </q-list>
     
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
 position: absolute
 bottom:0
 left:50%
 transform: translateX(-50%)
</style>
<style lang="sass" scoped>
.btn-fixed
 
  width:200px
  height:50px
  
  
  margin-left:20px
  padding-left:60px
  margin-top:3px
</style>