import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-077tC9Tw.js";import"./TableImg.vue_vue_type_style_index_0_lang-C4BwxxbX.js";import{a as l}from"./componentMap-CBXKN_fS.js";import{u as s}from"./useTable-CPs0EmNC.js";import{d as c}from"./table-CJdG4kZL.js";import{d as u,Z as o,_ as f,k as _,a9 as x,a8 as b,u as t,ab as h}from"./vue-Bomv9rUv.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-JYhgrv7F.js";import"./FormItem.vue_vue_type_script_lang-B3Fn1oUb.js";import"./entry/index-DMz5qVkq-1713753726260.js";import"./antd-c_3tW9kT.js";import"./helper-DNRm6OmB.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CfukF8FQ.js";import"./index-Cj8TCWsj.js";import"./useWindowSizeFn-BpMOi9pT.js";import"./useForm-UmW0oaOL.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DlANmKH1.js";import"./useFormItem-BAhrPJtx.js";import"./onMountedOrActivated-BNzcbw1k.js";import"./useSortable-DCxXKyvk.js";import"./download-CQ5Efk9O.js";import"./base64Conver-bBv-IO2K.js";import"./index-5k3NMOt9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-zJmqSH_g.js";import"./copyTextToClipboard-B2xNkLuA.js";import"./index-CfpYDKnl.js";import"./index-BLh8f7DY.js";const w={class:"p-4"},U=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(e){}function m(e){}return(e,I)=>(o(),f("div",w,[_(t(p),{onRegister:t(r)},{bodyCell:x(({column:d,record:i})=>[d.key==="action"?(o(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,i)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{U as default};
