<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <!-- El v-bind hace un mapeo de todas las properties que hay en message -->
        <ChatBubble 
          v-for="message in messages"
          :key=message.id
          v-bind="message" 
        />
          <!-- Asi si en v-bind delante hay que hacer las properties una a una -->
          <!-- :its-mine=message.itsMine
          :message=message.message 
          :image=message.image -->
      </div>
    </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch, type DefineProps } from 'vue';


interface Props{
  messages: ChatMessage[];

}



const props = defineProps<Props>();
const { messages } = props;

const chatRef = ref<HTMLDivElement | null>(null);

watch(() => messages, () => {
  chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth',
  });
}, { deep: true, flush: 'post' });

</script>