(self.webpackChunkclicker=self.webpackChunkclicker||[]).push([[1601],{1601:(e,t,o)=>{"use strict";o.r(t),o.d(t,{IdeaDetailsPageModule:()=>m});var i=o(8583),n=o(665),a=o(2859),d=o(9493),s=o(4762),r=o(6274),c=o(8002),l=o(7716),g=o(2482);function u(e,t){if(1&e&&(l.TgZ(0,"ion-select-option",11),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.s9C("value",e.id),l.xp6(1),l.Oqu(e.name)}}function h(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"ion-footer"),l.TgZ(1,"ion-toolbar",12),l.TgZ(2,"ion-button",13),l.NdJ("click",function(){return l.CHM(e),l.oxw().addIdea()}),l._UZ(3,"ion-icon",14),l._uU(4," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 "),l.qZA(),l.qZA(),l.qZA()}}function p(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"ion-footer"),l.TgZ(1,"ion-row",15),l.TgZ(2,"ion-col",16),l.TgZ(3,"ion-button",17),l.NdJ("click",function(){return l.CHM(e),l.oxw().deleteIdea()}),l._UZ(4,"ion-icon",18),l._uU(5," Delete "),l.qZA(),l.qZA(),l.TgZ(6,"ion-col",16),l.TgZ(7,"ion-button",19),l.NdJ("click",function(){return l.CHM(e),l.oxw().updateIdea()}),l._UZ(8,"ion-icon",20),l._uU(9," Update "),l.qZA(),l.qZA(),l.qZA(),l.qZA()}}var Z=(()=>(function(e){e.COUNTRY="country",e.REGION="region",e.POSTCODE="postcode",e.DISTRICT="district",e.PLACE="place",e.LOCALITY="locality",e.NEIGHBORHOOD="neighborhood",e.ADDRESS="address",e.POI="poi"}(Z||(Z={})),Z))();const f=[{path:"",component:(()=>{class e{constructor(e,t,o,i,n){this.activatedRoute=e,this.ideaService=t,this.geocoderService=o,this.toastCtrl=i,this.router=n,this.idea={login:"",name:"",notes:"",DateTime:"",user:"",uid:"",address:"",coordinates:"",team:[]}}ngOnInit(){}ionViewWillEnter(){let e=this.activatedRoute.snapshot.paramMap.get("id");e&&this.ideaService.getIdea(e).subscribe(e=>{this.idea=e}),this.categories=this.ideaService.getCategoryIventsNew().snapshotChanges().pipe((0,c.U)(e=>e.map(e=>{const t=e.payload.doc.data();return Object.assign({id:e.payload.doc.id},t)}))),console.log(this.categories)}addIdea(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.geocoderService.forwardGeocoding(r.F5.PLACES,this.idea.address,"pk.eyJ1IjoibGFndW5vdnZsYWQxIiwiYSI6ImNrcnZydjF0aDA5cXkyd29lcWtyb3RyZ2UifQ.kZIcfDeh07EUq9-rFS6waA",["ru"],[Z.PLACE]).subscribe(e=>{this.idea.coordinates=e.features[0].center,this.ideaService.addIdea(this.idea).then(e=>{console.log(e.id),this.showToast("Idea added")},e=>{this.showToast("There was a problem adding your idea :(")})})})}deleteIdea(){this.ideaService.deleteIdea(this.idea.id).then(()=>{this.showToast("Idea deleted")},e=>{this.showToast("There was a problem deleting your idea :(")})}updateIdea(){this.ideaService.updateIdea(this.idea).then(()=>{this.showToast("Idea updated")},e=>{this.showToast("There was a problem updating your idea :(")})}showToast(e){this.toastCtrl.create({message:e,duration:2e3}).then(e=>e.present())}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(d.gz),l.Y36(g.h),l.Y36(r.iS),l.Y36(a.yF),l.Y36(d.F0))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-create-event"]],decls:27,vars:9,consts:[["color","primary"],["slot","start"],["defaultHref","/"],["padding",""],["value","notifications","interface","action-sheet",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["position","stacked"],["rows","8",3,"ngModel","ngModelChange"],["rows","1",3,"ngModel","ngModelChange"],["displayFormat","MMM-DD HH:mm","picker-format","MMM-DD HH:mm","value","MMM-DD HH:mm","placeholder","Oct-05 14:23",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"value"],["color","success"],["expand","full","fill","clear","color","light",3,"click"],["name","checkmark","slot","start"],["no-padding","","text-center",""],["size","6"],["expand","block","fill","outline","color","danger",3,"click"],["name","trash","slot","start"],["expand","block","fill","solid","color","success",3,"click"],["name","save","slot","start"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-back-button",2),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content",3),l.TgZ(7,"ion-item"),l.TgZ(8,"ion-label"),l._uU(9,"\u042f \u0445\u043e\u0447\u0443"),l.qZA(),l.TgZ(10,"ion-select",4),l.NdJ("ngModelChange",function(e){return t.idea.category=e}),l.YNc(11,u,2,2,"ion-select-option",5),l.ALo(12,"async"),l.qZA(),l.qZA(),l.TgZ(13,"ion-item"),l.TgZ(14,"ion-label",6),l._uU(15,"\u0422\u0435\u043a\u0441\u0442"),l.qZA(),l.TgZ(16,"ion-textarea",7),l.NdJ("ngModelChange",function(e){return t.idea.notes=e}),l.qZA(),l.qZA(),l.TgZ(17,"ion-item"),l.TgZ(18,"ion-label",6),l._uU(19,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"),l.qZA(),l.TgZ(20,"ion-textarea",8),l.NdJ("ngModelChange",function(e){return t.idea.address=e}),l.qZA(),l.qZA(),l.TgZ(21,"ion-item"),l.TgZ(22,"ion-label"),l._uU(23,"\u041a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 ?"),l.qZA(),l.TgZ(24,"ion-datetime",9),l.NdJ("ngModelChange",function(e){return t.idea.DateTime=e}),l.qZA(),l.qZA(),l.qZA(),l.YNc(25,h,5,0,"ion-footer",10),l.YNc(26,p,10,0,"ion-footer",10)),2&e&&(l.xp6(10),l.Q6J("ngModel",t.idea.category),l.xp6(1),l.Q6J("ngForOf",l.lcZ(12,7,t.categories)),l.xp6(5),l.Q6J("ngModel",t.idea.notes),l.xp6(4),l.Q6J("ngModel",t.idea.address),l.xp6(4),l.Q6J("ngModel",t.idea.DateTime),l.xp6(1),l.Q6J("ngIf",!t.idea.id),l.xp6(1),l.Q6J("ngIf",t.idea.id))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2,a.Ie,a.Q$,a.t9,a.QI,n.JJ,n.On,i.sg,a.g2,a.j9,a.x4,i.O5,a.n0,a.fr,a.YG,a.gu,a.Nd,a.wI],pipes:[i.Ov],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,n.u5,a.Pc,T]]}),e})()}}]);