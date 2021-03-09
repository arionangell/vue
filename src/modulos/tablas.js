import axios from '../../node_modules/axios'
export default {
  state: {
contenido:[]
  },
  mutations: {
 consulta(state,data){
   this.errorsstate.contenido=data
                         }
  },

  actions: {
      addtable(context){
                  axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => {
          console.log(response.data);    
        context.state.commit('consulta',reponse.data)
                                      })
           .catch(errors => {
                console.log(this.errors);
                             })
    context.commit('consulta',this.m)
      }
  },
  getters:{
    getcontenido(state){

        return state.contenido
    }

  }
  
  }