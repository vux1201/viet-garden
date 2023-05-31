import{u as w}from"./UserSearch-27d7ffe7.js";import{_ as b,q as m,m as x,g as P,r as S,o as r,c as i,a as e,b as A,e as c,F as p,l as _,k as y,i as v,x as V,t as d,v as G,p as M,f as N}from"./index-eee19d7a.js";const z={data(){return{page:1,size:30,show:!1,store:m,modal:[],dataCategory:[],dataCategories:{id:"",name:"",nameGroup:"",category_group_id:""}}},async created(){try{this.params.page=1,this.params.size=10,await this.getCategories(this.params),console.log(this.allCategory,"allCate")}catch(t){console.log(t)}},methods:{...x(m,["getCategories","getCategory","postCategoryGroup","postCategories","updateCategories","deleteCategories"]),showAddProducts(){this.show=!this.show},idGroup(t){console.log("id-cre",t),this.dataCategories.category_group_id=t},async createCategories(){try{let t={category_group_id:this.dataCategories.category_group_id,name:this.dataCategories.name};console.log("categories",t),await this.postCategories(t)}catch{console.log("err create")}},idCategory(t,s){console.log("id-update",t.id,t.name,s.name),this.dataCategories.id=t.id,this.dataCategories.name=t.name,this.dataCategories.nameGroup=s.name},async putCategories(){try{await this.updateCategories(this.dataCategories.id,this.dataCategories.name)}catch{console.log("err update")}},async handleDelete(t){if(console.log("id-dele",t),confirm("Bạn có chắc muốn xóa")==!0)try{await this.deleteCategories(t),this.params.page=this.page,this.params.size=this.size,await this.getCategories(this.params)}catch{console.log("ko the xoa")}else return 0},async updatePage(t,s){try{this.params.page=t,this.params.size=s,console.log(s,"size"),await this.getCategory(this.params)}catch(C){console.log(C)}}},computed:{...P(m,["params","allCategory"])},components:{userSearch:w}},n=t=>(M("data-v-b8611c0a"),t=t(),N(),t),T={class:"content"},B={key:0,class:"show-products"},D={class:"head"},I=n(()=>e("div",{class:"title1"},"Quản lý danh mục",-1)),L=n(()=>e("i",{class:"fa-light fa-circle-plus"},null,-1)),q={class:"container"},F=n(()=>e("thead",null,[e("tr",null,[e("th",{style:{width:"20%"}},"Loại sản phẩm"),e("th",{style:{width:"20%"}},"Nhóm danh mục"),e("th",null,"Mô tả"),e("th",null,"Action")])],-1)),U=["value"],j=n(()=>e("td",{style:{"text-align":"justify"}}," Các loại cây cảnh để bàn với nhiều kiểu dáng và kích thước khác nhau, giúp thanh lọc không khí, tạo không gian sống và làm việc tràn đầy năng lượng. ",-1)),E=["onClick"],H=["onClick"],Q=n(()=>e("i",{class:"fa-regular fa-trash-can",title:"delete"},null,-1)),J=[Q],K={key:1,class:"show-addProducts"},O=n(()=>e("h2",{class:"title1"},"Thông tin danh mục",-1)),R={class:"form-input"},W=n(()=>e("label",null,[c("Nhóm danh mục "),e("a",{title:"trường bắt buộc"},"(*)")],-1)),X={key:0,class:"form-categories"},Y=n(()=>e("option",{disabled:"",selected:""},"Vui lòng chọn nhóm danh mục !",-1)),Z=["value"],$={key:1,class:"form-categories"},ee={class:"form-input"},te=n(()=>e("label",null,[c("Loại sản phẩm "),e("a",{title:"trường bắt buộc"},"(*)")],-1)),se=n(()=>e("div",{class:"form-input"},[e("label",null,[c("Mô tả "),e("a",{title:"trường bắt buộc"},"(*)")]),e("textarea",{class:"summary",required:""})],-1)),ae={class:"footer"};function oe(t,s,C,re,l,o){const f=S("userSearch");return r(),i("div",T,[l.show==!1?(r(),i("div",B,[e("div",D,[I,A(f)]),e("button",{class:"btn-adduser",href:"#edit",onClick:s[0]||(s[0]=(...a)=>o.showAddProducts&&o.showAddProducts(...a))},[L,c(" Thêm danh mục ")]),e("table",q,[F,(r(!0),i(p,null,_(t.allCategory.results,(a,h)=>(r(),i("tbody",{key:h,value:a},[(r(!0),i(p,null,_(a.categories,(u,k)=>(r(),i("tr",{key:k},[e("td",null,d(u.name),1),e("td",null,d(a.name),1),j,e("td",null,[e("a",{onClick:g=>o.idCategory(u,a)},[e("i",{onClick:s[1]||(s[1]=(...g)=>o.showAddProducts&&o.showAddProducts(...g)),class:"fa fa-file-pen",title:"edit"})],8,E),e("a",{onClick:g=>o.handleDelete(u.id)},J,8,H)])]))),128))],8,U))),128))])])):y("",!0),l.show==!0?(r(),i("div",K,[e("form",null,[O,e("div",R,[W,l.dataCategories.id?(r(),i("div",$,[e("p",null,d(this.dataCategories.nameGroup),1)])):(r(),i("div",X,[v(e("select",{class:"category-groups","onUpdate:modelValue":s[2]||(s[2]=a=>l.modal=a),onChange:s[3]||(s[3]=a=>o.idGroup(l.modal.id))},[Y,(r(!0),i(p,null,_(t.allCategory.results,(a,h)=>(r(),i("option",{key:h,value:a},d(a.name),9,Z))),128))],544),[[V,l.modal]])]))]),e("div",ee,[te,v(e("input",{type:"text",autocomplete:"on","onUpdate:modelValue":s[4]||(s[4]=a=>l.dataCategories.name=a)},null,512),[[G,l.dataCategories.name]])]),se,e("div",ae,[l.dataCategories.id?(r(),i("button",{key:1,class:"btn-adduser",onClick:s[6]||(s[6]=(...a)=>o.putCategories&&o.putCategories(...a))}," Cập nhật ")):(r(),i("button",{key:0,class:"btn-adduser",onClick:s[5]||(s[5]=(...a)=>o.createCategories&&o.createCategories(...a))}," Thêm ")),e("button",{class:"btn-adduser",type:"reset",onClick:s[7]||(s[7]=(...a)=>o.showAddProducts&&o.showAddProducts(...a))}," Hủy ")])])])):y("",!0)])}const le=b(z,[["render",oe],["__scopeId","data-v-b8611c0a"]]);export{le as default};