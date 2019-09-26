const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo con vue',
        frutas: [
            { nombre: 'pera', cantidad: 10 },
            { nombre: 'manzana', cantidad: 0 },
            { nombre: 'platano', cantidad: 50 }
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta() {
            //cuando se quiera acceder a un elemento de data: usamos this
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });

        }

    }
});