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
                  accept='.json, .txt'
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
      selectedFile:'',
      file:[],
      filename:'',
      errors:[]
    }
  },

  methods:{
    fileUpload: function() {
      let formData = new FormData();
      formData.append('userfile', this.file);
            axios.post(`http://localhost:80/kinduct/index.php/endpoints/resourceUpload`,
             formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
            )
        .then(response => {
           if(response.data)
          {
            this.$alert("File successfully uploaded")
          }
          else {
            this.$alert("File could not be uploaded, try again")
          }
        
        })
        .catch(e  => {
          this.errors.push(e)
          console.log(this.errors)
          });
    },

    handleFileUpload(event){
      // console.log( this.file)
      this.file=(event.target.files[0]);
        // this.file = this.$refs['file'].files[0];
        console.log(this.file);
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