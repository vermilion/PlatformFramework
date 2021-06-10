(self.webpackChunkclient_app=self.webpackChunkclient_app||[]).push([[639],{3639:(t,n,e)=>{"use strict";e.r(n),e.d(n,{RolesModule:()=>Y});var o=e(1116),i=e(4375),a=e(1524),r=e(6594),s=e(6252),c=e(1318),l=e(2831),u=e(6728),g=e(2467),p=e(5366),d=e(2693);let h=(()=>{class t{constructor(t,n){this.baseUrl=t,this.http=n}resolve(t){const n=t.paramMap.get("id");return this.http.get(`${this.baseUrl}/api/rolesApi/getById?roleId=${n}`)}}return t.\u0275fac=function(n){return new(n||t)(p.LFG(g.C),p.LFG(d.eN))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac}),t})();var z=e(2767),f=e(8971),Z=e(1843);function m(t,n){1&t&&(p.TgZ(0,"nz-card",6),p.TgZ(1,"nz-form-item"),p.TgZ(2,"nz-form-label",7),p._uU(3,"Title"),p.qZA(),p.TgZ(4,"nz-form-control",8),p._UZ(5,"input",9),p.qZA(),p.qZA(),p.qZA())}function b(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"button",10),p.NdJ("click",function(){return p.CHM(t),p.oxw().create()}),p._uU(1,"Create"),p.qZA()}}function T(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"button",11),p.NdJ("click",function(){return p.CHM(t),p.oxw().back()}),p._uU(1,"Cancel"),p.qZA()}}let _=(()=>{class t{constructor(t,n,e,o,i,a){this.baseUrl=t,this.notificationsService=n,this.router=e,this.activatedRoute=o,this.fb=i,this.http=a,this.isLoading=!1,this.rolesList=[]}ngOnInit(){this.form=this.fb.group({roleId:[0,[u.kI.required]],title:[null,[u.kI.required]]})}create(){this.isLoading=!0;const t=Object.assign(this.form.value);this.http.post(`${this.baseUrl}/api/rolesApi/add`,t).subscribe({next:t=>{this.notificationsService.success("Success","Role added"),this.back()},error:t=>{console.log(t),this.notificationsService.error("Error",t)},complete:()=>this.isLoading=!1})}back(){this.router.navigate(["roles"])}}return t.\u0275fac=function(n){return new(n||t)(p.Y36(g.C),p.Y36(f.zb),p.Y36(z.F0),p.Y36(z.gz),p.Y36(u.qu),p.Y36(d.eN))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-role-create"]],decls:9,vars:1,consts:[["nz-form","","nzLayout","vertical",3,"formGroup"],["nzDirection","vertical"],["nzTitle","General",4,"nzSpaceItem"],["nzDirection","horizontal"],["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],["nz-button","","nzType","secondary",3,"click",4,"nzSpaceItem"],["nzTitle","General"],["nzRequired",""],["nzErrorTip","Please input Title"],["type","text","nz-input","","formControlName","title","placeholder","Title"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","secondary",3,"click"]],template:function(t,n){1&t&&(p.TgZ(0,"nz-layout"),p.TgZ(1,"nz-content"),p.TgZ(2,"form",0),p.TgZ(3,"nz-space",1),p.YNc(4,m,6,0,"nz-card",2),p.qZA(),p.qZA(),p.qZA(),p.TgZ(5,"nz-footer"),p.TgZ(6,"nz-space",3),p.YNc(7,b,2,0,"button",4),p.YNc(8,T,2,0,"button",5),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(2),p.Q6J("formGroup",n.form))},directives:[r.hw,r.OK,u._Y,u.JL,a.Lr,u.sg,c.NU,c.$1,r.nX,i.bd,Z.SK,a.Nx,Z.t3,a.iK,a.Fd,u.Fj,u.JJ,u.u],styles:["[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]{padding:.5rem;overflow:auto}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]   nz-space[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%]{text-align:end;padding:.5rem}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]     .ant-card-body, [_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]     .ant-card-head, [_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]     .ant-card-head-title{padding:.5rem}"]}),t})();function C(t,n){1&t&&(p.TgZ(0,"nz-card",7),p.TgZ(1,"nz-form-item"),p.TgZ(2,"nz-form-label",8),p._uU(3,"Title"),p.qZA(),p.TgZ(4,"nz-form-control",9),p._UZ(5,"input",10),p.qZA(),p.qZA(),p.qZA())}function y(t,n){if(1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p._UZ(3,"td"),p.qZA()),2&t){const t=n.$implicit;p.xp6(2),p.hij(" ",t.permissionType.description," ")}}function P(t,n){if(1&t&&(p.TgZ(0,"nz-table",11,12),p.TgZ(2,"thead"),p.TgZ(3,"tr"),p.TgZ(4,"th"),p._uU(5,"Permission Name"),p.qZA(),p._UZ(6,"th",13),p.qZA(),p.qZA(),p.TgZ(7,"tbody"),p.YNc(8,y,4,1,"tr",14),p.qZA(),p.qZA()),2&t){const t=p.MAs(1),n=p.oxw();p.Q6J("nzFrontPagination",!1)("nzShowPagination",!1)("nzData",n.role.permissions),p.xp6(8),p.Q6J("ngForOf",t.data)}}function O(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"button",15),p.NdJ("click",function(){return p.CHM(t),p.oxw().save()}),p._uU(1,"Save"),p.qZA()}}function M(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"button",16),p.NdJ("click",function(){return p.CHM(t),p.oxw().back()}),p._uU(1,"Cancel"),p.qZA()}}let q=(()=>{class t{constructor(t,n,e,o,i,a){this.baseUrl=t,this.notificationsService=n,this.router=e,this.activatedRoute=o,this.fb=i,this.http=a,this.isLoading=!1,this.rolesList=[]}ngOnInit(){this.form=this.fb.group({roleId:[null,[u.kI.required]],title:[null,[u.kI.required]]}),this.role=this.activatedRoute.snapshot.data.role,this.form.patchValue(this.role)}save(){this.isLoading=!0;const t=this.form.value,n={roleId:t.roleId,title:t.title,permissions:this.role.permissions.map(t=>({permissionCode:t.permissionType.code}))};this.http.post(`${this.baseUrl}/api/rolesApi/update`,n).subscribe({next:t=>{this.notificationsService.success("Success","Role saved")},error:t=>{console.log(t),this.notificationsService.error("Error",t)},complete:()=>this.isLoading=!1})}back(){this.router.navigate(["roles"])}}return t.\u0275fac=function(n){return new(n||t)(p.Y36(g.C),p.Y36(f.zb),p.Y36(z.F0),p.Y36(z.gz),p.Y36(u.qu),p.Y36(d.eN))},t.\u0275cmp=p.Xpm({type:t,selectors:[["tls-role-edit"]],decls:10,vars:1,consts:[["nz-form","","nzLayout","vertical",3,"formGroup"],["nzDirection","vertical"],["nzTitle","General",4,"nzSpaceItem"],["nzTableLayout","fixed",3,"nzFrontPagination","nzShowPagination","nzData",4,"nzSpaceItem"],["nzDirection","horizontal"],["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],["nz-button","","nzType","secondary",3,"click",4,"nzSpaceItem"],["nzTitle","General"],["nzRequired",""],["nzErrorTip","Please input Title"],["type","text","nz-input","","formControlName","title","placeholder","Title"],["nzTableLayout","fixed",3,"nzFrontPagination","nzShowPagination","nzData"],["table",""],["nzWidth","70px"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","secondary",3,"click"]],template:function(t,n){1&t&&(p.TgZ(0,"nz-layout"),p.TgZ(1,"nz-content"),p.TgZ(2,"form",0),p.TgZ(3,"nz-space",1),p.YNc(4,C,6,0,"nz-card",2),p.YNc(5,P,9,4,"nz-table",3),p.qZA(),p.qZA(),p.qZA(),p.TgZ(6,"nz-footer"),p.TgZ(7,"nz-space",4),p.YNc(8,O,2,0,"button",5),p.YNc(9,M,2,0,"button",6),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(2),p.Q6J("formGroup",n.form))},directives:[r.hw,r.OK,u._Y,u.JL,a.Lr,u.sg,c.NU,c.$1,r.nX,i.bd,Z.SK,a.Nx,Z.t3,a.iK,a.Fd,u.Fj,u.JJ,u.u,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,o.sg],styles:["[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]{padding:.5rem;overflow:auto}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]   nz-space[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%]{text-align:end;padding:.5rem}[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]     .ant-card-body, [_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]     .ant-card-head, [_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]     .ant-card-head-title{padding:.5rem}"]}),t})();var A=e(9597);function v(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"div"),p.TgZ(1,"button",3),p.NdJ("click",function(){return p.CHM(t),p.oxw().addRole()}),p._uU(2,"Add Role"),p.qZA(),p.qZA()}}function N(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p.TgZ(4,"button",8),p.NdJ("click",function(){const n=p.CHM(t).$implicit;return p.oxw(2).edit(n)}),p._UZ(5,"i",9),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=n.$implicit;p.xp6(2),p.hij(" ",t.title," ")}}function U(t,n){if(1&t&&(p.TgZ(0,"nz-table",4,5),p.TgZ(2,"thead"),p.TgZ(3,"tr"),p.TgZ(4,"th"),p._uU(5,"Title"),p.qZA(),p._UZ(6,"th",6),p.qZA(),p.qZA(),p.TgZ(7,"tbody"),p.YNc(8,N,6,1,"tr",7),p.qZA(),p.qZA()),2&t){const t=p.MAs(1),n=p.oxw();p.Q6J("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",n.isLoading)("nzData",n.items),p.xp6(8),p.Q6J("ngForOf",t.data)}}const k=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this.baseUrl=t,this.router=n,this.activatedRoute=e,this.http=o,this.isLoading=!1,this.items=[],this.page=1,this.quantity=100}ngOnInit(){this.reload()}reload(){this.isLoading=!0,this.http.post(`${this.baseUrl}/api/rolesApi/getAll`,{pageSize:this.quantity,pageNumber:this.page}).pipe((0,A.x)(()=>this.isLoading=!1)).subscribe(t=>{this.items=t.items,this.total=t.totalItems})}addRole(){this.router.navigate(["create"],{relativeTo:this.activatedRoute})}edit(t){this.router.navigate(["role",t.roleId],{relativeTo:this.activatedRoute})}remove(t){}}return t.\u0275fac=function(n){return new(n||t)(p.Y36(g.C),p.Y36(z.F0),p.Y36(z.gz),p.Y36(d.eN))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-roles-list"]],decls:3,vars:0,consts:[["nzDirection","vertical"],[4,"nzSpaceItem"],["nzTableLayout","fixed",3,"nzFrontPagination","nzShowPagination","nzLoading","nzData",4,"nzSpaceItem"],["nz-button","",3,"click"],["nzTableLayout","fixed",3,"nzFrontPagination","nzShowPagination","nzLoading","nzData"],["table",""],["nzWidth","70px"],[4,"ngFor","ngForOf"],["nz-button","","nzType","default",3,"click"],["nz-icon","","nzType","edit"]],template:function(t,n){1&t&&(p.TgZ(0,"nz-space",0),p.YNc(1,v,3,0,"div",1),p.YNc(2,U,9,5,"nz-table",2),p.qZA())},directives:[c.NU,c.$1,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,o.sg],styles:["[_nghost-%COMP%]{display:block;height:100%;padding:.5rem}[_nghost-%COMP%] > .card[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%] > .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}"]}),t})(),data:{breadcrumb:"Roles List"}},{path:"create",component:_,data:{breadcrumb:"Role Create"}},{path:"role/:id",component:q,data:{breadcrumb:"Role Edit"},resolve:{role:h}}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[z.Bz.forChild(k)],z.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({providers:[h],imports:[[o.ez,x,u.UX,s.LV,r.wm,a.U5,i.vh,c.zf,l.HQ]]}),t})()}}]);