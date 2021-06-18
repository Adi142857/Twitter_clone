<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <q-chat-message
        label="Sunday, 19th"
      />

      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
      />
       <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageC-1'
}
</script>
