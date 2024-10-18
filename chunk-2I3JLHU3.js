import{a as ue}from"./chunk-XKQNBL4C.js";import{A as ae,Aa as ge,B as m,Ba as ve,C as o,D as e,E as p,F as H,G as _,H as b,L as r,M as N,N as le,T as se,V as B,W as A,X as me,Y as de,aa as ce,ba as w,c as R,ca as u,da as k,ea as D,fa as q,ga as pe,ha as V,i as re,j as J,ka as M,l as ne,la as L,m as h,ma as Y,n as K,na as W,p as S,pa as j,q as x,w as s,wa as $,x as E,xa as X,ya as z,z as c,za as O}from"./chunk-VLKFPM2K.js";import{g as T}from"./chunk-J4ZR5Y2S.js";var F=(()=>{class t{httpServicio;constructor(i){this.httpServicio=i}obtenerPaises(){return this.httpServicio.get(`${O.urlBaseCongresoEmprendimiento}/pais/obtener`)}obtenerInstitucionesPorPais(i){return this.httpServicio.get(`${O.urlBaseCongresoEmprendimiento}/institucionesEducativas/obtenerIESPorPais/${i}`)}crearEmprendedor(i){return this.httpServicio.post(`${O.urlBaseCongresoEmprendimiento}/informacionGeneral/crear`,i)}obtenerPreguntas(){return this.httpServicio.get(`${O.urlBaseCongresoEmprendimiento}/preguntas/obtenerPreguntas`)}obtenerSectores(){return this.httpServicio.get(`${O.urlBaseCongresoEmprendimiento}/sectorEmprendimiento/obtenerSector`)}crearEmprendimiento(i){return this.httpServicio.post(`${O.urlBaseCongresoEmprendimiento}/informacionEmprendimiento/crear`,i)}inscripcionCongreso(i){return this.httpServicio.post(`${O.urlBaseCongresoEmprendimiento}/inscripcionEvento/crear`,i)}confirmarAsistencia(i){return this.httpServicio.post(`${O.urlBaseCongresoEmprendimiento}/xxxxxxxxxx`,i)}static \u0275fac=function(n){return new(n||t)(ne(de))};static \u0275prov=re({token:t,factory:t.\u0275fac})}return t})();function he(t,d){t&1&&(o(0,"div",23)(1,"small"),r(2," Debes indicar la idea de negocio o el emprendimiento "),e()())}function Se(t,d){t&1&&(o(0,"div",23)(1,"small"),r(2," Debes indicar la propuesta de la soluci\xF3n "),e()())}function xe(t,d){t&1&&(o(0,"div",23)(1,"small"),r(2," La fecha es requerida. "),e()())}function Fe(t,d){if(t&1&&(o(0,"option",24),r(1),e()),t&2){let i=d.$implicit;m("value",i._id),s(),N(i.sector)}}function Ie(t,d){t&1&&(o(0,"div",23)(1,"small"),r(2,"Debe seleccionar un sector o industria."),e()())}function ye(t,d){t&1&&(o(0,"div",23),r(1," La respuesta es obligatoria. "),e())}function Pe(t,d){if(t&1){let i=H();o(0,"div",29)(1,"label",30),r(2),e(),o(3,"div")(4,"div",31)(5,"input",32),_("change",function(){let a=S(i).$implicit,l=b(2);return x(l.respuestas[a._id]=!0)}),e(),o(6,"label",33),r(7,"S\xED"),e()(),o(8,"div",31)(9,"input",32),_("change",function(){let a=S(i).$implicit,l=b(2);return x(l.respuestas[a._id]=!1)}),e(),o(10,"label",33),r(11,"No"),e()()(),c(12,ye,2,0,"div",9),e()}if(t&2){let i=d.$implicit,n=b(2);s(2),N(i.pregunta),s(3),m("name","respuesta"+i._id)("checked",n.respuestas[i._id]===!0),s(4),m("name","respuesta"+i._id)("checked",n.respuestas[i._id]===!1),s(3),m("ngIf",n.formularioEnviado&&n.respuestas[i._id]===null)}}function Te(t,d){if(t&1&&(o(0,"div",25)(1,"div",26)(2,"div",27),c(3,Pe,13,6,"div",28),e()()()),t&2){let i=d.$implicit;s(3),m("ngForOf",i)}}function Re(t,d){t&1&&(o(0,"p"),r(1,"Cargando preguntas..."),e())}var fe=(()=>{class t{congresoEmprendimientoServicio;alertaservicio;router;fb;emprendedorCreado;registroPreguntasEmprendedorForm;preguntas=[];respuestas={};formularioEnviado=!1;sectores=[];descripcionTooltip="";constructor(i,n,a,l){this.congresoEmprendimientoServicio=i,this.alertaservicio=n,this.router=a,this.fb=l}ngOnInit(){this.registroPreguntasEmprendedorForm=this.fb.group({descripcionIdea:["",u.required],propuestaSolucion:["",u.required],fecha:[null,u.required],idSector:["",u.required]}),this.consultarPreguntas(),this.obtenerSectores(),this.activarTooltip()}registrarPreguntasEmprendedor(){if(this.registroPreguntasEmprendedorForm.invalid){this.registroPreguntasEmprendedorForm.markAllAsTouched();return}if(this.emprendedorCreado&&this.emprendedorCreado._id!==null||this.emprendedorCreado?._id!==void 0){if(this.formularioEnviado=!0,this.preguntas.every(n=>this.respuestas[n._id]!==null)&&this.registroPreguntasEmprendedorForm.valid){let n=this.preguntas.map(l=>({numeroPregunta:Number.parseInt(l.numero),respuestaPregunta:this.respuestas[l._id]})),a={idSector:this.registroPreguntasEmprendedorForm.get("idSector")?.value,idIES:this.emprendedorCreado?.idIES,idEmprendedor:this.emprendedorCreado?._id,fecha:this.registroPreguntasEmprendedorForm.get("fecha")?.value,descripcionIdea:this.registroPreguntasEmprendedorForm.get("descripcionIdea")?.value,propuestaSolucion:this.registroPreguntasEmprendedorForm.get("propuestaSolucion")?.value,respuestas:n};this.congresoEmprendimientoServicio.crearEmprendimiento(a).subscribe(l=>{this.preguntas.forEach(v=>{this.respuestas[v._id]=null}),this.formularioEnviado=!1,this.registroPreguntasEmprendedorForm.reset(),this.alertaservicio.alertaExitosa({titulo:"Registro Emprendimiento",texto:l.message,redireccionar:!0,urlRedireccion:"/"})})}}else this.alertaservicio.alertaError({titulo:"Registro Emprendimiento",texto:"No se encuentra emprendedor creado para relacionar con el emprendimiento"})}navegarRuta(i){this.router.navigate([i])}consultarPreguntas(){return T(this,null,function*(){let i=yield R(this.congresoEmprendimientoServicio.obtenerPreguntas());i.data.sort((n,a)=>n.numero-a.numero),this.preguntas=i.data,this.preguntas.forEach(n=>{this.respuestas[n._id]=null})})}obtenerFilas(){let i=[];for(let n=0;n<this.preguntas.length;n+=3)i.push(this.preguntas.slice(n,n+3));return i}obtenerSectores(){return T(this,null,function*(){let i=yield R(this.congresoEmprendimientoServicio.obtenerSectores());this.sectores=i.data})}sectorSeleccionado(i){let n=i.target.value,a=this.sectores.find(l=>l._id===n);a&&(this.descripcionTooltip=a.descripcion,setTimeout(()=>{this.activarTooltip()},0))}activarTooltip(){let i=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),n=bootstrap.Tooltip.getInstance(i);n&&n.dispose(),i.forEach(a=>{new bootstrap.Tooltip(a).show()})}static \u0275fac=function(n){return new(n||t)(E(F),E(z),E($),E(j))};static \u0275cmp=h({type:t,selectors:[["app-preguntas-emprendimiento"]],inputs:{emprendedorCreado:"emprendedorCreado"},decls:40,vars:8,consts:[["loadingTemplate",""],[1,"container","mt-5"],[1,"contenedor-preguntas-principales"],["novalidate","",3,"ngSubmit","formGroup"],[1,"card","p-3","mb-3"],[1,"row","mb-3"],[1,"col-md-6","mb-2"],["for","descripcionIdea",1,"form-label"],["placeholder","Breve descripci\xF3n de la necesidad o problema identificado","formControlName","descripcionIdea","id","descripcionIdea","rows","3",1,"form-control"],["class","text-danger",4,"ngIf"],["for","propuestaSolucion",1,"form-label"],["placeholder","Breve descripci\xF3n de la propuesta de soluci\xF3n","id","propuestaSolucion","formControlName","propuestaSolucion","rows","3",1,"form-control"],["for","fecha",1,"form-label"],["type","date","id","fecha","formControlName","fecha",1,"form-control"],["for","idSector",1,"form-label"],["id","idSector","formControlName","idSector","data-bs-toggle","tooltip",1,"form-select",3,"change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","card mb-3",4,"ngFor","ngForOf"],[1,"row","justify-content-center"],[1,"col-md-3","mb-4"],["type","submit",1,"btn","btn-primary","btn-registro-preguntas","w-100"],["type","submit",1,"btn","btn-primary","btn-registro-preguntas","w-100",3,"click"],[1,"text-danger"],[3,"value"],[1,"card","mb-3"],[1,"card-body"],[1,"row"],["class","col-md-4 mb-3",4,"ngFor","ngForOf"],[1,"col-md-4","mb-3"],[1,"form-label"],[1,"form-check","form-check-inline"],["type","radio","required","",1,"form-check-input",3,"change","name","checked"],[1,"form-check-label"]],template:function(n,a){if(n&1){let l=H();o(0,"div",1)(1,"div",2)(2,"form",3),_("ngSubmit",function(){return S(l),x(a.registrarPreguntasEmprendedor())}),o(3,"div",4)(4,"div",5)(5,"div",6)(6,"label",7),r(7,"Descripci\xF3n de la idea de negocio o del emprendimiento"),e(),p(8,"textarea",8),c(9,he,3,0,"div",9),e(),o(10,"div",6)(11,"label",10),r(12,"Propuesta de soluci\xF3n al problema o necesidad identificada"),e(),p(13,"textarea",11),c(14,Se,3,0,"div",9),e()(),o(15,"div",5)(16,"div",6)(17,"label",12),r(18,"Fecha de creaci\xF3n del emprendimiento"),e(),p(19,"input",13),c(20,xe,3,0,"div",9),e(),o(21,"div",6)(22,"label",14),r(23,"Sector o industria del emprendimiento"),e(),o(24,"select",15),_("change",function(f){return S(l),x(a.sectorSeleccionado(f))}),r(25,"> "),o(26,"option",16),r(27,"Selecciona el sector o industria"),e(),c(28,Fe,2,2,"option",17),e(),c(29,Ie,3,0,"div",9),e()()(),c(30,Te,4,1,"div",18),o(31,"div",19)(32,"div",20)(33,"button",21),r(34,"Registrar Preguntas"),e()(),o(35,"div",20)(36,"button",22),_("click",function(){return S(l),x(a.navegarRuta("/"))}),r(37,"Finalizar"),e()()()()()(),c(38,Re,2,0,"ng-template",null,0,se)}if(n&2){let l,v,f,C;s(2),m("formGroup",a.registroPreguntasEmprendedorForm),s(7),m("ngIf",((l=a.registroPreguntasEmprendedorForm.get("descripcionIdea"))==null?null:l.invalid)&&((l=a.registroPreguntasEmprendedorForm.get("descripcionIdea"))==null?null:l.touched)),s(5),m("ngIf",((v=a.registroPreguntasEmprendedorForm.get("propuestaSolucion"))==null?null:v.invalid)&&((v=a.registroPreguntasEmprendedorForm.get("propuestaSolucion"))==null?null:v.touched)),s(6),m("ngIf",((f=a.registroPreguntasEmprendedorForm.get("fecha"))==null?null:f.invalid)&&((f=a.registroPreguntasEmprendedorForm.get("fecha"))==null?null:f.touched)),s(4),ae("title",a.descripcionTooltip),s(4),m("ngForOf",a.sectores),s(),m("ngIf",((C=a.registroPreguntasEmprendedorForm.get("idSector"))==null?null:C.touched)&&((C=a.registroPreguntasEmprendedorForm.get("idSector"))==null?null:C.invalid)),s(),m("ngForOf",a.obtenerFilas())}},dependencies:[B,A,q,Y,W,w,L,k,D,V,M],styles:[".btn-registro-preguntas[_ngcontent-%COMP%]{background:#2c5c85}.btn-registro-preguntas[_ngcontent-%COMP%]:hover{background-color:#659ccc;border-color:#659ccc}"]})}return t})();function Oe(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2," El nombre es requerido. "),e()())}function Ae(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2," El apellido es requerido. "),e()())}function we(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2,"El documento de identidad es requerido."),e()())}function ke(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2," El correo personal es requerido. "),e()())}function De(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2," El correo institucional es requerido. "),e()())}function qe(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2,"El tel\xE9fono es requerido."),e()())}function Ve(t,d){if(t&1&&(o(0,"option",36),r(1),e()),t&2){let i=d.$implicit;m("value",i._id),s(),N(i.descripcion)}}function Me(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2,"Debe seleccionar un pa\xEDs."),e()())}function je(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2,"La ciudad es requerida."),e()())}function $e(t,d){if(t&1&&(o(0,"option",36),r(1),e()),t&2){let i=d.$implicit;m("value",i._id),s(),le("",i.nombre," ")}}function ze(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2,"Debe seleccionar una instituci\xF3n."),e()())}function Ge(t,d){t&1&&(o(0,"div",35)(1,"small"),r(2,"El programa acad\xE9mico es requerido."),e()())}function Be(t,d){if(t&1){let i=H();o(0,"div",2)(1,"form",3),_("ngSubmit",function(){S(i);let a=b();return x(a.registrarEmprendedor())}),o(2,"div",4)(3,"div",5)(4,"div",6)(5,"label",7),r(6,"Nombres del emprendedor"),e(),p(7,"input",8),c(8,Oe,3,0,"div",9),e(),o(9,"div",6)(10,"label",10),r(11,"Apellidos del emprendedor"),e(),p(12,"input",11),c(13,Ae,3,0,"div",9),e(),o(14,"div",6)(15,"label",12),r(16,"Documento de identidad"),e(),p(17,"input",13),c(18,we,3,0,"div",9),e()(),o(19,"div",5)(20,"div",6)(21,"label",14),r(22,"Correo electr\xF3nico personal"),e(),p(23,"input",15),c(24,ke,3,0,"div",9),e(),o(25,"div",6)(26,"label",16),r(27,"Correo electr\xF3nico institucional"),e(),p(28,"input",17),c(29,De,3,0,"div",9),e(),o(30,"div",6)(31,"label",18),r(32,"Tel\xE9fono"),e(),p(33,"input",19),c(34,qe,3,0,"div",9),e()(),o(35,"div",5)(36,"div",6)(37,"label",20),r(38,"Pa\xEDs"),e(),o(39,"select",21),_("change",function(a){S(i);let l=b();return x(l.paisSeleccionado(a))}),o(40,"option",22),r(41,"Selecciona tu pa\xEDs"),e(),c(42,Ve,2,2,"option",23),e(),c(43,Me,3,0,"div",9),e(),o(44,"div",6)(45,"label",24),r(46,"Ciudad"),e(),p(47,"input",25),c(48,je,3,0,"div",9),e(),o(49,"div",6)(50,"label",26),r(51,"Nombre de la instituci\xF3n educativa a la que pertenece"),e(),o(52,"select",27)(53,"option",22),r(54,"Selecciona la Instituci\xF3n"),e(),c(55,$e,2,2,"option",23),e(),c(56,ze,3,0,"div",9),e()(),o(57,"div",5)(58,"div",28)(59,"label",29),r(60,"Programa acad\xE9mico al que pertenece"),e(),p(61,"input",30),c(62,Ge,3,0,"div",9),e()()(),o(63,"div",31)(64,"div",32)(65,"button",33),r(66,"Registrar"),e()(),o(67,"div",32)(68,"button",34),_("click",function(){S(i);let a=b();return x(a.navegarRuta("/"))}),r(69,"Regresar"),e()()()()()}if(t&2){let i,n,a,l,v,f,C,I,y,P,g=b();s(),m("formGroup",g.registroEmprendedorForm),s(7),m("ngIf",((i=g.registroEmprendedorForm.get("nombres"))==null?null:i.invalid)&&((i=g.registroEmprendedorForm.get("nombres"))==null?null:i.touched)),s(5),m("ngIf",((n=g.registroEmprendedorForm.get("apellidos"))==null?null:n.invalid)&&((n=g.registroEmprendedorForm.get("apellidos"))==null?null:n.touched)),s(5),m("ngIf",((a=g.registroEmprendedorForm.get("documentoIdentidad"))==null?null:a.touched)&&((a=g.registroEmprendedorForm.get("documentoIdentidad"))==null?null:a.invalid)),s(6),m("ngIf",((l=g.registroEmprendedorForm.get("correoElectronicoPersonal"))==null?null:l.invalid)&&((l=g.registroEmprendedorForm.get("correoElectronicoPersonal"))==null?null:l.touched)),s(5),m("ngIf",((v=g.registroEmprendedorForm.get("correoElectronicoInstitucional"))==null?null:v.invalid)&&((v=g.registroEmprendedorForm.get("correoElectronicoInstitucional"))==null?null:v.touched)),s(5),m("ngIf",((f=g.registroEmprendedorForm.get("numeroTelefono"))==null?null:f.touched)&&((f=g.registroEmprendedorForm.get("numeroTelefono"))==null?null:f.invalid)),s(8),m("ngForOf",g.paises),s(),m("ngIf",((C=g.registroEmprendedorForm.get("pais"))==null?null:C.touched)&&((C=g.registroEmprendedorForm.get("pais"))==null?null:C.invalid)),s(5),m("ngIf",((I=g.registroEmprendedorForm.get("ciudadResidencia"))==null?null:I.touched)&&((I=g.registroEmprendedorForm.get("ciudadResidencia"))==null?null:I.invalid)),s(7),m("ngForOf",g.instituciones),s(),m("ngIf",((y=g.registroEmprendedorForm.get("idIES"))==null?null:y.touched)&&((y=g.registroEmprendedorForm.get("idIES"))==null?null:y.invalid)),s(6),m("ngIf",((P=g.registroEmprendedorForm.get("programaAcademico"))==null?null:P.touched)&&((P=g.registroEmprendedorForm.get("programaAcademico"))==null?null:P.invalid))}}function Le(t,d){if(t&1&&(o(0,"div",37),p(1,"app-preguntas-emprendimiento",38),e()),t&2){let i=b();s(),m("emprendedorCreado",i.emprendedor)}}var U=(()=>{class t{congresoEmprendimientoServicio;alertaservicio;router;fb;responderPreguntasEmprendimiento=!1;paises=[];instituciones=[];preguntasEmprendimiento=[];emprendedor;registroEmprendedorForm;constructor(i,n,a,l){this.congresoEmprendimientoServicio=i,this.alertaservicio=n,this.router=a,this.fb=l}ngOnInit(){this.registroEmprendedorForm=this.fb.group({nombres:["",u.required],apellidos:["",u.required],documentoIdentidad:["",u.required],correoElectronicoPersonal:["",[u.required,u.email]],correoElectronicoInstitucional:["",[u.required,u.email]],numeroTelefono:["",u.required],pais:["",u.required],ciudadResidencia:["",u.required],idIES:["",u.required],programaAcademico:["",u.required]}),this.consultarPaises()}consultarPaises(){return T(this,null,function*(){let i=yield R(this.congresoEmprendimientoServicio.obtenerPaises());this.paises=i.data})}registrarEmprendedor(){if(this.registroEmprendedorForm.invalid){this.registroEmprendedorForm.markAllAsTouched();return}if(this.registroEmprendedorForm.valid){let i={nombres:this.registroEmprendedorForm.get("nombres")?.value,apellidos:this.registroEmprendedorForm.get("apellidos")?.value,documentoIdentidad:this.registroEmprendedorForm.get("documentoIdentidad")?.value,correoElectronicoPersonal:this.registroEmprendedorForm.get("correoElectronicoPersonal")?.value,correoElectronicoInstitucional:this.registroEmprendedorForm.get("correoElectronicoInstitucional")?.value,numeroTelefono:this.registroEmprendedorForm.get("numeroTelefono")?.value,pais:this.registroEmprendedorForm.get("pais")?.value,ciudadResidencia:this.registroEmprendedorForm.get("ciudadResidencia")?.value,idIES:this.registroEmprendedorForm.get("idIES")?.value,programaAcademico:this.registroEmprendedorForm.get("programaAcademico")?.value};this.congresoEmprendimientoServicio.crearEmprendedor(i).subscribe(n=>{let a=n.data;this.emprendedor=a,this.alertaservicio.alertaExitosa({titulo:"Registro Emprendimiento",texto:n.message}),this.registroEmprendedorForm.reset(),this.consultarPreguntasEmprendimiento()})}}paisSeleccionado(i){return T(this,null,function*(){this.instituciones=[];let n=i.target.value,a=yield R(this.congresoEmprendimientoServicio.obtenerInstitucionesPorPais(n));a.data.length===0?this.instituciones=[{_id:"",paisIES:"",nombrePais:"",regionDepartamento:"",nombreLiderIES:"",correoContacto:"",telefonoContacto:"",urlOficial:"",nombre:"No hay universidades registradas para este pa\xEDs"}]:this.instituciones=a.data})}navegarRuta(i){this.router.navigate([i])}consultarPreguntasEmprendimiento(){return T(this,null,function*(){let i=yield R(this.congresoEmprendimientoServicio.obtenerPreguntas());this.preguntasEmprendimiento=i.data,this.mostrarPreguntasEmprendimiento()})}mostrarPreguntasEmprendimiento(){this.responderPreguntasEmprendimiento=!this.responderPreguntasEmprendimiento}static \u0275fac=function(n){return new(n||t)(E(F),E(z),E($),E(j))};static \u0275cmp=h({type:t,selectors:[["app-registro-emprendedor"]],decls:2,vars:2,consts:[["class","container contenedor-registro mt-5",4,"ngIf"],["class","container contenedor-preguntas-emprendimiento",4,"ngIf"],[1,"container","contenedor-registro","mt-5"],["novalidate","",3,"ngSubmit","formGroup"],[1,"card","p-3","mb-3"],[1,"row","mb-3"],[1,"col-md-4","mb-2"],["for","nombres",1,"form-label"],["type","text","id","nombres","formControlName","nombres","placeholder","Ingrese sus nombres",1,"form-control"],["class","text-danger",4,"ngIf"],["for","apellidos",1,"form-label"],["type","text","id","apellidos","formControlName","apellidos","placeholder","Ingrese sus apellidos",1,"form-control"],["for","documentoIdentidad",1,"form-label"],["type","text","id","documentoIdentidad","formControlName","documentoIdentidad","placeholder","Ingresa su documento de identidad","solo-numeros","",1,"form-control"],["for","correoElectronicoPersonal",1,"form-label"],["type","text","id","correoElectronicoPersonal","formControlName","correoElectronicoPersonal","placeholder","Ingrese su correo electr\xF3nico personal",1,"form-control"],["for","correoElectronicoInstitucional",1,"form-label"],["type","text","id","correoElectronicoInstitucional","formControlName","correoElectronicoInstitucional","placeholder","Ingrese su correo electr\xF3nico institucional",1,"form-control"],["for","numeroTelefono",1,"form-label"],["type","text","id","numeroTelefono","formControlName","numeroTelefono","placeholder","Ingrese su tel\xE9fono","solo-numeros","",1,"form-control"],["for","pais",1,"form-label"],["id","pais","formControlName","pais",1,"form-select",3,"change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","ciudadResidencia",1,"form-label"],["type","text","id","ciudadResidencia","formControlName","ciudadResidencia","placeholder","Ingresa tu ciudad",1,"form-control"],["for","idIES",1,"form-label"],["id","idIES","formControlName","idIES",1,"form-select"],[1,"col-md-12","mb-2"],["for","programaAcademico",1,"form-label"],["type","text","id","programaAcademico","formControlName","programaAcademico","placeholder","Ingresa el programa acd\xE9mico",1,"form-control"],[1,"row","justify-content-center"],[1,"col-md-3","mb-4"],["type","submit",1,"btn","btn-primary","btn-registro-emprendedor","w-100"],["type","submit",1,"btn","btn-primary","btn-registro-emprendedor","w-100",3,"click"],[1,"text-danger"],[3,"value"],[1,"container","contenedor-preguntas-emprendimiento"],[3,"emprendedorCreado"]],template:function(n,a){n&1&&c(0,Be,70,13,"div",0)(1,Le,2,1,"div",1),n&2&&(m("ngIf",!a.responderPreguntasEmprendimiento),s(),m("ngIf",a.responderPreguntasEmprendimiento))},dependencies:[B,A,q,Y,W,w,L,k,D,V,M,ge,fe],styles:[".btn-registro-emprendedor[_ngcontent-%COMP%]{background:#2c5c85}.btn-registro-emprendedor[_ngcontent-%COMP%]:hover{background-color:#659ccc;border-color:#659ccc}@media (max-width: 576px){select.form-select[_ngcontent-%COMP%]{width:100%}}.container.contenedor-pdf[_ngcontent-%COMP%]{width:70%}.terminos-condiciones[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var Ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=h({type:t,selectors:[["app-inicio-emprendedor"]],decls:2,vars:0,consts:[[1,"container"]],template:function(n,a){n&1&&(o(0,"div",0),p(1,"app-registro-emprendedor"),e())},dependencies:[U]})}return t})();function We(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2," El nombre es requerido. "),e()())}function He(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2," El apellido es requerido. "),e()())}function Je(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2," Ingresa un correo electr\xF3nico v\xE1lido. "),e()())}function Ke(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2," El tel\xE9fono es requerido. "),e()())}function Qe(t,d){if(t&1&&(o(0,"option",57),r(1),e()),t&2){let i=d.$implicit;m("value",i._id),s(),N(i.descripcion)}}function Ue(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2,"Debe seleccionar un pa\xEDs."),e()())}function Xe(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2," La ciudad es requerida. "),e()())}function Ze(t,d){t&1&&(o(0,"div",56)(1,"small"),r(2," Debe seleccionar el tipo de asistente "),e()())}function et(t,d){t&1&&(o(0,"div")(1,"label",58),r(2,"Especifica"),e(),p(3,"input",59),e())}function tt(t,d){if(t&1&&(o(0,"th"),r(1),e()),t&2){let i=d.$implicit;s(),N(i)}}function ot(t,d){if(t&1&&(o(0,"td"),p(1,"input",60),e()),t&2){let i=d.$implicit,n=b().$implicit;s(),m("formControlName",n.id)("name",n.id)("value",i)}}function it(t,d){if(t&1&&(o(0,"tr")(1,"td"),r(2),e(),c(3,ot,2,3,"td",29),e()),t&2){let i=d.$implicit,n=b();s(2),N(i.descripcion),s(),m("ngForOf",n.opcionesInteres)}}function rt(t,d){t&1&&(o(0,"div",61)(1,"label",62),r(2,"\xBFCu\xE1l?"),e(),p(3,"input",63),e())}var _e=(()=>{class t{fb;router;congresoEmprendimientoServicio;alertaServicio;opcionesInteres=["Muy interesado","Interesado","Indiferente","Poco interesado","Nada interesado"];expectativas=[{id:"conocerEmprendimiento",descripcion:"Conocer nuevos emprendimientos"},{id:"networking",descripcion:"Encontrar oportunidades de networking"},{id:"contactoActores",descripcion:"Generar contacto con otros actores del ecosistema"},{id:"tendencias",descripcion:"Aprender sobre las ultimas tendencias en emprendimiento o inversion"}];divulgacionEvento=[{id:"divulgacionEventoRedesSociales",descripcion:"Redes sociales"},{id:"divulgacionEventoSitioWeb",descripcion:"Sitio web actual"},{id:"divulgacionEventoCorreoElectronico",descripcion:"Correo electr\xF3nico"},{id:"divulgacionEventoRecomendacion",descripcion:"Recomendaci\xF3n voz a voz"},{id:"divulgacionEventoAnuncios",descripcion:"Anuncios en l\xEDnea"},{id:"divulgacionEventoOrganizacion",descripcion:"En la organizaci\xF3n que pertenezco"},{id:"divulgacionEventoOtro",descripcion:"Otro -"}];registroCongresoForm;paises=[];constructor(i,n,a,l){this.fb=i,this.router=n,this.congresoEmprendimientoServicio=a,this.alertaServicio=l}ngOnInit(){this.registroCongresoForm=this.fb.group({nombres:["",u.required],apellidos:["",u.required],correo:["",[u.required,u.email]],telefono:["",u.required],pais:["",u.required],ciudad:["",u.required],tipoAsistente:["",u.required],otroAsistente:[""],divulgacionEventoRedesSociales:[!1],divulgacionEventoSitioWeb:[!1],divulgacionEventoCorreoElectronico:[!1],divulgacionEventoRecomendacion:[!1],divulgacionEventoAnuncios:[!1],divulgacionEventoOrganizacion:[!1],divulgacionEventoOtro:[!1],divulgacionEventoOtroDescripcion:[""],aceptaEnvioComunicacion:[!1],aceptaTerminosYCondicionesTratamientoDatos:[!1]}),this.expectativas.forEach(i=>{this.registroCongresoForm.addControl(i.id,this.fb.control(""))}),this.consultarPaises(),this.registroCongresoForm.get("tipoAsistente")?.valueChanges.subscribe(i=>{let n=this.registroCongresoForm.get("otroAsistente");i==="Otro"?n?.setValidators(u.required):n?.clearValidators(),n?.updateValueAndValidity()}),this.registroCongresoForm.get("divulgacionEventoOtro")?.valueChanges.subscribe(i=>{i?this.registroCongresoForm.get("divulgacionEventoOtroDescripcion")?.enable():this.registroCongresoForm.get("divulgacionEventoOtroDescripcion")?.disable()})}consultarPaises(){return T(this,null,function*(){let i=yield R(this.congresoEmprendimientoServicio.obtenerPaises());this.paises=i.data})}inscribirseAlCongreso(){if(this.registroCongresoForm.invalid){this.registroCongresoForm.markAllAsTouched();return}let i=this.expectativas.map(l=>({pregunta:l.descripcion,respuesta:this.registroCongresoForm.get(l.id)?.value})),n=this.divulgacionEvento.map(l=>({pregunta:l.descripcion,respuesta:l.id=="divulgacionEventoOtro"?`Otro - ${this.registroCongresoForm.get("divulgacionEventoOtroDescripcion")?.value}`:this.registroCongresoForm.get(l.id)?.value})),a={nombres:this.registroCongresoForm.get("nombres")?.value,apellidos:this.registroCongresoForm.get("apellidos")?.value,correo:this.registroCongresoForm.get("correo")?.value,telefono:this.registroCongresoForm.get("telefono")?.value,pais:this.registroCongresoForm.get("pais")?.value,ciudad:this.registroCongresoForm.get("ciudad")?.value,tipoAsistente:this.registroCongresoForm.get("tipoAsistente")?.value==="Otro"?`Otro - ${this.registroCongresoForm.get("otroAsistente")?.value}`:this.registroCongresoForm.get("tipoAsistente")?.value,interesesEvento:i,comoTeEnterasteEvento:n,aceptaEnvioComunicacion:this.registroCongresoForm.get("aceptaEnvioComunicacion")?.value,aceptaTerminosYCondicionesTratamientoDatos:this.registroCongresoForm.get("aceptaTerminosYCondicionesTratamientoDatos")?.value};this.registroCongresoForm.reset(),this.congresoEmprendimientoServicio.inscripcionCongreso(a).subscribe(l=>{this.registroCongresoForm.reset(),l.error!=null?this.alertaServicio.alertaError({titulo:"Inscripci\xF3n Congreso",texto:l.message,redireccionar:!0,urlRedireccion:"/"}):this.alertaServicio.alertaExitosa({titulo:"Inscripci\xF3n Congreso",texto:l.message,redireccionar:!0,urlRedireccion:"/"})})}navegarRuta(i){this.router.navigate([i])}static \u0275fac=function(n){return new(n||t)(E(j),E($),E(F),E(z))};static \u0275cmp=h({type:t,selectors:[["app-registro-congreso"]],decls:119,vars:13,consts:[[1,"container","mt-5"],["novalidate","",3,"ngSubmit","formGroup"],[1,"card","p-3","mb-3"],[1,"row"],[1,"col-md-4","mb-2"],["for","nombres",1,"form-label"],["type","text","id","nombres","formControlName","nombres","placeholder","Ingresa tus nombres",1,"form-control"],["class","text-danger",4,"ngIf"],["for","apellidos",1,"form-label"],["type","text","id","apellidos","formControlName","apellidos","placeholder","Ingresa tus apellidos",1,"form-control"],["for","correo",1,"form-label"],["type","email","id","correo","formControlName","correo","placeholder","ejemplo@dominio.com",1,"form-control"],["for","telefono",1,"form-label"],["type","tel","id","telefono","formControlName","telefono","placeholder","Ingresa tu tel\xE9fono",1,"form-control"],["for","pais",1,"form-label"],["id","pais","formControlName","pais",1,"form-select"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","ciudad",1,"form-label"],["type","text","id","ciudad","formControlName","ciudad","placeholder","Ingresa tu ciudad",1,"form-control"],["for","tipoAsistente",1,"form-label"],["id","tipoAsistente","formControlName","tipoAsistente",1,"form-select"],["value","Emprendedor inscrito a pitch"],["value","Invitado especial (invitado extranjero, organizador y alidado estrat\xE9gico)"],["value","Asistente general"],["value","Otro"],[4,"ngIf"],[1,"table-responsive","table","table-sm","table-bordered","table-responsive-sm"],[1,"table","table-responsive"],[4,"ngFor","ngForOf"],[1,"mb-3"],["for","comoTeEnterasteEvento",1,"form-label"],[1,"form-check"],["type","checkbox","id","divulgacionEventoRedesSociales","formControlName","divulgacionEventoRedesSociales",1,"form-check-input"],["for","divulgacionEventoRedesSociales",1,"form-check-label"],["type","checkbox","id","divulgacionEventoSitioWeb","formControlName","divulgacionEventoSitioWeb",1,"form-check-input"],["for","divulgacionEventoSitioWeb",1,"form-check-label"],["type","checkbox","id","divulgacionEventoCorreoElectronico","formControlName","divulgacionEventoCorreoElectronico",1,"form-check-input"],["for","divulgacionEventoCorreoElectronico",1,"form-check-label"],["type","checkbox","id","divulgacionEventoRecomendacion","formControlName","divulgacionEventoRecomendacion",1,"form-check-input"],["for","divulgacionEventoRecomendacion",1,"form-check-label"],["type","checkbox","id","divulgacionEventoAnuncios","formControlName","divulgacionEventoAnuncios",1,"form-check-input"],["for","divulgacionEventoAnuncios",1,"form-check-label"],["type","checkbox","id","divulgacionEventoOrganizacion","formControlName","divulgacionEventoOrganizacion",1,"form-check-input"],["for","divulgacionEventoOrganizacion",1,"form-check-label"],["type","checkbox","id","divulgacionEventoOtro","formControlName","divulgacionEventoOtro",1,"form-check-input"],["for","divulgacionEventoOtro",1,"form-check-label"],["class","mt-2",4,"ngIf"],["type","checkbox","id","aceptaEnvioComunicacion","formControlName","aceptaEnvioComunicacion",1,"form-check-input"],["for","aceptaEnvioComunicacion",1,"form-check-label"],["type","checkbox","id","aceptaTerminosYCondicionesTratamientoDatos","formControlName","aceptaTerminosYCondicionesTratamientoDatos",1,"form-check-input"],["for","aceptaTerminosYCondicionesTratamientoDatos",1,"form-check-label"],[1,"row","justify-content-center"],[1,"col-md-3","mb-4"],["type","submit",1,"btn","btn-primary","btn-registro-congreso","w-100"],["type","submit",1,"btn","btn-primary","btn-registro-congreso","w-100",3,"click"],[1,"text-danger"],[3,"value"],["for","otroAsistente",1,"form-label"],["type","text","id","otroAsistente","formControlName","otroAsistente","placeholder","Especifica el tipo de asistente",1,"form-control"],["type","radio",3,"formControlName","name","value"],[1,"mt-2"],["for","divulgacionEventoOtroDescripcion",1,"form-label"],["type","text","id","divulgacionEventoOtroDescripcion","formControlName","divulgacionEventoOtroDescripcion",1,"form-control"]],template:function(n,a){if(n&1&&(o(0,"div",0)(1,"form",1),_("ngSubmit",function(){return a.inscribirseAlCongreso()}),o(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),r(6,"Nombres"),e(),p(7,"input",6),c(8,We,3,0,"div",7),e(),o(9,"div",4)(10,"label",8),r(11,"Apellidos"),e(),p(12,"input",9),c(13,He,3,0,"div",7),e(),o(14,"div",4)(15,"label",10),r(16,"Correo electr\xF3nico"),e(),p(17,"input",11),c(18,Je,3,0,"div",7),e()(),o(19,"div",3)(20,"div",4)(21,"label",12),r(22,"Tel\xE9fono"),e(),p(23,"input",13),c(24,Ke,3,0,"div",7),e(),o(25,"div",4)(26,"label",14),r(27,"Pa\xEDs"),e(),o(28,"select",15)(29,"option",16),r(30,"Selecciona tu pa\xEDs"),e(),c(31,Qe,2,2,"option",17),e(),c(32,Ue,3,0,"div",7),e(),o(33,"div",4)(34,"label",18),r(35,"Ciudad"),e(),p(36,"input",19),c(37,Xe,3,0,"div",7),e()(),o(38,"div",3)(39,"div",4)(40,"label",20),r(41,"Tipo de asistente"),e(),o(42,"select",21)(43,"option",16),r(44,"Selecciona una opci\xF3n"),e(),o(45,"option",22),r(46,"Emprendedor inscrito a pitch"),e(),o(47,"option",23),r(48," Invitado especial (invitado extranjero, organizador y alidado estrat\xE9gico) "),e(),o(49,"option",24),r(50," Asistente general "),e(),o(51,"option",25),r(52,"Otro / \xBFCu\xE1l?"),e()(),c(53,Ze,3,0,"div",7),e(),o(54,"div",4),c(55,et,4,0,"div",26),e()()(),o(56,"div",2)(57,"label"),r(58,"De acuerdo con sus intereses de participaci\xF3n en el evento, eval\xFAe las siguientes expectativas "),e(),p(59,"br"),o(60,"div",27)(61,"table",28)(62,"thead")(63,"tr")(64,"th"),r(65,"Expectativa"),e(),c(66,tt,2,1,"th",29),e()(),o(67,"tbody"),c(68,it,4,2,"tr",29),e()()()(),o(69,"div",2)(70,"div",30)(71,"label",31),r(72,"\xBFC\xF3mo te enteraste del evento?"),e(),o(73,"div",32),p(74,"input",33),o(75,"label",34),r(76,"Redes sociales"),e()(),o(77,"div",32),p(78,"input",35),o(79,"label",36),r(80,"Sitio web oficial"),e()(),o(81,"div",32),p(82,"input",37),o(83,"label",38),r(84,"Correo electr\xF3nico"),e()(),o(85,"div",32),p(86,"input",39),o(87,"label",40),r(88,"Recomendaci\xF3n voz a voz"),e()(),o(89,"div",32),p(90,"input",41),o(91,"label",42),r(92,"Anuncios en l\xEDnea"),e()(),o(93,"div",32),p(94,"input",43),o(95,"label",44),r(96,"En la organizaci\xF3n que pertenezco"),e()(),o(97,"div",32),p(98,"input",45),o(99,"label",46),r(100,"Otro"),e()(),c(101,rt,4,0,"div",47),e()(),o(102,"div",2)(103,"div",30)(104,"div",32),p(105,"input",48),o(106,"label",49),r(107,"Acepto env\xEDo de comunicaci\xF3n por parte de la organizaci\xF3n del evento y aliados oficiales"),e()(),o(108,"div",32),p(109,"input",50),o(110,"label",51),r(111,"He le\xEDdo y acepto los t\xE9rminos y condiciones de la pol\xEDtica de tratamiento de datos"),e()()()(),o(112,"div",52)(113,"div",53)(114,"button",54),r(115,"Realizar inscripci\xF3n"),e()(),o(116,"div",53)(117,"button",55),_("click",function(){return a.navegarRuta("/")}),r(118,"Regresar"),e()()()()()),n&2){let l,v,f,C,I,y,P,g,ie;s(),m("formGroup",a.registroCongresoForm),s(7),m("ngIf",((l=a.registroCongresoForm.get("nombres"))==null?null:l.invalid)&&((l=a.registroCongresoForm.get("nombres"))==null?null:l.touched)),s(5),m("ngIf",((v=a.registroCongresoForm.get("apellidos"))==null?null:v.invalid)&&((v=a.registroCongresoForm.get("apellidos"))==null?null:v.touched)),s(5),m("ngIf",((f=a.registroCongresoForm.get("correo"))==null?null:f.invalid)&&((f=a.registroCongresoForm.get("correo"))==null?null:f.touched)),s(6),m("ngIf",((C=a.registroCongresoForm.get("telefono"))==null?null:C.invalid)&&((C=a.registroCongresoForm.get("telefono"))==null?null:C.touched)),s(7),m("ngForOf",a.paises),s(),m("ngIf",((I=a.registroCongresoForm.get("pais"))==null?null:I.touched)&&((I=a.registroCongresoForm.get("pais"))==null?null:I.invalid)),s(5),m("ngIf",((y=a.registroCongresoForm.get("ciudad"))==null?null:y.invalid)&&((y=a.registroCongresoForm.get("ciudad"))==null?null:y.touched)),s(16),m("ngIf",((P=a.registroCongresoForm.get("tipoAsistente"))==null?null:P.invalid)&&((P=a.registroCongresoForm.get("tipoAsistente"))==null?null:P.touched)),s(2),m("ngIf",((g=a.registroCongresoForm.get("tipoAsistente"))==null?null:g.value)==="Otro"),s(11),m("ngForOf",a.opcionesInteres),s(2),m("ngForOf",a.expectativas),s(33),m("ngIf",(ie=a.registroCongresoForm.get("divulgacionEventoOtro"))==null?null:ie.value)}},dependencies:[B,A,q,Y,W,w,ce,L,pe,k,D,V,M],styles:[".btn-registro-congreso[_ngcontent-%COMP%]{background:#2c5c85}.btn-registro-congreso[_ngcontent-%COMP%]:hover{background-color:#659ccc;border-color:#659ccc}@media (max-width: 768px){.table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:normal;font-size:11px}.table-responsive[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{transform:scale(1.2)}}"]})}return t})();function nt(t,d){t&1&&(o(0,"div",16)(1,"small"),r(2," El nombre completo es requerido. "),e()())}function at(t,d){t&1&&(o(0,"div",16)(1,"small"),r(2," Ingresa un correo electr\xF3nico v\xE1lido. "),e()())}function lt(t,d){t&1&&(o(0,"div",16)(1,"small"),r(2," El tel\xE9fono es requerido. "),e()())}var Ce=(()=>{class t{fb;router;congresoEmprendimientoServicio;alertaServicio;ingresoCongresoForm;constructor(i,n,a,l){this.fb=i,this.router=n,this.congresoEmprendimientoServicio=a,this.alertaServicio=l}ngOnInit(){this.ingresoCongresoForm=this.fb.group({nombres:["",u.required],correo:["",[u.required,u.email]],telefono:["",u.required]})}confirmarAsistencia(){let i={nombres:this.ingresoCongresoForm.get("nombres")?.value,correo:this.ingresoCongresoForm.get("correo")?.value,telefono:this.ingresoCongresoForm.get("telefono")?.value};this.congresoEmprendimientoServicio.confirmarAsistencia(i).subscribe(n=>{this.ingresoCongresoForm.reset(),n.error!=null?this.alertaServicio.alertaError({titulo:"Asistencia Congreso",texto:n.message,redireccionar:!0,urlRedireccion:"/"}):this.alertaServicio.alertaExitosa({titulo:n.data.titulo,texto:n.data.mensaje,redireccionar:!0,urlRedireccion:"/"})})}navegarRuta(i){this.router.navigate([i])}static \u0275fac=function(n){return new(n||t)(E(j),E($),E(F),E(z))};static \u0275cmp=h({type:t,selectors:[["app-confirmacion-ingreso-congreso"]],decls:26,vars:4,consts:[[1,"container","mt-5"],["novalidate","",3,"ngSubmit","formGroup"],[1,"card","p-3","mb-4"],[1,"row"],[1,"col-md-4","mb-3"],["for","nombres",1,"form-label"],["type","text","id","nombres","formControlName","nombres","placeholder","Ingresa tu nombre completo",1,"form-control"],["class","text-danger",4,"ngIf"],["for","correo",1,"form-label"],["type","email","id","correo","formControlName","correo","placeholder","ejemplo@dominio.com",1,"form-control"],["for","telefono",1,"form-label"],["type","text","id","telefono","formControlName","telefono","placeholder","Ingresa tu tel\xE9fono",1,"form-control"],[1,"row","justify-content-center"],[1,"col-md-3","mb-4"],["type","submit",1,"btn","btn-primary","btn-registro-congreso","w-100"],["type","submit",1,"btn","btn-primary","btn-registro-congreso","w-100",3,"click"],[1,"text-danger"]],template:function(n,a){if(n&1&&(o(0,"div",0)(1,"form",1),_("ngSubmit",function(){return a.confirmarAsistencia()}),o(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),r(6,"Nombre Completo"),e(),p(7,"input",6),c(8,nt,3,0,"div",7),e(),o(9,"div",4)(10,"label",8),r(11,"Correo electr\xF3nico"),e(),p(12,"input",9),c(13,at,3,0,"div",7),e(),o(14,"div",4)(15,"label",10),r(16,"Tel\xE9fono"),e(),p(17,"input",11),c(18,lt,3,0,"div",7),e()()(),o(19,"div",12)(20,"div",13)(21,"button",14),r(22,"Confirmar asistencia"),e()(),o(23,"div",13)(24,"button",15),_("click",function(){return a.navegarRuta("/")}),r(25,"Regresar"),e()()()()()),n&2){let l,v,f;s(),m("formGroup",a.ingresoCongresoForm),s(7),m("ngIf",((l=a.ingresoCongresoForm.get("nombres"))==null?null:l.invalid)&&((l=a.ingresoCongresoForm.get("nombres"))==null?null:l.touched)),s(5),m("ngIf",((v=a.ingresoCongresoForm.get("correo"))==null?null:v.invalid)&&((v=a.ingresoCongresoForm.get("correo"))==null?null:v.touched)),s(5),m("ngIf",((f=a.ingresoCongresoForm.get("telefono"))==null?null:f.invalid)&&((f=a.ingresoCongresoForm.get("telefono"))==null?null:f.touched))}},dependencies:[A,q,w,k,D,V,M],styles:[".btn-registro-congreso[_ngcontent-%COMP%]{background:#2c5c85}.btn-registro-congreso[_ngcontent-%COMP%]:hover{background-color:#659ccc;border-color:#659ccc}"]})}return t})();var st=[{path:"",component:Ee},{path:"registro-emprendedor",component:U},{path:"inscripcion",component:_e},{path:"ingreso-congreso",component:Ce}],be=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=J({imports:[X.forChild(st),X]})}return t})();var Jt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=J({providers:[F],imports:[me,be,ve,ue]})}return t})();export{Jt as CongresoModule};
