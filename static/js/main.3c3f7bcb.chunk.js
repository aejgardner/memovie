(this.webpackJsonpmemovie=this.webpackJsonpmemovie||[]).push([[0],{387:function(e,a,t){e.exports=t(476)},471:function(e,a,t){},476:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),c=t.n(o),l=t(36),i=t(32),s=t(45),m=t(102),u=t(16),d=t(24),f=t(355),h=t.n(f).a.create({baseURL:"http://homestead.test/api/",headers:{Accept:"application/json"}}),p=function(e){return Object.fromEntries(Object.entries(e).map((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];return[t,null===n?"-":n]})))},b=localStorage.getItem("user"),v={email:"",password:""},E=function(e,a){switch(a.type){case"onChange":return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},a.payload.field,a.payload.value));default:return}},g=function(e){var a=e.history,t=Object(n.useReducer)(E,v),o=Object(s.a)(t,2),c=o[0],i=o[1],m=Object(d.c)(),u=Object(d.d)((function(e){return e.auth.authResponse}));Object(n.useEffect)((function(){m({type:"RESTART_AUTH_RESPONSE"})}),[]);var f=function(e){i({type:"onChange",payload:{field:e.currentTarget.id,value:e.currentTarget.value}})};return r.a.createElement("div",{className:"authform__container"},r.a.createElement("div",{className:"authform"},r.a.createElement("div",{className:"authform__background-blue"}),r.a.createElement("div",{className:"authform__contents-login mb-1"},r.a.createElement("header",{className:"authform__header-login"},r.a.createElement("h1",{className:"authform__h1-login"}," ",r.a.createElement("span",{className:"authform__h1-me"},"Me"),"Movie "),r.a.createElement("h3",{className:"authform__sub-heading-login"},"Your personalised movie hub"),r.a.createElement("h3",{className:"authform__login-h3"},"Login")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(function(e,a){return function(t){if(t({type:"RESTART_AUTH_RESPONSE"}),t({type:"LOADING"}),e.password.length<6)return t({type:"SHORT_PASSWORD"});h.post("user/login",{email:e.email,password:e.password}).then((function(e){var n=e.data,r=e.data.success;if(localStorage.setItem("user","Bearer "+n.token),r){var o={token:n.token,id:n.id,firstname:n.firstname,lastname:n.lastname,email:n.email};t({type:"LOGIN_SUCCESS",payload:o}),setTimeout((function(){a.push("/memovie/dashboard")}),1e3)}else t({type:"LOGIN_ERROR",res:e})}))}}(c,a))}},r.a.createElement("div",{className:"authform__inputs-container-login"},r.a.createElement("input",{onChange:f,id:"email",type:"text",placeholder:"email"}),r.a.createElement("input",{onChange:f,id:"password",type:"password",placeholder:"password"})),r.a.createElement("button",{type:"submit",className:"authform__btn"+(u?" authform__btn-mb":"")},"Login"))),r.a.createElement("footer",{className:"authform__footer"},null!==u?r.a.createElement("p",{className:"authform__message"},u):null,r.a.createElement("p",{className:"authform__switch-form"},"New to MeMovie? Register ",r.a.createElement("strong",null,r.a.createElement(l.b,{className:"authform__switch-form-red",to:"/memovie/register"},"here"))))))},O={email:"",firstname:"",lastname:"",password:""},_=function(e,a){switch(a.type){case"onChange":return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},a.payload.field,a.payload.value));default:return}},N=function(e){var a=e.history,t=Object(n.useReducer)(_,O),o=Object(s.a)(t,2),c=o[0],i=o[1],m=Object(d.c)(),u=Object(d.d)((function(e){return e.auth.authResponse}));Object(n.useEffect)((function(){m({type:"RESTART_AUTH_RESPONSE"})}),[]);var f=function(e){i({type:"onChange",payload:{field:e.target.id,value:e.currentTarget.value}})};return r.a.createElement("div",{className:"authform__container"},r.a.createElement("div",{className:"authform"},r.a.createElement("div",{className:"authform__background-blue"}),r.a.createElement("div",{className:"authform__contents"},r.a.createElement("header",{className:"authform__header-register"},r.a.createElement("h1",{className:"authform__h1"}," ",r.a.createElement("span",{className:"authform__h1-me"},"Me"),"Movie "),r.a.createElement("h3",{className:"authform__sub-heading"},"Register")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(function(e,a){return function(t){if(t({type:"RESTART_AUTH_RESPONSE"}),t({type:"LOADING"}),e.password<6)return t({type:"SHORT_PASSWORD"});h.post("user/register",e).then((function(e){var n=e.data.token;null!==n?(localStorage.setItem("user","Bearer "+n),t({type:"SIGNUP_SUCCESS",payload:e.data}),setTimeout((function(){a.push("/dashboard")}),1e3)):t({type:"SIGNUP_ERROR",res:e})}),(function(e){t({type:"CODE_ERROR",error:e})}))}}(c,a))}},r.a.createElement("div",{className:"authform__inputs-container"},r.a.createElement("input",{onChange:f,id:"firstname",type:"text",placeholder:"first name"}),r.a.createElement("input",{onChange:f,id:"lastname",type:"text",placeholder:"last name"}),r.a.createElement("input",{onChange:f,id:"email",type:"email",placeholder:"email"}),r.a.createElement("input",{onChange:f,id:"password",type:"password",placeholder:"password (at least 6 characters)"})),r.a.createElement("button",{type:"submit",className:"authform__btn"},"Register"))),r.a.createElement("footer",{className:"authform__footer"},null!==u?r.a.createElement("p",{className:"authform__message"},u):null,r.a.createElement("p",{className:"authform__switch-form"},"Already have an account? Login ",r.a.createElement("strong",null,r.a.createElement(l.b,{className:"authform__switch-form-red",to:"/memovie"},"here"))))))},j=t(318),y=t(77),C=t(9),R=function(){return r.a.createElement("div",{className:"dshbrd__container"},r.a.createElement("div",{class:"loading-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},S=function(){var e=Object(d.d)((function(e){return e.auth.user})),a=Object(d.d)((function(e){return e.movie.loaded})),t=Object(d.c)(),o=Object(n.useRef)(null),c=Object(n.useRef)(null),i=Object(n.useRef)(null),s=Object(n.useRef)(null),m=Object(n.useRef)(null),u=Object(n.useRef)(null),f=Object(n.useRef)(null),b=Object(n.useRef)(null),v=Object(n.useRef)(null),E=Object(n.useRef)(null),g=Object(n.useRef)(null);Object(n.useEffect)((function(){t((function(e){var a=localStorage.getItem("user");h.get("user/movies",{headers:{Authorization:a}}).then((function(a){var t=a.data.data.map((function(e){return p(e)}));e({type:"SAVE_MOVIES",payload:t})}))})),y.a.to(o,2,{opacity:1,y:0,ease:C.b.easeOut}),y.a.to(c,2,{opacity:1,y:0,ease:C.b.easeOut,delay:.3}),y.a.to(i,2,{opacity:1,x:0,ease:C.b.easeOut,delay:.4}),y.a.to(s,2,{opacity:1,x:0,ease:C.b.easeOut,delay:.6}),y.a.to(m,2,{opacity:1,x:0,ease:C.b.easeOut,delay:.8}),y.a.to(u,2,{opacity:1,x:0,ease:C.b.easeOut,delay:1}),y.a.to(f,2,{opacity:1,x:0,ease:C.b.easeOut,delay:1.2}),y.a.to(b,2,{opacity:1,x:0,ease:C.b.easeOut,delay:1.4}),y.a.to(v,2,{opacity:1,x:0,ease:C.b.easeOut,delay:1.6}),y.a.to(E,2,{opacity:1,x:0,ease:C.b.easeOut,delay:1.8}),y.a.to(g,5,{opacity:1,ease:C.b.easeOut,delay:2.6})}),[]);var O=Object(j.a)({logoutBtn:{position:"absolute",top:"2rem",left:"2rem"}})();return a?r.a.createElement("div",{className:"dshbrd__container"},r.a.createElement(l.b,{onClick:function(){t({type:"RESET_MOVIES"}),localStorage.removeItem("user")},className:"btn header__logout "+O.logoutBtn,to:"/memovie"},"Logout"),r.a.createElement("div",{className:"dshbrd__title-container"},r.a.createElement("h2",{ref:function(e){o=e},className:"dshbrd__heading dshbrd__heading-blue"},"Me"),r.a.createElement("h2",{ref:function(e){c=e},className:"dshbrd__heading"},"Movie")),r.a.createElement("p",{className:"dshbrd__welcome"},r.a.createElement("span",{ref:function(e){i=e}},"W"),r.a.createElement("span",{ref:function(e){s=e}},"e"),r.a.createElement("span",{ref:function(e){m=e}},"l"),r.a.createElement("span",{ref:function(e){u=e}},"c"),r.a.createElement("span",{ref:function(e){f=e}},"o"),r.a.createElement("span",{ref:function(e){b=e}},"m"),r.a.createElement("span",{ref:function(e){v=e}},"e"),r.a.createElement("span",{ref:function(e){E=e}},","),"\xa0",r.a.createElement("span",{ref:function(e){g=e}},e.firstname),"!"),r.a.createElement("nav",{className:"dshbrd__btn-group"},r.a.createElement(l.b,{className:"btn dshbrd__btn",to:"/memovie/moviepicker"},"Pick me a movie!"),r.a.createElement(l.b,{className:"btn dshbrd__btn",to:"/memovie/mymovies"},"My Movies"))):r.a.createElement(R,null)},w=t(378),k=function(e){var a=e.component,t=Object(w.a)(e,["component"]),n=localStorage.getItem("user");return r.a.createElement(i.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(i.a,{to:{pathname:"/home",state:{from:e.location}}})}}))},D=t(61),M=function(e){var a=e.className,t=e.onClick,n=e.children;return r.a.createElement("button",{className:a,onClick:t},n)},T=t(197),A=t(494),x=t(497),I=t(496),P=function(e){var a=e.handleAboutClose,t=e.aboutDialogueOpen,n=Object(j.a)({paper:{backgroundColor:"#cfe8fc"},paddingNone:{padding:"0"}})();return r.a.createElement(A.a,{open:t,onClose:a},r.a.createElement("div",{className:"dialogue__container"},r.a.createElement("h1",{className:"dialogue__heading"},"About MeMovie"),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:n.paper+" paper",elevation:3},r.a.createElement("p",null,"MeMovie removes the hours spent staring at Netflix, perplexed at how there can be so many films that you don't want to spend your evening watching."),r.a.createElement("br",null),r.a.createElement("p",null,"With MeMovie, when you hear about a film you would like to see, simply enter at least the title (you can also enter the director, genre and who it stars), and it will be added to your table of movies. When you want to watch one, simply pick from the table, or use the pick movie feature, which will pick you a random movie only from your table."),r.a.createElement("br",null),r.a.createElement("p",null,"You are able to use filters when picking, so if you want ie a random horror movie, providing you have added some movies with horror as their genre, check the horror filter and you will be picked a random horror movie."),r.a.createElement("br",null),r.a.createElement("p",null,"Happy watching!"))),r.a.createElement(x.a,{className:n.paddingNone},r.a.createElement(M,{className:"btn",onClick:a},"Back"))))},L=t(356),W=t.n(L),U=function(e){var a=e.children,t=Object(n.useState)(!1),o=Object(s.a)(t,2),c=o[0],i=o[1],m=Object(d.c)(),u=Object(j.a)({fontSize44:{fontSize:44}})();return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__icon-container"},r.a.createElement(l.b,{className:"header__icon-home",to:"/memovie/dashboard"},r.a.createElement(W.a,{className:u.fontSize44})),r.a.createElement(l.b,{onClick:function(){m({type:"RESET_MOVIES"},{type:"LOGOUT_USER"}),localStorage.removeItem("user")},className:"btn header__logout",to:"/"},"Logout")),r.a.createElement("h1",{className:"header__h1"},a),r.a.createElement("nav",{className:"header__nav"},r.a.createElement(l.b,{className:"btn",to:"/memovie/moviepicker"},"Movie Picker"),r.a.createElement("i",{className:"fas fa-circle"}),r.a.createElement(l.b,{className:"btn",to:"/memovie/mymovies"},"My Movies"),r.a.createElement("i",{className:"fas fa-circle"}),r.a.createElement(P,{handleAboutClose:function(){i(!1)},aboutDialogueOpen:c}),r.a.createElement(M,{className:"btn",onClick:function(){i(!0)}},"About")))},V=t(200),G=t.n(V),F=function(e){var a=e.open,t=e.handleClose,n=e.handleReset,o=Object(j.a)({paper:{backgroundColor:"rgba(255, 191, 102, 0.9)"},paddingNone:{padding:"0"}})();return r.a.createElement(A.a,{open:a,onClose:t},r.a.createElement("div",{className:"dialogue__container"},r.a.createElement("h1",{className:"dialogue__heading"},"Reset your movies?"),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:o.paper+" paper",elevation:3},r.a.createElement("div",{className:"flex-align-center dialogue__content-alert"},r.a.createElement(G.a,null),r.a.createElement("p",null,"This will clear the table and you will have to start over")))),r.a.createElement(x.a,{className:o.paddingNone},r.a.createElement("div",{className:"center"},r.a.createElement(M,{className:"btn",onClick:t},"Back"),r.a.createElement(M,{className:"btn",onClick:n},"Reset")))))},B=function(e){var a=e.open,t=e.handleClose,n=e.dialogueHeading,o=e.dialogueContent,c=Object(j.a)({paper:{backgroundColor:"rgba(255, 191, 102, 0.9)"},paddingNone:{padding:"0"}})();return r.a.createElement(A.a,{open:a,onClose:t},r.a.createElement("div",{className:"dialogue__container"},r.a.createElement("h1",{className:"dialogue__heading"},n),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:c.paper+" paper",elevation:3},r.a.createElement("div",{className:"flex-align-center dialogue__content-alert"},r.a.createElement(G.a,null),r.a.createElement("p",null,o)))),r.a.createElement(x.a,{className:c.paddingNone},r.a.createElement(M,{className:"btn",onClick:t},"Ok"))))},H=t(239),z=t(240),Y=t(201),X=function(e){var a=e.value,t=e.label,n=e.onChange,o=e.id,c=e.faIcon,l=Object(j.a)({marginBottom:{marginBottom:"1rem"}})();return r.a.createElement(H.a,null,r.a.createElement(z.a,{htmlFor:o},t,r.a.createElement("i",{className:c})),r.a.createElement(Y.a,{className:l.marginBottom,id:o,value:a,onChange:n}))},J=Object(j.a)({paper:{backgroundColor:"#cfe8fc",padding:"1rem 1.5rem",marginBottom:"1rem"}}),K=function(e,a){switch(a.type){case"fieldNameChange":return Object(u.a)(Object(u.a)({},e),{},{movie:Object(u.a)(Object(u.a)({},e.movie),{},Object(m.a)({},a.payload.fieldName,a.payload.value))});case"warningDialogueOpen":return{warningDialogueOpen:!0};case"warningDialogueClose":return Object(u.a)(Object(u.a)({},e),{},{warningDialogueOpen:!1});case"resetForm":return Object(u.a)(Object(u.a)({},e),{},{movie:{movieTitle:"",movieGenre:"",movieDirector:"",movieCast:"",movieWatched:!1}});default:return}},q={movie:{movieTitle:"",movieGenre:"",movieDirector:"",movieCast:"",movieWatched:!1},warningDialogueOpen:!1},Q=function(e){var a=e.handleMovieFormClose,t=e.movieFormDialogueOpen,o=Object(n.useReducer)(K,q),c=Object(s.a)(o,2),l=c[0],i=c[1],m=l.movie,u=m.movieTitle,f=m.movieGenre,v=m.movieDirector,E=m.movieCast,g=l.warningDialogueOpen,O=Object(d.c)(),_=function(e){e.preventDefault();var t,n=l.movie;""===n.movieTitle?i({type:"warningDialogueOpen"}):(O((t=n,function(e){h.post("user/movies",t,{headers:{Authorization:b}}).then((function(a){var t=a.data.data;e(function(e){return{type:"ADD_MOVIE",payload:e}}(p(t)))}))})),i({type:"resetForm"}),a())},N=J();return r.a.createElement(A.a,{open:t,onClose:a},r.a.createElement(B,{handleClose:function(){i({type:"warningDialogueClose"})},open:g,dialogueHeading:"No movie title",dialogueContent:"Please enter a movie title to add a movie"}),r.a.createElement(I.a,null,r.a.createElement("h1",{className:"center mf__h1"},"Add a movie:"),r.a.createElement(T.a,{className:N.paper,elevation:3},r.a.createElement("form",{onSubmit:_,className:"mf__form"},r.a.createElement(X,{label:"Movie title",faIcon:"fas fa-asterisk fa-1x mf-asterisk",id:"title",value:u,onChange:function(e){return i({type:"fieldNameChange",payload:{fieldName:"movieTitle",value:e.currentTarget.value}})}}),r.a.createElement(X,{label:"Movie director",id:"director",value:v,onChange:function(e){return i({type:"fieldNameChange",payload:{fieldName:"movieDirector",value:e.currentTarget.value}})}}),r.a.createElement(X,{label:"Movie genre",id:"genre",value:f,onChange:function(e){return i({type:"fieldNameChange",payload:{fieldName:"movieGenre",value:e.currentTarget.value}})}}),r.a.createElement(X,{label:"Cast",id:"cast",value:E,onChange:function(e){return i({type:"fieldNameChange",payload:{fieldName:"movieCast",value:e.currentTarget.value}})}}),r.a.createElement("small",{className:"mf__small"},"Please put a comma and space between cast names"),r.a.createElement("small",{className:"mf__small"},"*Required"),r.a.createElement("div",{className:"center"},r.a.createElement(M,{className:"btn",onClick:_},"Add movie"))))))},Z=t(504),$=t(359),ee=t.n($),ae=t(369),te=t.n(ae),ne=t(360),re=t.n(ne),oe=t(367),ce=t.n(oe),le=t(250),ie=t.n(le),se=t(249),me=t.n(se),ue=t(361),de=t.n(ue),fe=t(362),he=t.n(fe),pe=t(364),be=t.n(pe),ve=t(365),Ee=t.n(ve),ge=t(366),Oe=t.n(ge),_e=t(370),Ne=t.n(_e),je=t(363),ye=t.n(je),Ce=t(368),Re=t.n(Ce),Se=t(371),we=t.n(Se),ke=t(241),De=t.n(ke),Me=Object(j.a)({arrow:{transition:"all 0.2s linear",marginLeft:"0.2rem"},font5:{fontSize:"5rem"}}),Te=function(){var e=Object(d.c)(),a=Object(d.d)((function(e){return e.movie.movies})),t=(Object(d.d)((function(e){return e.auth.user})),Object(n.useState)(!1)),o=Object(s.a)(t,2),c=o[0],l=o[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],f=m[1],p=function(a){e(function(e){return function(a){var t=e.id,n=localStorage.getItem("user");h.put("user/movies/".concat(t),e,{headers:{Authorization:n}}).then((function(e){a(function(e){return{type:"UPDATE_MOVIE",payload:e}}(e.data.data))}))}}(a))},v=function(a){var t;e((t=a,function(e){var a=t;h.delete("user/movies/".concat(a),{headers:{Authorization:b}}).then((function(){e(function(e){return{type:"REMOVE_MOVIE",payload:e}}(a))}))}))},E={Add:Object(n.forwardRef)((function(e,a){return r.a.createElement(ee.a,Object.assign({},e,{ref:a}))})),Check:Object(n.forwardRef)((function(e,a){return r.a.createElement(re.a,Object.assign({},e,{ref:a}))})),Clear:Object(n.forwardRef)((function(e,a){return r.a.createElement(me.a,Object.assign({},e,{ref:a}))})),Delete:Object(n.forwardRef)((function(e,a){return r.a.createElement(de.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(n.forwardRef)((function(e,a){return r.a.createElement(ie.a,Object.assign({},e,{ref:a}))})),Edit:Object(n.forwardRef)((function(e,a){return r.a.createElement(he.a,Object.assign({},e,{ref:a}))})),Export:Object(n.forwardRef)((function(e,a){return r.a.createElement(ye.a,Object.assign({},e,{ref:a}))})),Filter:Object(n.forwardRef)((function(e,a){return r.a.createElement(be.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(Ee.a,Object.assign({},e,{ref:a}))})),LastPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(Oe.a,Object.assign({},e,{ref:a}))})),NextPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ie.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ce.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(n.forwardRef)((function(e,a){return r.a.createElement(me.a,Object.assign({},e,{ref:a}))})),Search:Object(n.forwardRef)((function(e,a){return r.a.createElement(Re.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(n.forwardRef)((function(e,a){return r.a.createElement(te.a,{ref:a,className:g.arrow})})),ThirdStateCheck:Object(n.forwardRef)((function(e,a){return r.a.createElement(Ne.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(n.forwardRef)((function(e,a){return r.a.createElement(we.a,Object.assign({},e,{ref:a}))}))},g=Me(),O=Object(n.useState)([{title:"Movie Title",field:"movieTitle"},{title:"Director",field:"movieDirector"},{title:"Genre",field:"movieGenre"},{title:"Cast",field:"movieCast"},{title:"Watched",field:"movieWatched",type:"boolean",render:function(e){return e.movieWatched?"Yes":"No"}}]),_=Object(s.a)(O,1)[0];return r.a.createElement(Z.a,{width:"50%"},r.a.createElement(U,null,"My Movies"),r.a.createElement(Q,{handleMovieFormClose:function(){l(!1)},movieFormDialogueOpen:c}),r.a.createElement("div",{className:"center"},r.a.createElement(M,{className:"btn btn-secondary mt-1 mb-1",onClick:function(){l(!0)}},"Add a movie")),a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{handleClose:function(){f(!1)},handleReset:function(){e((function(e){h.delete("user/movies",{headers:{Authorization:b}}).then((function(){e({type:"RESET_MOVIES"})}))})),f(!1)},open:u}),r.a.createElement(De.a,{title:"Movie List",icons:E,columns:_,data:a,editable:{onRowUpdate:function(e,t){return new Promise((function(n){Object(D.a)(a)[t.id]=e,p(e),n()}))},onRowDelete:function(e){return new Promise((function(a){var t=e.id;v(t),a()}))}},options:{actionsColumnIndex:-1,headerStyle:{fontSize:"1rem",textAlign:"center",whiteSpace:"nowrap"},rowStyle:{fontFamily:"Roboto, Helvetica, Arial",fontSize:"1rem",textAlign:"center"},cellStyle:{textAlign:"center"}}}),r.a.createElement("div",{className:"center mt-1"},r.a.createElement(M,{className:"btn btn-secondary mb-1",onClick:function(){f(!0)}},"Reset"))):r.a.createElement("h2",{className:"center movie-table__h2"},"No movies! Add some by clicking the button above"))},Ae=t(372),xe=t(373),Ie=t(98),Pe=t(379),Le=t(377),We=t(374),Ue=t.n(We),Ve=t(503),Ge=function(e){var a=e.heading,t=e.filtersNoDuplicates,o=e.onChange,c=Object(n.useState)(!1),l=Object(s.a)(c,2),i=l[0],m=l[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),f=d[0],h=d[1],p=Object(j.a)({paper:{padding:"1rem"},roboto:{fontFamily:"Roboto, sans-serif"},rotateChev:{transform:f?"rotate(180deg)":"rotate(0)",transition:"all 0.2s linear"},flexColumn:{flexDirection:"column"},marginLeft:{marginLeft:"0.3rem"}})();return r.a.createElement("div",{className:"filters__group"},r.a.createElement("div",{className:"filters__heading flex-align-center center"},r.a.createElement("h4",null,a),r.a.createElement(Ue.a,{className:p.rotateChev+" filters__chevron",onClick:function(){m(!i),h(!f)}})),""!==t[0]&&t.length>0&&r.a.createElement(Ve.a,{in:i},r.a.createElement(T.a,{elevation:4,className:p.paper},r.a.createElement("div",{className:p.flexColumn+" flex-align-center center"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"flex-align-center mb-1"},r.a.createElement("label",{className:p.fontFamily,htmlFor:"filter"},e),r.a.createElement("input",{id:"filter",type:"checkbox",value:e,onChange:o,className:p.marginLeft}))}))))))},Fe=function(e){var a=e.handleClose,t=e.open,n=e.pickedMovie,o=Object(j.a)({paper:{backgroundColor:"#cfe8fc"},berp:{justifyContent:"center"}})();return r.a.createElement(A.a,{open:t,onClose:a},r.a.createElement("div",{className:"dialogue__container"},r.a.createElement("h1",{className:"dialogue__heading"},"Your movie"),r.a.createElement(I.a,null,r.a.createElement(T.a,{classes:{root:o.paper},className:"paper",elevation:3},r.a.createElement("h1",{className:"picked-movie__h1"},n.movieTitle),"-"!==n.movieDirector?r.a.createElement("p",{className:"picked-movie__director"},"Director: ",n.movieDirector):null)),r.a.createElement(x.a,{className:o.berp},r.a.createElement(M,{className:"btn btn-secondary",onClick:a},"Choose again"))))},Be=Object(d.b)((function(e){return{pickedMovie:e.movie.pickedMovie}}))(Fe),He=function(e){var a=e.handleClose,t=e.open,n=Object(j.a)({paper:{backgroundColor:"#cfe8fc"},paddingNone:{padding:"0"}})();return r.a.createElement(A.a,{open:t,onClose:a},r.a.createElement("div",{className:"dialogue__container"},r.a.createElement("h1",{className:"dialogue__heading"},"No movies!"),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:n.paper+" paper",elevation:3},r.a.createElement("h3",{className:"no-movies__h3"},"There are no movies matching your search criteria. Please change your filters or add a movie that matches them."))),r.a.createElement(x.a,{className:n.paddingNone},r.a.createElement(M,{className:"btn",onClick:a},"Back"))))},ze=t(4),Ye=function(e){Object(Pe.a)(t,e);var a=Object(Le.a)(t);function t(e){var n;return Object(Ae.a)(this,t),(n=a.call(this,e)).state={filters:[],movieDialogueOpen:!1,warningDialogueOpen:!1},n.handleChange=n.handleChange.bind(Object(Ie.a)(n)),n.handlePickMovie=n.handlePickMovie.bind(Object(Ie.a)(n)),n.handleMovieDialogueOpen=n.handleMovieDialogueOpen.bind(Object(Ie.a)(n)),n.handleMovieDialogueClose=n.handleMovieDialogueClose.bind(Object(Ie.a)(n)),n.handleWarningDialogueOpen=n.handleWarningDialogueOpen.bind(Object(Ie.a)(n)),n.handleWarningDialogueClose=n.handleWarningDialogueClose.bind(Object(Ie.a)(n)),n}return Object(xe.a)(t,[{key:"handleMovieDialogueOpen",value:function(){this.setState({movieDialogueOpen:!0})}},{key:"handleMovieDialogueClose",value:function(){this.setState({movieDialogueOpen:!1})}},{key:"handleWarningDialogueOpen",value:function(){this.setState({warningDialogueOpen:!0})}},{key:"handleWarningDialogueClose",value:function(){this.setState({warningDialogueOpen:!1})}},{key:"handleChange",value:function(e){var a=e.target.value;-1===this.state.filters.indexOf(a)?this.setState({filters:[].concat(Object(D.a)(this.state.filters),[a])}):this.state.filters.indexOf(a)>-1&&this.setState({filters:this.state.filters.filter((function(e){return e!==a}))})}},{key:"handleWatched",value:function(e){-1===this.state.filters.indexOf(e)?this.setState({filters:[].concat(Object(D.a)(this.state.filters),[e])}):this.state.filters.indexOf(e)>-1&&this.setState({filters:this.state.filters.filter((function(a){return a!==e}))})}},{key:"handlePickMovie",value:function(){var e=this.state.filters,a=this.props.movies,t={};t=e.length?function(e,a){var t=a.reduce((function(a,t){return Object.values(t).some((function(a){return e.includes(a)}))||t.movieCast.split(", ").some((function(a){return e.includes(a)}))?[].concat(Object(D.a)(a),[t]):a}),[]);return t[Math.floor(Math.random()*t.length)]}(e,a):a[Math.floor(Math.random()*a.length)],this.props.handlePickedMovie(t),void 0===t?this.handleWarningDialogueOpen():this.handleMovieDialogueOpen()}},{key:"render",value:function(){var e=this,a=this.state,t=a.movieDialogueOpen,n=a.warningDialogueOpen,o=this.props,c=o.movies,l=o.classes,i=Object(D.a)(new Set(c.map((function(e){return e.movieDirector})).filter((function(e){return"-"!==e})))),s=Object(D.a)(new Set(c.map((function(e){return e.movieGenre})).filter((function(e){return"-"!==e})))),m=Object(D.a)(new Set(c.map((function(e){return e.movieCast.split(", ")})).flat().filter((function(e){return"-"!==e}))));return r.a.createElement(Z.a,{width:"70%"},r.a.createElement(Be,{handleClose:this.handleMovieDialogueClose,open:t}),r.a.createElement(He,{handleClose:this.handleWarningDialogueClose,open:n}),r.a.createElement(U,null,"Movie Picker"),r.a.createElement("h3",{className:"center mp__h3"},"Pick a random movie from your movies, with or without filters"),r.a.createElement(T.a,{className:l.overflowX,elevation:4},r.a.createElement("div",{className:"filters__container"},r.a.createElement("div",{className:"filters"},r.a.createElement(Ge,{heading:"Directors",filtersNoDuplicates:i,onChange:function(a){return e.handleChange(a)}}),r.a.createElement(Ge,{heading:"Genres",filtersNoDuplicates:s,onChange:function(a){return e.handleChange(a)}}),r.a.createElement(Ge,{heading:"Cast",filtersNoDuplicates:m,onChange:function(a){return e.handleChange(a)}}),r.a.createElement("div",{className:"filters__group filters__group-watched-before"},r.a.createElement("h4",{className:"filters__heading"},"Watched before"),r.a.createElement("div",{className:l.spaceAround+" flex-align-center"},r.a.createElement("div",{className:"flex-align-center filters__watched-checkbox"},r.a.createElement("label",{className:l.roboto,htmlFor:"yes"},"Yes"),r.a.createElement("input",{id:"yes",type:"checkbox",onChange:function(){return e.handleWatched(!0)},className:l.marginLeft})),r.a.createElement("div",{className:"flex-align-center filters__watched-checkbox"},r.a.createElement("label",{className:l.roboto,htmlFor:"no"},"No"),r.a.createElement("input",{id:"no",type:"checkbox",onChange:function(){return e.handleWatched(!1)},className:l.marginLeft}))))),r.a.createElement("div",{className:"center mt-1"},r.a.createElement(M,{className:"btn",onClick:this.handlePickMovie},"Pick movie")))))}}]),t}(n.Component),Xe=Object(ze.a)({paper:{overflowX:"auto"},spaceAround:{width:"100%",justifyContent:"space-around"},roboto:{fontFamily:"Roboto, sans-serif"},marginLeft:{marginLeft:"0.3rem"}})(Ye),Je=Object(d.b)((function(e){return{movies:e.movie.movies}}),(function(e){return{handlePickedMovie:function(a){return e({type:"SAVE_PICKED_MOVIE",payload:a})}}}))(Xe),Ke=function(){var e=Object(j.a)({h1:{textAlign:"center",fontSize:"5rem",marginBottom:"2rem"}})();return r.a.createElement("div",{className:"dshbrd__container"},r.a.createElement("h1",{className:e.h1},"Oops, page not found"),r.a.createElement(l.b,{className:"btn btn-secondary",to:"/memovie"},"Home"))};var qe=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"background-image"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/memovie",component:g}),r.a.createElement(i.b,{path:"/memovie/register",component:N}),r.a.createElement(k,{path:"/memovie/mymovies",component:Te}),r.a.createElement(k,{path:"/memovie/moviepicker",component:Je}),r.a.createElement(k,{path:"/memovie/dashboard",component:S}),r.a.createElement(i.b,{component:Ke}))))},Qe=(t(471),t(60)),Ze={pickedMovie:{},movies:[]},$e={authResponse:null,user:{}},ea=Object(Qe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,a=arguments.length>1?arguments[1]:void 0,t=a.type;switch(t){case"RESTART_AUTH_RESPONSE":return Object(u.a)(Object(u.a)({},e),{},{authResponse:null});case"LOADING":return Object(u.a)(Object(u.a)({},e),{},{authResponse:"Loading..."});case"SHORT_PASSWORD":return Object(u.a)(Object(u.a)({},e),{},{authResponse:"Password is too short."});case"SIGNUP_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{authResponse:"Register successful!",user:Object(u.a)({},a.payload)});case"SIGNUP_ERROR":return Object(u.a)(Object(u.a)({},e),{},{authResponse:a.res.data.message});case"CODE_ERROR":return Object(u.a)(Object(u.a)({},e),{},{authResponse:"There seems to be a problem, please try again later."});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{authResponse:"Redirecting you to dashboard...",user:Object(u.a)({},a.payload)});case"LOGOUT_USER":return Object(u.a)(Object(u.a)({},e),{},{user:{}});case"LOGIN_ERROR":return Object(u.a)(Object(u.a)({},e),{},{authResponse:a.res.data.message});default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SAVE_MOVIES":return Object(u.a)(Object(u.a)({},e),{},{movies:[].concat(Object(D.a)(e.movies),Object(D.a)(n)),loaded:!0});case"ADD_MOVIE":return Object(u.a)(Object(u.a)({},e),{},{movies:[].concat(Object(D.a)(e.movies),[n])});case"REMOVE_MOVIE":return Object(u.a)(Object(u.a)({},e),{},{movies:e.movies.filter((function(e){return e.id!==n}))});case"UPDATE_MOVIE":return Object(u.a)(Object(u.a)({},e),{},{movies:e.movies.map((function(e){return e.id===n.id?n:e}))});case"RESET_MOVIES":return Object(u.a)(Object(u.a)({},e),{},{movies:[]});case"SAVE_PICKED_MOVIE":return Object(u.a)(Object(u.a)({},e),{},{pickedMovie:Object(u.a)({},n)});default:return e}}}),aa=t(375),ta=t(376),na=t.n(ta),ra=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Qe.d,oa=Object(Qe.e)(ea,ra(Object(Qe.a)(aa.a),na()()));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:oa},r.a.createElement(qe,null))),document.getElementById("root"))}},[[387,1,2]]]);
//# sourceMappingURL=main.3c3f7bcb.chunk.js.map