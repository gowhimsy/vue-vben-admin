import{e as d}from"./formItemPropsConfig-VrJHNsuo.js";import C from"./RuleProps-eMFs8frA.js";import{u as y}from"./useFormDesignState-CCORBoku.js";import{aH as _,E as I,a2 as P,Z as b,ay as k,a3 as v,W as F,az as g,bn as h}from"./antd-c_3tW9kT.js";import{d as E,a7 as m,Z as r,_ as n,a8 as s,a9 as p,F as w,aa as S,ai as $,ac as A,ab as a}from"./vue-Bomv9rUv.js";import{c as B}from"./entry/index-DMz5qVkq-1713753726260.js";import"./formItemConfig-Dxal8nb9.js";import"./componentMap-CBXKN_fS.js";import"./useFormItem-BAhrPJtx.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DlANmKH1.js";import"./index-Cj8TCWsj.js";import"./useWindowSizeFn-BpMOi9pT.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DCxXKyvk.js";import"./download-CQ5Efk9O.js";import"./base64Conver-bBv-IO2K.js";import"./index-5k3NMOt9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-zJmqSH_g.js";import"./copyTextToClipboard-B2xNkLuA.js";import"./index-CfpYDKnl.js";import"./index-BLh8f7DY.js";import"./index-D5ZNDZH3.js";const D=E({name:"FormItemProps",components:{RuleProps:C,Empty:_,Input:I,Form:P,FormItem:b,Switch:k,Checkbox:v,Select:F,Slider:g},setup(){const{formConfig:o}=y();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&h(t)?!t.includes(o.value.currentItem.component):!0}}}),U={class:"properties-content"},Z={key:0,class:"properties-body"};function z(o,i,t,H,L,N){const c=m("Empty"),l=m("FormItem"),u=m("Form");return r(),n("div",U,[o.formConfig.currentItem?(r(),n("div",Z,[o.formConfig.currentItem.key?(r(),s(u,{key:1,"label-align":"left",layout:"vertical"},{default:p(()=>[(r(!0),n(w,null,S(o.baseItemColumnProps,e=>(r(),n("div",{key:e.name},[o.showProps(e.exclude)?(r(),s(l,{key:0,label:e.label},{default:p(()=>[o.formConfig.currentItem.colProps&&e.component?(r(),s($(e.component),A({key:0,class:"component-props"},e.componentProps,{value:o.formConfig.currentItem.colProps[e.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[e.name]=f}),null,16,["value","onUpdate:value"])):a("",!0)]),_:2},1032,["label"])):a("",!0)]))),128))]),_:1})):(r(),s(c,{key:0,class:"hint-box",description:"未选择控件"}))])):a("",!0)])}const ao=B(D,[["render",z]]);export{ao as default};
