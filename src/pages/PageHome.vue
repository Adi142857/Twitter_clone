<template>
  <q-page class="relative-position">
    
    <q-scroll-area class="absolute full-width full-height">
<div class="q-py-lg q-px-md row items-end q-col-gutter-md">
  <div class="col">
<q-input bottom-slots v-model="text"
 class="new-tweet"
  placeholder="What's happening" counter maxlength="280" autogrow >
        <template v-slot:before>
          <q-avatar size="xl">
            
            <img src="https://i.ibb.co/7nPcw7y/Whats-App-Image-2021-12-17-at-11-00-11-PM.jpg">
          </q-avatar>
      
       

        

        </template>
        
      </q-input>
  </div>
  <div class="col col-shrink">
        
             <q-btn 
            @click="addNewTweet"
             unelevated rounded color="primary"
            
             :disable="!text"
             class="q-mb-lg"
              label="Tweet" no-caps
              /></div>
 
 
      </div>
      <q-separator
      class="divider"
       size="10px" color="grey-2"/>
       <q-list separator>
      
      <q-item class="tweet q-py-md"
      v-for="tweet in tweets"
      :key="tweet.date">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://i.ibb.co/7nPcw7y/Whats-App-Image-2021-12-17-at-11-00-11-PM.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Aditya</strong>
            <span class="text-grey-7"> @adi1402_

              <br class="lt-md"> &bull;  
          {{tweet.date | relativeDate}}
       
            </span>
            </q-item-label>
          <q-item-label class="tweet-content text-body1">
            {{tweet.content}}
          </q-item-label>
          <div class="tweet-icons justify-between q-mt-sm row">
            <q-btn flat round color="grey" size="sm"
            icon="far fa-comment"/>
             <q-btn flat round color="grey" size="sm"
            icon="fas fa-retweet"/>
             <q-btn flat round 
             :color="tweet.liked ?'pink':'grey'"
             :icon="tweet.liked ? 'fas fa-heart':'far fa-heart'"
              size="sm"
            />
            
             <q-btn 
             @click="deleteTweet(tweet)"
              flat round color="grey" size="sm"
            icon="fas fa-trash"/>
          </div>
        </q-item-section>

       
      </q-item>

      <q-separator inset="item" />

      
    </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',

  data(){
    return{
      text:'',
      tweets:[
        {
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aspernatur modi molestiae deleniti fugit autem, repellendus, blanditiis repellat adipisci deserunt minus numquam quisquam qui similique tenetur aperiam at corrupti non?',
        date:1623749129525
        },
        {
        content:'Everyday is not good but their is something good everyday!',
        date:1623749998098,
        liked:true
        },
        {
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aspernatur modi molestiae deleniti fugit autem, repellendus, blanditiis repellat adipisci deserunt minus numquam quisquam qui similique tenetur aperiam at corrupti non?',
        date:1623749129020,
        liked:true
        },
        
      ]
    }
  },
  methods:{
     addNewTweet(){
       let newTweet={
         content: 
         this.text,
         date:Date.now()
       }
       this.tweets.unshift(newTweet)
     },
     deleteTweet(tweet){
      let dateToDelete=tweet.date
      let index=this.tweets.findIndex(tweet => tweet.date===dateToDelete)
      this.tweets.splice(index, 1)
      console.log('index:',index)
     }
  },

  filters:{
    relativeDate(value){
      return formatDistance(value,new Date() )
    },
  mounted(){
    db.collection("tweets").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let tweetChange= change.doc.data()
            if (change.type === "added") {
                console.log("New tweet: ", tweetChange)
                this.tweets.unshift(tweetChange)
            }
            if (change.type === "modified") {
                console.log("Modified tweet: ",tweetChange)
            }
            if (change.type === "removed") {
                console.log("Removed tweet: ",tweetChange)
            }
        });
    });
  }
  }
}
</script>
<style lang="sass">
.new-tweet 
 textarea
  font-size: 19px
  line-height: 1.4 
.divider
  border-top:1px solid
  border-bottom:1px solid
  border-color:$grey-4
.tweet-content
  white-space:pre-Line

.tweet-icons
 margin-left:-5px

</style>