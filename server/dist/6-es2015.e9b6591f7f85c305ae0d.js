(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zrcO:function(e,t,n){"use strict";n.r(t);var i=n("SVse"),r=n("iInd"),s=n("mrSG"),c=n("iELJ"),o=n("8Y7J"),a=n("SIfg"),u=n("IYfF"),l=n("b3ru");let b=(()=>{class e{constructor(e,t,n,i){this.user=e,this.userService=t,this.authService=n,this.dialogRef=i}ngOnInit(){}editUser(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=this.authService.getLoggedInUser().userId,n=yield this.userService.updateUser(t,e).toPromise();n&&this.dialogRef.close(n)}))}}return e.\u0275fac=function(t){return new(t||e)(o.Rb(c.a),o.Rb(a.a),o.Rb(u.a),o.Rb(c.d))},e.\u0275cmp=o.Lb({type:e,selectors:[["app-edit-user-dialog"]],decls:3,vars:2,consts:[["mat-dialog-title",""],[3,"user","submitEvent"]],template:function(e,t){1&e&&(o.Xb(0,"h2",0),o.Fc(1),o.Wb(),o.Xb(2,"app-user-form",1),o.fc("submitEvent",(function(e){return t.editUser(e)})),o.Wb()),2&e&&(o.Db(1),o.Hc("Edit user ",t.user.email,""),o.Db(1),o.pc("user",t.user))},directives:[c.e,l.a],styles:[""]}),e})();var d=n("Dxy4");function f(e,t){if(1&e){const e=o.Yb();o.Xb(0,"div",1),o.Xb(1,"div",2),o.Xb(2,"div",3),o.Fc(3),o.Wb(),o.Xb(4,"div",4),o.Fc(5),o.Wb(),o.Xb(6,"div"),o.Fc(7),o.Wb(),o.Sb(8,"br"),o.Xb(9,"div",5),o.Xb(10,"div"),o.Fc(11,"User Level: "),o.Xb(12,"b"),o.Fc(13),o.kc(14,"uppercase"),o.Wb(),o.Wb(),o.Xb(15,"div"),o.Fc(16,"Earned Points: "),o.Xb(17,"b"),o.Fc(18),o.Wb(),o.Wb(),o.Wb(),o.Xb(19,"div"),o.Fc(20,"Seat Preference: "),o.Xb(21,"b"),o.Fc(22),o.kc(23,"uppercase"),o.Wb(),o.Wb(),o.Xb(24,"div"),o.Fc(25,"You have "),o.Xb(26,"b"),o.Fc(27),o.Wb(),o.Fc(28," the Newsletter subscription"),o.Wb(),o.Xb(29,"div",6),o.Xb(30,"button",7),o.fc("click",(function(){return o.wc(e),o.jc().openEditUserDialog()})),o.Fc(31,"Edit User Profile"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&e){const e=o.jc();o.Db(3),o.Gc(e.user.email),o.Db(2),o.Jc("",e.user.title,": ",e.user.firstName," ",e.user.lastName,""),o.Db(2),o.Ic("",e.user.address,", ",e.user.country,""),o.Db(6),o.Gc(o.lc(14,10,e.user.userLevel)),o.Db(5),o.Gc(e.user.points),o.Db(4),o.Gc(o.lc(23,12,e.user.seatPreference)),o.Db(5),o.Gc(e.user.newsletterSub?"Booked":"Not Booked")}}let h=(()=>{class e{constructor(e,t,n){this.userAccountService=e,this.authService=t,this.dialog=n}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){const e=this.authService.getLoggedInUser().userId;this.user=yield this.userAccountService.getUser(e).toPromise()}))}openEditUserDialog(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.dialog.open(b,{data:this.user}).afterClosed().toPromise();e&&(this.user=e,this.authService.getLoggedInUser$.next({email:this.user.email,userId:this.user.userId}),this.authService.setAuthUserInStorage({email:this.user.email,userId:this.user.userId}))}))}}return e.\u0275fac=function(t){return new(t||e)(o.Rb(a.a),o.Rb(u.a),o.Rb(c.b))},e.\u0275cmp=o.Lb({type:e,selectors:[["app-profile"]],decls:1,vars:1,consts:[["class","profile-container",4,"ngIf"],[1,"profile-container"],[1,"card"],[1,"name"],[1,"fullname"],[1,"level"],[1,"button-container"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&o.Dc(0,f,32,14,"div",0),2&e&&o.pc("ngIf",t.user)},directives:[i.l,d.a],pipes:[i.t],styles:[".profile-container[_ngcontent-%COMP%]{width:40vw;margin:10px auto}.profile-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{line-height:30px}.profile-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:x-large}.profile-container[_ngcontent-%COMP%]   .fullname[_ngcontent-%COMP%]{font-size:medium}.profile-container[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.profile-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),e})();var p=n("OaSA");function m(e,t){1&e&&(o.Xb(0,"th",15),o.Fc(1," Date "),o.Wb())}function g(e,t){if(1&e&&(o.Xb(0,"td",16),o.Fc(1),o.kc(2,"date"),o.Wb()),2&e){const e=t.$implicit;o.Db(1),o.Hc(" ",o.mc(2,1,e.flightInfo.date,"yyyy-MM-dd, h:mm a")," ")}}function v(e,t){1&e&&(o.Xb(0,"th",15),o.Fc(1," Departure "),o.Wb())}function D(e,t){if(1&e&&(o.Xb(0,"td",16),o.Fc(1),o.Wb()),2&e){const e=t.$implicit;o.Db(1),o.Hc(" ",e.flightInfo.departure," ")}}function P(e,t){1&e&&(o.Xb(0,"th",15),o.Fc(1," Destination "),o.Wb())}function I(e,t){if(1&e&&(o.Xb(0,"td",16),o.Fc(1),o.Wb()),2&e){const e=t.$implicit;o.Db(1),o.Hc(" ",e.flightInfo.destination," ")}}function S(e,t){1&e&&(o.Xb(0,"th",15),o.Fc(1," Points Earned "),o.Wb())}function W(e,t){if(1&e&&(o.Xb(0,"td",16),o.Fc(1),o.Wb()),2&e){const e=t.$implicit;o.Db(1),o.Hc(" ",e.flightInfo.point," ")}}function X(e,t){1&e&&o.Sb(0,"tr",17)}function y(e,t){1&e&&o.Sb(0,"tr",18)}function C(e,t){if(1&e&&(o.Xb(0,"table",6),o.Vb(1,7),o.Dc(2,m,2,0,"th",8),o.Dc(3,g,3,4,"td",9),o.Ub(),o.Vb(4,10),o.Dc(5,v,2,0,"th",8),o.Dc(6,D,2,1,"td",9),o.Ub(),o.Vb(7,11),o.Dc(8,P,2,0,"th",8),o.Dc(9,I,2,1,"td",9),o.Ub(),o.Vb(10,12),o.Dc(11,S,2,0,"th",8),o.Dc(12,W,2,1,"td",9),o.Ub(),o.Dc(13,X,1,0,"tr",13),o.Dc(14,y,1,0,"tr",14),o.Wb()),2&e){const e=o.jc();o.pc("dataSource",e.usersAccount),o.Db(13),o.pc("matHeaderRowDef",e.displayedColumns),o.Db(1),o.pc("matRowDefColumns",e.displayedColumns)}}const U=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.userAccountService=e,this.authService=t,this.dialog=n,this.router=i,this.usersAccount=[],this.displayedColumns=["date","departure","destination","pointsEarned"]}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){const e=this.authService.getLoggedInUser().email,t=this.authService.getLoggedInUser().userId;this.user=yield this.userAccountService.getUser(t).toPromise(),this.userLevel=this.user.userLevel;const n=yield this.userAccountService.getUserAccount(e).toPromise();this.usersAccount=n.userAccount,this.totalPoints=n.totalPoints}))}openUserModal(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.dialog.open(b,{data:this.user}).afterClosed().toPromise();e&&(this.user=e,this.authService.getLoggedInUser$.next({email:this.user.email,userId:this.user.userId}),this.authService.setAuthUserInStorage({email:this.user.email,userId:this.user.userId}))}))}toUserProfile(){this.router.navigateByUrl("users/profile")}}return e.\u0275fac=function(t){return new(t||e)(o.Rb(a.a),o.Rb(u.a),o.Rb(c.b),o.Rb(r.a))},e.\u0275cmp=o.Lb({type:e,selectors:[["app-users"]],decls:13,vars:5,consts:[[1,"user-info-container"],["test-dataid","point-balance"],["test-dataid","status-level"],["mat-raised-button","",3,"click"],["mat-button","","color","primary",3,"click"],["mat-table","",3,"dataSource",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","departure"],["matColumnDef","destination"],["matColumnDef","pointsEarned"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(o.Xb(0,"div",0),o.Fc(1," Point Balance: "),o.Xb(2,"span",1),o.Fc(3),o.Wb(),o.Fc(4," \xa0\xa0 Status Level: "),o.Xb(5,"span",2),o.Fc(6),o.kc(7,"uppercase"),o.Wb(),o.Xb(8,"button",3),o.fc("click",(function(){return t.openUserModal()})),o.Fc(9,"Edit User Profile"),o.Wb(),o.Xb(10,"button",4),o.fc("click",(function(){return t.toUserProfile()})),o.Fc(11,"To User Profile"),o.Wb(),o.Wb(),o.Dc(12,C,15,3,"table",5)),2&e&&(o.Db(3),o.Gc(t.totalPoints),o.Db(3),o.Gc(o.lc(7,3,t.userLevel)),o.Db(6),o.pc("ngIf",0!==t.totalPoints))},directives:[d.a,i.l,p.j,p.c,p.e,p.b,p.g,p.i,p.d,p.a,p.f,p.h],pipes:[i.t,i.e],styles:[".user-info-container[_ngcontent-%COMP%]{margin:10px auto;width:80%;font-size:large}.user-info-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right}table[_ngcontent-%COMP%]{margin:0 auto;width:80%}"]}),e})()},{path:"profile",component:h}];let F=(()=>{class e{}return e.\u0275mod=o.Pb({type:e}),e.\u0275inj=o.Ob({factory:function(t){return new(t||e)},imports:[[r.d.forChild(U)],r.d]}),e})();var w=n("tfCk"),O=n("PCNd");n.d(t,"UsersModule",(function(){return M}));let M=(()=>{class e{}return e.\u0275mod=o.Pb({type:e}),e.\u0275inj=o.Ob({factory:function(t){return new(t||e)},imports:[[i.c,F,w.a,O.a]]}),e})()}}]);