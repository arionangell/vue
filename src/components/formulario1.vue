<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field v-model="texto"
           ></v-text-field>
        </v-col>
<button @click="captura">cargar</button>
       
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
 data() {
   return {
     texto:"",
   }
   
 },
 methods: {
   captura(){
    this.$store.commit('increment',this.texto)
    this.texto=""
     
   }
 },
 


 }
  
</script>