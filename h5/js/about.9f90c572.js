(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"159b":function(t,r,a){var e=a("da84"),n=a("fdbc"),s=a("17c2"),o=a("9112");for(var i in n){var c=e[i],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,r,a){"use strict";var e=a("b727").forEach,n=a("a640"),s=n("forEach");t.exports=s?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"480c":function(t,r,a){},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,a){var e=a("1d80"),n=a("5899"),s="["+n+"]",o=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(t){return function(r){var a=String(e(r));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,r,a){var e=a("861d"),n=a("d2bb");t.exports=function(t,r,a){var s,o;return n&&"function"==typeof(s=r.constructor)&&s!==a&&e(o=s.prototype)&&o!==a.prototype&&n(t,o),t}},"7b55":function(t,r,a){"use strict";a("480c")},"84a6":function(t,r,a){"use strict";a.r(r);var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"home"},[a("header",[t._v("成绩排名")]),a("ul",{staticClass:"message"},[t._m(0),t._m(1),a("li",[a("label",{attrs:{for:""}},[t._v("报考专业:")]),a("span",[t._v(t._s(t.numberData.majorType))])])]),a("ul",{staticClass:"number"},[a("li",[a("label",{attrs:{for:""}},[t._v("政治:")]),a("span",[t._v(t._s(t.numberData.politics))])]),a("li",[a("label",{attrs:{for:""}},[t._v("英语:")]),a("span",[t._v(t._s(t.numberData.english))])]),a("li",[a("label",{attrs:{for:""}},[t._v("专业一:")]),a("span",[t._v(t._s(t.numberData.majorOne))])]),a("li",[a("label",{attrs:{for:""}},[t._v("专业二:")]),a("span",[t._v(t._s(t.numberData.majorTwo))])]),a("li",[a("label",{attrs:{for:""}},[t._v("总成绩:")]),a("span",[t._v(t._s(t.total))])])]),a("div",{staticClass:"sort"},[a("div",{staticClass:"srot_title"},[t._v("您的总成绩目前在本院校本专业的排位为:")]),a("div",{staticClass:"sort_number"},[a("h1",[t._v(t._s(t.Ranking))]),a("span",[t._v("/"+t._s(t.totlaNumber)+"名")])])])])},n=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("li",[a("label",{attrs:{for:""}},[t._v("报考学校:")]),a("span",[t._v("西南政法大学")])])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("li",[a("label",{attrs:{for:""}},[t._v("报考学校:")]),a("span",[t._v("学术型硕士")])])}],s=(a("a9e3"),a("159b"),{data:function(){return{numberData:"",total:"",Ranking:"",totlaNumber:""}},mounted:function(){var t=this;this.$store.state.sort?this.axios.get("/customer/list",{params:{limit:2e3,page:1}}).then((function(r){var a=r.data.length;t.numberData=r.data[a-1];var e=r.data[a-1].majorType;t.total=Number(r.data[a-1].politics)+Number(r.data[a-1].english)+Number(r.data[a-1].majorOne)+Number(r.data[a-1].majorTwo);var n=[];r.data.forEach((function(t){if(t.majorType==e){var r="";r=Number(t.politics)+Number(t.english)+Number(t.majorOne)+Number(t.majorTwo),n.push(r)}})),n=n.sort((function(t,r){return r-t})),t.totlaNumber=n.length,t.Ranking=n.indexOf(t.total)+1})):this.$router.push("/")}}),o=s,i=(a("7b55"),a("2877")),c=Object(i["a"])(o,e,n,!1,null,null,null);r["default"]=c.exports},a640:function(t,r,a){"use strict";var e=a("d039");t.exports=function(t,r){var a=[][t];return!!a&&e((function(){a.call(null,r||function(){throw 1},1)}))}},a9e3:function(t,r,a){"use strict";var e=a("83ab"),n=a("da84"),s=a("94ca"),o=a("6eeb"),i=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),f=a("d039"),v=a("7c73"),p=a("241c").f,b=a("06cf").f,m=a("9bf2").f,_=a("58a8").trim,h="Number",d=n[h],N=d.prototype,g=c(v(N))==h,E=function(t){var r,a,e,n,s,o,i,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=_(u),r=u.charCodeAt(0),43===r||45===r){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(u.charCodeAt(1)){case 66:case 98:e=2,n=49;break;case 79:case 111:e=8,n=55;break;default:return+u}for(s=u.slice(2),o=s.length,i=0;i<o;i++)if(c=s.charCodeAt(i),c<48||c>n)return NaN;return parseInt(s,e)}return+u};if(s(h,!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var I,w=function(t){var r=arguments.length<1?0:t,a=this;return a instanceof w&&(g?f((function(){N.valueOf.call(a)})):c(a)!=h)?u(new d(E(r)),a,w):E(r)},x=e?p(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;x.length>y;y++)i(d,I=x[y])&&!i(w,I)&&m(w,I,b(d,I));w.prototype=N,N.constructor=w,o(n,h,w)}},b727:function(t,r,a){var e=a("0366"),n=a("44ad"),s=a("7b0b"),o=a("50c4"),i=a("65f0"),c=[].push,u=function(t){var r=1==t,a=2==t,u=3==t,l=4==t,f=6==t,v=7==t,p=5==t||f;return function(b,m,_,h){for(var d,N,g=s(b),E=n(g),I=e(m,_,3),w=o(E.length),x=0,y=h||i,T=r?y(b,w):a||v?y(b,0):void 0;w>x;x++)if((p||x in E)&&(d=E[x],N=I(d,x,g),t))if(r)T[x]=N;else if(N)switch(t){case 3:return!0;case 5:return d;case 6:return x;case 2:c.call(T,d)}else switch(t){case 4:return!1;case 7:c.call(T,d)}return f?-1:u||l?l:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}}}]);