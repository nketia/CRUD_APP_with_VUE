
<template>
  <div  class="hello">
     <b-card-group deck>
        <b-card  style="flex-grow:2" title="Search player by ID or View all players " >
        <b-card-group>
          <b-card style="flex-grow:2" class='allUsersCard'> 
            <b-form-group
                id="fieldset-1"
                :state="state" 
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                >
               <b-form-input 
                  id="input-1"
                  v-model="searchPlayerID"
                   
                  :state="state"
                  placeholder='Enter Player ID'
                  trim>
                 </b-form-input>
               <b-button block
                  variant="primary"
                  v-on:click='getSpecificPlayer'>
                  Search
                </b-button>
            </b-form-group>
          </b-card>
          <b-card class='allUsersCard'> 
             <b-button block
                  variant="primary"
                  v-on:click='getAllPlayers'
                  >
                  View all Players
                </b-button>
          </b-card>
        </b-card-group>
          <template v-slot:footer>
          </template>
        </b-card>

        <b-card title="Delete Resource by ID" >
             <b-form-group
                id="fieldset-1"

                :state="state" >
               <b-form-input 
                  id="input-1"
                  v-model="deletePlayerID" 
                  placeholder='Enter Player ID'
                  trim>
                 </b-form-input>
               <b-button block
                  variant="primary">
                  Delete
                </b-button>
            </b-form-group>
           
          <template v-slot:footer>
          </template>
       </b-card>
    </b-card-group>
     <div id='all_tables'>
    <b-table  striped hover :items="returnedPlayers"></b-table>
    </div>
  <!-- <div id='single_tables'>
    <b-table  striped hover :items="singlePlayer"></b-table>

    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'View_Delete',
  
    computed: {
      state() {
        return this.searchPlayerID.length >= 1 ? true : false
      },
      invalidFeedback() {
        if (this.searchPlayerID.length < 1) {
          return ''
        } else if (this.searchPlayerID.length > 0) {
          return 'Enter an ID'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback() {
        return this.state === true ? 'Thank you' : ''
      }
    },

  data() {
    return {
      returnedPlayers:'',
      // singlePlayer:'',
      errors: [],
      searchPlayerID:'',
    }
  },

    mounted(){
    console.log("I am working");
  },

  methods: {
    justSay:function(){
      console.log("say it")

    },
    //getting all players api call
    getAllPlayers: function () {
      console.log("I am called")
      axios.get(`http://localhost:80/kinduct/index.php/endpoints/getAllResources`)
        .then(response => {
          console.log(JSON.stringify(response.data))
        this.returnedPlayers=response.data
        
        })
        .catch(e  => this.errors.push(e));
    },
      //getting a specific player api call
      getSpecificPlayer: function () {
        // '#all_tables'.hide();
        console.log(this.returnedPlayers);
        this.returnedPlayers='';
        console.log(this.searchPlayerID);
      console.log("I am called")
      axios.get(`http://localhost:80/kinduct/index.php/endpoints/getAResource/`+this.searchPlayerID)
        .then(response => {
          console.log(JSON.stringify(response.data))
        this.returnedPlayers=response.data
        
        })
        .catch(e  => this.errors.push(e));
    }
  }
}
</script>

<style>
.btn{
  margin-top: 1em!important;
}
.allUsersCard{
  border:none!important
}
</style>