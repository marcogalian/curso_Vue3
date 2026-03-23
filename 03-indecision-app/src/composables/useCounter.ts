import { ref, computed} from 'vue';

// const counter = ref(10);

export const useCounter = (initialValue: number = 10) => {
    
    const counter = ref(initialValue);
    const squareCounter = computed(() => counter.value * counter.value);

    return{
        counter,

        squareCounter,

        // Otra forma de hacerlo en caso de ser necesario (solo lectura)
        // squareCounter: computed(() => counter.value * counter.value),
    };
};