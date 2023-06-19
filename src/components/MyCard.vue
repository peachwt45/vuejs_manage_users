<template>
    <div class="container">
           <div class="row">
               <div class="col-lg-12">
                           <table class="table1">
                                <tr class="tr1">
                                   <th>USERNAME</th>
                                   <th>PASSWORD</th>
                                   <th>เบอร์โทรศัพท์</th>
                                   <th>ชื่อ-นามสกุล</th>
                                   <th>วันเกิด</th>
                                   <th>ที่อยู่</th>
                                   <th>เพิ่มเติม</th>
                               </tr>
                               <tr> 
                                    <td>peach_krub</td>
                                    <td>Aa112233</td>
                                    <td>0638860829</td>
                                    <td>อนันต์ เอกกุล</td>
                                    <td>01-08-42</td>
                                    <td>maximumsoft</td>
                                    <td>
                                    <button @click="editUser" class="btnE">เพิ่มเติม</button>
                                    <button @click="deleteUser" class="btnD">ลบ</button>
                                    </td>
                                </tr>  
                               <tr> 
                                    <td>peach_too</td>
                                    <td>123456Aa</td>
                                    <td>0678901234</td>
                                    <td>ทดสอบ แสดงผล</td>
                                    <td>04-01-40</td>
                                    <td>maximumsoft</td>
                                    <td>
                                    <button @click="editUser" class="btnE">เพิ่มเติม</button>
                                    <button @click="deleteUser" class="btnD">ลบ</button>
                                    </td>
                                </tr>
                                <tr> 
                                    <td>Anun</td>
                                    <td>0000AaAa</td>
                                    <td>0987654321</td>
                                    <td>ทดสอบ ทดสอบ</td>
                                    <td>14-12-41</td>
                                    <td>maximumsoft</td>
                                    <td>
                                    <button @click="editUser" class="btnE">เพิ่มเติม</button>
                                    <button @click="deleteUser" class="btnD">ลบ</button>
                                    </td>
                                </tr> <!--
                                  <tr class="tr1">
                                   <th>USERNAME</th>
                                   <th>PASSWORD</th>
                                   <th>เบอร์โทรศัพท์</th>
                                   <th>ชื่อ-นามสกุล</th>
                                   <th>วันเกิด</th>
                                   <th>ที่อยู่</th>
                                   <th>เพิ่มเติม</th>
                               </tr>
                                <tr>
                                   <td>{{ user.username }}</td>
                                   <td>{{ user.password }}</td>
                                   <td>{{ user.phoneNumber }}</td>
                                   <td>{{ user.name }}</td>
                                   <td>{{ user.birthday }}</td>
                                   <td>
                                       <button @click="editUser" class="btnE">เพิ่มเติม</button>
                                       <button @click="deleteUser" class="btnD">ลบ</button>
                                   </td>
                               </tr>  --> 
                           </table>
               </div>
           </div>
       </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default defineComponent({
   name: "MyCard",
   props: {
     user: {
       type: Object,
       required: true,
     },
   },
   setup(props) {
     const store = useStore();
 
     const editUser = () => {
       // Logic to navigate to the edit user page
     };
 
     const deleteUser = () => {
       Swal.fire({
         title: 'Are you sure?',
         text: 'This action cannot be undone.',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes',
         cancelButtonText: 'No',
       }).then((result) => {
         if (result.isConfirmed) {
           store.dispatch('deleteUser', props.user.id);
         }
       });
     };
 
     return {
       editUser,
       deleteUser,
     };
   },
 });
</script>
<style type="text/css">

.btnE {
   color: rgb(255, 255, 255);
   padding:7px 17px;
   font-size:15px;
   border: 0px ;
   background-color: #1c84da;
   border-radius: 5px;
}
.btnE:hover {
   background-color: #176eb6;
   color: #ffffff;
}
.btnD {
   color: rgb(255, 255, 255);
   padding:7px 17px;
   font-size:15px;
   border: 0px ;
   background-color: #f10d0d;
   border-radius: 5px;
   margin-left: 2px;
   margin-bottom: 5px;
   margin-top: 5px;
}
.btnD:hover {
   background-color: #ec5a5a;
   color: #ffffff;
}
.table1 {
   margin-bottom: 30px;
   border-collapse: collapse;
   width: 100%;
   text-align: left;
}
th, td {
   text-align: left;
}
tr:nth-child(even){
   background-color: #e3e6e9
}
th {
   background-color: #262b26;
   color: white;
}
</style>