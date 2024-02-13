import{b as l,f as w}from"./components-60ec569f.js";import{a as x,c as y}from"./bootstrap-85a9f35f.js";import C from"./ns-alert-popup-9b1871ce.js";import{n as L,d as Q,b as k,c as U}from"./ns-prompt-popup-116db3d0.js";import{n as V,a as O}from"./ns-orders-preview-popup-e6fd65fe.js";import{n as S}from"./ns-procurement-quantity-bd4332c6.js";import{_ as q,n as A}from"./currency-f8bd78d1.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as d,a as e,t as o,f as p,w as _,F as j,b as N,e as m,g as D,s as E}from"./runtime-core.esm-bundler-ed35d834.js";import"./ns-avatar-image-304d39fb.js";import"./index.es-25aa42ee.js";const F={name:"ns-products-preview",props:["popup"],computed:{product(){return this.popup.params.product}},methods:{__:q,nsCurrency:A,changeActiveTab(t){this.active=t,this.active==="units-quantities"&&this.loadProductQuantities()},loadProductQuantities(){this.hasLoadedUnitQuantities=!1,x.get(`/api/products/${this.product.id}/units/quantities`).subscribe(t=>{this.unitQuantities=t,this.hasLoadedUnitQuantities=!0})}},data(){return{active:"units-quantities",unitQuantities:[],hasLoadedUnitQuantities:!1}},mounted(){this.loadProductQuantities()}},M={class:"shadow-lg w-6/7-screen lg:w-3/5-screen h-6/7-screen lg:h-4/5-screen ns-box overflow-hidden flex flex-col"},R={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},T={class:"flex-auto overflow-y-auto ns-box-body"},z={class:"p-2"},H={key:0,class:"table ns-table w-full"},I={class:"p-1 border"},W={width:"150",class:"text-right p-1 border"},G={width:"150",class:"text-right p-1 border"},J={width:"150",class:"text-right p-1 border"},K={class:"p-1 border text-left"},X={class:"p-1 border text-right"},Y={class:"p-1 border text-right"},Z={class:"p-1 border text-right"};function $(t,i,f,et,a,s){const b=c("ns-close-button"),P=c("ns-spinner"),v=c("ns-tabs-item"),g=c("ns-tabs");return r(),d("div",M,[e("div",R,[e("div",null,o(s.__("Previewing :"))+" "+o(s.product.name),1),e("div",null,[p(b,{onClick:i[0]||(i[0]=n=>f.popup.close())})])]),e("div",T,[e("div",z,[p(g,{active:a.active,onActive:i[1]||(i[1]=n=>s.changeActiveTab(n))},{default:_(()=>[p(v,{label:s.__("Units & Quantities"),identifier:"units-quantities"},{default:_(()=>[a.hasLoadedUnitQuantities?(r(),d("table",H,[e("thead",null,[e("tr",null,[e("th",I,o(s.__("Unit")),1),e("th",W,o(s.__("Sale Price")),1),e("th",G,o(s.__("Wholesale Price")),1),e("th",J,o(s.__("Quantity")),1)])]),e("tbody",null,[(r(!0),d(j,null,N(a.unitQuantities,n=>(r(),d("tr",{key:n.id},[e("td",K,o(n.unit.name),1),e("td",X,o(s.nsCurrency(n.sale_price)),1),e("td",Y,o(s.nsCurrency(n.wholesale_price)),1),e("td",Z,o(n.quantity),1)]))),128))])])):m("",!0),a.hasLoadedUnitQuantities?m("",!0):(r(),D(P,{key:1,size:"16",border:"4"}))]),_:1},8,["label"])]),_:1},8,["active"])])])])}const tt=B(F,[["render",$]]),h={nsOrderPreview:V,nsProductPreview:tt,nsAlertPopup:C,nsConfirmPopup:L,nsPromptPopup:Q,nsMediaPopup:w,nsProcurementQuantity:S,nsOrdersRefund:O,nsSelectPopup:k,nsPOSLoadingPopup:U};for(let t in h)window[t]=h[t];const u=y({data(){return{popups:[],defaultClass:"absolute top-0 left-0 w-full h-full items-center flex overflow-y-auto justify-center is-popup"}},mounted(){nsState.subscribe(t=>{t.popups!==void 0&&(this.popups=E(t.popups),this.$forceUpdate())})},methods:{closePopup(t,i){Object.values(i.target.classList).includes("is-popup")&&t.config!==void 0&&[void 0,!0].includes(t.config.closeOnOverlayClick)&&(i.stopPropagation(),t.close())},preventPropagation(t){t.stopImmediatePropagation()}}});for(let t in l)u.component(t,l[t]);document.addEventListener("DOMContentLoaded",()=>{u.mount("#dashboard-popups"),window.nsPopups=u});