<template>
    <div>
         <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
    </div>
</template>

<script>
export default {
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
 this.desserts= this.$store.state.contenido
                  }
}
}
</script>