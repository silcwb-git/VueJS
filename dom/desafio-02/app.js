new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Hello !')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})