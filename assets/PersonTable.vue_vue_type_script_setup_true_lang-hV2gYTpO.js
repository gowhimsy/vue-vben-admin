import{_ as C}from"./BasicTable.vue_vue_type_script_setup_true_lang-077tC9Tw.js";import"./TableImg.vue_vue_type_style_index_0_lang-C4BwxxbX.js";import{a as x}from"./componentMap-CBXKN_fS.js";import{u as N}from"./useTable-CPs0EmNC.js";import{d as y,a7 as g,Z as s,_ as E,k as d,a9 as u,a8 as B,u as l,ab as I,G as R}from"./vue-Bomv9rUv.js";const V=y({__name:"PersonTable",setup(P,{expose:c}){const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],f=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],[p,{getDataSource:a}]=N({columns:m,showIndexColumn:!1,dataSource:f,actionColumn:{width:160,title:"操作",dataIndex:"action"},scroll:{y:"100%"},pagination:!1});c({getDataSource:a});function k(e){var n;(n=e.onEdit)==null||n.call(e,!0)}function r(e){var n;if((n=e.onEdit)==null||n.call(e,!1),e.isNew){const t=a(),o=t.findIndex(i=>i.key===e.key);t.splice(o,1)}}function _(e){var n;(n=e.onEdit)==null||n.call(e,!1,!0)}function b(e){}function h(){const e=a(),n={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(n)}function w(e){return e.editable?[{label:"保存",onClick:_.bind(null,e)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:r.bind(null,e)}}]:[{label:"编辑",onClick:k.bind(null,e)},{label:"删除"}]}return(e,n)=>{const t=g("a-button");return s(),E("div",null,[d(l(C),{onRegister:l(p),onEditChange:b},{bodyCell:u(({column:o,record:i})=>[o.key==="action"?(s(),B(l(x),{key:0,actions:w(i)},null,8,["actions"])):I("",!0)]),_:1},8,["onRegister"]),d(t,{block:"",class:"mt-5",type:"dashed",onClick:h},{default:u(()=>[R(" 新增成员 ")]),_:1})])}}});export{V as _};
