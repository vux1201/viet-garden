<template>
  <!-- The sidebar  -->
  <div class="bg-dark">
    <div class="col-left">
      <div class="block-col">
        <div class="menu-left">
          <div id="accordian">
            <ul class="accordian-ul">
              <li class="active">
                <h3>
                  <span class="circle-arrow" @click="showAll">Xem tất cả</span>
                </h3>
              </li>
              <li class="active">
                <h3>
                  <span class="circle-arrow">Cây cảnh</span>
                </h3>
                <ul>
                  <!-- <li v-for="(item, index) in allProducts" :key="index">
                    <a @click="categoryView()">
                      <span class="small-arrow">{{ item.name }}</span>
                    </a>
                  </li> -->
                  <li
                    v-for="(item, index) in allCategory.results?.[7].categories"
                    :key="index"
                  >
                    <a @click="categoryView(item.id)">{{ item.name }}</a>
                  </li>
                  <!-- <li>
                    <a>
                      <span class="small-arrow">Cây thuỷ sinh</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="small-arrow">Cây cảnh nội thất</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Cây chậu treo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Cây ăn trái</span>
                    </a>
                  </li> -->
                </ul>
              </li>
              <li class="active">
                <h3>
                  <span class="circle-arrow">Chậu cảnh</span>
                </h3>
                <ul>
                  <li
                    v-for="(item, index) in allCategory.results?.[6].categories"
                    :key="index"
                  >
                    <a @click="categoryView(item.id)">{{ item.name }}</a>
                  </li>
                  <!-- <li>
                    <a href="#">
                      <span class="small-arrow">Chậu đất nung</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Chậu đá mài - xi măng</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Chậu composite</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Chậu Bonsai</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Chậu men sứ</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="small-arrow">Chậu nhựa ABS</span>
                    </a>
                  </li> -->
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block-col">
        <div class="block-col-title">
          <h3>Tin tức nổi bật</h3>
        </div>
        <div class="block-col-content news-col">
          <ul>
            <li>
              <div class="pic-news">
                <a href="#">
                  <img
                    src="https://vuoncayviet.com/data/items/985/cay-luoi-ho-de-ban-vuon-cay-viet.jpg"
                    alt="Đầy đủ về cây Lưỡi hổ: Lợi ích, ý nghĩa phong thuỷ, mua và chăm sóc đúng cách"
                  />
                </a>
              </div>
              <h6>
                <a href="#"
                  >Đầy đủ về cây Lưỡi hổ: Lợi ích, ý nghĩa phong thuỷ, mua và
                  chăm sóc đúng cách</a
                >
              </h6>
              Cây lưỡi hổ mang trong mình một khả năng sinh tồn phi thường kèm
              theo những lợi ích không nhỏ với con người trong điều kiện sống ồn
              ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#">
                  <img
                    src="https://vuoncayviet.com/data/items/1120/vuon-cay-viet-cung-cap-si-cay-canh-mini-vuon-cay-viet.jpg"
                    alt="cay-canh-mini"
                  />
                </a>
              </div>
              <h6>
                <a href="#"
                  >Mách bạn địa chỉ cung cấp sỉ cây cảnh mini uy tín, chất
                  lượng</a
                >
              </h6>
              Bạn đang tìm chỗ mua cây cảnh mini nhưng lại không biết lựa chọn
              như thế nào? Hiện nay thị trường cây cảnh khá nhộn nhịp với rất
              ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#"
                  ><img
                    src="https://vuoncayviet.com/data/items/1227/cay-hop-menh-kim.jpg"
                    alt="cay hop menh kim"
                  />
                </a>
              </div>
              <h6>
                <a href="#">Bảng báo giá và cách chọn cây hợp mệnh Kim</a>
              </h6>
              Vườn Cây Việt xin gửi đến quý khách hàng thuộc hành Kim bảng báo
              giá cây cảnh hợp mệnh Kim ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#"
                  ><img
                    src="https://vuoncayviet.com/data/items/1256/menh-kim-hop-cay-gi.jpg"
                    alt="cay-hop-menh-kim"
                  />
                </a>
              </div>
              <h6>
                <a href="#"
                  >Các Loại Cây Hợp Mệnh Kim Mang Đến Cát Tường, Vượng Khí</a
                >
              </h6>
              Cây cảnh là vật trang trí phổ biến trong đời sống được nhiều người
              yêu thích. Chúng không chỉ đơn thuần đem đến vẻ đẹp cho không gian
              ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#"
                  ><img
                    src="https://vuoncayviet.com/data/items/1255/cach-cham-soc-cay-canh-mini-vuon-cay-viet.jpg"
                    alt="cach-cham-soc-cay-canh-mini"
                  />
                </a>
              </div>
              <h6>
                <a href="#">Cách Chăm Sóc Cây Cảnh Mini</a>
              </h6>
              Lý giải nguyên nhân tại sao sau khi mua cây cảnh mini từ 2-4 tuần
              cây hay bị héo, vàng lá, thậm chí là chết. Chăm sóc cây ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#"
                  ><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7D6vN_uBryd7Rzu4unucxRNtT-4hK9hH0g&usqp=CAU"
                    alt="mua cay canh mini o dau"
                  />
                </a>
              </div>
              <h6>
                <a href="#"
                  >Mua cây cảnh mini ở đâu? - Chuyên gia trả lời cùng bạn</a
                >
              </h6>
              Mua cây cảnh mini ở đâu là bài toán hóc búa mà nhiều người trồng
              cây cảnh loay hoay đi tìm đáp án. Để trả lời cho câu ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#">
                  <img
                    src="https://vuoncayviet.com/data/items/1237/top-11-cay-canh-van-phong-dep-va-de-cham-nhat.jpg"
                    alt="cây cảnh văn phòng"
                  />
                </a>
              </div>
              <h6>
                <a href="#"
                  >Top 11 Cây Cảnh Văn Phòng Đẹp Và Dễ Chăm Nhất Hiện Nay</a
                >
              </h6>
              Trí nhớ của nhân viên tăng 20%, sự tập trung tăng thêm 15% chính
              là lợi ích tuyệt vời mà cây cảnh văn phòng mang lại. Bạn đang muốn
              ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#">
                  <img
                    src="https://vuoncayviet.com/data/items/916/cay-hong-mon-de-ban-vcv.jpg"
                    alt="Mệnh hợp và ý nghĩa phong thuỷ cây Hồng môn"
                  />
                </a>
              </div>
              <h6>
                <a href="#">Mệnh hợp và ý nghĩa phong thuỷ cây Hồng môn</a>
              </h6>
              Cây Hồng môn có cánh hoa đỏ thắm, thể hiện sự nhiệt tình, ấm áp,
              và tượng trưng cho tình yêu bất diệt. ...
            </li>
            <li>
              <div class="pic-news">
                <a href="#">
                  <img
                    src="https://vuoncayviet.com/data/items/1248/cay-van-nien-thanh.jpeg"
                    alt="cay van nien thanh"
                  />
                </a>
              </div>
              <h6>
                <a href="#"
                  >Cây Vạn Niên Thanh - Ý Nghĩa Phong Thủy Và Cách Chăm Sóc Đơn
                  Giản Hiệu Quả</a
                >
              </h6>
              Cách chăm sóc cây Vạn niên thanh đơn giản hiệu quả. Ý nghĩa phong
              thủy của cây Vạn Niên Thanh và tuổi hợp, mệnh hợp. ...
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useProductsStore } from "../stores/products";
export default {
  data() {
    return {
      param: {
        page: 1,
        size: 10,
        selected:false ,
      },
    };
  },
  async created() {
    try {
      // this.params.page = 1;
      // this.params.size = 10;
      await this.getCategories();
      console.log(this.allCategory, "er1");
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(useProductsStore, [
      "getProduct",
      "getProducts",
      "getCategories",
    ]),
    //loc san pham
    async categoryView(category_id) {
      try {
        this.selected = true;
        // this.params.page = 1;
        // this.params.size = 10;
        this.params.category_id = category_id;
        await this.getProduct(this.params);
        // this.$router.push({ path: "/CategoryView" });
      } catch (error) {
        console.log(error);
      }
    },
    //xem tat ca
    async showAll() {
      try {
        // this.params.category_id = "";
        await this.getProducts(this.param);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(useProductsStore, ["params", "allProducts", "allCategory"]),
  },
};
</script>

<style scoped>
::v-deep .col-left {
  width: 100% !important;
}
.bg-dark {
  background: #eee;
  width: 31%;
  float: left;
  margin-left: 18px;
}
.col-left {
  padding-top: 20px;
}
.menu-left {
  background: #fff;
}
span,
a {
  cursor: pointer;
}

.menu-left h3 {
  font-size: 14px;
  background: #3daa12;
  padding: 15px 10px;
  border-bottom: 1px solid #fff;
  font-weight: bold;
  color: #fff;
}
.menu-left ul,
.menu-left ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-left ul li:last-child h3 {
  border-bottom: none;
}
.menu-left ul li li a {
  padding: 6px 10px;
  border-bottom: 1px solid #eee;
  display: block;
  cursor: pointer;
}
.menu-left ul li li a:hover {
  background: #ddd;
  color: #fc851d;
}
.menu-left ul li li:last-child {
  border-bottom: none;
}
.news-col {
  width: 100%;
  float: left;
  background: #fff;
}
.news-col ul li {
  /* width: 100%; */
  float: left;
  padding: 15px;
  color: #666;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
}
.news-col ul li:last-child {
  border: none;
}
.news-col .pic-news {
  width: 90px;
  height: 90px;
  border: 1px solid #eee;
  float: left;
  margin: 0 10px 10px 0;
  background: #f3f3f3;
}
.news-col .pic-news a {
  width: 90px;
  height: 90px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.news-col .pic-news img {
  width: 100%;
  height: 100%;
}
.news-col h6 {
  /* float: left;
  width: calc(100% - 100px); */
  font-size: 14px;
  color: #000;
  line-height: 1.3;
  margin-bottom: 5px;
  text-align: left;
  font-weight: 600;
}
.news-col h6 a {
  color: #000;
}
.news-col h6 a:hover {
  color: #f28902;
}
.link-web select {
  width: 100%;
  padding: 5px;
}
.fanpage {
  width: 100%;
  float: left;
}
.block-col {
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.block-col-title {
  width: 100%;
  float: left;
}
.block-col-title h3 {
  /* width: 100%;
  float: left; */
  background: #3daa12;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
}
.block-col-content {
  width: 100%;
  float: left;
  background: #fff;
}
</style>
