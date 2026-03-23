import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no-response";
import { ref } from "vue";

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const url = "https://yes-no-wtf.vercel.app/api";

    const resp = await fetch(url);
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  // Manejador de la funcion de enviar mensajes
  const onMessage = async (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    // Evaluamos si el texto termina con un simbolo de interrogación

    if (!text.endsWith("?")) return;

    await sleep(1.5);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  // Los composables necesitan algun tipo de retorno. No necesariamente un objeto, puede ser un arreglo, una variable reactiva, una propiedad reactiva o incluso no retornar nada, estar escuchando o con algun procedimiento interno
  return {
    // Properties
    messages,

    // methods
    onMessage,
  };
};
