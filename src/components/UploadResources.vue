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
                  accept='.json'
                  >
                 </b-form-file>

                 <b-button block
                  variant="primary">
                  Upload File
                </b-button>

        </b-form-group>
  </b-card>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
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