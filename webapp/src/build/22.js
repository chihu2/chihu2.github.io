webpackJsonp([22],{194:function(n,l,t){"use strict";function e(n){return o._35(0,[(n()(),o._12(0,null,null,19,"section",[["class","card"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.open(n.context.$implicit._id)&&e),e},null,null)),(n()(),o._33(null,["\n            "])),(n()(),o._12(0,null,null,0,"div",[["class","ban"]],[[4,"background",null]],null,null,null,null)),(n()(),o._33(null,["\n            "])),(n()(),o._12(0,null,null,4,"div",[["class","dec"]],null,null,null,null,null)),(n()(),o._33(null,["\n                "])),(n()(),o._12(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o._33(null,["",""])),(n()(),o._33(null,["\n            "])),(n()(),o._33(null,["\n            "])),(n()(),o._12(0,null,null,8,"div",[["class","bottom"]],null,null,null,null,null)),(n()(),o._33(null,["\n                "])),(n()(),o._12(0,null,null,1,"span",[["class","name"]],null,null,null,null,null)),(n()(),o._33(null,["",""])),(n()(),o._33(null,["\n                "])),(n()(),o._12(0,null,null,2,"span",[["class","time"]],null,null,null,null,null)),(n()(),o._33(null,["",""])),o._29(1),(n()(),o._33(null,["\n            "])),(n()(),o._33(null,["\n        "]))],null,function(n,l){n(l,2,0,"url("+l.context.$implicit.banner+")"),n(l,7,0,l.context.$implicit.title),n(l,13,0,l.context.$implicit.uname),n(l,16,0,o._34(l,16,0,n(l,17,0,o._25(l.parent,0),l.context.$implicit.time)))})}function u(n){return o._35(0,[o._27(0,a.c,[o.x]),(n()(),o._33(null,["\n\n"])),(n()(),o._12(0,null,null,22,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,f.b,f.a)),o._11(4374528,null,0,d.a,[m.a,g.a,b.a,o.m,o.J,v.a,w.a,o.C,[2,y.a],[2,k.a]],null,null),(n()(),o._33(1,["\n    "])),(n()(),o._12(0,null,2,5,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,t){var e=!0,u=n.component;return"ionRefresh"===l&&(e=!1!==u.doRefresh(t)&&e),e},null,null)),o._11(212992,null,0,M.a,[g.a,d.a,o.C,O.j],null,{ionRefresh:"ionRefresh"}),(n()(),o._33(null,["\n        "])),(n()(),o._12(0,null,null,1,"ion-refresher-content",[],[[1,"state",0]],null,null,P.b,P.a)),o._11(114688,null,0,I.a,[M.a,m.a],null,null),(n()(),o._33(null,["\n    "])),(n()(),o._33(1,["\n\n    "])),(n()(),o._12(0,null,1,4,"section",[["class","card_wrap"]],null,null,null,null,null)),(n()(),o._33(null,["\n\n        "])),(n()(),o._8(16777216,null,null,1,null,e)),o._11(802816,null,0,a.h,[o.W,o.R,o.v],{ngForOf:[0,"ngForOf"]},null),(n()(),o._33(null,["\n\n    "])),(n()(),o._33(1,["\n\n    "])),(n()(),o._12(0,null,1,5,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,t){var e=!0,u=n.component;return"ionInfinite"===l&&(e=!1!==u.doInfinite(t)&&e),e},null,null)),o._11(1196032,null,0,j.a,[d.a,o.C,o.m,b.a],null,{ionInfinite:"ionInfinite"}),(n()(),o._33(null,["\n        "])),(n()(),o._12(0,null,null,1,"ion-infinite-scroll-content",[],[[1,"state",0]],null,null,F.b,F.a)),o._11(114688,null,0,N.a,[j.a,m.a],null,null),(n()(),o._33(null,["\n    "])),(n()(),o._33(1,["\n"]))],function(n,l){var t=l.component;n(l,6,0),n(l,9,0),n(l,15,0,t.items),n(l,22,0)},function(n,l){n(l,2,0,o._25(l,3).statusbarPadding,o._25(l,3)._hasRefresher),n(l,5,0,"inactive"!==o._25(l,6).state,o._25(l,6)._top),n(l,8,0,o._25(l,9).r.state),n(l,21,0,o._25(l,22).inf.state)})}Object.defineProperty(l,"__esModule",{value:!0});var o=t(0),i=(t(14),t(29)),r=function(){function n(n,l,t){this.navCtrl=n,this.navParams=l,this.http=t,this._refresher=null,this.items=[],this.rootNavCtrl=l.get("rootNavCtrl"),this.getdata()}return n.prototype.getdata=function(){var n=this,l=new i.d;l.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihuv3/home_work","len="+this.items.length,{headers:l}).subscribe(function(l){n._refresher&&n._refresher.complete(),console.log(l.json()),n.items=n.items.concat(l.json())})},n.prototype.doRefresh=function(n){this.items=[],this.getdata(),this._refresher=n},n.prototype.doInfinite=function(n){this.getdata(),setTimeout(function(){n.complete()},1500)},n.prototype.open=function(n){this.rootNavCtrl.push("OpenWorkPage",{_id:n})},n}(),_=function(){return function(){}}(),a=t(10),s=t(76),c=t(99),h=t(138),p=t(139),f=t(43),d=t(18),m=t(1),g=t(3),b=t(5),v=t(4),w=t(13),y=t(7),k=t(11),M=t(45),O=t(8),P=t(141),I=t(55),j=t(44),F=t(142),N=t(54),C=t(42),R=[],x=o._10({encapsulation:2,styles:R,data:{}}),L=o._9("page-home-work",r,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"page-home-work",[],null,null,null,u,x)),o._11(49152,null,0,r,[k.a,C.a,i.e],null,null)],null,null)},{},{},[]),z=t(52);t.d(l,"HomeWorkPageModuleNgFactory",function(){return B});var W=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),A=function(n){function l(l){return n.call(this,l,[h.a,p.a,L],[])||this}return W(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new a.j(this.parent.get(o.x))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new s.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new s.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new a.b,this._ɵba_1=new s.j,this._FormsModule_2=new s.d,this._ReactiveFormsModule_3=new s.i,this._IonicModule_4=new c.a,this._IonicPageModule_5=new c.b,this._HomeWorkPageModule_6=new _,this._LAZY_LOADED_TOKEN_10=r,this._HomeWorkPageModule_6},l.prototype.getInternal=function(n,l){return n===a.b?this._CommonModule_0:n===s.j?this._ɵba_1:n===s.d?this._FormsModule_2:n===s.i?this._ReactiveFormsModule_3:n===c.a?this._IonicModule_4:n===c.b?this._IonicPageModule_5:n===_?this._HomeWorkPageModule_6:n===a.k?this._NgLocalization_7:n===s.k?this._ɵi_8:n===s.c?this._FormBuilder_9:n===z.a?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(o._7),B=new o.z(A,_)}});