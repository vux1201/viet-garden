<template>
  <div class="content">
    <!-- Hiển thị người dùng -->
    <div class="show-products" v-if="show == false">
      <div class="head">
        <div class="title1">Quản lý người dùng</div>
        <userSearch></userSearch>
      </div>
      <button class="btn-adduser" @click="addProducts">
        <i class="fa-light fa-circle-plus"></i>&nbsp;Thêm người dùng
      </button>
      <table class="container">
        <thead>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Địa chỉ</th>
          <th>Quản trị viên</th>
          <!-- <th>Action</th> -->
        </thead>
        <tbody>
          <tr v-for="(item, index) in allUsers" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.fullname }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone_number }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.is_admin }}</td>
            <!-- <td @click="onDetailUser(item.id)">
              <a @click="addProducts"><i class="fa-solid fa-eye"></i></a>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <!-- thêm người dùng -->
    <div class="show-addProducts" v-if="show == true">
      <div class="dialog">
        <h2 class="title1">Thông tin người dùng</h2>
        <div class="form-input">
          <label>Họ tên <a title="trường bắt buộc">(*)</a></label>
          <input type="text" required v-model="detailUser.fullname" />
        </div>
        <div class="form-input">
          <label>Email <a title="trường bắt buộc">(*)</a></label>
          <input type="text" required v-model="detailUser.email" />
        </div>
        <div class="form-input">
          <label>Số điện thoại <a title="trường bắt buộc">(*)</a></label>
          <input type="text" required v-model="detailUser.phone_number" />
        </div>
        <div class="form-input">
          <label>Địa chỉ <a title="trường bắt buộc">(*)</a></label>
          <input type="text" required v-model="detailUser.address" />
        </div>
        <div class="form-input">
          <label>Tài khoản admin <a title="trường bắt buộc">(*)</a></label>
          <input type="text" required v-model="detailUser.is_admin" />
        </div>
        <div class="footer">
          <button class="btn-adduser" type="submit" @click="addNewUser">
            Lưu
          </button>
          <button class="btn-adduser" type="reset" @click="addProducts">
            Thoát
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userSearch from "./UserSearch.vue";
import { mapState, mapActions } from "pinia";
import { useUsersStore } from "../../stores/users";
export default {
  data() {
    return {
      show: false,
      page: 1,
      size: 10,
      detailUser: {},
    };
  },
  //get
  async created() {
    try {
      this.params.page = 1;
      this.params.size = 10;
      await this.getUsers(this.params);
      console.log("allUsers", this.allUsers);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(useUsersStore, ["getUser", "getUsers", "register"]),
    //chi tiet
    async onDetailUser(id) {
      try {
        await this.getUser({ id });
        console.log(id, "ied");
        console.log("detailUser", this.detailUser);
      } catch (error) {
        console.log(error);
      }
    },
    addProducts() {
      this.show = !this.show;
    },

    //Lưu thông tin
    async addNewUser() {
      console.log(this.detailUser);
      // try {
      //   let data = this.detailUser;
      //   const res = await this.store.register({ data });
      //   if (res.status == 200) {
      //     this.res = res;
      //     alert("Tạo thành công!");
      //     this.show = false;
      //   }
      // } catch (error) {
      //   console.log(error);
      //   // if (
      //   //   error.response.data.detail == "User with this email already exist"
      //   // ) {
      //   //   this.errSignup1 = "Email đã tồn tại, vui lòng nhập email khác!";
      //   // } else {
      //   //   this.errSignup1 = "";
      //   // }
      //   // if (
      //   //   error.response.data.detail ==
      //   //   "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt"
      //   // ) {
      //   //   this.errSignup2 =
      //   //     "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt";
      //   // } else {
      //   //   this.errSignup2 = "";
      //   // }
      // }
    },

    // xóa phần tử
    handleDelete() {
      alert("Bạn có chắc muốn xóa không!");
    },
  },
  computed: {
    ...mapState(useUsersStore, ["allUsers", "detailUser", "params"]),
  },
  components: {
    userSearch,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/FormManagement.scss";
</style>
