<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Truy cap nhanh  -->
  <footer>
    <div class="container">
      <div class="menu-footer">
        <h4>Truy Cập Nhanh</h4>
        <ul>
          <li>
            <a href="/introduce" target="">Giới thiệu</a>
          </li>
          <li>
            <a href="#" target="">Dịch Vụ</a>
          </li>
          <li>
            <a href="#" target="">Blog - Tin Tức</a>
          </li>
          <li>
            <a href="#" target="">Hỗ trợ</a>
          </li>
          <li>
            <a href="#" target="">Chính sách đổi trả hàng</a>
          </li>
        </ul>
      </div>
      <div class="bank-account">
        <p class="account">
          <big>TÀI KHOẢN</big>
        </p>
        <p>
          <big>
            <b>Ngân hàng Đông Á</b>
            Số TK: 0103720160, PGD Tô Hiến Thành, TP. HCM - Chủ Tài Khoản: Dương
            Công Đông.
          </big>
        </p>
        <p>
          <big>
            <b>Ngân hàng VietCombank </b>
            Số TK: 042 100 385 5531 - Chủ Tài Khoản: Nguyễn Thị Hồng Vân.
          </big>
        </p>
        <p>
          <big>
            <b>Ngân hàng ACB</b>
            Số TK:130230819 - Chủ TK: Dương Công Đông
          </big>
        </p>
      </div>
    </div>
  </footer>

  <!-- Lien he  -->
  <div class="contact">
    <section class="adress-footer">
      <div class="container">
        <div>
          <h4>
            <big>LIÊN HỆ</big>
          </h4>
          <p>
            <big>
              <strong>Vườn Cây Việt</strong>
              chuyên bán các loại cây cảnh để bàn, cây cảnh phong thuỷ, cho thuê
              cây cảnh,cây cảnh bonsai, tiểu cảnh terrarium và cung cấp các dịch
              vụ liên quan đến cây cảnh. Hotline: 0985507150. Email:
              lienhe@vuoncayviet.com
            </big>
          </p>
          <p>
            <big>
              <strong>Đại chỉ showroom:</strong>
            </big>
            <big>
              <em>
                <strong>20 Lê Lâm, Phú Thạnh, Tân Phú, Hồ Chí Minh</strong>
              </em>
            </big>
          </p>
          <p>&nbsp;</p>
          <p style="text-align: center">
            <span style="color: rgb(0, 0, 255)">
              <a href="#" target="_blank">
                <span style="color: rgb(0, 0, 255)">cây cảnh phong thủy</span>
              </a>
            </span>
            <span style="color: rgb(0, 0, 255)">
              ,
              <a href="#" target="_blank">
                <span style="color: rgb(0, 0, 255)">cây lưỡi hổ</span></a
              >
              ,&nbsp;
              <a href="#" target="_blank">
                <span style="color: rgb(0, 0, 255)">cây hợp mệnh kim</span>
              </a>
              ,&nbsp;
            </span>
            <span style="color: rgb(0, 0, 255)">
              <span style="color: rgb(0, 0, 255)">
                <a href="#" target="_blank">
                  <span style="color: rgb(0, 0, 255)">cây cảnh mini</span> </a
                >,&nbsp;
              </span>
              <span style="color: rgb(0, 0, 255)"></span>
              <span style="color: rgb(0, 0, 255)">
                <span style="color: rgb(0, 0, 255)">
                  <a href="#" target="_blank">
                    <span style="color: rgb(0, 0, 255)"
                      >cây cảnh văn phòng</span
                    > </a
                  >,&nbsp;
                  <span style="color: rgb(0, 0, 255)"></span>
                  <span style="color: rgb(0, 0, 255)">
                    <a href="#">
                      <span style="color: rgb(0, 0, 255)">cây hồng môn</span>
                    </a>
                  </span>
                </span>
              </span>
            </span>
          </p>
        </div>
      </div>
      <div id="eJOY__extension_root" style="all: unset">&nbsp;</div>
    </section>
    <section class="copyright">
      <div class="container">
        <b>Copyright VUONCAYVIET.COM</b>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
// Truy cập nhanh
footer {
  width: 100%;
  float: left;
  padding: 20px 0;
  background: #fff;
  .icon-tinnhiem {
    width: 120px;
    float: left;
    text-align: center;
    margin-right: 30px;
    a {
      float: left;
      margin: 0;
    }
  }
  .menu-footer {
    width: calc(50% - 150px);
    float: left;
    ul li {
      width: 100%;
      float: left;
      a {
        color: #333;
        float: left;
        font-size: 14px;
        padding: 2px 0;
        &:hover {
          color: #ff8000;
        }
      }
    }
  }
  .bank-account {
    width: 50%;
    float: left;
    line-height: 2;
    padding-left: 20px;
    .account {
      margin: 10px 0;
      font-size: 15px;
      font-weight: 600;
    }
    p {
      padding-bottom: 0;
      color: #333;
      font-size: 13px;
      line-height: 1.5;
    }
  }
  .bank-account h4,
  .menu-footer h4 {
    font-size: 18px;
    color: #000;
    text-transform: uppercase;
    margin: 10px 0;
  }
}
// Liên hệ
.contact {
  h4 {
    font-size: 18px;
    margin: 10px 0;
  }
  .adress-footer {
    width: 100%;
    float: left;
    padding: 20px 0;
    background: #ddd;
    p {
      padding-bottom: 0;
      color: #333;
      line-height: 1.5;
      margin-bottom: 0;
    }
  }
  .copyright {
    width: 100%;
    float: left;
    text-align: left;
    color: #333;
    padding: 6px 0;
    line-height: 1.2;
    .container > b {
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>
