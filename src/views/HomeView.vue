<template>
  <div>
    <img class="magnifier" src="assets/img/magnifier.png" >
          <span>รายการสมาชิก</span><br><br>
      <div class="manage">
        <form>
        <input class="searchmanage" type="search" placeholder="Username,เบอร์โทรศัพท์,ชื่อ-นามสกุล">
        <button class="buttonmanage">ค้นหา</button>
        </form><br><br>
    <MyCard/>
  </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, } from "vue";
import MyCard from '@/components/MyCard.vue'; 
export default defineComponent({
    name: 'HomeView',
    components: {
      MyCard,
    },
    setup() {
        {

        }
    },
})
</script>
<style>
.magnifier {
    margin-left: 15px;
    margin-right: 4px;
    height: 25px;
    align-items: center;
}
.manage {
  border-style: solid;
  border-width: 1px;
  margin-right: 4%;
  border-radius: 5px;
}
.searchmanage{
  margin-top: 10px;
  margin-left: 10px;
  padding:10px 20px;
  font-size:15px;
  width: 500px;
  height: auto;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
}
.buttonmanage {
    color: rgb(255, 255, 255);
    margin-left: 2px;
    padding:11px 20px;
    font-size:15px;
    border: 0px ;
    background-color: #2eaf35;
    border-radius: 5px;
}
.buttonmanage:hover {
    background-color: #3ad342;
    color: #ffffff;
}
</style>