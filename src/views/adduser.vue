<template>
    <div>
          <img class="upload" src="assets/img/upload.png" >
          <span>เพิ่มสมาชิก</span><br><br> 
          <div class="Mform">
            <my-form/>
          </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent} from "vue";
  import MyForm from '@/components/MyForm.vue'; // @ is an alias to /src
  export default defineComponent({
    name: 'adduser',
    components: {
        MyForm,
    },
    setup() {
        {

        }
    },
})
  </script>
<style>
.upload {
    margin-left: 15px;
    margin-right: 4px;
    height: 25px;
    align-items: center;
}
</style>
