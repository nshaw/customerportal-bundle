(window["webpackJsonpproject-form-widget"]=window["webpackJsonpproject-form-widget"]||[]).push([[0],{187:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Project successfully saved","dataDeleted":"Project successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"project":{"deleteDialog":{"title":"Delete project","description":"Are you sure?"},"notFound":"Project not found","deleted":"Project deleted","id":"ID","projectName":"entities.project.projectName","subscriptionVersion":"entities.project.subscriptionVersion","subscriptionStartDate":"entities.project.subscriptionStartDate","subscriptionEndDate":"entities.project.subscriptionEndDate","notes":"entities.project.notes"}}}')},217:function(e,t,n){e.exports=n(365)},365:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(28),i=n(31),o=n(23),c=n(29),s=n(200),l=n(50),u=n(0),d=n.n(u),p=n(9),b=n.n(p),f=n(180),h=n.n(f),m=n(410),v=n(414),j=n(407),O=n(199),g=n(16),E=d.a.createContext(null),y=n(47),k=n(127),D=n(49),w={en:n(187)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=Object.keys(w).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",w[t])))}),{}),P=k.a.t,N=function(e){!function(e,t){k.a.use(D.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:C,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.project.".concat(n))})}}};y.setLocale(t)}(P)},x=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},F={tableAdd:"project.table.add",tableSelect:"project.table.select"},T={create:"project.form.create",update:"project.form.update",errorCreate:"project.form.errorCreate",errorUpdate:"project.form.errorUpdate"},U=n(13),A=n.n(U),R=n(26),M=n(20),V=n(2),z=n.n(V),L=(z.a.shape({initialized:z.a.bool,authenticated:z.a.bool}),n(201));z.a.oneOfType([z.a.func,z.a.shape({current:z.a.elementType}),z.a.shape(null)]);function I(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(L.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(E.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var H=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},q=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},B=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("projects","/").concat(n),r=K({},q(),{method:"GET"}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("projects"),r=K({},q(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("projects"),r=K({},q(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("projects","/").concat(n),r=K({},q(),{method:"DELETE"}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(4),$=n(413),_=n(398),ee=n(395),te=n(5),ne=n(399),ae=n(189),re=n.n(ae),ie=n(190),oe=n.n(ie),ce=n(188),se=n.n(ce),le=n(191),ue=n.n(le),de={success:se.a,error:re.a,info:oe.a},pe={success:3e3,error:null,info:5e3},be=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=de[s],u=pe[s],p=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object(Z.a)(a.icon,a.iconStatus)}),i);return d.a.createElement($.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(_.a,{className:Object(Z.a)(a[s],n),message:p,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(ue.a,{className:a.icon}))]}))};be.SUCCESS="success",be.ERROR="error",be.defaultProps={message:null,className:"",status:be.INFO="info",onClose:function(){}};var fe=Object(te.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(be),he=(z.a.shape({id:z.a.number,projectName:z.a.string.isRequired,subscriptionVersion:z.a.string,subscriptionStartDate:z.a.string,subscriptionEndDate:z.a.string,notes:z.a.string}),z.a.shape({projectName:z.a.string,subscriptionVersion:z.a.string,subscriptionStartDate:z.a.oneOfType([z.a.string,z.a.instanceOf(Date)]),subscriptionEndDate:z.a.oneOfType([z.a.string,z.a.instanceOf(Date)]),notes:z.a.string}),z.a.shape({projectName:z.a.oneOfType([z.a.bool,z.a.shape()]),subscriptionVersion:z.a.oneOfType([z.a.bool,z.a.shape()]),subscriptionStartDate:z.a.oneOfType([z.a.bool,z.a.shape()]),subscriptionEndDate:z.a.oneOfType([z.a.bool,z.a.shape()]),notes:z.a.oneOfType([z.a.bool,z.a.shape()])}),z.a.shape({projectName:z.a.oneOfType([z.a.string,z.a.shape()]),subscriptionVersion:z.a.oneOfType([z.a.string,z.a.shape()]),subscriptionStartDate:z.a.oneOfType([z.a.string,z.a.shape()]),subscriptionEndDate:z.a.oneOfType([z.a.string,z.a.shape()]),notes:z.a.oneOfType([z.a.string,z.a.shape()])}),n(197)),me=n(202),ve=n(404),je=n(405),Oe=n(408),ge=n(19),Ee=n(409),ye=n(198),ke={en:n(71).a},De=n(412),we=n(403),Se=n(401),Ce=n(402),Pe=n(400),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(De.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(Pe.a,{id:"confirmation-dialog-title"},a),d.a.createElement(Se.a,null,d.a.createElement(Ce.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(we.a,null,d.a.createElement(ve.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ve.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Ne.CONFIRM="CONFIRM",Ne.DISCARD="DISCARD";var xe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Ne.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,p=e.setFieldValue,b=e.t,f=e.i18n,h=function(e){return function(t){p(e,t)}},m=function(e){return e?new Date(e).toLocaleDateString(f.language):""},v=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement(ge.a,{utils:ye.a,locale:ke[f.language]},d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"project-form"},d.a.createElement(je.a,{container:!0,spacing:2},d.a.createElement(je.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"project-projectName",error:r.projectName&&a.projectName,helperText:v("projectName"),className:t.textField,onChange:i,onBlur:o,value:n.projectName,name:"projectName",label:b("entities.project.projectName")})),d.a.createElement(je.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"project-subscriptionVersion",error:r.subscriptionVersion&&a.subscriptionVersion,helperText:v("subscriptionVersion"),className:t.textField,onChange:i,onBlur:o,value:n.subscriptionVersion,name:"subscriptionVersion",label:b("entities.project.subscriptionVersion")})),d.a.createElement(je.a,{item:!0,xs:12,sm:6},d.a.createElement(Ee.a,{id:"project-subscriptionStartDate",error:r.subscriptionStartDate&&a.subscriptionStartDate,helperText:v("subscriptionStartDate"),className:t.textField,onChange:h("subscriptionStartDate"),value:n.subscriptionStartDate,labelFunc:m,name:"subscriptionStartDate",label:b("entities.project.subscriptionStartDate")})),d.a.createElement(je.a,{item:!0,xs:12,sm:6},d.a.createElement(Ee.a,{id:"project-subscriptionEndDate",error:r.subscriptionEndDate&&a.subscriptionEndDate,helperText:v("subscriptionEndDate"),className:t.textField,onChange:h("subscriptionEndDate"),value:n.subscriptionEndDate,labelFunc:m,name:"subscriptionEndDate",label:b("entities.project.subscriptionEndDate")})),d.a.createElement(je.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"project-notes",error:r.notes&&a.notes,helperText:v("notes"),className:t.textField,onChange:i,onBlur:o,value:n.notes,name:"notes",label:b("entities.project.notes")})),s&&d.a.createElement(Ne,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:b("entities.project.deleteDialog.title"),description:b("entities.project.deleteDialog.description"),confirmLabel:b("common.yes"),discardLabel:b("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ve.a,{onClick:t,disabled:u},b("common.delete"))}}),d.a.createElement(ve.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},b("common.cancel")),d.a.createElement(ve.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},b("common.save")))))}}]),t}(u.PureComponent);xe.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Fe={projectName:"",subscriptionVersion:"",subscriptionStartDate:null,subscriptionEndDate:null,notes:""},Te={mapPropsToValues:function(e){return e.project||Fe},enableReinitialize:!0,validationSchema:y.object().shape({projectName:y.string().required(),subscriptionVersion:y.string(),subscriptionStartDate:y.date().nullable(),subscriptionEndDate:y.date().nullable(),notes:y.string()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"ProjectForm"},Ue=Object(me.a)(Object(te.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(D.b)(),Object(he.a)(Te))(xe),Ae=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,n,a,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,G(r,a);case 6:i=e.sent,this.setState((function(){return{project:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({project:c,notificationMessage:a("common.dataSaved"),notificationStatus:fe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,X(o,t.id);case 6:r(t),this.setState({project:null,notificationMessage:a("common.dataDeleted"),notificationStatus:fe.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:fe.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.project;return e="undefined"===typeof s?r("entities.project.notFound"):null===s?r("entities.project.deleted"):d.a.createElement(Ue,{project:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(H,{keycloak:n},e),d.a.createElement(fe,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ae.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Re=I(Object(D.b)()(Ae)),Me=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:fe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:fe.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(H,{keycloak:t},d.a.createElement(Ue,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(fe,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Me.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ve=I(Object(D.b)()(Me));function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=function(){return window&&window.entando&&window.entando.keycloak&&Le({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},He={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},We=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Ie(),n.onCreate=x(T.create),n.onCancelEditing=x(T.cancelEditing),n.onDelete=x(T.delete),n.onUpdate=x(T.update),n.onErrorCreate=x(T.errorCreate),n.onErrorUpdate=x(T.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(He).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===He.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Le({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Le({},Ie(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Le({},Ie(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),h()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=F.tableAdd,a=F.cancelEditing,r=F.create,i=F.edit,o=F.delete,c=F.tableSelect,s=F.update,l=He.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(He.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(F),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(He.serviceUrl)||"";if("true"===this.getAttribute(He.hidden))b.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(He.locale);N(t);var n=this.getAttribute(He.id),a=n?d.a.createElement(Re,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ve,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);b.a.render(d.a.createElement(E.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(j.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(He)}}]),t}(Object(s.a)(HTMLElement));customElements.define("project-form",We)}},[[217,1,2]]]);
//# sourceMappingURL=main.e12017cd.chunk.js.map