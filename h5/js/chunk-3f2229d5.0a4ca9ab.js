(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2229d5"],{"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),o=r("17c2"),i=r("9112");for(var c in n){var s=a[c],l=s&&s.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),o=n("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1f51":function(t,e,r){"use strict";r("8eb4")},"2ec3":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"all"},[r("ul",[r("li",[r("div",{staticClass:"select"},[r("div",{staticClass:"select_title",on:{click:function(e){t.majorShow=!0}}},[r("p",[t._v(t._s(t.majorType))]),r("i")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.majorShow,expression:"majorShow"}],staticClass:"select_main"},[r("ul",t._l(t.array,(function(e,a){return r("li",{key:a,on:{click:function(r){return t.select(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])]),r("li",[r("button",{staticClass:"submit",on:{click:t.srot}},[t._v("确定")])])]),r("table",[t._m(0),r("tbody",t._l(t.all,(function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(a+1))]),r("td",[t._v(t._s(e.majorType))]),r("td",[t._v(t._s(e.politics))]),r("td",[t._v(t._s(e.english))]),r("td",[t._v(t._s(e.majorOne))]),r("td",[t._v(t._s(e.majorTwo))]),r("td",[t._v(t._s(e.totale))])])})),0)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("序号")]),r("th",[t._v("专业")]),r("th",[t._v("政治")]),r("th",[t._v("英语")]),r("th",[t._v("专业一")]),r("th",[t._v("专业二")]),r("th",[t._v("总分")])])])}],o=(r("159b"),r("a9e3"),{data:function(){return{all:[],array:["经济法","民法","商法","刑法","刑诉","环资","国经","国私","国公","人工智能法","宪行","法理学","民诉","知产","法制史","人权法","侦查学"],majorType:"请选择报考专业",majorShow:!1,allData:""}},mounted:function(){var t=JSON.parse(localStorage.getItem("all"));this.$store.state.all||t?this.getData():this.$router.push("login")},methods:{select:function(t){this.majorType=t,this.majorShow=!1},srot:function(){var t=this;this.all=[],this.allData.forEach((function(e,r){if(e.majorType==t.majorType){var a=e;a.totale=t.total(e),t.all.push(a)}r==t.allData.length-1&&t.all.sort((function(t,e){return e.totale-t.totale}))}))},getData:function(){var t=this;this.axios.get("/customer/list",{params:{limit:2e3,page:1}}).then((function(e){if("0"==e.code){t.allData=JSON.parse(JSON.stringify(e.data));var r=[];e.data.forEach((function(a,n){var o=a;o.totale=t.total(a),r.push(o),n==e.data.length-1&&(t.all=r.sort((function(t,e){return e.totale-t.totale})))}))}else confirm("遇到未知错误,请联系管理员!")}))},total:function(t){return Number(t.politics)+Number(t.english)+Number(t.majorOne)+Number(t.majorTwo)}},beforeRouteLeave:function(t,e,r){localStorage.removeItem("all"),r()}}),i=o,c=(r("1f51"),r("2877")),s=Object(c["a"])(i,a,n,!1,null,null,null);e["default"]=s.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),o="["+n+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var o,i;return n&&"function"==typeof(o=e.constructor)&&o!==r&&a(i=o.prototype)&&i!==r.prototype&&n(t,i),t}},"8eb4":function(t,e,r){},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),o=r("94ca"),i=r("6eeb"),c=r("5135"),s=r("c6b6"),l=r("7156"),u=r("c04e"),f=r("d039"),h=r("7c73"),v=r("241c").f,p=r("06cf").f,d=r("9bf2").f,_=r("58a8").trim,m="Number",b=n[m],g=b.prototype,N=s(h(g))==m,E=function(t){var e,r,a,n,o,i,c,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=_(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(o=l.slice(2),i=o.length,c=0;c<i;c++)if(s=o.charCodeAt(c),s<48||s>n)return NaN;return parseInt(o,a)}return+l};if(o(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(N?f((function(){g.valueOf.call(r)})):s(r)!=m)?l(new b(E(e)),r,w):E(e)},y=a?v(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;y.length>S;S++)c(b,I=y[S])&&!c(w,I)&&d(w,I,p(b,I));w.prototype=g,g.constructor=w,i(n,m,w)}},b727:function(t,e,r){var a=r("0366"),n=r("44ad"),o=r("7b0b"),i=r("50c4"),c=r("65f0"),s=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,h=7==t,v=5==t||f;return function(p,d,_,m){for(var b,g,N=o(p),E=n(N),I=a(d,_,3),w=i(E.length),y=0,S=m||c,j=e?S(p,w):r||h?S(p,0):void 0;w>y;y++)if((v||y in E)&&(b=E[y],g=I(b,y,N),t))if(e)j[y]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return y;case 2:s.call(j,b)}else switch(t){case 4:return!1;case 7:s.call(j,b)}return f?-1:l||u?u:j}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}}}]);