const { createApp } = Vue;

createApp({
    data(){
        return{
            name: "Angela",
            surname: "Carroll",
            job: "Chief Editor",
            photo: "img/angela-caroll-chief-editor.jpg",
        };
    },

    methods: {
        onBtnClick: function(){
            prompt("Inserisci il tuo messaggio");
        }
    },
}).mount("#app");