(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0269":function(t,e,i){"use strict";var n=i("925b"),s=i.n(n);s.a},"0707":function(t,e,i){"use strict";var n=i("5292"),s=i.n(n);s.a},"3eb3":function(t,e,i){},"4a96":function(t,e,i){},5292:function(t,e,i){},"52e4":function(t,e,i){"use strict";var n=i("4a96"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Calculator",{on:{height_changed:t.onresize}})],1)},a=[],r=function(){var t=this,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"container"},[n("known-dimensions-block",{staticClass:"main-box",on:{dimensions_changed:function(e){return t.box_dimensions=e}}},[e.box_dimensions?n("div",{staticClass:"background"},[n("p",{staticClass:"caption",staticStyle:{left:"-5em",top:"0"}},[e._v("Тест +")]),n("p",{staticClass:"caption",staticStyle:{left:"-5em",bottom:"-100%"}},[e._v("Тест -")]),n("p",{staticClass:"caption",staticStyle:{left:"0",top:"110%"}},[e._v("Covid (prior)")]),n("p",{staticClass:"caption",staticStyle:{right:"0",top:"110%"}},[e._v("Не Covid (prior)")]),n("div",{staticClass:"left",style:{width:e.left+"px"}},[n("draggable-horizontal-line",{attrs:{top:e.top1},on:{change:function(t){return e.top1=t}}})],1),n("div",{staticClass:"right"},[n("draggable-horizontal-line",{attrs:{top:e.top2},on:{change:function(t){return e.top2=t}}})],1)]):e._e(),n("draggable-vertical-line",{attrs:{left:e.left},on:{change:function(t){return e.left=t}}})],1),e._v(" "+e._s(e.box_dimensions)+" "+e._s(e.left)+" ")],1)},o=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"line",staticClass:"line",style:{left:this.left+"px"}},[i("div",{staticClass:"handle"}),i("p",[t._v(t._s(t.p(t.left/400)))])])},c=[],u=i("abe9"),p=i("fd32"),d=i("ad68"),h={props:["left"],mounted:function(){var t=this.$refs.line;console.log(t),this.drag=u["a"](),this.drag.on("drag",this.dragged),p["a"](t).call(this.drag)},methods:{dragged:function(t){this.$emit("change",t.x)},dragstart:function(t){},p:d["a"](".0%")}},f=h,_=(i("86cf"),i("2877")),v=Object(_["a"])(f,l,c,!1,null,"6e9e436e",null),g=v.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"line",staticClass:"line",style:{top:this.top+"px"}},[i("div",{staticClass:"handle"}),i("p",[t._v(t._s(t.p(t.top/400)))])])},y=[],b={mounted:function(){var t=this.$refs.line;this.drag=u["a"](),this.drag.on("drag",this.dragged),p["a"](t).call(this.drag)},props:["top"],methods:{dragged:function(t){this.$emit("change",t.y)},dragstart:function(t){},p:d["a"](".0%")}},x=b,w=(i("0269"),Object(_["a"])(x,m,y,!1,null,"279ba755",null)),C=w.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"known-dimensions-block"},[t._t("default")],2)},k=[],j={name:"known-dimensions-block",data:function(){return{d:{height:0,width:0,left:0,top:0}}},mounted:function(){this.$nextTick((function(){this.onresize(),window.addEventListener("resize",this.onresize)}))},destroyed:function(){window.removeEventListener("resize",this.onresize)},methods:{onresize:function(t){this.d.height=this.$el.offsetHeight,this.d.width=this.$el.offsetWidth,this.d.left=this.$el.offsetLeft,this.d.top=this.$el.offsetTop}},watch:{d:{handler:function(t){this.$emit("dimensions_changed",this.d)},deep:!0}}},O=j,z=Object(_["a"])(O,$,k,!1,null,null,null),E=z.exports,M={mounted:function(){},data:function(){return{sensitivity:.65,specificity:.95,prior:.4,box_dimensions:null,width:400,height:400,p:d["a"](".0%")}},computed:{top1:{get:function(){return this.sensitivity*this.height},set:function(t){console.log(t),this.sensitivity=t/this.height}},top2:{get:function(){return this.specificity*this.height},set:function(t){this.specificity=t/this.height}},left:{get:function(){return this.prior*this.width},set:function(t){this.prior=t/this.width}}},components:{DraggableVerticalLine:g,DraggableHorizontalLine:C,KnownDimensionsBlock:E}},S=M,P=(i("0707"),Object(_["a"])(S,r,o,!1,null,"82ba1546",null)),L=(P.exports,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"main-box"},[i("p",{staticClass:"row middle-content"},[i("span",[t._v("100 людей.")]),t.show_infection_rate?i("span",[t._v(" Відсоток захворюваності "),t.pre_test_readonly?i("span",[t._v(" "+t._s(t.pre_test_p)+"%")]):i("adjustable-number",{attrs:{value:t.pre_test_p},on:{"update:value":function(e){t.pre_test_p=e}},scopedSlots:t._u([{key:"post_text",fn:function(){return[t._v(" %")]},proxy:!0}],null,!1,2558973826)})],1):t._e(),i("br"),Number.isInteger(t.day_after_exposure)?i("span",[t._v(" ПЛР тест зроблений на "),i("adjustable-number",{attrs:{id:"day-after-exposure-an",value:t.day_after_exposure,min:0,max:20,tooltip_fixed:!1},on:{"update:value":function(e){t.day_after_exposure=e}},scopedSlots:t._u([{key:"post_text",fn:function(){return[t._v("-ий")]},proxy:!0}],null,!1,2663421259)}),i("span",{staticClass:"pre"},[t._v(" день після контакту із вірусом. ")])],1):t._e(),t.show_sensitivity?i("span",[t._v("(чутливість: ~"+t._s(t.pf(t.sensitivity))+") ")]):t._e(),i("br"),t.show_specificity?i("span",[t._v("(специфічність: ~"+t._s(t.pf(t.specificity))+") ")]):t._e()]),i("div",{staticClass:"legend row"},[i("div",{class:"split "+(t.split?"active":"middle-content")},[i("div",{staticClass:"microbox"},[t.all_p?i("p",[i("human",{staticClass:"human ill"}),t._v(" "),i("span",[t._v(" "+t._s(t.pre_test_p)+" людей хворі на ковід")])],1):t._e()]),i("div",{staticClass:"microbox"},[t.all_n?i("p",[i("human",{staticClass:"human healthy"}),t._v(" "),i("span",[t._v(" "+t._s(100-t.pre_test_p)+" здорових людей ")])],1):t._e()])])]),i("div",{class:"people "+(this.tested?"tested":"")},[t.split?i("div",{staticClass:"split active"},[i("div",{staticClass:"microbox"},t._l(t.people.ill,(function(t){return i("human",{key:t.i,class:"human "+(t.covid?"ill":"healthy")+" "+(t.test?"test_positive":"test_negative")})})),1),i("div",{staticClass:"microbox"},t._l(t.people.healthy,(function(t){return i("human",{key:t.i,class:"human "+(t.covid?"ill":"healthy")+" "+(t.test?"test_positive":"test_negative")})})),1)]):i("div",{staticClass:"middle-content"},t._l(t.people.ill.concat(t.people.healthy),(function(t){return i("human",{key:t.i,class:"human "+(t.covid?"ill":"healthy")+" "+(t.test?"test_positive":"test_negative")})})),1)]),t.tested?i("div",{staticClass:"legend row-after tested"},[i("div",{class:"split "+(t.split?"active":"middle-content")},[i("div",{staticClass:"microbox"},[t.tp?i("p",[i("human",{staticClass:"human ill test_positive"}),t._v(" "),i("span",[t._v(" "+t._s(t.true_positive_p)+' хворих на ковід, яких тест визначив правильно як "позитивних" (істинно позитивний результат) ')])],1):t._e(),t.fn?i("p",[i("human",{staticClass:"human ill test_negative"}),t._v(" "),i("span",[t._v(" "+t._s(t.false_negative_p)+" хворих на ковід із негативним тестом (хибно негативний результат) ")])],1):t._e()]),i("div",{staticClass:"microbox"},[t.tn?i("p",[i("human",{staticClass:"human healthy test_negative"}),t._v(" "),i("span",[t._v(" "+t._s(t.true_negative_p)+" не хворих на ковід з негативним тестом (істинно негативних) ")])],1):t._e(),t.fp?i("p",[i("human",{staticClass:"human healthy test_positive"}),t._v(" "),i("span",[t._v(" "+t._s(t.false_positive_p)+' не хворих, яких тест помилково визначив як "позитивних" (хибно позитивний результат) ')])],1):t._e()])])]):t._e(),t.show_btn?i("div",{staticClass:"row-after"},[i("button",{on:{click:function(){return t.tested=!t.tested}}},[t._v(t._s(this.tested?"Скинути":"Тестувати за допомогою ПЦР!"))])]):t._e()])])}),N=[],T=(i("4160"),i("d81d"),i("4ec9"),i("a9e3"),i("8ba4"),i("d3b7"),i("ac1f"),i("3ca3"),i("841c"),i("159b"),i("ddb0"),i("2b3d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{height:"44px",width:"20px",fill:"#000000",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"20 14 10 22","enable-background":"new 0 0 50 50","xml:space":"preserve"}},[i("polygon",{attrs:{points:"20,28 22,28 22,35 28,35 28,28 30,28 30,21 20,21 "}}),i("rect",{attrs:{x:"23",y:"15",width:"4",height:"4"}})])}),H=[],B={},D=Object(_["a"])(B,T,H,!1,null,null,null),I=D.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"adjustable-number"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"value",modifiers:{number:!0}}],attrs:{type:"number",max:t.max,min:t.min,step:t.step,hidden:"true"},domProps:{value:t.value},on:{change:function(e){return t.$emit("update:value",t.value)},input:function(e){e.target.composing||(t.value=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("span",{ref:"draggable",staticClass:"adjustable-number-span"},[t._v(t._s(t.value)),t._t("post_text")],2),i("span",{class:"hint "+(t.tooltip_fixed?"fixed":"")},[t._v(" тягни! ")])])},U=[],A={props:{value:Number,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},tooltip_fixed:{type:Boolean,default:!0}},data:function(){return{domain:450,dragging:!1}},mounted:function(){var t=this.$refs.draggable;this.drag=u["a"](),this.drag.on("drag",this.dragged).on("start",this.dragstart).on("end",this.dragend),p["a"](t).call(this.drag)},methods:{dragged:function(t){var e=this.max-this.min,i=e/this.domain,n=this.start_v+Math.round((t.x-this.start_x)*i);n=Math.max(Math.min(n,this.max),this.min),this.$emit("update:value",n)},dragstart:function(t){this.tooltip_fixed=!1,this.dragging=!0,this.$refs.draggable.setPointerCapture(t.identifier),this.start_x=t.x,this.start_v=this.value},dragend:function(t){this.dragging=!1,this.$refs.draggable.releasePointerCapture(t.identifier)}}},K=A,R=(i("52e4"),Object(_["a"])(K,J,U,!1,null,"5187cd27",null)),V=R.exports,W=i("d78a"),q=i.n(W);q.a.forEach((function(t){t.sensitivity=1-t.antisensitivity}));var F=new Map(q.a.map((function(t){return[t.day,t.sensitivity]}))),G={created:function(){var t=window.location.search;this.params=new URLSearchParams(t)},mounted:function(){for(var t=this,e=0,i=["pre_test_p","pre_test_readonly","tp","tn","fp","fn","all_p","all_n","sensitivity_default","specificity","tested","split","show_btn","show_sensitivity","show_specificity","day_after_exposure"];e<i.length;e++){var n=i[e];s(n)}function s(e){var i=t.params.get(e);i&&(t[e]=+i)}},data:function(){return{pre_test_p:80,sensitivity_default:.7,specificity:.97,day_after_exposure:5,tested:!0,split:!0,show_infection_rate:!0,show_sensitivity:!1,show_specificity:!1,show_btn:!1,pre_test_readonly:!1,all_p:!0,all_n:!0,tp:!0,tn:!0,fp:!0,fn:!0,pf:d["a"](".0%")}},computed:{sensitivity:function(){return Number.isInteger(this.day_after_exposure)?F.get(this.day_after_exposure):this.sensitivity_default},people:function(){for(var t=0,e=[],i=0;i<this.pre_test_p;i++)e.push({key:t,covid:!0,test:i<this.true_positive_p}),t++;for(var n=[],s=0;s<100-this.pre_test_p;s++)n.push({key:t,covid:!1,test:!(s<Math.round((1-this.pre_test)*this.specificity*100))}),t++;return{ill:e,healthy:n}},pre_test:function(){return this.pre_test_p/100},true_positive_p:function(){return Math.round(this.pre_test*this.sensitivity*100)},false_negative_p:function(){return this.pre_test_p-this.true_positive_p},true_negative_p:function(){return Math.round((100-this.pre_test_p)*this.specificity)},false_positive_p:function(){return 100-this.pre_test_p-this.true_negative_p}},watch:{tested:function(t){this.$emit("height_changed")}},components:{Human:I,AdjustableNumber:V}},Q=G,X=(i("a064"),i("fc6c"),Object(_["a"])(Q,L,N,!1,null,"59d3119d",null)),Y=X.exports,Z={name:"app",data:function(){return{height:200}},components:{Calculator:Y},mounted:function(){this.$nextTick((function(){this.onresize(),window.addEventListener("resize",this.onresize)}))},destroyed:function(){window.removeEventListener("resize",this.onresize)},methods:{onresize:function(t){this.$nextTick((function(){this.height=document.documentElement.offsetHeight}))}},watch:{height:{handler:function(t){console.log(this.height),window.parent.postMessage(this.height,"*")}}}},tt=Z,et=(i("5c0b"),Object(_["a"])(tt,s,a,!1,null,null,null)),it=et.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(it)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"86cf":function(t,e,i){"use strict";var n=i("9017"),s=i.n(n);s.a},9017:function(t,e,i){},"925b":function(t,e,i){},"9c0c":function(t,e,i){},a064:function(t,e,i){"use strict";var n=i("cf1d"),s=i.n(n);s.a},cf1d:function(t,e,i){},d78a:function(t,e){t.exports=[{day:0,antisensitivity:1},{day:1,antisensitivity:.9952941176470589},{day:2,antisensitivity:.9717647058823529},{day:3,antisensitivity:.68},{day:4,antisensitivity:.3788235294117647},{day:5,antisensitivity:.2517647058823529},{day:6,antisensitivity:.2164705882352941},{day:7,antisensitivity:.20705882352941177},{day:8,antisensitivity:.21411764705882352},{day:9,antisensitivity:.2376470588235294},{day:10,antisensitivity:.2635294117647059},{day:11,antisensitivity:.30588235294117644},{day:12,antisensitivity:.34823529411764703},{day:13,antisensitivity:.3905882352941177},{day:14,antisensitivity:.4352941176470588},{day:15,antisensitivity:.48235294117647054},{day:16,antisensitivity:.5247058823529411},{day:17,antisensitivity:.5623529411764705},{day:18,antisensitivity:.5976470588235294},{day:19,antisensitivity:.6376470588235295},{day:20,antisensitivity:.6658823529411765}]},fc6c:function(t,e,i){"use strict";var n=i("3eb3"),s=i.n(n);s.a}});
//# sourceMappingURL=app.e6bbbd0d.js.map