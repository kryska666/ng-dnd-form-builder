"use strict";(self.webpackChunkng_dnd_forms=self.webpackChunkng_dnd_forms||[]).push([[450],{7450:(G,u,l)=>{l.r(u),l.d(u,{MaterialExampleModule:()=>$});var p=l(9808),s=l(3075),c=l(1423),g=l(9665),_=l(7665),v=l(9945),C=l(6152),f=l(190),M=l(5469),x=l(8555),t=l(5e3),y=l(7423),h=l(4594),E=l(8099),T=l(7238),Z=l(5932),w=l(9942),A=l(3992),b=l(5812);const O=["editable"];function B(n,d){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",10),t.NdJ("click",function(){const a=t.CHM(e).ngIf,r=t.oxw();return t.KtG(r.showPreview(a))}),t.TgZ(2,"mat-icon"),t._uU(3," visibility "),t.qZA(),t._uU(4," Form preview "),t.qZA(),t.BQk()}if(2&n){const e=d.ngIf;t.xp6(1),t.Q6J("disabled",e.length<1)}}function F(n,d){if(1&n&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.input.dndName," ")}}function J(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",11),t.NdJ("dblclick",function(){const a=t.CHM(e).$implicit;t.oxw();const r=t.MAs(6);return t.KtG(r.addItem(a.input))}),t.TgZ(1,"mat-icon",12),t._uU(2),t.qZA(),t.YNc(3,F,2,1,"span",13),t.qZA()}if(2&n){const e=d.$implicit,o=t.oxw();t.ekj("justify-start",!o.iconOnly)("px-3",!o.iconOnly)("gap-3",!o.iconOnly),t.xp6(1),t.Q6J("matTooltip",o.iconOnly?e.input.dndName:""),t.xp6(1),t.hij(" ",e.input.dndIcon," "),t.xp6(1),t.Q6J("ngIf",!o.iconOnly)}}function N(n,d){1&n&&(t.TgZ(0,"div",15)(1,"mat-icon",16),t._uU(2,"drag_indicator"),t.qZA()())}function I(n,d){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",(null==e.item||null==e.item.templateOptions?null:e.item.templateOptions.label)||"Unknown"," ")}}function j(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"input",21),t.NdJ("focusout",function(){t.CHM(e),t.oxw();const i=t.MAs(3);return t.KtG(i.saveEdit())}),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("id",e.item.key)("formControl",o.controlsByKey[e.item.key+""])}}const K=function(n){return[n]};function U(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"mat-icon"),t._uU(1),t.qZA(),t.TgZ(2,"editable",17,18),t.NdJ("modeChange",function(i){const r=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.editableModeChange(i,r.item))})("save",function(){const a=t.CHM(e).$implicit,r=t.oxw(),m=t.MAs(6);return t.KtG(m.updateFormLabel(a.item,r.controlsByKey[a.item.key+""].value))}),t.YNc(4,I,1,1,"ng-template",19),t.YNc(5,j,1,2,"ng-template",20),t.qZA()}if(2&n){const e=d.$implicit;t.xp6(1),t.Oqu(null==e.item?null:e.item.dndIcon),t.xp6(1),t.Q6J("id",t.VKq(2,K,e.item.key)+"-editable")}}function Y(n,d){1&n&&(t.TgZ(0,"div",22)(1,"mat-icon",23),t._uU(2," add "),t.qZA()())}const Q=[{path:"",component:(()=>{class n{constructor(e,o,i){this.cdr=e,this.formPreviewService=o,this.document=i,this.userMode="preview",this.controlsByKey={},this.iconOnly=!0}showPreview(e){this.formPreviewService.openPreviewModal(e)}editableModeChange(e,o){var i;if(this.controlsByKey[o.key+""]=new s.p4,"edit"===e){const a=this.controlsByKey[o.key+""];null==a||a.setValue(null===(i=o.templateOptions)||void 0===i?void 0:i.label)}}focusAndSelectedEditableInputText(e){var o;this.cdr.detectChanges();const i=null===(o=this.editable)||void 0===o?void 0:o.find(a=>{var r,m;return(null===(m=null===(r=null==a?void 0:a.el)||void 0===r?void 0:r.nativeElement)||void 0===m?void 0:m.id)===e.key+"-editable"});if(i){i.displayEditMode(),this.cdr.detectChanges();const r=this.document.getElementById(e.key+"");null==r||r.focus(),null==r||r.select(),this.cdr.detectChanges()}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(f.sZ),t.Y36(p.K0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-material-example"]],viewQuery:function(e,o){if(1&e&&t.Gf(O,5),2&e){let i;t.iGM(i=t.CRH())&&(o.editable=i)}},inputs:{userMode:"userMode"},decls:17,vars:3,consts:[[1,"flex","flex-row","justify-between"],[4,"ngIf"],["cdkDropListGroup","",1,"flex","flex-row","p-2","md:p-4","gap-1","md:gap-2"],["api",""],["listContainerClass","flex flex-col gap-4 px-1 md:px-3","itemContainerClass","flex flex-row items-center justify-start gap-5 p-4 shadow-md bg-white rounded-md cursor-move"],["input",""],["listContainerClass"," flex flex-col gap-4 w-full dashed-cdk-drag-placeholder","itemContainerClass","flex flex-row gap-1 bg-white shadow-md p-3 rounded-md items-center",1,"flex-1","md:flex-none","md:w-96",3,"inputAdded"],["dragHandle",""],["item",""],["placeholder",""],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"flex","items-center","justify-center",3,"dblclick"],[1,"scale-150","block",3,"matTooltip"],["class","w-32",4,"ngIf"],[1,"w-32"],[1,"w-8","h-8","flex","items-center"],[1,"cursor-move"],[1,"w-full",3,"id","modeChange","save"],["editable",""],["viewMode",""],["editMode",""],["editableOnEnter","",1,"w-full","form-input","h-8","rounded-sm",3,"id","formControl","focusout"],[1,"h-80","flex","flex-row","items-center","justify-center","border-indigo-400","border-4","border-dashed","box-content","bg-indigo-50","rounded-md"],[1,"text-indigo-200",2,"transform","scale(3)"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-toolbar",0)(1,"span"),t._uU(2,"Material Example"),t.qZA(),t.YNc(3,B,5,1,"ng-container",1),t.ALo(4,"async"),t.qZA(),t.TgZ(5,"dnd-form",2,3)(7,"dnd-list-input-source",4),t.YNc(8,J,4,9,"ng-template",null,5,t.W1O),t.qZA(),t.TgZ(10,"dnd-list-input-target",6),t.NdJ("inputAdded",function(a){return o.focusAndSelectedEditableInputText(a)}),t.YNc(11,N,3,0,"ng-template",null,7,t.W1O),t.YNc(13,U,6,4,"ng-template",null,8,t.W1O),t.YNc(15,Y,3,0,"ng-template",null,9,t.W1O),t.qZA()()),2&e){const i=t.MAs(6);t.xp6(3),t.Q6J("ngIf",t.lcZ(4,1,i.fields$))}},dependencies:[p.O5,y.lW,h.Ye,E.Hw,T.gM,c.y7,c.UX,c.QX,c._B,s.Fj,s.JJ,s.oH,Z.F,w.D,A.d,b.Fd,p.Ov],encapsulation:2,changeDetection:0}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.Bz.forChild(Q),x.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,M.m,f.r8,c.rR,s.UX,C.W0,g.X0,_.o,v.y,H]}),n})()}}]);