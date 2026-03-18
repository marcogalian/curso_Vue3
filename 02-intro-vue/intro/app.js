const {createApp, ref} = Vue;


const app = createApp({
    // template:
    // `<h1>{{ nameHero }}</h1>
    // <p>{{ surnameHero }}</p>`,


    setup(){
        const message = ref("Soy Marco");
        const author = ref("Galián")

        const changeAuthor = () => {
            message.value = 'Soy Andres';
            author.value = 'Gonzalez';
        }

        // setTimeout(() => {
        //     message.value = 'Soy Andres';
        //     author.value = 'Gonzalez';
        // }, 2000);

        return{
            message,
            author,

            changeAuthor,
        }
    }
});


app.mount('#myApp');