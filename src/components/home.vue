<template>
<div>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
 <formulario-component></formulario-component>
<titulo></titulo>
<tabla></tabla>
  </div>
</template>

<script>
import axios from 'axios'
import titulo from './titulo.vue'
import Tabla from './tabla1.vue'

  export default {
  components: { titulo, Tabla },
  

    data () {
      return {
        headers: [
          {
            text: 'textos para leer',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'userid', value: 'userId' },
          { text: 'id ', value: 'id' },
          { text: 'titulo', value: 'title' },
          { text: 'body ', value: 'body' },
          
        ],
        desserts: [],
            }
            },
mounted() {
  this.consulta()
},
methods: {
  consulta(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => {
               this.desserts= response.data
                              })
           .catch(errors => {
                console.log(this.errors);
                             })
             }
            },
            
                  }
</script>
