var u=(e,a,t)=>new Promise((s,p)=>{var l=o=>{try{n(t.next(o))}catch(c){p(c)}},i=o=>{try{n(t.throw(o))}catch(c){p(c)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(l,i);n((t=t.apply(e,a)).next())});import{_ as d}from"./BasicForm.vue_vue_type_script_setup_true_lang-JYhgrv7F.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CfukF8FQ.js";import"./componentMap-CBXKN_fS.js";import{u as b}from"./useForm-UmW0oaOL.js";import{a as f,c as P}from"./entry/index-DMz5qVkq-1713753726260.js";import{P as _}from"./index-CIC2nXu3.js";import{d as g,Z as h,a8 as x,a9 as v,k as w,u as m}from"./vue-Bomv9rUv.js";import"./FormItem.vue_vue_type_script_lang-B3Fn1oUb.js";import"./helper-DNRm6OmB.js";import"./antd-c_3tW9kT.js";import"./index-Cj8TCWsj.js";import"./useWindowSizeFn-BpMOi9pT.js";import"./useFormItem-BAhrPJtx.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DlANmKH1.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DCxXKyvk.js";import"./download-CQ5Efk9O.js";import"./base64Conver-bBv-IO2K.js";import"./index-5k3NMOt9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-zJmqSH_g.js";import"./copyTextToClipboard-B2xNkLuA.js";import"./index-CfpYDKnl.js";import"./index-BLh8f7DY.js";import"./useContentViewHeight-DOfn8qgl.js";import"./onMountedOrActivated-BNzcbw1k.js";const r={span:8},B=[{field:"title",component:"Input",label:"标题",colProps:r,componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",colProps:r,required:!0},{field:"client",component:"Input",colProps:r,label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"weights",component:"InputNumber",label:"权重",colProps:r,subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>Number(e.replace("%","")),placeholder:"请输入"}},{field:"target",component:"InputTextArea",label:"目标描述",colProps:r,componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",colProps:r,componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"inviteer",component:"Input",label:"邀评人",colProps:{span:8},subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",colProps:{span:16},itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],I=g({name:"FormBasicPage",__name:"index",setup(e){const{createMessage:a}=f(),[t,{validate:s,setProps:p}]=b({labelCol:{span:8},wrapperCol:{span:15},schemas:B,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"提交"},submitFunc:l});function l(){return u(this,null,function*(){try{yield s(),p({submitButtonOptions:{loading:!0}}),setTimeout(()=>{p({submitButtonOptions:{loading:!1}}),a.success("提交成功！")},2e3)}catch(i){}})}return(i,n)=>(h(),x(m(_),{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:v(()=>[w(m(d),{onRegister:m(t)},null,8,["onRegister"])]),_:1}))}}),U=P(I,[["__scopeId","data-v-c1a69db9"]]);export{U as default};
