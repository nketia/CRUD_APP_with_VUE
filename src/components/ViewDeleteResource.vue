
<template>
  <div  class="hello">
     <b-card-group deck>
        <b-card  style="flex-grow:2" title="Search player by ID or View all players " >
            <b-card-group>
              <b-card style="flex-grow:2" class='allUsersCard'> 
                  <b-button block class='allPlayersBtn'
                      variant="primary"
                      v-on:click='getAllPlayers'
                      >
                      View all Players
                    </b-button>
                <b-form-group
                    id="fieldset-1"
                    :state="searchPlayerIDState" 
                    :invalid-feedback="invalidFeedback"
                    :valid-feedback="validFeedback"
                    >
                  <b-form-input 
                      id="input-1"
                      v-model="searchPlayerID"
                      
                      :state="searchPlayerIDState"
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
        </b-card-group>
          <template v-slot:footer>
          </template>
        </b-card>

        <b-card title="Delete Resource by ID" >
             <b-form-group
                id="fieldset-1"
                :invalid-feedback="invalidFeedbackDelId"
                :valid-feedback="validFeedbackDelId"
                :state="deletePlayerIDState" >
               <b-form-input 
                  id="input-2"
                  v-model="deletePlayerID" 
                  placeholder='Enter Player ID'
                  :state='deletePlayerIDState'
                  trim>
                 </b-form-input>
               <b-button block
                  variant="primary"
                  v-on:click='deletePlayer'>
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
  </div>
</template>

<script>
import Vue from "vue"
import axios from 'axios'
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

export default {

  name: 'View_Delete',
  
    computed: {
      searchPlayerIDState() {
        return this.searchPlayerID.length >= 1 ? true : false
      },

      deletePlayerIDState() { 
        return this.deletePlayerID.length >= 1 ? true : false

      },
      invalidFeedback() {
        if (this.searchPlayerID.length < 1) {
          return ''
        } else if (!Number.isInteger(this.searchPlayerID)) {
          return 'Enter an valid ID number'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback() {
        return this.searchPlayerIDState === true ? 'Thank you' : ''
      }
    },
    
      invalidFeedbackDelId() {
        if (this.deletePlayerID.length < 1) {
          return ''
        } else if (!Number.isInteger(this.deletePlayerID)) {
          return 'Enter an valid ID number'
        } else {
          return 'Please enter something'
        }
      },
      validFeedbackDelId() {
        return this.deletePlayerIDState === true ? 'Thank you' : ''
      },
    

  data() {
    return {
      returnedPlayers:[],
      errors: [],
      searchPlayerID:'',
      deletePlayerID:'',
      baseUrl:`http://localhost:80/kinduct-backend/index.php/endpoints/`
    }
  },

  methods: {
    //getting all players api call 
    getAllPlayers: function () {
      axios.get(this.baseUrl+'getAllResources')
        .then(response => {
          this.returnedPlayers=response.data;
        })
        .catch(e  => this.errors.push(e));
    },
      //getting a specific player api call
      getSpecificPlayer: function () {
        if (this.searchPlayerID.length) // Only make the api call if ID is supplied
        {
          this.returnedPlayers='';
          axios.get(this.baseUrl+ 'getAResource/'+this.searchPlayerID)
          .then(response => {
            this.returnedPlayers=response.data
          })
          .catch(e  => this.errors.push(e));
        }

        else {
          this.$alert("Please enter an ID of a player to search")
        }
    },

      //delete a resource call
      deletePlayer: function () {
        if (this.deletePlayerID.length) //Only make the api call if ID is supplied
        {
          this.returnedPlayers='';
          axios.get(this.baseUrl+ 'deleteAResource/'+this.deletePlayerID)
          .then(response => {
            if(response.data==1)
            {
              this.$alert("Player deleted")
            }
            else {
              this.$alert(response.data)
            }
          })
          .catch(e  => this.errors.push(e));
        }
        else {
          this.$alert("Please enter an ID of a player to delete")
        }
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
h4{
  margin-bottom: 1em!important;
}
.allPlayersBtn{
  margin-top: 0em!important;
  margin-bottom: 1em!important;
}
</style>