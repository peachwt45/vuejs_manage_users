<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>ชื่อ - นามสกุล *</label><br>
      <input v-model="name" type="text" class="form-control" placeholder="Enter your name" />
    </div>
    <div class="form-group">
      <label>เบอร์โทรศัพท์ *</label><br>
      <input v-model="phoneNumber" type="tel" id="phone" name="phone" class="form-control"  placeholder="Enter your phone number" pattern="[0-9]{10}" />
    </div>
    <div class="form-group">
      <label>Username *</label><br>
      <input v-model="username" type="text" class="form-control" placeholder="Enter Username" name="username" />
    </div>
  <div class="form-group">
    <label>Password *</label><br>
    <input v-model="password" type="password" class="form-control" placeholder="Enter Password" name="psw" />
  </div>
  <div class="form-group">
    <label>วัน/เดือน/ปีเกิด</label><br>
    <input v-model="birthday" type="date" class="form-control" />
  </div>
  <div class="form-group">
    <label>ที่อยู่</label><br>
    <textarea
      v-model="address"
      type="text"
      class="form-control"
      placeholder="Enter your address"
    ></textarea><br><br>
  </div>
  <div class="CANCEL">
  <button @click="$router.push('/')" class="buttonc">ย้อนกลับ</button>
  </div>
  <div class="ADDUSER">
  <button type="submit" class="buttonadd">{{ buttonText }}</button>
  </div>
</form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default defineComponent({
  name: "MyForm",
  data() {
    return {
      formData: {
        name: '',
        birthday: '',
        phoneNumber: '',
        address: '',
        username: '',
        password: '',
      },
    };
  },
  computed: {
    buttonText() {
      return this.$route.path === '/adduser' ? 'เพิ่มสมาชิก' : 'แก้ไขข้อมูล';
    },
  },
  methods: {
    handleSubmit() {
      const user = { ...this.formData };
      if (this.$route.path === '/adduser') {
        this.$store.dispatch('addUser', user);
      } else {
        // Logic to fetch the user ID and dispatch the editUser action
      }
    },
  },
});
</script>
<style scoped>
#ufrom label{
  width: 100%;
  display: block;
  text-align: left;
}
.form-control {
  padding: 5px;
  width: 500px;
  height: auto;
}
.form-group {
  margin-left: 20px;
  text-align: left;
  width: 40%;
  float:left;
}
.CANCEL {
  text-align: right;
  width: 70%;
  float:left;
}
.ADDUSER {
  text-align: left;
  width: 30%;
  float:left;
}
.buttonadd {
  color: rgb(255, 255, 255);
  padding:13px 20px;
  font-size:15px;
  border: 0px ;
  background-color: #1c84da;
  border-radius: 5px;
  margin-left: 5px;
}
.buttonadd:hover {
  background-color: #176eb6;
  color: #ffffff;
}
.buttonc {
  color: rgb(255, 255, 255);
  padding:13px 20px;
  font-size:15px;
  border: 0px ;
  background-color: #687179;
  border-radius: 5px;
}
.buttonc:hover {
  background-color: #54575a;
  color: #ffffff;
}
</style>