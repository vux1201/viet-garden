import{a as _}from"./TheAccountColumnLeft-bfbc739d.js";import{_ as f,u as c,m,S as l,g as v,r as g,o as w,c as k,a as s,h as M,b,t as i,i as p,v as h,d as y,p as x,f as S,e as d}from"./index-eee19d7a.js";const T={data(){return{dataUser:{password:""},newpw1:"",newpw2:"",errMes:"",store:c()}},methods:{...m(c,["updateProfile"]),async updateProfile(){if(this.dataUser.password==this.newpw2)try{const e=this.dataUser;await this.store.updateProfile({data:e}),l.fire("Đổi mật khẩu thành công"),this.errMes=""}catch{this.errMes="Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt"}else l.fire("Thông tin không đúng","Xác nhận lại mật khẩu của bạn","question")}},computed:{...v(c,["auth"])},components:{accountColLeft:_}},t=e=>(x("data-v-707d10f0"),e=e(),S(),e),U={class:"change-password"},P=y('<section class="sub-bg" data-v-707d10f0><div id="link" class="container" data-v-707d10f0><div class="sub-head" style="top:15px;" data-v-707d10f0><a href="https://vuoncayviet.com" data-v-707d10f0><i class="fa fa-home" data-v-707d10f0></i>Trang chủ </a><span data-v-707d10f0> Thay đổi mật khẩu</span></div></div></section>',1),C={class:"bg-dark"},V={class:"container"},I=t(()=>s("div",{class:"title-signin"},[s("h2",null,"Thông tin tài khoản")],-1)),N={class:"content-payment"},q={class:"account-content"},B={class:"account-main formcus-cart"},L=t(()=>s("h3",{class:"text-center"},"Thay đổi mật khẩu",-1)),X={class:"form-group"},D=t(()=>s("label",null,[d(" Mật khẩu cũ "),s("span",null,"*")],-1)),H=t(()=>s("div",{class:"input-group"},[s("div",{class:"input-group-addon"},[s("i",{class:"fa fa-user"})]),s("input",{type:"password",class:"form-control",placeholder:"Mật khẩu cũ"})],-1)),A={class:"errMes"},E={class:"form-group"},j=t(()=>s("label",null,[d(" Mật khẩu mới "),s("span",null,"*")],-1)),z={class:"input-group"},F=t(()=>s("div",{class:"input-group-addon"},[s("i",{class:"fa fa-user"})],-1)),G={class:"errMes"},J={class:"form-group"},K=t(()=>s("label",null,[d("Xác nhận lại mật khẩu "),s("span",null,"*")],-1)),O={class:"input-group"},Q=t(()=>s("div",{class:"input-group-addon"},[s("i",{class:"fa fa-user"})],-1)),R={class:"errMes"},W=t(()=>s("div",{class:"button-signin"},[s("button",{type:"submit"},"Thay đổi")],-1));function Y(e,a,Z,$,o,r){const u=g("accountColLeft");return w(),k("div",U,[P,s("section",C,[s("div",V,[s("form",{class:"content-page",onSubmit:a[2]||(a[2]=M((...n)=>r.updateProfile&&r.updateProfile(...n),["prevent"]))},[I,s("div",N,[b(u),s("div",q,[s("div",B,[L,s("div",X,[D,H,s("span",A,i(o.errMes),1)]),s("div",E,[j,s("div",z,[F,p(s("input",{type:"text",class:"form-control",placeholder:"Mật khẩu mới",required:"","onUpdate:modelValue":a[0]||(a[0]=n=>o.dataUser.password=n)},null,512),[[h,o.dataUser.password]])]),s("span",G,i(o.errMes),1)]),s("div",J,[K,s("div",O,[Q,p(s("input",{type:"text",class:"form-control",placeholder:"Xác nhận lại mật khẩu",required:"","onUpdate:modelValue":a[1]||(a[1]=n=>o.newpw2=n)},null,512),[[h,o.newpw2]])]),s("span",R,i(o.errMes),1)]),W])])])],32)])])])}const es=f(T,[["render",Y],["__scopeId","data-v-707d10f0"]]);export{es as default};