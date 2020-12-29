(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,a,n){e.exports=n.p+"d8f1f97a4cae0dc022917eb4f3780f6f.webp"},14:function(e,a,n){n(15),n(34),e.exports=n(31)},29:function(e,a,n){var t={"./0-title.md":30};function l(e){var a=r(e);return n(a)}function r(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}l.keys=function(){return Object.keys(t)},l.resolve=r,e.exports=l,l.id=29},30:function(e,a,n){"use strict";n.r(a),n.d(a,"slides",(function(){return u})),n.d(a,"fusumaProps",(function(){return p})),n.d(a,"default",(function(){return s}));var t=n(2),l=n.n(t),r=n(1);function c(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var u=[function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h1",null,"RecordとTupleが変えるJavaScriptのmutability"),Object(r.a)("h3",null,"2019-12-20 @arayaryoma"),Object(r.a)("h3",null,"at つくばexpress.js #1"))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"自己紹介"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"あらや / Ryoma Abe"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://twitter.com/arayaryoma"}),"arayaryoma")),Object(r.a)("li",{parentName:"ul"},"元フラー社員, 元柏の葉在住"),Object(r.a)("li",{parentName:"ul"},"フロントエンドエンジニア"),Object(r.a)("li",{parentName:"ul"},"Web標準が好き")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"現職"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"株式会社ヘマタイト"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://ctfkit.com"}),"https://ctfkit.com"),Object(r.a)("img",o({src:n(10)},{alt:"CTFKit"})))))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"JSのmutabilityおさらい"))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"const")," で宣言された変数は再代入できない"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"// TypeError: Assignment to constant variable.\n\nconst num = 0;\nnum++;\n\nconst str = 'hello';\nstr = 'bye'; \n\nconst isFree = false;\nisFree = true;\n\nconst nullable = null;\nnullable = 100;\n\nconst undef = undefined;\nundef = 500;\n\nconst bigNum = 100000000000000000000000000n\nbigNum = 0;\n\nconst sym = Symbol('hello');\nsym = Symbol('');\n\nconst obj = {a: 'hello'};\nobj = {a: 'bye'};\n\nconst arr = [1,2];\narr = [3]\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"object"),"と",Object(r.a)("inlineCode",{parentName:"p"},"Array"),"は",Object(r.a)("strong",{parentName:"p"},"再代入不可"),"だが",Object(r.a)("strong",{parentName:"p"},"immutable"),"ではない"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const person = {\n    name: 'Araya',\n    age: 24\n}\nperson.age++;\nconsole.log(person); // { name: 'Araya', age: 25 }\n\nconst stations = ['柏の葉キャンパス', '流山おおたかの森'];\nstations.push('流山セントラルパーク');\nstations.shift(); \nconsole.log(stations); // [ '流山おおたかの森', '流山セントラルパーク' ]\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("p",null,"元の値を変更しないものもある"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const arr1 = [1,2,[3,4,5]];\nconst flatten = arr1.flat();\nconsole.log(arr1); // [ 1, 2, [ 3, 4, 5 ] ]\nconsole.log(flatten); // [ 1, 2, 3, 4, 5 ] \n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"現代でのmutabilityとの戦い"))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"Object.freeze")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = {\n    name: 'Araya',\n    age: 24\n}\nObject.freeze(person);\nperson.age++;\nconsole.log(person); // { name: 'Araya', age: 24 }\n")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"エラーはthrowされない"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"shallow freeze"),"であることに注意")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = {\n    name: 'Araya',\n    age: 24,\n    company: {\n        name: 'Hematite Inc.',\n        place: 'Tokyo'\n    }\n}\nObject.freeze(person);\nperson.company.place = 'Antarctica';\nconsole.log(person.company.place) // Antarctica\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("p",null,"Spread syntax (スプレッド構文)"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = {\n    name: 'Araya',\n    age: 24\n}\nconst clone = {...person, age: person.age + 1}\nconsole.log(person); // { name: 'Araya', age: 24 }\nconsole.log(clone); // { name: 'Araya', age: 25 }\n\nconst stations = ['柏の葉キャンパス', '流山おおたかの森'];\nconst added = [...stations, '流山セントラルパーク']\nconsole.log(stations);  // [ '柏の葉キャンパス', '流山おおたかの森' ]\nconsole.log(added) // [ '柏の葉キャンパス', '流山おおたかの森', '流山セントラルパーク' ]\n")),Object(r.a)("p",null,"objectのプロパティなどを直接書き換えるのを禁止して、必ず新しい変数を作る。"))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("p",null,"Libraries"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://github.com/immutable-js/immutable-js"}),"https://github.com/immutable-js/immutable-js")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://github.com/kolodny/immutability-helper"}),"https://github.com/kolodny/immutability-helper"))))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"ここまでのまとめ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"JavaScriptのobjectはmutable"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Object.deepFreeze")," を別途実装したり、Immutable.js のライブラリが使われている"),Object(r.a)("li",{parentName:"ul"},"言語レベルでimmutableなobjectは求められている")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"Record & Tuple"),Object(r.a)("p",null,Object(r.a)("a",o({parentName:"p"},{href:"https://github.com/tc39/proposal-record-tuple"}),"https://github.com/tc39/proposal-record-tuple")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"Record & Tuple"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"TC39に提出されているproposalの1つ。"),Object(r.a)("li",{parentName:"ul"},"2019年12月20日時点でStage1。"),Object(r.a)("li",{parentName:"ul"},"提案されたのは2019年4月頃"),Object(r.a)("li",{parentName:"ul"},"TC39に出されるproposalとしてはかなり順調(に見える)"),Object(r.a)("li",{parentName:"ul"},"残念ながら現在babel pluginなどはなさそう・・・")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"Record"),Object(r.a)("h3",null,"基本のSyntax"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const record = #{\n    a: 1,\n    b: 2,\n    c: 3,\n};\nrecord.a === 1; // true\nrecord['a'] === 1; //true\n\nrecord.a = 100 // TypeError\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"スプレッド構文"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const record2 = #{...record1, b: 5};\nrecord1 !== record2; //true\nrecord2 === #{ a: 1, c: 3, b: 5 }; // true\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"Iteration"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const record = #{ a: 1, b: 2 };\n\n// TypeError: record is not iterable\nfor (const o of record) { console.log(o); }\n")),Object(r.a)("p",null,"Recordはiterableではない"))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"objectからRecord型のオブジェクトを作る"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const obj = {a: 1, b: 2, c: 3};\nconst record = Record.from(obj);\nRecord.from({ a: {} }); // TypeError: Can't convert Object with a non-const value to Record\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"Tuple"),Object(r.a)("h3",null,"基本のSyntax"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const tuple = #[1, 2, 3];\ntuple[0] === 1; // true\ntuple[0] = 100; // TypeError\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,Object(r.a)("inlineCode",{parentName:"h3"},"with")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const tuple1 = #[1, 2, 3];\nconst tuple2 = tuple1.with(0, 2);\ntuple1 !== tuple2; // true\ntuple2 === #[2, 2, 3]; // true\n\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"スプレッド構文"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const tuple1 = #[1, 2, 3];\nconst tuple2 = #[1, ...tuple1];\ntuple2 === #[1, 1, 2, 3]; // true\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,Object(r.a)("inlineCode",{parentName:"h3"},"push"),", ",Object(r.a)("inlineCode",{parentName:"h3"},"pop")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const tuple1 = #[1, 2, 3];\n\nconst pushed = tuple1.push(4);\npushed === #[1, 2, 3, 4]; // true\n\nconst popped = tuple4.pop();\npopped === #[1, 2, 3]; // true\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"Iteration"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"for (const o of tuple) { console.log(o); }\n// 1\n// 2\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h3",null,"Array型のオブジェクトからTuple型のオブジェクトを作る"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const tuple = Tuple.from([1, 2, 3]);\nconst tuple2 = Tuple.from([{}, {} , {}]); // // TypeError: Can't convert Iterable with a non-const value to Tuple\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"気をつけること"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"#{...}"),"はshallow freezeと同質"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = #{\n    name: 'Araya',\n    age: 24,\n    company: { // この中はmutable\n        name: 'Hematite Inc.',\n        place: 'Tokyo'\n    }\n}\n")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const imPerson = #{\n    name: 'Araya',\n    age: 24,\n    company: #{ // immutable\n        name: 'Hematite Inc.',\n        place: 'Tokyo'\n    }\n}\n")),Object(r.a)("p",null,"これについてはTupleも同様"))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,Object(r.a)("inlineCode",{parentName:"h2"},"JSON.stringify")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(record)"),"は",Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(object)"),"と同じ結果"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(tuple)"),"は",Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(array)"),"と同じ結果")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"JSON.stringify(#{ a: #[1, 2, 3] }); // '{\"a\":[1,2,3]}'\nJSON.stringify(#[true, #{ a: #[1, 2, 3] }]); // '[true,{\"a\":[1,2,3]}]'\n")))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,Object(r.a)("inlineCode",{parentName:"h2"},"typeof")),Object(r.a)("p",null,"現在のところどちらも",Object(r.a)("inlineCode",{parentName:"p"},"record"),"になるのが妥当だと考えられている"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),'typeof {a: 1} === "object";\ntypeof [1, 2] === "object";\n\ntypeof #{ a: 1 } === "record";\ntypeof #[1, 2]   === "record";\n')))},function(e){return Object(r.a)(l.a.Fragment,null,Object(r.a)("h2",null,"まとめ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"RecordとTupleはJSのランタイムにimmutableな世界をもたらす"),Object(r.a)("li",{parentName:"ul"},"すべてをimmutableにするのではなくて、",Object(r.a)("strong",{parentName:"li"},"mutable/immutableを明示的に書ける"),"ことが重要"),Object(r.a)("li",{parentName:"ul"},"まだ使うことはできないが、期待値は高め(完全に発表者の主観。みなさんはどう思いますか？)"),Object(r.a)("li",{parentName:"ul"},"詳しくは",Object(r.a)("a",o({parentName:"li"},{href:"https://github.com/tc39/proposal-record-tuple/commits/master"}),"proposal"),"を見てください"),Object(r.a)("li",{parentName:"ul"},"TypeScriptのRecordとTupleは・・・RecordとTupleにコンパイルされる・・・？\n(しかし中身はただのUtility type...)")))}],p=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],b={slides:u};function s(e){var a=e.components,t=c(e,["components"]);return Object(r.a)("wrapper",o({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h1",null,"RecordとTupleが変えるJavaScriptのmutability"),Object(r.a)("h3",null,"2019-12-20 @arayaryoma"),Object(r.a)("h3",null,"at つくばexpress.js #1"),Object(r.a)("hr",null),Object(r.a)("h2",null,"自己紹介"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"あらや / Ryoma Abe"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://twitter.com/arayaryoma"}),"arayaryoma")),Object(r.a)("li",{parentName:"ul"},"元フラー社員, 元柏の葉在住"),Object(r.a)("li",{parentName:"ul"},"フロントエンドエンジニア"),Object(r.a)("li",{parentName:"ul"},"Web標準が好き")),Object(r.a)("hr",null),Object(r.a)("h3",null,"現職"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"株式会社ヘマタイト"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://ctfkit.com"}),"https://ctfkit.com"),Object(r.a)("img",o({src:n(10)},{alt:"CTFKit"})))),Object(r.a)("hr",null),Object(r.a)("h2",null,"JSのmutabilityおさらい"),Object(r.a)("hr",null),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"const")," で宣言された変数は再代入できない"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"// TypeError: Assignment to constant variable.\n\nconst num = 0;\nnum++;\n\nconst str = 'hello';\nstr = 'bye'; \n\nconst isFree = false;\nisFree = true;\n\nconst nullable = null;\nnullable = 100;\n\nconst undef = undefined;\nundef = 500;\n\nconst bigNum = 100000000000000000000000000n\nbigNum = 0;\n\nconst sym = Symbol('hello');\nsym = Symbol('');\n\nconst obj = {a: 'hello'};\nobj = {a: 'bye'};\n\nconst arr = [1,2];\narr = [3]\n")),Object(r.a)("hr",null),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"object"),"と",Object(r.a)("inlineCode",{parentName:"p"},"Array"),"は",Object(r.a)("strong",{parentName:"p"},"再代入不可"),"だが",Object(r.a)("strong",{parentName:"p"},"immutable"),"ではない"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const person = {\n    name: 'Araya',\n    age: 24\n}\nperson.age++;\nconsole.log(person); // { name: 'Araya', age: 25 }\n\nconst stations = ['柏の葉キャンパス', '流山おおたかの森'];\nstations.push('流山セントラルパーク');\nstations.shift(); \nconsole.log(stations); // [ '流山おおたかの森', '流山セントラルパーク' ]\n")),Object(r.a)("hr",null),Object(r.a)("p",null,"元の値を変更しないものもある"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const arr1 = [1,2,[3,4,5]];\nconst flatten = arr1.flat();\nconsole.log(arr1); // [ 1, 2, [ 3, 4, 5 ] ]\nconsole.log(flatten); // [ 1, 2, 3, 4, 5 ] \n")),Object(r.a)("hr",null),Object(r.a)("h2",null,"現代でのmutabilityとの戦い"),Object(r.a)("hr",null),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"Object.freeze")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = {\n    name: 'Araya',\n    age: 24\n}\nObject.freeze(person);\nperson.age++;\nconsole.log(person); // { name: 'Araya', age: 24 }\n")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"エラーはthrowされない"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"shallow freeze"),"であることに注意")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = {\n    name: 'Araya',\n    age: 24,\n    company: {\n        name: 'Hematite Inc.',\n        place: 'Tokyo'\n    }\n}\nObject.freeze(person);\nperson.company.place = 'Antarctica';\nconsole.log(person.company.place) // Antarctica\n")),Object(r.a)("hr",null),Object(r.a)("p",null,"Spread syntax (スプレッド構文)"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = {\n    name: 'Araya',\n    age: 24\n}\nconst clone = {...person, age: person.age + 1}\nconsole.log(person); // { name: 'Araya', age: 24 }\nconsole.log(clone); // { name: 'Araya', age: 25 }\n\nconst stations = ['柏の葉キャンパス', '流山おおたかの森'];\nconst added = [...stations, '流山セントラルパーク']\nconsole.log(stations);  // [ '柏の葉キャンパス', '流山おおたかの森' ]\nconsole.log(added) // [ '柏の葉キャンパス', '流山おおたかの森', '流山セントラルパーク' ]\n")),Object(r.a)("p",null,"objectのプロパティなどを直接書き換えるのを禁止して、必ず新しい変数を作る。"),Object(r.a)("hr",null),Object(r.a)("p",null,"Libraries"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://github.com/immutable-js/immutable-js"}),"https://github.com/immutable-js/immutable-js")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",o({parentName:"li"},{href:"https://github.com/kolodny/immutability-helper"}),"https://github.com/kolodny/immutability-helper"))),Object(r.a)("hr",null),Object(r.a)("h2",null,"ここまでのまとめ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"JavaScriptのobjectはmutable"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Object.deepFreeze")," を別途実装したり、Immutable.js のライブラリが使われている"),Object(r.a)("li",{parentName:"ul"},"言語レベルでimmutableなobjectは求められている")),Object(r.a)("hr",null),Object(r.a)("h2",null,"Record & Tuple"),Object(r.a)("p",null,Object(r.a)("a",o({parentName:"p"},{href:"https://github.com/tc39/proposal-record-tuple"}),"https://github.com/tc39/proposal-record-tuple")),Object(r.a)("hr",null),Object(r.a)("h3",null,"Record & Tuple"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"TC39に提出されているproposalの1つ。"),Object(r.a)("li",{parentName:"ul"},"2019年12月20日時点でStage1。"),Object(r.a)("li",{parentName:"ul"},"提案されたのは2019年4月頃"),Object(r.a)("li",{parentName:"ul"},"TC39に出されるproposalとしてはかなり順調(に見える)"),Object(r.a)("li",{parentName:"ul"},"残念ながら現在babel pluginなどはなさそう・・・")),Object(r.a)("hr",null),Object(r.a)("h2",null,"Record"),Object(r.a)("h3",null,"基本のSyntax"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const record = #{\n    a: 1,\n    b: 2,\n    c: 3,\n};\nrecord.a === 1; // true\nrecord['a'] === 1; //true\n\nrecord.a = 100 // TypeError\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,"スプレッド構文"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const record2 = #{...record1, b: 5};\nrecord1 !== record2; //true\nrecord2 === #{ a: 1, c: 3, b: 5 }; // true\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,"Iteration"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const record = #{ a: 1, b: 2 };\n\n// TypeError: record is not iterable\nfor (const o of record) { console.log(o); }\n")),Object(r.a)("p",null,"Recordはiterableではない"),Object(r.a)("hr",null),Object(r.a)("h3",null,"objectからRecord型のオブジェクトを作る"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const obj = {a: 1, b: 2, c: 3};\nconst record = Record.from(obj);\nRecord.from({ a: {} }); // TypeError: Can't convert Object with a non-const value to Record\n")),Object(r.a)("hr",null),Object(r.a)("h2",null,"Tuple"),Object(r.a)("h3",null,"基本のSyntax"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const tuple = #[1, 2, 3];\ntuple[0] === 1; // true\ntuple[0] = 100; // TypeError\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,Object(r.a)("inlineCode",{parentName:"h3"},"with")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const tuple1 = #[1, 2, 3];\nconst tuple2 = tuple1.with(0, 2);\ntuple1 !== tuple2; // true\ntuple2 === #[2, 2, 3]; // true\n\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,"スプレッド構文"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"const tuple1 = #[1, 2, 3];\nconst tuple2 = #[1, ...tuple1];\ntuple2 === #[1, 1, 2, 3]; // true\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,Object(r.a)("inlineCode",{parentName:"h3"},"push"),", ",Object(r.a)("inlineCode",{parentName:"h3"},"pop")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const tuple1 = #[1, 2, 3];\n\nconst pushed = tuple1.push(4);\npushed === #[1, 2, 3, 4]; // true\n\nconst popped = tuple4.pop();\npopped === #[1, 2, 3]; // true\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,"Iteration"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"for (const o of tuple) { console.log(o); }\n// 1\n// 2\n")),Object(r.a)("hr",null),Object(r.a)("h3",null,"Array型のオブジェクトからTuple型のオブジェクトを作る"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const tuple = Tuple.from([1, 2, 3]);\nconst tuple2 = Tuple.from([{}, {} , {}]); // // TypeError: Can't convert Iterable with a non-const value to Tuple\n")),Object(r.a)("hr",null),Object(r.a)("h2",null,"気をつけること"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"#{...}"),"はshallow freezeと同質"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const person = #{\n    name: 'Araya',\n    age: 24,\n    company: { // この中はmutable\n        name: 'Hematite Inc.',\n        place: 'Tokyo'\n    }\n}\n")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"const imPerson = #{\n    name: 'Araya',\n    age: 24,\n    company: #{ // immutable\n        name: 'Hematite Inc.',\n        place: 'Tokyo'\n    }\n}\n")),Object(r.a)("p",null,"これについてはTupleも同様"),Object(r.a)("hr",null),Object(r.a)("h2",null,Object(r.a)("inlineCode",{parentName:"h2"},"JSON.stringify")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(record)"),"は",Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(object)"),"と同じ結果"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(tuple)"),"は",Object(r.a)("inlineCode",{parentName:"li"},"JSON.stringify(array)"),"と同じ結果")),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),"JSON.stringify(#{ a: #[1, 2, 3] }); // '{\"a\":[1,2,3]}'\nJSON.stringify(#[true, #{ a: #[1, 2, 3] }]); // '[true,{\"a\":[1,2,3]}]'\n")),Object(r.a)("hr",null),Object(r.a)("h2",null,Object(r.a)("inlineCode",{parentName:"h2"},"typeof")),Object(r.a)("p",null,"現在のところどちらも",Object(r.a)("inlineCode",{parentName:"p"},"record"),"になるのが妥当だと考えられている"),Object(r.a)("pre",null,Object(r.a)("code",o({parentName:"pre"},{className:"language-js"}),'typeof {a: 1} === "object";\ntypeof [1, 2] === "object";\n\ntypeof #{ a: 1 } === "record";\ntypeof #[1, 2]   === "record";\n')),Object(r.a)("hr",null),Object(r.a)("h2",null,"まとめ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"RecordとTupleはJSのランタイムにimmutableな世界をもたらす"),Object(r.a)("li",{parentName:"ul"},"すべてをimmutableにするのではなくて、",Object(r.a)("strong",{parentName:"li"},"mutable/immutableを明示的に書ける"),"ことが重要"),Object(r.a)("li",{parentName:"ul"},"まだ使うことはできないが、期待値は高め(完全に発表者の主観。みなさんはどう思いますか？)"),Object(r.a)("li",{parentName:"ul"},"詳しくは",Object(r.a)("a",o({parentName:"li"},{href:"https://github.com/tc39/proposal-record-tuple/commits/master"}),"proposal"),"を見てください"),Object(r.a)("li",{parentName:"ul"},"TypeScriptのRecordとTupleは・・・RecordとTupleにコンパイルされる・・・？\n(しかし中身はただのUtility type...)")))}s.isMDXComponent=!0},32:function(e,a,n){var t=n(3),l=n(33);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1},c=(t(e.i,l,r),l.locals?l.locals:{});e.exports=c},33:function(e,a,n){}},[[14,6,7]],[1,9]]);