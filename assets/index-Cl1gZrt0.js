import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-077tC9Tw.js";import"./TableImg.vue_vue_type_style_index_0_lang-C4BwxxbX.js";import{a as C}from"./componentMap-CBXKN_fS.js";import{u as x}from"./useTable-CPs0EmNC.js";import{d as k}from"./system-CGKljnlq.js";import{u as w}from"./index-D3Z6fJae.js";import{_ as y,c as T,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-DOSpFVJ0.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as e,ab as M,y as N}from"./vue-Bomv9rUv.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-JYhgrv7F.js";import"./FormItem.vue_vue_type_script_lang-B3Fn1oUb.js";import"./entry/index-DMz5qVkq-1713753726260.js";import"./antd-c_3tW9kT.js";import"./helper-DNRm6OmB.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CfukF8FQ.js";import"./index-Cj8TCWsj.js";import"./useWindowSizeFn-BpMOi9pT.js";import"./useForm-UmW0oaOL.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DlANmKH1.js";import"./useFormItem-BAhrPJtx.js";import"./onMountedOrActivated-BNzcbw1k.js";import"./useSortable-DCxXKyvk.js";import"./download-CQ5Efk9O.js";import"./base64Conver-bBv-IO2K.js";import"./index-5k3NMOt9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-zJmqSH_g.js";import"./copyTextToClipboard-B2xNkLuA.js";import"./index-CfpYDKnl.js";import"./index-BLh8f7DY.js";const pe=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(t){i(!0,{record:t,isUpdate:!0})}function d(t){}function f(){l()}function _(){N(c)}return(t,$)=>{const h=D("a-button");return a(),v("div",null,[o(e(g),{onRegister:e(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(e(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(y,{onRegister:e(s),onSuccess:f},null,8,["onRegister"])])}}});export{pe as default};
