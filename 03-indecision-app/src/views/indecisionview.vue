<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi Mujer</span>
    </div>
    <ChatMessages :messages="messages" />
    <!-- <MessageBox @send-message="onMessage($event)" /> -->
    <!-- En la linea de abajo no ponemos el $event porque send-message devuelve un string y onMessage tambien un string asi que no hace falta poner el event -->
    <MessageBox @send-message="onMessage" />
  </div>
</template>


<script setup lang="ts">
import ChatMessages from '@/components/chats/ChatMessages.vue';
import MessageBox from '@/components/chats/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const {messages, onMessage} = useChat();

</script>