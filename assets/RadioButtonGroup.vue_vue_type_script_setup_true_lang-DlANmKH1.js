import{u as v}from"./useFormItem-BAhrPJtx.js";import{l as g,ak as u}from"./antd-c_3tW9kT.js";import{d as k,f as _,c as b,Z as o,a8 as i,a9 as p,_ as B,aa as y,u as t,G as C,a0 as R,F as S,ac as x,H as A}from"./vue-Bomv9rUv.js";import{r as G}from"./entry/index-DMz5qVkq-1713753726260.js";const w=k({name:"RadioButtonGroup",__name:"RadioButtonGroup",props:{value:{type:[String,Number,Boolean]},options:{type:Array,default:()=>[]}},setup(c){const n=c,d=G(),l=_([]),[r]=v(n,"value","change",l),m=b(()=>{const{options:a}=n;return!a||(a==null?void 0:a.length)===0?[]:a.some(e=>g(e))?a.map(e=>({label:e,value:e})):a});function f(...a){l.value=a}return(a,s)=>(o(),i(t(u).Group,x(t(d),{value:t(r),"onUpdate:value":s[0]||(s[0]=e=>A(r)?r.value=e:null),"button-style":"solid"}),{default:p(()=>[(o(!0),B(S,null,y(m.value,e=>(o(),i(t(u).Button,{key:`${e.value}`,value:e.value,disabled:e.disabled,onClick:h=>f(e)},{default:p(()=>[C(R(e.label),1)]),_:2},1032,["value","disabled","onClick"]))),128))]),_:1},16,["value"]))}});export{w as _};
