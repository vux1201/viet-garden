import{_ as k,m as b,S as m,g as v,r as f,o as h,c as _,a as t,b as u,w as p,F as C,l as x,e as n,n as y,t as r,i as T,v as w,p as S,f as B}from"./index-eee19d7a.js";const q={data(){return{cart:[],sumTotal:0}},async created(){try{await this.getCarts(),console.log(this.allCart,"allcart");for(let e=0;e<this.allCart.length;e++)this.sumTotal+=this.allCart[e].product.price*this.allCart[e].qty;console.log(this.sumTotal,"sum")}catch(e){console.log(e)}},methods:{...b(y,["getCarts","updateCart","deleteCart"]),totalOder(e){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"VND"}).format(e)},async onClickPlus(e){let a=e.qty+1,l={product_id:e.product.id,qty:a};await this.updateCart(e.id,l),await this.getCarts()},async onClickMinus(e){let a=e.qty-1,l={product_id:e.product.id,qty:a};await this.updateCart(e.id,l),await this.getCarts()},async clickdeleteCart(e){try{m.fire({title:"Xóa sản phẩm khỏi rỏ hàng?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Tiếp tục",cancelButtonText:"Hủy"}).then(a=>{a.isConfirmed&&(this.deleteCart(e.id),this.getCarts(),m.fire("Đã xóa khỏi giỏ hàng!"))})}catch(a){console.log(a)}}},computed:{...v(y,["allCart"])}},o=e=>(S("data-v-9d9f11ee"),e=e(),B(),e),N={class:"section"},V={class:"sub-bg"},I={id:"link",class:"container"},D={class:"sub-head"},F=o(()=>t("i",{class:"fa fa-home"},null,-1)),M=o(()=>t("span",null,"Giỏ hàng",-1)),O={class:"bg-dark",style:{"padding-top":"20px"}},P={class:"container"},X={class:"content-page"},A=o(()=>t("div",{class:"title-signin"},[t("h2",null,"Giỏ hàng")],-1)),E={id:"tblBasket",class:"cart-page"},G=o(()=>t("div",{id:"tblText",class:"basket-text"},[n(' - Nhấn nút "+" hoặc "-" để thay đổi số lượng hoặc xóa sản phẩm trong giỏ hàng. '),t("br"),n(' - Nhấn nút "Chọn thêm sản phẩm" để chọn thêm sản phẩm khác muốn mua thêm. '),t("br"),n(' - Sau khi đã chọn xong các sản phẩm cần mua. Nhấn nút "Thanh toán" để mua hàng. ')],-1)),H={class:"basket-table table-responsive"},U={class:"table",cellspacing:"0",rules:"all",border:"1",id:"grdBasket",style:{"border-style":"None","border-collapse":"collapse"}},$=o(()=>t("thead",null,[t("tr",{style:{"text-align":"center"}},[t("th",{scope:"col"},"STT"),t("th",{scope:"col"},"Hình ảnh"),t("th",{scope:"col"},"Tên sản phẩm"),t("th",{scope:"col"},"Đơn giá"),t("th",{scope:"col"},"Số lượng"),t("th",{scope:"col"},"Thành tiền"),t("th",{scope:"col"},"Xóa")])],-1)),L={class:"number"},j={class:"picture-cart"},z={href:"#"},J=["src"],K={class:"namepro-cart"},Q={href:"#"},R={class:"unit-cart"},W={class:"quanlity-cart"},Y=["onClick"],Z=["onUpdate:modelValue"],tt=["onClick"],et={class:"payment-cart"},st={class:"delete-cart"},at=["onClick"],ot={class:"button-signin"},nt=o(()=>t("button",null,"Thanh toán",-1)),ct=o(()=>t("button",null,"Thêm sản phẩm",-1));function lt(e,a,l,it,rt,c){const d=f("router-link");return h(),_(C,null,[t("div",N,[t("div",V,[t("div",I,[t("div",D,[u(d,{to:"/home"},{default:p(()=>[F,n("Trang chủ")]),_:1}),M])])])]),t("section",O,[t("div",P,[t("div",X,[A,t("div",E,[G,t("div",H,[t("div",null,[t("table",U,[$,t("tbody",null,[(h(!0),_(C,null,x(e.allCart,(s,g)=>(h(),_("tr",{style:{"text-align":"center",top:"10px"},key:g},[t("td",L,[t("span",null,r(g+1),1)]),t("td",j,[t("a",z,[t("img",{style:{width:"100px"},src:s.product.product_images[0].image_path,alt:"Cây hải đường"},null,8,J)])]),t("td",K,[t("a",Q,r(s.product.name),1)]),t("td",R,[t("span",null,r(c.totalOder(s.product.price))+"/Sản phẩm",1)]),t("td",W,[t("input",{type:"submit",value:"-",onClick:i=>c.onClickMinus(s)},null,8,Y),T(t("input",{type:"text","onUpdate:modelValue":i=>s.qty=i},null,8,Z),[[w,s.qty]]),t("input",{type:"submit",value:"+",onClick:i=>c.onClickPlus(s)},null,8,tt)]),t("td",et,[t("span",null,r(c.totalOder(s.product.price*s.qty)),1)]),t("td",st,[t("a",{onClick:i=>c.clickdeleteCart(s)},"Xóa",8,at)])]))),128))])])])]),t("div",ot,[n("    "),u(d,{to:"/PaymentAddress"},{default:p(()=>[nt]),_:1}),n("    "),u(d,{to:"/home"},{default:p(()=>[ct]),_:1})])])])])])],64)}const ht=k(q,[["render",lt],["__scopeId","data-v-9d9f11ee"]]);export{ht as default};
