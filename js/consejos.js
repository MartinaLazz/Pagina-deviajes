const comentario = new Vue({
    el: "#consejosseccion",
    data: {
        nombre: "",
        opiniontexto: "",
        puntaje: 0,
        seleccionado: "No",
        show: false 
    },
    computed: {
        contenidohtml: function(){
            if (this.seleccionado==="Si"){
                return '<legend class="consejoslabel">¿Qué tan satisfecho estás con el servicio?</legend> <label><i class="far fa-laugh fa-2x laugh"></i><input type="radio" value=5 name="satisfacc" v-model="puntaje" required></label> <label><i class="far fa-smile fa-2x smile"></i><input type="radio" value=4 name="satisfacc" v-model="puntaje" required></label> <label><i class="far fa-meh fa-2x meh"></i><input type="radio" value=3 name="satisfacc" v-model="puntaje" required></label> <label><i class="far fa-frown fa-2x frown"></i><input type="radio" value=2 name="satisfacc" v-model="puntaje" required></label> <label><i class="far fa-angry fa-2x angry"></i><input type="radio" value=1 name="satisfacc" v-model="puntaje" required></label><br><br>';
            } 
        }
    },
    methods: {
        publicar: function() {
            this.show = true;
        }
    }
});
