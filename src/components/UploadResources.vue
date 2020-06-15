<template>
  <div class="hello">
       <b-card
                title="Resources Upload"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2" >
            <b-form-group >

                <b-form-file
                 id="file-default"
                 ref="file"
                 :value="value"
                 v-model='fileValue'
                  accept='.json'
                  v-on:change='handleFileUpload'
                  >
                 </b-form-file>

                 <b-button block
                  variant="primary"
                  v-on:click='fileUpload'
                  >
                  Upload File
                </b-button>

        </b-form-group>
  </b-card>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',

    data() {
    return {
      file:[],
      errors:[],
      fileValue:'',
      value:'',
      baseUrl:`http://localhost:80/kinduct-backend/index.php/endpoints/`
    }
  },

  mounted() {
    this.callTableCreate();
  },

  methods:{
    callTableCreate: function(){
       axios.get(this.baseUrl+ 'makeDbTable')
          .then(response => {
            if(response.data==1){
              console.log("Table created successfully");
            }
          })
          .catch(e  => this.errors.push(e));

    },


    fileUpload: function() {
      if (this.value.length)
      {
      let formData = new FormData();
      formData.append('userfile', this.file);
            axios.post(this.baseUrl+'resourceUpload',
             formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
            )
        .then(response => {
           if(response.data==1)
          {
            this.$alert("File successfully uploaded and resource inserted into database")
            this.$refs['file'].reset()
          }
        
        })
        .catch(e  => {
          this.errors.push(e)
          });
      }
      else {
           this.$alert("Please select a file for upload");
      }
    },

    handleFileUpload(event){
      this.file=(event.target.files[0]);
      this.value=event.target.value;
      }
  }

}
</script>
<style>
.h1{
    font-size: 2rem;
    color: blue;

}
.card{
    max-width:70%!important;
    border:none!important;
}
h4{
    margin-bottom: 2em!important;
}

.custom-file-input:lang(en)~.custom-file-label::after {
    content: "Browse";
    background-color: white!important;
    color: blue!important;
    border-color: blue!important;
    font-weight: bold;
    margin-inline-start: 2rem!important;

}
</style>