(this["webpackJsonpqieyun-autoderiver"]=this["webpackJsonpqieyun-autoderiver"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),s=n(21),a=n.n(s),c=(n(58),n(59),n(34)),o=n(29),l=n(6),u=n(14),p=n(15),h=n(17),d=n(16),j=n(31),f=n(4),b=n(5),m=n(49),g=n.n(m);n(65);var v={init:function(){var e=document.createElement("div");e.classList.add("large-tooltip-outer");var t=document.createElement("div");return t.classList.add("large-tooltip-inner"),e.appendChild(t),t.classList.add("large-tooltip-hidden"),document.body.appendChild(e),{addTooltip:function(e,n){function r(){var r=n.getBoundingClientRect(),i=r.top+window.pageYOffset,s=r.left+window.pageXOffset;a.a.render(e,t);var c=t.getBoundingClientRect(),o=c.height,l=c.width,u=i-o,p=s-l/2,h=parseFloat(getComputedStyle(document.body).fontSize);p=p<h?h:p;var d=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)-h-l;p=p>d?d:p,t.style.top=u+"px",t.style.left=p+"px",t.classList.remove("large-tooltip-hidden")}function i(){t.classList.add("large-tooltip-hidden")}n.addEventListener("mouseenter",r,!1),n.addEventListener("touchstart",r,!1),n.addEventListener("mouseleave",i,!1),n.addEventListener("touchend",i,!1)}}}},O=n(0),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(u.a)(this,n);var i=(r=t.call(this,e)).props,s=i.entries,a=i.preselect,c=null!==a&&void 0!==a?a:0;return s.length&&(r.state={rubyClass:s[c][1].some((function(e){return!e.解釋}))?"entry-special":1===s.length?"":null==a?"entry-unresolved":"entry-multiple",selected:c}),r}return Object(p.a)(n,[{key:"handleClick",value:function(e){var t=this;this.props.entries.length>=2&&this.setState((function(n){return{selected:e,rubyClass:t.props.entries[e][1].some((function(e){return!e.解釋}))?"entry-special":"entry-multiple"}}))}},{key:"render",value:function(){var e=this;if(!this.props.entries.length)return Object(O.jsx)(O.Fragment,{children:this.props.ch});var t=Object(O.jsx)("div",{className:"tooltip-items-wrapper",children:this.props.entries.map((function(t,n){var r=Object(l.a)(t,2),s=r[0],a=r[1];return Object(O.jsxs)("p",{className:"tooltip-item"+(e.props.entries.length>1&&n===e.state.selected?" selected":""),onClick:function(){return e.handleClick(n)},children:[Object(O.jsx)("span",{className:"nowrap",lang:"och-Latn-fonipa",children:s.join(" / ")})," ",a.map((function(e,t){var n=e.字頭,r=e.解釋,s=e.音韻地位,a=e.反切;return a=null==a?"":"".concat(a,"切 "),Object(O.jsxs)(i.a.Fragment,{children:[0!==t&&Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"tooltip-ch",children:n})," ",s.描述," ",a+r]},t)}))]},n)}))});return Object(O.jsx)("span",{className:"ruby-wrapper",ref:function(n){return n&&e.props.tooltip.addTooltip(t,n)},children:Object(O.jsxs)("ruby",{className:this.state.rubyClass,children:[this.props.ch,Object(O.jsx)("rp",{children:"("}),Object(O.jsx)("rt",{lang:"och-Latn-fonipa",children:U(this.props.entries[this.state.selected][0])}),Object(O.jsx)("rp",{children:")"})]})})}}]),n}(i.a.Component),y=n(3),S=n(50),C=n(51),k=(n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(1)),w=n(7),N=n.n(w),A=n(52),F=n.n(A),T=n(53),I=n.n(T);window.JSHINT=C.JSHINT;var L=f["音韻地位"].from描述("幫三凡入"),P=Object.getOwnPropertyNames(L).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(L)).slice(1)),B=["音韻地位","字頭"],E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(u.a)(this,n);var i=(r=t.call(this,e)).getNewSettings(e.input);return i&&e.setSchemaState(Object(y.a)(Object(y.a)({},e),{},{settings:i})),r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.loadSchema()}},{key:"autocomplete",value:function(e,t){if(null!==this&&void 0!==this&&this.props.autocomplete){var n,r=e.getCursor(),i=e.getTokenAt(r),s=Object(k.Pos)(r.line,i.start),a=Object(k.Pos)(r.line,i.end),c=function(){return n=n.filter((function(e){return e.startsWith(i.string)&&e!==i.string}))};switch(e.getTokenAt(Object(k.Pos)(r.line,i.start-1)).string){case"音韻地位":n=P;break;case"選項":n=Object.keys(this.props.settings.預設選項);break;default:return n=B.concat(this.props.settings.項目數?["選項"]:[]),r.ch===i.end&&/[\s!-#%-/:-@[-^`{-~]$/.test(i.string)?s=a:c(),{list:n,from:s,to:a}}if("."===i.string)s=a;else{if("."!==e.getTokenAt(s).string)return;c()}return{list:n,from:s,to:a}}}},{key:"loadSchema",value:function(e){var t=this;e&&e.preventDefault(),Y("https://cdn.jsdelivr.net/gh/nk2028/qieyun-examples@qieyun-0.13/".concat(this.props.name,".js"),(function(n){if(e&&t.props.input&&t.props.input!==t.props.original)N.a.fire({showClass:{popup:""},hideClass:{popup:""},title:"是否確定載入？",text:"您會遺失所有變更。",icon:"warning",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(e){var r;e.isConfirmed&&t.props.setSchemaState(Object(y.a)(Object(y.a)({},t.props),{},{input:n,original:n,settings:null!==(r=t.getNewSettings(n,new b["推導選項"]))&&void 0!==r?r:new b["推導選項"]}))}));else{var r,i=Object(y.a)(Object(y.a)({},t.props),{},{original:n});if(e||!t.props.input)i.input=n,i.settings=null!==(r=t.getNewSettings(n,new b["推導選項"]))&&void 0!==r?r:new b["推導選項"];t.props.setSchemaState(i)}}))}},{key:"changeSchema",value:function(e){this.props.setSchemaState(Object(y.a)(Object(y.a)({},this.props),{},{name:e.target.value}))}},{key:"deleteSchema",value:function(){var e=this;this.props.input&&this.props.input!==this.props.original?N.a.fire({showClass:{popup:""},hideClass:{popup:""},title:"是否確定刪除？",text:"您會遺失所有變更。",icon:"warning",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(t){t.isConfirmed&&e.props.deleteSchema(e.props)})):this.props.deleteSchema(this.props)}},{key:"getNewSettings",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.settings,r=n.預設選項;try{t=new b["推導方案"](new Function("Qieyun","選項","音韻地位","字頭",e).bind(null,f)).方案選項(r)}catch(i){return null}return t.combine(n)}},{key:"resetParameters",value:function(){var e;this.props.setSchemaState(Object(y.a)(Object(y.a)({},this.props),{},{settings:null!==(e=this.getNewSettings(this.props.input,new b["推導選項"]))&&void 0!==e?e:new b["推導選項"]}))}},{key:"render",value:function(){var e=this,t=function(t,n){var r;e.props.setSchemaState(Object(y.a)(Object(y.a)({},e.props),{},{settings:null!==(r=e.getNewSettings(e.props.input,e.props.settings.set(t,n)))&&void 0!==r?r:new b["推導選項"]}))},n=this.props.settings.列表.map((function(e,n){if(!Array.isArray(e)||e.length<2)return e?Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsxs)("b",{children:["〔",String(e),"〕"]})]},n):Object(O.jsx)("br",{},n);var i=Object(l.a)(e,2),s=i[0],a=i[1];if(Array.isArray(a))return Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{className:"select-label",children:s}),Object(O.jsx)("select",{onChange:function(e){return t(s,JSON.parse(e.target.value))},value:JSON.stringify(a[0]),children:a.slice(1).map((function(e,t){return Object(O.jsx)("option",{value:JSON.stringify(e),children:e+""},t+1)}))})]},n);switch(typeof a){case"boolean":return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",checked:a,onChange:function(e){return t(s,e.target.checked)}}),s]},n);case"number":return Object(O.jsxs)("label",{children:[s,Object(O.jsx)("input",{type:"number",value:a,step:"any",onChange:function(e){return t(s,+e.target.value)}})]},n);case"string":return Object(O.jsxs)("label",{children:[s,Object(O.jsx)("input",{type:"text",value:a,onChange:function(e){return t(s,e.target.value)}})]},n);default:return null}})).filter((function(e){return e}));return n.push(n.length?Object(O.jsx)("input",{className:"pure-button",type:"button",value:"恢復預設值",onClick:function(){return e.resetParameters()}},"reset"):Object(O.jsx)("span",{className:"hint",children:"此推導方案無可用選項，請於推導程式中回傳 Object.entries() 形式的陣列以使用「選項」功能。"},"hint")),Object(O.jsxs)("div",{className:"schema-editor",children:[Object(O.jsx)("form",{className:"delete-schema",children:Object(O.jsx)("input",{type:"button",title:"刪除方案",disabled:this.props.single,onClick:function(){return e.deleteSchema()}})}),Object(O.jsx)("form",{className:"pure-form",onSubmit:function(t){return e.loadSchema(t)},children:Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"預設推導方案："}),Object.entries(K).map((function(t,n){var r=Object(l.a)(t,2),i=r[0],s=r[1];return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"schema",value:i,checked:e.props.name===i,onChange:function(t){return e.changeSchema(t)}}),s]},n)})),Object(O.jsx)("input",{className:"pure-button",type:"submit",value:"載入"})]})}),Object(O.jsx)("div",{lang:"en-x-code",id:"schemaInput",children:Object(O.jsx)(S.Controlled,{value:this.props.input,options:{mode:"javascript",lineNumbers:!0,scrollbarStyle:"overlay",extraKeys:{F11:function(e){return e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){return e.setOption("fullScreen",!1)},F9:function(e){var t=e.getCursor(),n=e.getScrollInfo(),r=n.left,i=n.top,s=e.lineAtHeight(i,"local"),a=i-e.heightAtLine(s,"local"),c=F.a.formatWithCursor(e.getValue(),{cursorOffset:e.indexFromPos(t),parser:"babel",plugins:[I.a]}),o=c.formatted,l=c.cursorOffset;e.setValue(o);var u=e.posFromIndex(l);e.scrollTo(r,e.heightAtLine(u.line-t.line+s,"local")+a),e.setCursor(u)}},maxHighlightLength:1/0,viewportMargin:16,placeholder:"以 JavaScript 輸入推導方案……",styleActiveLine:!0,autoCloseBrackets:!0,matchBrackets:!0,foldGutter:!0,lint:{esversion:1/0},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],hintOptions:{hint:this.autocomplete.bind(this),completeSingle:!1}},onBeforeChange:function(t,n,r){var i=Object(y.a)(Object(y.a)({},e.props),{},{input:r}),s=e.getNewSettings(r);s&&(i.settings=s),e.props.setSchemaState(i)},onCursorActivity:function(e){return e.hasFocus()&&e.showHint()},onFocus:function(e){return setTimeout((function(){return e.showHint()}),100)}})}),Object(O.jsx)("form",{className:"pure-form",children:Object(O.jsxs)("p",{className:"schema-settings",children:[Object(O.jsx)("b",{children:"選項："}),n]})})]})}}]),n}(i.a.Component),J=E,q=n(30),M=n.n(q),V=f["資料"].query字頭,W=f["資料"].iter音韻地位,_=f["資料"].query音韻地位;var D=M()(N.a);function H(e,t){var n=null;if(void 0!==t){var r;if(!(t instanceof Error))throw t;for(n=t.message;t.cause instanceof Error;)n+="\n"+(t=t.cause).message;null!==(r=t)&&void 0!==r&&r.stack&&(n+="\n"+t.stack.replace(/\n +at eval[^]+/,""))}var i={showClass:{popup:""},hideClass:{popup:""},icon:"error",title:"錯誤",customClass:"error-with-stack",html:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:e}),Object(O.jsx)("pre",{lang:"en-x-code",children:n})]}),confirmButtonText:"確定"};null!==n?(i.html=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:e}),Object(O.jsx)("pre",{lang:"en-x-code",children:n})]}),i.customClass="error-with-stack"):i.text=e,D.fire(i)}function z(){H("瀏覽器不支援匯出至剪貼簿，操作失敗")}function Q(){N.a.fire({showClass:{popup:""},hideClass:{popup:""},icon:"success",title:"成功",text:"已成功匯出至剪貼簿",confirmButtonText:"確定"})}function G(e){var t=document.createElement("textarea");t.value=e,t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?Q():z()}catch(n){z()}document.body.removeChild(t)}var R,K={tupa:"切韻拼音",baxter:"白一平轉寫",blankego:"有女羅馬字",kyonh:"古韻羅馬字",zyepheng:"隋拼",karlgren:"高本漢擬音",wangli:"王力擬音",panwuyun:"潘悟雲擬音",unt:"unt 切韻擬音",msoeg_v8:"msoeg 中古擬音 V8",mid_tang:"推導盛中唐擬音",chiangxhua:"推導《聲音唱和圖》擬音",mongol:"推導《蒙古字韻》",zhongyuan:"推導《中原音韻》擬音",fanwan:"推導《分韻撮要》擬音",putonghua:"推導普通話",gwongzau:"推導廣州音",zaonhe:"推導上海話",langjin:"推導南京話",taibu:"推導大埔話",ngungei:"推導標準吳語",ayaka_v8:"綾香思考音系",yec_en_hua:"不通話"},X={convertArticle:"從輸入框中讀取文章，並注音",convertPresetArticle:"為預設文章注音",exportAllSmallRhymes:"導出所有小韻",exportAllSyllables:"導出所有音節",exportAllSyllablesWithCount:"導出所有音節，並計數"};function Y(e,t){fetch(e).then((function(e){return e.text()})).then(t).catch((function(e){return H("載入檔案失敗",e)}))}function $(){return{name:"tupa",input:"",original:"",settings:new b["推導選項"],id:+new Date}}function U(e){return e.map((function(e,t){return Object(O.jsxs)(i.a.Fragment,{children:[0!==t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{hidden:!0,children:" / "}),Object(O.jsx)("br",{})]}),e]},t)}))}var Z=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(u.a)(this,n),(r=t.call(this,e)).largeTooltip=void 0,r.outputArea=void 0;var i=JSON.parse(localStorage.getItem("autoderiver/0.1/schemas")||"[]"),s=JSON.parse(localStorage.getItem("autoderiver/0.1/inputs")||"[]"),a=JSON.parse(localStorage.getItem("autoderiver/0.1/settings")||"[]");return r.state={schemas:i.length?i.map((function(e,t){return{name:e,input:s[t],original:"",settings:new b["推導選項"](a[t]),id:t}})):[$()],article:localStorage.getItem("autoderiver/0.1/article")||"遙襟甫暢，逸興(曉開三蒸去)遄飛。爽籟發而清風(幫三東平)生(生開三庚平)，纖歌凝(疑開三蒸平)而白雲遏。睢(心合三脂平)園綠竹，氣(溪開三微去)凌彭澤之樽；鄴水朱華(匣合二麻平)，光(見合一唐平)照臨(來開三侵平)川之筆。四美具，二難(泥開一寒平)并(幫三清平)。窮睇(定開四齊去)眄(明四先去)於(影開三魚平)中(知三東平)天，極娛(疑三虞平)遊於(影開三魚平)暇日。天高地迥，覺(見二江入)宇宙之無窮；興(曉開三蒸去)盡(從開三眞上)悲來，識(書開三蒸入)盈虛(曉開三魚平)之有數(生三虞去)。望(明三陽平)長(澄開三陽平)安於(影開三魚平)日下(匣開二麻上)，目吳會(見合一泰去)於(影開三魚平)雲間(見開二山平)。地勢極而南溟(明四青平)深(書開三侵平)，天柱(澄三虞上)高而北辰遠(云合三元上)。關山難(泥開一寒平)越(云合三元入)，誰悲失路之人。萍水相(心開三陽平)逢，盡(從開三眞上)是他鄉之客。懷帝閽而不(幫三尤上)見(見開四先去)，奉宣室以何(匣開一歌平)年？",option:localStorage.getItem("autoderiver/0.1/option")||"convertArticle",convertVariant:"true"===localStorage.getItem("autoderiver/0.1/convertVariant"),autocomplete:"false"!==localStorage.getItem("autoderiver/0.1/autocomplete"),output:[],isApplied:!1},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.largeTooltip=v.init()}},{key:"handlePredefinedOptions",value:function(){var e,t=this,n=+new Date+":",r=this.state.schemas.map((function(e){return e.settings.預設選項})),s=function(t,n){try{return e.map((function(e){return e(t,n)}))}catch(r){throw H(n?"推導「".concat(n,"」字（音韻地位：").concat(t.描述,"）時發生錯誤"):"推導「".concat(t.描述,"」音韻地位（字為 null）時發生錯誤"),r),r}};if("convertPresetArticle"!==this.state.option||R){var a={convertArticle:function(){for(var e=Array.from(t.state.article),r=[],i=function(i){var c,o=e[i],u=i,p=[o,null].concat(g.a.get(o)),h=[],d=Object(j.a)(p);try{for(d.s();!(c=d.n()).done;){var b=c.value;if(null===b){if(t.state.convertVariant||0===h.length)continue;break}var m,v=Object(j.a)(V(b));try{var y=function(){var e=m.value,t=e.音韻地位,n=e.反切,r=e.解釋,i=s(t,b),a=h.find((function(e){return e[0].every((function(e,t){return e===i[t]}))}));a?a[1].push({"字頭":b,"反切":n,"解釋":r,"音韻地位":t}):h.push([i,[{"字頭":b,"反切":n,"解釋":r,"音韻地位":t}]])};for(v.s();!(m=v.n()).done;)y()}catch(N){v.e(N)}finally{v.f()}}}catch(N){d.e(N)}finally{d.f()}var S=void 0;if("("===e[i+1]){for(u=i+2;u<=i+8&&u<e.length&&")"!==e[u];)u++;if(u<=i+8&&")"===e[u]){var C=function(){try{return a=i,f["適配分析體系"].v2extStrict(f["音韻地位"].from描述(e.slice(i+2,u).join("")))}catch(t){return u=i,void(a=i)}}();if(C){var k=h.findIndex((function(e){return Object(l.a)(e,2)[1].some((function(e){return e.音韻地位.等於(C)}))}));if(-1===k){var w=s(C,o);S=h.push([w,[{"字頭":o,"反切":null,"解釋":"","音韻地位":C}]])-1}else S=k}}}r.push(Object(O.jsx)(x,{ch:o,entries:h,tooltip:t.largeTooltip,preselect:S},n+i)),a=i=u},a=0;a<e.length;a++)i(a);return r},convertPresetArticle:function(){return R.split("\n\n").map((function(e,t){return Object(O.jsxs)(i.a.Fragment,{children:[e.split("\n").map((function(e,t){for(var r=[],a=Array.from(e),c=0;c<a.length;c++)if("("===a[c+1]){for(var o=c;")"!==a[++c]&&c<a.length;);var l=a[o],u=a.slice(o+2,c).join(""),p=f["音韻地位"].from描述(u),h=s(p,l);r.push(Object(O.jsxs)("ruby",{children:[l,Object(O.jsx)("rp",{children:"("}),Object(O.jsx)("rt",{lang:"och-Latn-fonipa",children:U(h)}),Object(O.jsx)("rp",{children:")"})]},n+o))}else r.push(Object(O.jsx)(i.a.Fragment,{children:a[c]},n+c));return r.push(Object(O.jsx)("span",{hidden:!0,children:"\n"},n+a.length)),i.a.createElement(t?"p":"h3",{key:t},r)})),Object(O.jsx)("span",{hidden:!0,children:"\n"})]},t)}))},exportAllSmallRhymes:function(){return Array.from(W()).map((function(e,t){var r=function(e){var t,n=new Map,r=Object(j.a)(_(e));try{for(r.s();!(t=r.n()).done;){var i=t.value,s=i.字頭,a=i.反切;n.has(a)||n.set(a,s)}}catch(c){r.e(c)}finally{r.f()}return Array.from(n.values())}(e);return Object(O.jsxs)("p",{children:[e.描述," ",Object(O.jsx)("span",{lang:"och-Latn-fonipa",children:s(e,r[0]).join(" / ")})," ",r.join(""),Object(O.jsx)("span",{hidden:!0,children:"\n"})]},n+t)}))},exportAllSyllables:function(){return[Object(O.jsx)("span",{lang:"och-Latn-fonipa",children:Array.from(new Set(Array.from(W()).map((function(e){return s(e,null).join(" / ")})))).join(", ")},n+0)]},exportAllSyllablesWithCount:function(){return[Object(O.jsx)("span",{lang:"och-Latn-fonipa",children:Array.from(Array.from(W()).reduce((function(e,t){var n=s(t,null).join(" / ");return e.set(n,-~e.get(n)),e}),new Map)).sort((function(e,t){return t[1]-e[1]})).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return"".concat(n," (").concat(r,")")})).join(", ")},n+0)]}};try{e=this.state.schemas.map((function(e,t){var n=e.input;return new b["推導方案"](new Function("Qieyun","選項","音韻地位","字頭",n).bind(null,f))(r[t])}))}catch(c){return void H("程式碼錯誤",c)}try{this.setState({output:a[this.state.option](),isApplied:!0})}catch(c){}}else Y("https://cdn.jsdelivr.net/gh/nk2028/qieyun-text-label@qieyun-0.13/index.txt",(function(e){R=e,t.handlePredefinedOptions()}))}},{key:"handleCopy",value:function(){var e,t,n=null===(e=this.outputArea)||void 0===e||null===(t=e.textContent)||void 0===t?void 0:t.trimEnd();n?navigator.clipboard?navigator.clipboard.writeText(n).then(Q,(function(){return G(n)})):G(n):H("請先進行操作，再匯出結果")}},{key:"scrollToOutput",value:function(e){this.outputArea=e,this.state.isApplied&&(e.scrollIntoView({behavior:"smooth",block:"nearest"}),this.setState({isApplied:!1}))}},{key:"render",value:function(){var e=this,t=function(t,n){e.setState(Object(o.a)({},t,n),(function(){localStorage.setItem("autoderiver/0.1/"+t,e.state[t]+"")}))},n=function(){localStorage.setItem("autoderiver/0.1/schemas",JSON.stringify(e.state.schemas.map((function(e){return e.name})))),localStorage.setItem("autoderiver/0.1/inputs",JSON.stringify(e.state.schemas.map((function(e){return e.input})))),localStorage.setItem("autoderiver/0.1/settings",JSON.stringify(e.state.schemas.map((function(e){return e.settings}))))},r=function(t){e.setState((function(e){var n=e.schemas;return(n=Object(c.a)(n)).splice(n.findIndex((function(e){return e.id===t}))+1,0,$()),{schemas:n}}),n)},s=function(t){e.setState((function(e){var n=e.schemas;return(n=Object(c.a)(n))[n.findIndex((function(e){return e.id===t.id}))]=t,{schemas:n}}),n)},a=function(t){e.setState((function(e){return{schemas:e.schemas.filter((function(e){return e.id!==t.id}))}}),n)};return Object(O.jsxs)("div",{className:"main-container",children:[Object(O.jsx)("form",{className:"add-schema",children:Object(O.jsx)("input",{type:"button",title:"新增方案",onClick:function(){return r(null)}})}),this.state.schemas.map((function(t,n,c){return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(J,{name:t.name,input:t.input,original:t.original,id:t.id,settings:t.settings,setSchemaState:s,deleteSchema:a,single:1===c.length,autocomplete:e.state.autocomplete}),Object(O.jsx)("form",{className:"add-schema",children:Object(O.jsx)("input",{type:"button",title:"新增方案",onClick:function(){return r(t.id)}})})]},t.id)})),Object(O.jsxs)("form",{className:"pure-form",children:[Object(O.jsx)("p",{children:Object(O.jsx)("textarea",{id:"articleInput",placeholder:"輸入框",rows:5,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",required:!0,onChange:function(e){return t("article",e.target.value)},value:this.state.article})}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("select",{onChange:function(e){return t("option",e.target.value)},value:this.state.option,children:Object.entries(X).map((function(e,t){var n=Object(l.a)(e,2),r=n[0],i=n[1];return Object(O.jsx)("option",{value:r,children:i},t)}))})}),Object(O.jsxs)("label",{className:"convertArticle"===this.state.option?"":"hidden",children:[Object(O.jsx)("input",{type:"checkbox",checked:this.state.convertVariant,onChange:function(e){return t("convertVariant",e.target.checked)}}),"轉換異體字"]}),Object(O.jsx)("input",{className:"pure-button pure-button-primary",type:"button",value:"適用",onClick:function(){return e.handlePredefinedOptions()}}),Object(O.jsx)("input",{className:"pure-button",type:"button",value:"匯出至剪貼簿",onClick:function(){return e.handleCopy()}}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",checked:this.state.autocomplete,onChange:function(e){return t("autocomplete",e.target.checked)}}),"編輯推導方案時顯示自動完成"]})]})]}),Object(O.jsx)("output",{ref:function(t){return t&&e.scrollToOutput(t)},children:this.state.output})]})}}]),n}(i.a.Component),ee=M()(N.a);function te(){ee.fire({showClass:{popup:""},hideClass:{popup:""},customClass:{container:"about-modal",htmlContainer:"about-modal-content"},width:"60vw",showCloseButton:!0,showConfirmButton:!1,html:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"關於"}),Object(O.jsxs)("p",{children:["切韻音系自動推導器（下稱「本頁面」）由 ",Object(O.jsx)("a",{href:"https://nk2028.shn.hk/",children:"nk2028"})," ","開發。我們開發有關語言學的項目，尤其是有關歷史漢語語音學，異體字和日語語言學的項目。"]}),Object(O.jsxs)("p",{children:["歡迎加入 QQ 音韻學答疑羣（羣號 526333751）和 Telegram nk2028 社羣（",Object(O.jsx)("a",{href:"https://t.me/nk2028_discuss",children:"@nk2028_discuss"}),"）。"]}),Object(O.jsxs)("p",{children:["本頁面原始碼公開於 ",Object(O.jsx)("a",{href:"https://github.com/nk2028/qieyun-autoderiver",children:"GitHub"}),"。"]}),Object(O.jsx)("h2",{children:"私隱權政策"}),Object(O.jsx)("p",{children:"本頁面是一項開放原始碼的網絡服務。作為本頁面的開發者，我們對您的私隱非常重視。本頁面的開發者不會透過本頁面收集您的任何資料。"}),Object(O.jsx)("p",{children:"下面將具體介紹本頁面能在何種程度上保障您的私隱權。"}),Object(O.jsx)("b",{children:"您鍵入的內容"}),Object(O.jsx)("p",{children:"本頁面的開發者不會收集您在本頁面中鍵入的任何內容。任何與您鍵入的內容相關的運算全部在您的系統中完成。本頁面不會將包括待標註的文本、標註結果在內的任何資料傳送至任何伺服器。"}),Object(O.jsx)("b",{children:"您的其他資料"}),Object(O.jsx)("p",{children:"本頁面使用的內容託管於以下站點：GitHub Pages、jsDelivr、Google Fonts。在您訪問本頁面時，您的瀏覽器將與這些站點交互。本頁面的開發者並不能讀取您訪問這些站點時產生的資料，亦無法控制這些站點如何使用您訪問時產生的資料。"})]})})}function ne(e){var t=e.target.href;e.preventDefault(),ee.fire({icon:"info",title:"注意",html:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"新版推導器近期將正式上線，使用最新的 Qieyun.js v0.15（舊版到時將移至別處繼續上線）。"}),Object(O.jsxs)("p",{children:["新版推導器現有經過更新的推導方案供試用。新舊版推導方案代碼並不相同，不能互換使用。如您有自己的方案代碼想要更新，兩版的 API 與音韻地位差異請參見",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/nk2028/qieyun-js/discussions/43",children:"遷移指南"}),"。"]})]}),confirmButtonText:"了解",width:"80vw"}).then((function(e){e.isConfirmed&&window.location.assign(t)}))}var re=function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("nav",{children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{onClick:te,children:"切韻音系自動推導器（舊版）"})})}),Object(O.jsxs)("span",{children:[Object(O.jsx)("a",{className:"btn",onClick:ne,href:"https://syimyuzya.github.io/qieyun-autoderiver",children:"🆙 新版即將上線 立即試用"}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/nk2028/qieyun-js/discussions/43",children:"⏫ Qieyun.js v0.15 遷移指南"})]})]}),Object(O.jsx)(Z,{})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),s(e),a(e)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(re,{})}),document.getElementById("root")),ie()},59:function(e,t,n){},65:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.c67d601d.chunk.js.map