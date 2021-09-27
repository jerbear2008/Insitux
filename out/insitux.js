(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.d(t,{invoker:()=>Wt});var r={};e.r(r),e.d(r,{abs:()=>H,ceil:()=>W,concat:()=>h,cos:()=>O,ends:()=>y,flat:()=>x,floor:()=>L,getTimeMs:()=>j,has:()=>f,isArray:()=>u,isNum:()=>c,len:()=>a,log10:()=>U,log2:()=>z,logn:()=>V,lowerCase:()=>C,max:()=>q,min:()=>S,objKeys:()=>M,padEnd:()=>B,pi:()=>K,push:()=>g,randInt:()=>I,randNum:()=>E,range:()=>P,reverse:()=>A,round:()=>R,sign:()=>_,sin:()=>D,slen:()=>i,slice:()=>o,sortBy:()=>b,splice:()=>s,sqrt:()=>F,starts:()=>v,strIdx:()=>m,sub:()=>d,subIdx:()=>p,substr:()=>l,tan:()=>T,toNum:()=>n,trim:()=>w,trimEnd:()=>N,trimStart:()=>$,upperCase:()=>k});const n=e=>Number(e),o=(e,t,r)=>e.slice(t,r),s=(e,t,r)=>e.splice(t,r),a=e=>e.length,i=e=>e.length,c=e=>!Number.isNaN(Number(e)),u=e=>Array.isArray(e),l=(e,t,r)=>e.substring(t,t+(r??e.length)),m=(e,t)=>e[t],d=(e,t)=>e.includes(t),p=(e,t)=>e.indexOf(t),f=(e,t)=>e.includes(t),v=(e,t)=>e.startsWith(t),y=(e,t)=>e.endsWith(t),x=e=>e.flat(),h=(e,t)=>e.concat(t),g=(e,t)=>e.push(...t),b=(e,t)=>e.sort(t),A=e=>e.reverse(),C=e=>e.toLowerCase(),k=e=>e.toUpperCase(),w=e=>e.trim(),$=e=>e.trimStart(),N=e=>e.trimEnd(),B=(e,t)=>e.padEnd(t),E=(e,t)=>e+Math.random()*(t-e),I=(e,t)=>Math.floor(E(e,t)),P=e=>[...Array(e).keys()],M=e=>Object.keys(e),j=()=>(new Date).getTime(),H=Math.abs,S=Math.min,q=Math.max,D=Math.sin,O=Math.cos,T=Math.tan,F=Math.sqrt,R=Math.round,L=Math.floor,W=Math.ceil,_=Math.sign,K=Math.PI,V=Math.log,z=Math.log2,U=Math.log10,G={print:{},"print-str":{},"!":{exactArity:1},"=":{minArity:2},"!=":{minArity:2},"+":{minArity:2,onlyNum:!0},"-":{minArity:1,onlyNum:!0},"*":{minArity:2,onlyNum:!0},"/":{minArity:2,onlyNum:!0},"//":{minArity:2,onlyNum:!0},"**":{minArity:1,onlyNum:!0},"<":{minArity:2,onlyNum:!0},">":{minArity:2,onlyNum:!0},"<=":{minArity:2,onlyNum:!0},">=":{minArity:2,onlyNum:!0},inc:{exactArity:1,onlyNum:!0},dec:{exactArity:1,onlyNum:!0},min:{minArity:2,onlyNum:!0},max:{minArity:2,onlyNum:!0},abs:{exactArity:1,onlyNum:!0},pi:{exactArity:0},sqrt:{exactArity:1,onlyNum:!0},round:{exactArity:1,onlyNum:!0},floor:{exactArity:1,onlyNum:!0},ceil:{exactArity:1,onlyNum:!0},logn:{exactArity:1,onlyNum:!0},log2:{exactArity:1,onlyNum:!0},log10:{exactArity:1,onlyNum:!0},"odd?":{exactArity:1,onlyNum:!0},"even?":{exactArity:1,onlyNum:!0},"pos?":{exactArity:1,onlyNum:!0},"neg?":{exactArity:1,onlyNum:!0},"zero?":{exactArity:1,onlyNum:!0},"null?":{exactArity:1},"num?":{exactArity:1},"bool?":{exactArity:1},"str?":{exactArity:1},"vec?":{exactArity:1},"dict?":{exactArity:1},"key?":{exactArity:1},"func?":{exactArity:1},rem:{minArity:2,onlyNum:!0},sin:{exactArity:1,onlyNum:!0},cos:{exactArity:1,onlyNum:!0},tan:{exactArity:1,onlyNum:!0},vec:{},dict:{},len:{exactArity:1,types:[["str","vec","dict"]]},"to-num":{exactArity:1,types:[["str","num"]]},"to-key":{exactArity:1,types:[["str","num"]]},"has?":{exactArity:2,types:["str","str"]},idx:{minArity:2,maxArity:3,types:[["str","vec"]]},map:{minArity:2},for:{minArity:2},reduce:{minArity:2,maxArity:3},filter:{minArity:2},remove:{minArity:2},find:{minArity:2},count:{minArity:2},str:{},rand:{maxArity:2,onlyNum:!0},"rand-int":{maxArity:2,onlyNum:!0},while:{},"..":{minArity:2},into:{exactArity:2,types:[["vec","dict"],["vec","dict"]]},push:{minArity:2,maxArity:3,types:[["vec","dict"]]},sect:{minArity:1,maxArity:3,types:[["vec","str"],"num","num"]},reverse:{exactArity:1,types:[["vec","str"]]},sort:{minArity:1,maxArity:2,types:["vec"]},keys:{exactArity:1,types:["dict"]},vals:{exactArity:1,types:["dict"]},do:{minArity:1},val:{minArity:1},range:{minArity:1,maxArity:3,types:["num","num","num"]},"empty?":{exactArity:1,types:[["str","vec","dict"]]},split:{minArity:1,maxArity:2,types:["str","str"]},join:{minArity:1,maxArity:2,types:["vec","str"]},"starts-with?":{exactArity:2,types:["str","str"]},"ends-with?":{exactArity:2,types:["str","str"]},"lower-case":{exactArity:1,types:["str"]},"upper-case":{exactArity:1,types:["str"]},trim:{exactArity:1,types:["str"]},"trim-start":{exactArity:1,types:["str"]},"trim-end":{exactArity:1,types:["str"]},"str*":{exactArity:2,types:["str","num"]},time:{exactArity:0},version:{exactArity:0},tests:{minArity:0,maxArity:1,types:["bool"]},symbols:{exactArity:0},eval:{exactArity:1,types:["str"]},reset:{exactArity:0}},J={null:"null",str:"string",num:"number",bool:"boolean",key:"keyword",ref:"reference",vec:"vector",dict:"dictionary",func:"function",clo:"closure"},{concat:Q,has:X,flat:Y,push:Z,slice:ee}=r,{slen:te,starts:re,sub:ne,substr:oe,strIdx:se}=r,{isNum:ae,len:ie,toNum:ce}=r,ue={t:"null",v:void 0};function le(e,t){const r=[];for(;;){const n=de(e,t);if(!ie(n))break;Z(r,n)}return r}function me(e,t,r){const{exactArity:n,maxArity:o,minArity:s}=G[e],a=(n,o)=>[{e:"Arity",m:`${e} needs ${n} argument${1!==o?"s":""}, not ${t}`,errCtx:r}];if(void 0!==n){if(t!==n)return a(`exactly ${n}`,n)}else{if(s&&!o&&t<s)return a(`at least ${s}`,s);if(!s&&o&&t>o)return a(`at most ${o}`,o);if(s&&o&&(t<s||t>o))return a(`between ${s} and ${o}`,o)}}function de(e,t){if(!ie(e))return[];const{typ:r,text:n,errCtx:o}=e.shift();if("sym"===r&&"#"===n&&ie(e)&&"("===e[0].typ){const r=e.map((e=>e.text)),n=de(e,t);return[{typ:"clo",value:[ee(r,0,ie(r)-ie(e)).join(" "),n],errCtx:o}]}switch(r){case"str":return[{typ:"val",value:{t:"str",v:n},errCtx:o}];case"num":return[{typ:"val",value:{t:"num",v:ce(n)},errCtx:o}];case"sym":if("true"===n||"false"===n)return[{typ:"val",value:{t:"bool",v:"true"===n},errCtx:o}];if("null"===n)return[{typ:"val",value:ue,errCtx:o}];if(re(n,":"))return[{typ:"val",value:{t:"key",v:n},errCtx:o}];if(re(n,"#")&&ae(oe(n,1))){const e=ce(oe(n,1));return e<0?[{typ:"val",value:ue,errCtx:o}]:[{typ:"upa",value:e,errCtx:o}]}return X(t,n)?[{typ:"npa",value:t.indexOf(n),errCtx:o}]:"args"===n?[{typ:"upa",value:-1,errCtx:o}]:G[n]?[{typ:"val",value:{t:"func",v:n},errCtx:o}]:[{typ:"ref",value:n,errCtx:o}];case"ref":return[{typ:"def",value:n,errCtx:o}];case"(":return function(e,t){const r=e.shift();if(!r)return[];const{typ:n,text:o,errCtx:s}=r;let a=o;const i=e=>[{typ:"err",value:e,errCtx:s}];if("catch"===a){if("("!==e[0].typ)return i("first argument must be expression");const r=de(e,t),n=le(e,t);return ie(r)&&ie(n)?[...r,{typ:"cat",value:ie(n),errCtx:s},...n]:i("must provide 2 arguments")}if("var"===a||"let"===a){const[r,n]=[de(e,t),de(e,t)];return ie(r)&&ie(n)&&!ie(de(e,t))?[...n,{typ:a,value:r[0].value,errCtx:s}]:i("must provide reference name and value only")}if("if"===a||"when"===a){const r=de(e,t);if(!ie(r))return i("must provide condition");const n=r;if("if"===a){const r=de(e,t);if(!ie(r))return i("must provide a branch");n.push({typ:"if",value:ie(r)+1,errCtx:s}),Z(n,r);const o=de(e,t);if(ie(o)){if(n.push({typ:"jmp",value:ie(o),errCtx:s}),Z(n,o),ie(de(e,t)))return i("too many branches")}else n.push({typ:"jmp",value:1,errCtx:s}),n.push({typ:"val",value:ue,errCtx:s})}else{const r=le(e,t);n.push({typ:"if",value:ie(r)+1,errCtx:s}),Z(n,r),n.push({typ:"jmp",value:1,errCtx:s}),n.push({typ:"val",value:ue,errCtx:s})}return n}if("and"===a||"or"===a||"while"===a){const r=[];let n=0;for(;;){const o=de(e,t);if(!ie(o))break;r.push(o),n+=ie(o)}if(ie(r)<2)return i("requires at least two arguments");const o=[];if("while"===a){n+=2;const e=r.shift();return Z(o,e),o.push({typ:"if",value:n-ie(e),errCtx:s}),r.forEach((e=>Z(o,e))),o.push({typ:"pop",value:ie(r),errCtx:s}),o.push({typ:"loo",value:-(n+1),errCtx:s}),o}n+=ie(r),n+=ce("and"===a);const c="and"===a?"if":"or";for(let e=0;e<ie(r);++e)Z(o,r[e]),n-=ie(r[e]),o.push({typ:c,value:n,errCtx:s}),--n;return"and"===a?Z(o,[{typ:"val",value:{t:"bool",v:!0},errCtx:s},{typ:"jmp",value:1,errCtx:s},{typ:"val",value:{t:"bool",v:!1},errCtx:s}]):o.push({typ:"val",value:{t:"bool",v:!1},errCtx:s}),o}const c=[];let u=0;if("("===n||X(t,o)||re(o,"#")){e.unshift(r);const n=de(e,t);Z(c,n)}const l=[];for(;ie(e);){const r=de(e,t);if(!ie(r))break;++u,Z(l,r)}if("return"===a)return[...l,{typ:"ret",value:!!ie(l),errCtx:s}];if(G[a]){const e=me(a,u,s);Z(c,e?.map((e=>i(e.m)[0]))??[])}if(ie(c))c.push({typ:"exe",value:u,errCtx:s});else{const e="num"===n?{t:"num",v:ce(a)}:re(a,":")?{t:"key",v:a}:G[a]?{t:"func",v:a}:"true"===a||"false"===a?{t:"bool",v:"true"===a}:{t:"str",v:a};"str"!==e.t?c.push({typ:"oxe",value:[e,u],errCtx:s}):(c.push({typ:"val",value:e,errCtx:s}),c.push({typ:"exe",value:u,errCtx:s}))}return[...l,...c]}(e,t);case")":return[];default:return 0}}function pe(e,t){const{tokens:r,stringError:n}=function(e,t){const r=[];let n=!1,o=!1,s=[0,0],a=!1,i=!1,c=!1,u=1,l=0;for(let m=0,d=te(e);m<d;++m){const p=se(e,m),f=m+1!==d?se(e,m+1):"";if(++l,c){"\n"===p&&(c=!1,++u,l=0);continue}if(o){o=!1,n&&(r[ie(r)-1].text+={n:"\n",t:"\t",'"':'"'}[p]||`\\${p}`);continue}if("\\"===p){o=!0;continue}if('"'===p){(n=!n)&&(s=[u,l],r.push({typ:"str",text:"",errCtx:{invocationId:t,line:u,col:l}})),i=a=!1;continue}const v=ne(" \t\n\r,",p);if(!n&&v){i=a=!1,"\n"===p&&(++u,l=0);continue}if(!n&&";"===p){c=!0;continue}const y={invocationId:t,line:u,col:l},x=e=>ne("0123456789",e),h=ne("()[]{}",p);if(i&&!x(p)&&(i="."===p&&!ne(r[ie(r)-1].text,"."),i||h||v||(a=!0,r[ie(r)-1].typ="sym")),a&&h&&(a=!1),!n&&!a&&!i){if(h){const e={"[":"(","{":"(","(":"(",")":")","}":")","]":")"}[p];r.push({typ:e,text:e,errCtx:y}),"["===p?r.push({typ:"sym",text:"vec",errCtx:y}):"{"===p&&r.push({typ:"sym",text:"dict",errCtx:y});continue}i=x(p)||"."===p&&x(f)||"-"===p&&(x(f)||"."===f),a=!i;let e=a?"sym":"num";if(ie(r)){const{typ:t,text:n}=r[ie(r)-1];"sym"!==t||"var"!==n&&"let"!==n||(e="ref")}r.push({typ:e,text:"",errCtx:y})}r[ie(r)-1].text+=p}return{tokens:r,stringError:n?s:void 0}}(e,t),o=function(e,t,r){const n=[],o=(e,t)=>n.push({e:"Parse",m:e,errCtx:t}),s=e=>ie(t.filter((({typ:t})=>t===e))),[a,i]=[s("("),s(")")];{const[e,n]=function(e,t,r){const n=r>=t,[o,s]=[n?"(":")",n?")":"("],a=n?1:-1;for(let t=ie(e),r=n?0:t-1,i=0;n?r<t:r>=0;r+=a){const{typ:t,errCtx:{line:n,col:a}}=e[r];if(i+=ce(t===o)-ce(t===s),i<0)return[n,a]}return[0,0]}(t,a,i);e+n&&o("unmatched parenthesis",{invocationId:r,line:e,col:n})}if(e){const[t,n]=e;o("unmatched double quotation marks",{invocationId:r,line:t,col:n})}let c;for(let e=0,r=!1;e<ie(t);++e){if(r&&")"===t[e].typ){c=t[e];break}r="("===t[e].typ}return c&&o("empty expression forbidden",c.errCtx),n}(n,r,t);if(ie(o))return{errors:o,funcs:{}};const s=function(e){const t=e=>ie(e)>1&&"sym"===e[1].typ&&"function"===e[1].text,r=e.filter((e=>t(e))),n=Y(e.filter((e=>!t(e)))),o=r.map((e=>({name:e[2].text,tokens:ee(e,3),errCtx:e[2].errCtx})));return ie(n)?Q(o,[{name:"entry",tokens:n,errCtx:n[0].errCtx}]):o}(function(e){const t=[[]];let r=0;return e.forEach((e=>{t[ie(t)-1].push(e),r+=ce("("===e.typ)-ce(")"===e.typ),0===r&&t.push([])})),t}(r)).map((e=>function({name:e,tokens:t},r){const[n,o]=function(e,t){const r=[],n=[];for(let t=0,s=!1;t<ie(e);++t)s||(s="sym"!==(o=e[t]).typ||"#"===o.text),(s?n:r).push(e[t]);var o;return[r,n]}(t);if("("===e)return{err:{e:"Parse",m:"nameless function",errCtx:r}};if(!ie(n)&&!ie(o))return{err:{e:"Parse",m:"empty function body",errCtx:r}};if(ie(o)&&")"===o[0].typ){if(!ie(n))return{err:{e:"Parse",m:"empty function body",errCtx:r}};o.unshift(n.pop())}ie(n)&&!ie(o)&&o.push(n.pop());const s=[];for(;ie(o);)Z(s,de(o,n.map((e=>e.text))));const a=s.filter((e=>"err"===e.typ));return ie(a)?{err:{e:"Parse",m:a[0].value,errCtx:a[0].errCtx}}:{func:{name:e,ins:s}}}(e,{invocationId:t,line:e.errCtx.line,col:e.errCtx.col}))),[a,i]=function(e,t){const r=[],n=[];return e.forEach((e=>{return(t=e,t.err?n:r).push(e);var t})),[r,n]}(s);Z(o,i.map((e=>e.err)));const c={};return a.forEach((({func:e})=>c[e.name]=e)),{errors:o,funcs:c}}async function fe(e,t){return e.dict.has(t)?{value:e.dict.get(t),err:void 0}:{value:{t:"null",v:void 0},err:`"${t} not found.`}}async function ve(e,t,r){e.dict.set(t,r)}async function ye(e,t,r){const n={t:"null",v:void 0};switch(t){case"print-str":e.output+=r[0].v;break;case"print":case"test.function":e.output+=r[0].v+"\n";break;default:return{value:n,err:"operation does not exist"}}return{value:n,err:void 0}}const xe=[{name:"Hello, world!",code:'"Hello, world!"',out:"Hello, world!"},{name:"Say Hello, world!",code:'(print "Hello, world!")',out:"Hello, world!\nnull"},{name:"1 + 1 = 2",code:"(+ 1 1)",out:"2"},{name:"Negate 1 = -1",code:"(- 1)",out:"-1"},{name:"(1+1)+1+(1+1) = 5",code:"(+ (+ 1 1) 1 (+ 1 1))",out:"5"},{name:"Conditional head",code:"((if true + -) 12 9 1)",out:"22"},{name:"Whens",code:'[(when 123 (print "hi") 234) (when false (print "bye"))]',out:"hi\n[234 null]"},{name:"Cond number head",code:"((if false 1 2) [:a :b :c])",out:":c"},{name:"and & short-circuit",code:"[(and true (if true null 1) true) (and 1 2 3)]",out:"[false true]"},{name:"or & short-circuit",code:'[(or true (print "hello") 1) (or false (print-str "-> ") 1)]',out:"-> [true 1]"},{name:"String retrieve",code:'(2 "Hello")',out:"l"},{name:"Vector retrieve",code:"(2 [:a :b :c :d])",out:":c"},{name:"Key as operation",code:'(:age {:name "Patrick" :age 24})',out:"24"},{name:"Dictionary as op 1",code:'({"name" "Patrick" "age" 24} "age")',out:"24"},{name:"Dictionary as op 2",code:'({"name" "Patrick"} "age" 24)',out:'{"name" "Patrick", "age" 24}'},{name:"Equalities",code:'[(= 1 2 1)\n            (!= 1 2 1)\n            (= "Hello" "hello")\n            (!= "world" "world")\n            (= [0 [1]] [0 [1]])]',out:"[false 1 false false [0 [1]]]"},{name:"Define and retrieve",code:"(var a 1) a",out:"1"},{name:"Define and add",code:"(var a 1) (inc a)",out:"2"},{name:"Define op and call",code:"(var f +) (f 2 2)",out:"4"},{name:"Define vec and call",code:"(var f [1]) (f 1)",out:"1"},{name:"Define num and call",code:"(var f 1) (f [:a :b :c])",out:":b"},{name:"Print simple vector",code:"[1 2 3]",out:"[1 2 3]"},{name:"Boolean select",code:"[(true 1 2) (false 1)]",out:"[1 null]"},{name:"Sum vector of numbers",code:"[(reduce + [1 2 3]) (reduce + [1 2 3] 3)]",out:"[6 9]"},{name:"Sum vectors of numbers",code:"(map + [1 2 3] [1 2 3 4])",out:"[2 4 6]"},{name:"Filter by integer",code:'(filter 2 [[1] [:a :b :c] "hello" "hi"])',out:'[[:a :b :c] "hello"]'},{name:"Comments, short decimal",code:';((print "Hello")\n           .456',out:"0.456"},{name:"Dictionary into vector",code:"(into [1 2] {3 4 5 6})",out:"[1 2 [3 4] [5 6]]"},{name:"Vector into dictionary",code:"(into {[0] 1 [2] 3} [[0] 2])",out:"{[0] 2, [2] 3}"},{name:"While loop",code:"(var n 5)\n           (while (< 0 n)\n             (print-str n)\n             (var n (dec n)))",out:"543215"},{name:"Catch error",code:'(catch\n             (:e (catch (+ 1 :a) (0 errors)))\n             (print "hi"))',out:"Type"},{name:"Define with no call",code:'(function func (print "Nothing."))'},{name:"Call greet func",code:'(function greeting (print "Hello!")) (greeting)',out:"Hello!\nnull"},{name:"Call const value func",code:"(function const 123) (const)",out:"123"},{name:"Call identity funcs",code:"(function id1 #)\n           (function id2 x x)\n           [(id1 123) (id2 456)]",out:"[123 456]"},{name:"Call greet with name",code:'(function greeting name (print "Hello, " name "!"))\n           (greeting "Patrick")',out:"Hello, Patrick!\nnull"},{name:"Call with too few args",code:"(function func a b c [a b c]) (func 1 2)",out:"[1 2 null]"},{name:"Define func and call",code:"(function func a b (+ a b)) (var f func) (f 2 2)",out:"4"},{name:"Anonymous parameters",code:"(function avg<n? (< (/ (.. + #) (len #)) #1))\n           (avg<n? [0 10 20 30 40] 5)",out:"false"},{name:"Call parameter",code:'(function f x (x "hello")) (f print)',out:"hello\nnull"},{name:"Let and retrieve",code:"(function f (let a 1) a) (f)",out:"1"},{name:"Let num op and call",code:"(function f (let n 0) (n [1])) (f)",out:"1"},{name:"Explicit return",code:"(function f (return 123) (print 456)) (f)",out:"123"},{name:"Closure 1",code:"(let x 10)\n           (let closure (do #(# x x)))\n           (let x 11)\n           (closure +)",out:"20"},{name:"Closure 2",code:"(filter #(or (.. = args) (even? #)) (range 10) 5)",out:"[0 2 4 5 6 8]"},{name:"Func returns closure",code:"(function f x #(x 2 2))\n           (let closure (f +))\n           (closure)",out:"4"},{name:"Dictionary closure",code:"(function f x #{x 2})\n           (let closure (f :a))\n           (closure)",out:"{:a 2}"},{name:"Vector closure",code:"(function f x #[1 x #])\n           (let closure (f 2))\n           (closure 3)",out:"[1 2 3]"},{name:"Closure as head",code:"(#[# #1 #2] 1 2 3)",out:"[1 2 3]"},{name:"String instead of number",code:'(function sum (.. + args))\n           (print (sum 2 2))\n           (sum 2 "hi")',out:"4",err:["Type"]},{name:"Reference non-existing",code:"x",err:["Reference"]},{name:"Expired let retrieve",code:"(function f (let a 1) a) (f) a",err:["Reference"]},{name:"Call non-existing",code:"(x)",err:["External"]},{name:"Call budget",code:"(function f (f)) (f)",err:["Budget"]},{name:"Loop budget",code:"(var n 10000)\n           (while (< 0 n)\n             (var n (dec n)))",err:["Budget"]},{name:"Range budget",code:"(range 10000)",err:["Budget"]},{name:"Fibonacci 13",code:"(function fib n\n             (if (< n 2) n\n               (+ (fib (dec n))\n                  (fib (- n 2)))))\n           (fib 13)",out:"233"},{name:"dedupe (tail-call optim)",code:"(function dedupe list -out\n             (let out (or -out []))\n             (let next (if (out (0 list)) [] [(0 list)]))\n             (if (empty? list) out\n                 (dedupe (sect list) (into out next))))\n           (dedupe [1 1 2 3 3 3])",out:"[1 2 3]"},{name:"set get",code:"[($globals.time_offset 5.5) $globals.time_offset]",out:"[5.5 5.5]"},{name:"exe",code:"(test.function 123)",out:"123\nnull"},{name:"Empty parens",code:"()",err:["Parse"]},{name:"Imbalanced parens 1",code:'(print ("hello!")',err:["Parse"]},{name:"Imbalanced parens 2",code:'print "hello!")',err:["Parse"]},{name:"Imbalanced quotes 1",code:'(print "Hello)',err:["Parse","Parse"]},{name:"Imbalanced quotes 2",code:'print "Hello")',err:["Parse"]},{name:"Function as op",code:"(function)",err:["Parse"]},{name:"Function without name",code:"(function (+))",err:["Parse"]},{name:"Function without body",code:"(function func)",err:["Parse"]}];async function he(e,t=!0){const r=[];for(let t=0;t<a(xe);++t){const{name:n,code:o,err:s,out:a}=xe[t],i={dict:new Map,output:""},c={funcs:{},vars:{},lets:[]},u=j(),l=await e({get:e=>fe(i,e),set:(e,t)=>ve(i,e,t),exe:(e,t)=>ye(i,e,t),env:c,loopBudget:1e4,rangeBudget:1e3,callBudget:1e3,recurBudget:1e4},o,"testing",!0),m=(s||[]).join()===l.map((({e})=>e)).join(),d=!a||w(i.output)===a,p=j()-u,[f,v,y,x]=[B(`${t+1}`,3),B(n,24),B(`${p}ms`,6),m||l.map((({e,m:t,errCtx:{line:r,col:n}})=>`${e} ${r}:${n}: ${t}`))];r.push({okErr:m,okOut:d,elapsedMs:p,display:`${f} ${v} ${y} ${d} ${x}`})}const n=r.reduce(((e,{elapsedMs:t})=>e+t),0),o=a(r.filter((({okOut:e,okErr:t})=>e&&t)));return h(r.filter((e=>!t||!e.okOut||!e.okErr)).map((e=>e.display)),[`---- ${o}/${a(r)} tests passed in ${n}ms.`])}const{abs:ge,cos:be,sin:Ae,tan:Ce,pi:ke,sign:we,sqrt:$e,floor:Ne,ceil:Be,round:Ee,max:Ie,min:Pe}=r,{logn:Me,log2:je,log10:He}=r,{concat:Se,has:qe,flat:De,push:Oe,reverse:Te,slice:Fe,splice:Re,sortBy:Le}=r,{ends:We,slen:_e,starts:Ke,sub:Ve,subIdx:ze,substr:Ue,upperCase:Ge,lowerCase:Je}=r,{trim:Qe,trimStart:Xe,trimEnd:Ye}=r,{getTimeMs:Ze,randInt:et,randNum:tt}=r,{isArray:rt,isNum:nt,len:ot,objKeys:st,range:at,toNum:it}=r,ct=({v:e,t})=>{const r=e=>"str"===e.t?`"${e.v}"`:ct(e);switch(t){case"bool":case"num":return`${e}`;case"str":case"key":case"ref":case"func":return e;case"clo":return`#${e.name}`;case"vec":return`[${e.map(r).join(" ")}]`;case"dict":{const{keys:t,vals:n}=e,[o,s]=[t.map(r),n.map(r)];return`{${o.map(((e,t)=>`${e} ${s[t]}`)).join(", ")}}`}case"null":return"null"}return 0};let ut=[];const lt=e=>ut.push({t:"bool",v:e}),mt=e=>ut.push({t:"num",v:e}),dt=(e="")=>ut.push({t:"str",v:e}),pt=(e=[])=>ut.push({t:"vec",v:e}),ft=e=>ut.push({t:"dict",v:e}),vt=()=>ut.push({t:"null",v:void 0}),yt=e=>ut.push({t:"func",v:e}),xt=({v:e})=>e,ht=({v:e})=>e,gt=({v:e})=>e,bt=({v:e})=>e,At=({v:e})=>e,Ct=({t:e,v:t})=>"bool"===e?t:"null"!==e,kt=e=>"str"===e.t,wt=e=>"num"===e.t,$t=({t:e,v:t})=>"vec"===e?Fe(t):"str"===e?[...t].map((e=>({t:"str",v:e}))):"dict"===e?t.keys.map(((e,r)=>({t:"vec",v:[e,t.vals[r]]}))):[],Nt=e=>e.reduce(((e,t)=>e+ct(t)),""),Bt=e=>{ot(e)%2==1&&e.pop();const t=e.filter(((e,t)=>t%2==0)),r=e.filter(((e,t)=>t%2==1)),n=[],o=[];return t.forEach(((e,t)=>{const s=n.findIndex((t=>Pt(t,e)));-1===s?(n.push(e),o.push(r[t])):o[s]=r[t]})),{t:"dict",v:{keys:n,vals:o}}},Et=(e,t)=>({e:"Type",m:e,errCtx:t}),It=(e,t)=>ot(e)===ot(t)&&!e.some(((e,r)=>!Pt(e,t[r]))),Pt=(e,t)=>{const{t:r}=e;switch(r){case"null":return!0;case"bool":return e.v===t.v;case"num":return xt(e)===xt(t);case"vec":return It(gt(e),gt(t));case"dict":return((e,t)=>{const[r,n]=[bt(e),bt(t)];return ot(r.keys)===ot(n.keys)&&It(r.keys,n.keys)})(e,t);case"str":case"ref":case"key":case"func":return ht(e)===ht(t);case"clo":return At(e).name===At(t).name}return 0},Mt=({keys:e,vals:t},r)=>{const n=e.findIndex((e=>Pt(e,r)));return-1===n?{t:"null",v:void 0}:t[n]},jt=({keys:e,vals:t},r,n)=>{const[o,s]=[Fe(e),Fe(t)],a=e.findIndex((e=>Pt(e,r)));return-1!==a?s[a]=n:(o.push(r),s.push(n)),{keys:o,vals:s}};async function Ht(e,t,r,n,o){const s=e=>[Et(e,n)];if(o){const r=me(e,ot(t),n);if(r)return r}{const r=function(e,t,r){const{types:n,onlyNum:o}=G[e],s=ot(t);if(o){const n=t.findIndex((e=>"num"!==e.t));if(-1===n)return;const o=J[t[n].t];return[Et(`${e} takes numeric arguments only, not ${o}`,r)]}if(!n)return;const a=n.map(((e,r)=>{if(r>=s)return!1;const n=t[r].t,o=J[n];return rt(e)?!qe(e,n)&&`argument ${r+1} must be either: ${e.map((e=>J[e])).join(", ")}, not ${o}`:e!==n&&`argument ${r+1} must be ${J[e]}, not ${o}`})).filter((e=>!!e));return ot(a)?a.map((e=>Et(e,r))):void 0}(e,t,n);if(r)return r}switch(e){case"str":return void ut.push({t:"str",v:Nt(t)});case"print":case"print-str":return r.exe(e,[{t:"str",v:Nt(t)}]),void vt();case"vec":return void pt(t);case"dict":return void ut.push(Bt(t));case"len":return void mt("str"===t[0].t?_e(ht(t[0])):"vec"===t[0].t?ot(gt(t[0])):ot(bt(t[0]).keys));case"to-num":return void(nt(t[0].v)?mt(it(t[0].v)):vt());case"to-key":return a=`:${ct(t[0])}`,void ut.push({t:"key",v:a});case"!":return void lt(!Ct(t[0]));case"=":case"!=":for(let r=1,n=ot(t);r<n;++r)if(Pt(t[r-1],t[r])!==("="===e))return void lt(!1);return void ut.push(t[0]);case"-":return void mt(1===ot(t)?-xt(t[0]):t.map(xt).reduce(((e,t)=>e-t)));case"**":return void mt(xt(t[0])**(1===ot(t)?2:xt(t[1])));case"+":return void mt(t.map(xt).reduce(((e,t)=>e+t)));case"*":return void mt(t.map(xt).reduce(((e,t)=>e*t)));case"/":return void mt(t.map(xt).reduce(((e,t)=>e/t)));case"//":return void mt(t.map(xt).reduce(((e,t)=>Ne(e/t))));case"rem":return void mt(t.map(xt).reduce(((e,t)=>e%t)));case"min":return void mt(t.map(xt).reduce(((e,t)=>Pe(e,t))));case"max":return void mt(t.map(xt).reduce(((e,t)=>Ie(e,t))));case"<":case">":case"<=":case">=":for(let r=1,n=ot(t);r<n;++r){const[n,o]=[t[r-1].v,t[r].v];if("<"===e&&n>=o||">"===e&&n<=o||"<="===e&&n>o||">="===e&&n<o)return void lt(!1)}return void lt(!0);case"inc":return void mt(t[0].v+1);case"dec":return void mt(t[0].v-1);case"abs":return void mt(ge(xt(t[0])));case"pi":return void mt(ke);case"sin":case"cos":case"tan":case"sqrt":case"round":case"floor":case"ceil":case"logn":case"log2":case"log10":return void mt({sin:Ae,cos:be,tan:Ce,sqrt:$e,round:Ee,floor:Ne,ceil:Be,logn:Me,log2:je,log10:He}[e](xt(t[0])));case"odd?":case"even?":return void lt(xt(t[0])%2==("odd?"===e?1:0));case"pos?":case"neg?":case"zero?":{const r=xt(t[0]);return void lt("pos?"===e?r>0:"neg?"===e?r<0:!r)}case"null?":case"num?":case"bool?":case"str?":case"dict?":case"vec?":case"key?":case"func?":return void lt("null?"===e&&"null"===t[0].t||"num?"===e&&"num"===t[0].t||"bool?"===e&&"bool"===t[0].t||"str?"===e&&"str"===t[0].t||"dict?"===e&&"dict"===t[0].t||"vec?"===e&&"vec"===t[0].t||"key?"===e&&"key"===t[0].t||"func?"===e&&("func"===t[0].t||"clo"===t[0].t));case"has?":return void lt(Ve(ht(t[0]),ht(t[1])));case"idx":{let e=-1;if("str"===t[0].t){if("str"!==t[1].t)return s("strings can only contain strings");if(!(ot(t)<3)){const e=ht(t[0]).split("");return e[xt(t[2])]=ht(t[1]),void dt(e.join(""))}e=ze(ht(t[0]),ht(t[1]))}else if("vec"===t[0].t){if(!(ot(t)<3)){const e=$t(t[0]);return e[xt(t[2])]=t[1],void pt(e)}e=gt(t[0]).findIndex((e=>Pt(e,t[1])))}return void(-1===e?vt():mt(e))}case"map":case"for":case"reduce":case"filter":case"remove":case"find":case"count":{const o=St(r,t.shift(),n),a=e=>"vec"===e||"str"===e||"dict"===e,i="map"===e||"for"===e?t.findIndex((({t:e})=>!a(e))):a(t[0].t)?-1:0;if(-1!==i)return s(`argument 2 must be either: string, vector, dictionary, not ${J[t[i].t]}`);if("for"===e){const e=t.map($t),s=e.map(ot),a=s.map(((e,t)=>Fe(s,0,t+1).reduce(((e,t)=>e*t))));a.unshift(1);const i=a.pop();if(i>r.loopBudget)return[{e:"Budget",m:"would exceed loop budget",errCtx:n}];const c=[];for(let t=0;t<i;++t){const r=a.map(((e,r)=>Ne(t/e%s[r]))),n=await o(e.map(((e,t)=>e[r[t]])));if(n)return n;c.push(ut.pop())}return void pt(c)}if("map"===e){const e=t.map($t),r=Pe(...e.map(ot)),n=[];for(let t=0;t<r;++t){const r=await o(e.map((e=>e[t])));if(r)return r;n.push(ut.pop())}return void pt(n)}const c=$t(t.shift()),u="remove"===e,l="find"===e,m="count"===e;if("reduce"!==e){const r=[];let n=0;for(let e=0,s=ot(c);e<s;++e){const s=await o([c[e],...t]);if(s)return s;const a=Ct(ut.pop());if(m)n+=a?1:0;else{if(l&&a)return void ut.push(c[e]);l||a===u||r.push(c[e])}}switch(e){case"count":return void mt(n);case"find":return void vt();default:return void pt(r)}}if(ot(c)<2)return void Oe(ut,c);let d=(ot(t)?t:c).shift();for(let e=0,t=ot(c);e<t;++e){const t=await o([d,c[e]]);if(t)return t;d=ut.pop()}ut.push(d)}return;case"rand-int":case"rand":{const r=ot(t),[n,o]=[r<2?0:xt(t[0]),0===r?1+it("rand-int"===e):xt(1===r?t[0]:t[1])];mt("rand-int"===e?et(n,o):tt(n,o))}return;case"do":case"val":return void ut.push("do"===e?t.pop():t.shift());case"..":{const e=St(r,t.shift(),n);return await e(De(t.map((e=>"vec"===e.t?gt(e):[e]))))}case"into":{const e="vec"===t[0].t,r="vec"===t[1].t;if(e)pt(Se(gt(t[0]),r?gt(t[1]):$t(t[1])));else if(r){const e=$t(t[1]);ut.push(Bt(Se(De($t(t[0]).map(gt)),e)))}else{const{keys:e,vals:r}=bt(t[0]),n=bt(t[1]);ft({keys:Se(e,n.keys),vals:Se(r,n.vals)})}return}case"push":if("vec"===t[0].t){const e=gt(t[0]);if(ot(t)<3)pt(Se(e,[t[1]]));else{const r=xt(t[2]);pt(Se(Se(Fe(e,0,r),[t[1]]),Fe(e,r)))}}else ot(t)<3?ut.push((({keys:e,vals:t},r)=>{const[n,o]=[Fe(e),Fe(t)],s=e.findIndex((e=>Pt(e,r)));return-1!==s&&(Re(n,s,1),Re(o,s,1)),{t:"dict",v:{keys:n,vals:o}}})(bt(t[0]),t[1])):ft(jt(bt(t[0]),t[1],t[2]));return;case"sect":{const e=t[0],r="vec"===e.t,n=r?ot(gt(e)):_e(ht(e));let o=0,s=n;switch(ot(t)){case 1:o=1;break;case 2:{const e=xt(t[1]);e<0?s+=e:o+=e;break}case 3:{const e=xt(t[1]),r=xt(t[2]);o=e<0?n+e+(r<0?r:0):o+e,s=(r<0?s:o)+r;break}}return o=Ie(o,0),s=Pe(s,n),o>s?void(r?pt:dt)():void(r?pt(Fe(gt(e),o,s)):dt(Ue(ht(t[0]),o,s-o)))}case"reverse":return void("str"===t[0].t?dt(Nt(Te($t(t[0])))):pt(Te($t(t[0]))));case"sort":{if(!ot(gt(t[0])))return void pt();const e=$t(t[0]),o=[];if(1===ot(t))Oe(o,e.map((e=>[e,e])));else{const s=St(r,t.pop(),n);for(let t=0,r=ot(e);t<r;++t){const r=await s([e[t]]);if(r)return r;o.push([e[t],ut.pop()])}}const a=o[0][1].t;return o.some((([e,{t}])=>t!==a||!qe(["num","str"],t)))?s("can only sort by all number or all string"):(wt(o[0][1])?Le(o,(([e,t],[r,n])=>xt(t)>xt(n)?1:-1)):Le(o,(([e,t],[r,n])=>ht(t)>ht(n)?1:-1)),void pt(o.map((([e])=>e))))}case"range":{const[e,o,s]=t.map(xt),a=s&&s<0&&e<o,[i,c]=ot(t)>1?a?[o-1,e-1]:[e,o]:[0,e],u=we((c-i)*(s||1))*(s||1),l=Be(ge((c-i)/u));if(!l)return void pt([]);if(l>r.rangeBudget)return[{e:"Budget",m:"range budget depleted",errCtx:n}];r.rangeBudget-=l;const m=at(l).map((e=>e*u+i));return void pt(m.map((e=>({t:"num",v:e}))))}case"empty?":return void lt(!ot($t(t[0])));case"keys":case"vals":return void pt(bt(t[0])["keys"===e?"keys":"vals"]);case"split":return void pt(ht(t[0]).split(ot(t)>1?ht(t[1]):" ").map((e=>({t:"str",v:e}))));case"join":return void dt(gt(t[0]).map(ct).join(ot(t)>1?ht(t[1]):" "));case"starts-with?":return void lt(Ke(ht(t[0]),ht(t[1])));case"ends-with?":return void lt(We(ht(t[0]),ht(t[1])));case"upper-case":case"lower-case":case"trim":case"trim-start":case"trim-end":return void dt(("upper-case"===e?Ge:"lower-case"===e?Je:"trim"===e?Qe:"trim-start"===e?Xe:Ye)(ht(t[0])));case"str*":{const e=ht(t[0]);return void dt(at(Ie(xt(t[1]),0)).map((t=>e)).join(""))}case"time":return void mt(Ze());case"version":return void mt(20210927);case"tests":{const e=await he(Ft,!(ot(t)&&Ct(t[0]))),o=e.pop();for(const t of e)await Ht("print",[{v:t,t:"str"}],r,n,!1);dt(o)}return;case"symbols":return void pt(function(e,t=!0){let r=t?["function"]:[];r=Se(r,st(G)),r=Se(r,st(e.env.funcs)),r=Se(r,st(e.env.vars));const n=["entry"];return r.filter((e=>!qe(n,e)))}(r,!1).map((e=>({t:"str",v:e}))));case"eval":{delete r.env.funcs.entry;const e=ot(ut),o=await Tt(r,ht(t[0]),n.invocationId);return o?(o.forEach((e=>{e.errCtx.invocationId="evaluated"})),[{e:"Eval",m:"error within evaluated code",errCtx:n},...o]):void(e===ot(ut)&&vt())}case"reset":return r.env.vars={},r.env.funcs={},r.env.lets=[],void vt()}var a;return[{e:"Unexpected",m:"operation doesn't exist",errCtx:n}]}function St(e,t,r,n=!0){const o=[{e:"Arity",m:"one argument required",errCtx:r}];if(kt(t)||"func"===t.t){const s=t.v;return G[s]?t=>Ht(s,t,e,r,n):s in e.env.funcs?t=>Dt(e,e.env.funcs[s],t):s in e.env.vars?St(e,e.env.vars[s],r):s in e.env.lets[ot(e.env.lets)-1]?St(e,e.env.lets[ot(e.env.lets)-1][s],r):Ke(s,"$")?async t=>{if(!ot(t))return o;const n=await e.set(Ue(s,1),t[0]);return ut.push(t[0]),n?[{e:"External",m:n,errCtx:r}]:void 0}:async t=>{const{err:n,value:o}=await e.exe(s,t);return n||ut.push(o),n?[{e:"External",m:n,errCtx:r}]:void 0}}if("clo"===t.t)return r=>Dt(e,t.v,r);if((e=>"key"===e.t)(t))return async e=>{if(!ot(e))return o;if("dict"!==e[0].t){const t=J[e[0].t];return[Et(`keyword as operation argument must be dictionary, not ${t}`,r)]}ut.push(Mt(bt(e[0]),t))};if(wt(t)){const e=Ne(t.v);return async t=>{if(!ot(t))return o;const n=t[0];if("str"!==n.t&&"vec"!==n.t&&"dict"!==n.t){const e=J[n.t];return[Et(`number as operation argument must be string, vector, or dictionary, not ${e}`,r)]}const s=$t(n);ge(e)>=ot(s)?vt():e<0?ut.push(s[ot(s)+e]):ut.push(s[e])}}if((e=>"vec"===e.t)(t)){const{v:e}=t;return async t=>{if(!ot(t))return o;const r=e.find((e=>Pt(e,t[0])));r?ut.push(r):vt()}}if((e=>"dict"===e.t)(t)){const e=t.v;return async t=>{if(1===ot(t))ut.push(Mt(e,t[0]));else{if(2!==ot(t))return[{e:"Arity",m:"dictionary as operation takes one or two arguments only",errCtx:r}];ft(jt(e,t[0],t[1]))}}}if((e=>"bool"==e.t)(t)){const e=t.v;return async t=>{if(!ot(t)||ot(t)>2)return[{e:"Arity",m:"boolean as operation takes one or two arguments only",errCtx:r}];ut.push(e?t[0]:ot(t)>1?t[1]:{t:"null",v:void 0})}}return async e=>[{e:"Operation",m:`${ct(t)} is an invalid operation`,errCtx:r}]}function qt(e){const t=(e,t,r)=>jt(e,{t:"key",v:t},r);return e.map((({e,m:r,errCtx:n})=>{let o=t({keys:[],vals:[]},":e",{t:"str",v:e});return o=t(o,":m",{t:"str",v:r}),o=t(o,":line",{t:"num",v:n.line}),o=t(o,":col",{t:"num",v:n.col}),{t:"dict",v:o}}))}async function Dt(e,t,r,n=!0){--e.callBudget,n&&e.env.lets.push({});for(let n=0,o=ot(t.ins);n<o;++n){const{typ:s,value:a,errCtx:i}=t.ins[n],c=e.loopBudget<1;if(c||e.callBudget<1)return[{e:"Budget",m:(c?"looped":"called")+" too many times",errCtx:i}];switch(s){case"val":ut.push(a);break;case"var":e.env.vars[a]=ut[ot(ut)-1];break;case"let":e.env.lets[ot(e.env.lets)-1][a]=ut[ot(ut)-1];break;case"npa":case"upa":{const e=a;-1===e?pt(r):ot(r)<=e?vt():ut.push(r[e])}break;case"ref":{const t=a;if(G[t])yt(t);else if(Ke(t,"$")){const{value:r,err:n}=await e.get(Ue(t,1));if(n)return[{e:"External",m:n,errCtx:i}];ut.push(r)}else if(t in e.env.vars)ut.push(e.env.vars[t]);else if(t in e.env.lets[ot(e.env.lets)-1])ut.push(e.env.lets[ot(e.env.lets)-1][t]);else{if(!(t in e.env.funcs))return[{e:"Reference",m:`"${t}" did not exist`,errCtx:i}];yt(t)}}break;case"oxe":{const[r,s,i]=a,c=Re(ut,ot(ut)-s,s),u=await r(c);if(u){if(n+1!==o&&"cat"===t.ins[n+1].typ){++n,e.env.lets[ot(e.env.lets)-1].errors={t:"vec",v:qt(u)};break}return u}}break;case"exe":{const s=ut.pop(),c=a,u=Re(ut,ot(ut)-c,c);if(n===o-1&&kt(s)&&s.v===t.name){if(e.env.lets[ot(e.env.lets)-1]={},n=-1,r=u,--e.recurBudget,!e.recurBudget)return[{e:"Budget",m:"recurred too many times",errCtx:i}];continue}const l=St(e,s,i,!1),m=await l(u);if(m){if(n+1!==o&&"cat"===t.ins[n+1].typ){++n,e.env.lets[ot(e.env.lets)-1].errors={t:"vec",v:qt(m)};break}return m}}break;case"or":Ct(ut[ot(ut)-1])?n+=a:ut.pop();break;case"if":Ct(ut.pop())||(n+=a);break;case"jmp":case"cat":n+=a;break;case"loo":n+=a,--e.loopBudget;break;case"pop":Re(ut,ot(ut)-a,a);break;case"ret":a?Re(ut,0,ot(ut)-1):vt(),n=o;break;case"clo":{let[t,n]=a;const o={name:"",ins:n.filter((({typ:e})=>"ref"===e||"npa"===e))},s=await Dt(e,o,r,!1);if(s)return s;n=n.map((e=>"ref"===e.typ||"npa"===e.typ?{typ:"val",value:ut.shift(),errCtx:i}:e)),ut.push({t:"clo",v:{name:t,ins:n}})}}}n&&e.env.lets.pop()}async function Ot(e,t){for(let r=0,n=t.length;r<n;++r)if("oxe"===t[r].typ){const[n,o]=t[r].value,s=St(e,n,t[r].errCtx);t[r].value=[s,o,n]}else"clo"==t[r].typ&&Ot(e,t[r].value[1])}async function Tt(e,t,r){const n=pe(t,r);return ot(n.errors)?n.errors:(e.env.funcs={...e.env.funcs,...n.funcs},"entry"in e.env.funcs?(st(e.env.funcs).forEach((t=>Ot(e,e.env.funcs[t].ins))),await Dt(e,e.env.funcs.entry,[])):void 0)}async function Ft(e,t,r,n=!1){const{callBudget:o,loopBudget:s,recurBudget:a,rangeBudget:i}=e,c=await Tt(e,t,r);return e.env.lets=[],e.callBudget=o,e.recurBudget=a,e.loopBudget=s,e.rangeBudget=i,delete e.env.funcs.entry,!c&&n&&ot(ut)&&await e.exe("print",[{t:"str",v:ct(ut[ot(ut)-1])}]),ut=[],c??[]}const Rt=new Map,Lt=/[\[\]\(\) ,]/;async function Wt(e,t){const r=j().toString();Rt.set(r,t);const n=await Ft(e,t,r,!0);let o=[];return n.forEach((({e,m:t,errCtx:{line:r,col:n,invocationId:s}})=>{const a=Rt.get(s);if(!a)return void o.push({type:"message",text:`${e} Error: line ${r} col ${n}: ${t}\n`});const i=a.split("\n")[r-1],c=l(i,n-1).split(Lt)[0],u=$(l(i,0,n-1));if(o.push({type:"message",text:B(`${r}`,4)+u}),c){const e=l(i,n-1+c.length);o.push({type:"error",text:c}),o.push({type:"message",text:`${e}\n`})}else{const e=l(i,n);o.push({type:"error",text:i[n-1]}),o.push({type:"message",text:`${e}\n`})}o.push({type:"message",text:`${e} Error: ${t}.\n`})})),o}window.insitux=t.invoker})();
//# sourceMappingURL=insitux.js.map