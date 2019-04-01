webpackJsonpexports([23],{1573:function(t,e,n){"use strict";function i(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return B});var s,c,u,l,f=n(1),p=n.n(f),d=n(0),h=n.n(d),y=n(5),m=n(2),b=n(92),O=n(600),v=n(1637),g=n(18),w=n(179),j=n(621),_=n(52),k=n(81),E=n(1653),P=n(417),T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},x=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),A={alerts:{title:"Project Alerts",description:Object(m.t)("Control alerts that you receive per project."),type:"select",choices:[[-1,Object(m.t)("Default")],[1,Object(m.t)("On")],[0,Object(m.t)("Off")]],defaultValue:-1,defaultFieldName:"subscribeByDefault"},workflow:{title:"Workflow Notifications",description:Object(m.t)("Control workflow notifications, e.g. changes in issue assignment, resolution status, and comments."),type:"select",choices:[[-1,Object(m.t)("Default")],[0,Object(m.t)("Always")],[1,Object(m.t)("Only on issues I subscribe to")],[2,Object(m.t)("Never")]],defaultValue:-1,defaultFieldName:"workflowNotifications"},deploy:{title:Object(m.t)("Deploy Notifications"),description:Object(m.t)("Control deploy notifications that include release, environment, and commit overviews."),type:"select",choices:[[-1,Object(m.t)("Default")],[2,Object(m.t)("Always")],[3,Object(m.t)("Only on deploys with my commits")],[4,Object(m.t)("Never")]],defaultValue:-1,defaultFieldName:"deployNotifications"},reports:{title:Object(m.t)("Weekly Reports"),description:Object(m.t)("Reports contain a summary of what's happened within the organization."),type:"select",choices:[[1,Object(m.t)("On")],[0,Object(m.t)("Off")]],defaultFieldName:"weeklyReports"},email:{title:Object(m.t)("Email Routing"),description:Object(m.t)("On a per project basis, route emails to an alternative email address."),type:"select"}},F=Object(y.default)(g.c,{target:"e1n8sueq0"})("font-size:1.4rem;border-bottom:1px solid ",function(t){return t.theme.borderLight},";"),M=function(t){return["alerts","workflow","email"].indexOf(t)>-1},C=(c=s=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),x(e,[{key:"getFieldData",value:function(){var t=this.props,e=t.projects,n=t.field;w.a.loadInitialData(e);var o=w.a.getAllGroupedByOrganization(),r=(n.title,n.description,i(n,["title","description"]));return Object.values(o).map(function(t){return{name:t.organization.name,projects:t.projects.map(function(t){return T({},r,{name:t.id,label:t.slug})})}})}},{key:"render",value:function(){return this.getFieldData().map(function(t){var e=t.name,n=t.projects;return h.a.createElement("div",{key:e},h.a.createElement(g.e,null,e),n.map(function(t){return h.a.createElement(F,{key:t.name},h.a.createElement(j.a,{defaultValue:t.defaultValue,name:t.name,choices:t.choices,label:t.label}))}))})}}]),e}(h.a.Component),s.propTypes={projects:p.a.array,field:p.a.object},c),D=(l=u=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),x(e,[{key:"getFieldData",value:function(){var t=this.props,e=t.field,n=t.organizations,o=(e.title,e.description,i(e,["title","description"]));return n.map(function(t){return T({},o,{name:t.id,label:t.slug})})}},{key:"render",value:function(){var t=this.getFieldData();return h.a.createElement(h.a.Fragment,null,h.a.createElement(g.e,null,Object(m.t)("Organizations")),t.map(function(t){return h.a.createElement(F,{key:t.name},h.a.createElement(j.a,{defaultValue:t.defaultValue,name:t.name,choices:t.choices,label:t.label}))}))}}]),e}(h.a.Component),u.propTypes={organizations:p.a.array,field:p.a.object},l),N=Object(P.a)(D),B=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),x(e,[{key:"getEndpoints",value:function(){var t=this.props.params.fineTuneType,e=[["notifications","/users/me/notifications/"],["fineTuneData","/users/me/notifications/"+t+"/"]];return M(t)&&e.push(["projects","/projects/"]),e.push(["emails","/users/me/emails/"]),"email"===t&&e.push(["emails","/users/me/emails/"]),e}},{key:"getEmailChoices",value:function(){var t=this.state.emails;return t?t.filter(function(t){return t.isVerified}).sort(function(t,e){return t.isPrimary?-1:e.isPrimary?1:t.email<e.email?-1:1}):[]}},{key:"renderBody",value:function(){var t=this.props.params.fineTuneType,e=M(t),n=A[t],i=n.title,o=n.description;return"email"===t&&(n.choices=this.getEmailChoices().map(function(t){var e=t.email;return[e,e]})),h.a.createElement("div",null,h.a.createElement(_.default,{title:i}),o&&h.a.createElement(k.default,null,o),n&&n.defaultFieldName&&h.a.createElement(O.a,{saveOnBlur:!0,apiMethod:"PUT",apiEndpoint:"/users/me/notifications/",initialData:this.state.notifications},h.a.createElement(v.a,{title:"Default "+i,fields:[E.fields[n.defaultFieldName]]})),h.a.createElement(O.a,{saveOnBlur:!0,apiMethod:"PUT",apiEndpoint:"/users/me/notifications/"+this.props.params.fineTuneType+"/",initialData:this.state.fineTuneData},h.a.createElement(g.a,null,e&&h.a.createElement(C,{projects:this.state.projects,field:n}),!e&&h.a.createElement(N,{field:n}))))}}]),e}(b.default)},1636:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1637:function(t,e,n){"use strict";function i(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s,c,u,l,f,p=n(14),d=n(1),h=n.n(d),y=n(0),m=n.n(y),b=n(1638),O=n.n(b),v=n(10),g=n(601),w=n(18),j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),k=(c=s=function(t){function e(t){var n;o(this,e);for(var i=arguments.length,a=Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var c=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(a)));return u.call(c),c.state={highlighted:c.getLocation(t).hash},c}return a(e,t),_(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(t,e){if(this.getLocation(this.props).hash!==this.getLocation(t).hash){var n=this.getLocation(t).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(t){var e=t||this.getLocation(this.props).hash;e&&O()(e,{align:"middle",offset:-100})}},{key:"render",value:function(){var t=this.props,e=t.forms,n=t.title,o=t.fields,r=t.access,a=t.features,s=t.additionalFieldProps,c=t.renderFooter,u=t.renderHeader,l=(t.location,i(t,["forms","title","fields","access","features","additionalFieldProps","renderFooter","renderHeader","location"])),f=Object(v.d)(e),d={access:r,features:a,additionalFieldProps:s,renderFooter:c,renderHeader:u,highlighted:this.state.highlighted};return m.a.createElement(p.Box,l,f?e.map(function(t){return m.a.createElement(E,j({key:t.title,title:t.title,fields:t.fields},d))}):m.a.createElement(E,j({title:n,fields:o},d)))}}]),e}(m.a.Component),s.propTypes={forms:h.a.arrayOf(h.a.shape({title:h.a.string,fields:h.a.arrayOf(h.a.oneOfType([h.a.func,g.a.propTypes.field]))})),fields:h.a.arrayOf(h.a.oneOfType([h.a.func,g.a.propTypes.field])),title:h.a.string,access:h.a.object,features:h.a.object,additionalFieldProps:h.a.object,renderFooter:h.a.func,renderHeader:h.a.func},s.defaultProps={additionalFieldProps:{}},s.contextTypes={location:h.a.object},u=function(){var t=this;this.getLocation=function(e){return e.location||t.context.location||{}}},c);e.a=k;var E=(f=l=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),_(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,o=e.fields,r=e.access,a=e.additionalFieldProps,s=e.renderFooter,c=e.renderHeader,u=(e.location,i(e,["title","fields","access","additionalFieldProps","renderFooter","renderHeader","location"])),l="function"==typeof s,f="function"==typeof c;return m.a.createElement(w.a,{key:n,id:n},m.a.createElement(w.e,null,n),m.a.createElement(w.c,null,f&&c({title:n,fields:o}),o.map(function(e){if("function"==typeof e)return e();var n=(e.defaultValue,i(e,["defaultValue"]));return m.a.createElement(g.a,j({access:r,key:e.name},u,a,{field:n,highlighted:t.props.highlighted==="#"+e.name}))}),l&&s({title:n,fields:o})))}}]),e}(m.a.Component),l.propTypes={title:h.a.string,fields:h.a.arrayOf(h.a.oneOfType([h.a.func,g.a.propTypes.field])),access:h.a.object,additionalFieldProps:h.a.object,highlighted:h.a.string,renderHeader:h.a.func,renderFooter:h.a.func},f)},1638:function(t,e,n){function i(t,e,n){var i=document.body,o=document.documentElement,r=t.getBoundingClientRect(),a=o.clientHeight,s=Math.max(i.scrollHeight,i.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);e=e||0;var c;c="bottom"===n?r.bottom-a:"middle"===n?r.bottom-a/2-r.height/2:r.top;var u=s-a;return Math.min(c+e+window.pageYOffset,u)}var o=n(1639);t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return o(0,i(t,e.offset,e.align),e)}},1639:function(t,e,n){function i(t,e,n){function i(){a(i),c.update()}n=n||{};var s=o(),c=r(s).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);return c.update(function(t){window.scrollTo(0|t.left,0|t.top)}),c.on("end",function(){i=function(){}}),i(),c}function o(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}}var r=n(1640),a=n(1644);t.exports=i},1640:function(t,e,n){function i(t){if(!(this instanceof i))return new i(t);this._from=t,this.ease("linear"),this.duration(500)}var o=n(1641),r=n(1642),a=n(1636),s=n(1643);t.exports=i,o(i.prototype),i.prototype.reset=function(){return this.isArray="array"===a(this._from),this._curr=r(this._from),this._done=!1,this._start=Date.now(),this},i.prototype.to=function(t){return this.reset(),this._to=t,this},i.prototype.duration=function(t){return this._duration=t,this},i.prototype.ease=function(t){if(!(t="function"==typeof t?t:s[t]))throw new TypeError("invalid easing function");return this._ease=t,this},i.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},i.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,i=this._to,o=this._curr,r=this._ease,a=(e-this._start)/t,s=r(a);if(this.isArray){for(var c=0;c<n.length;++c)o[c]=n[c]+(i[c]-n[c])*s;return this._update(o),this}for(var u in n)o[u]=n[u]+(i[u]-n[u])*s;return this._update(o),this}},i.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1641:function(t,e){function n(t){if(t)return i(t)}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i,o=0;o<n.length;o++)if((i=n[o])===e||i.fn===e){n.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var i=0,o=n.length;i<o;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1642:function(t,e,n){function i(t){switch(o(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=i(t[n]));return e;case"array":for(var e=new Array(t.length),r=0,a=t.length;r<a;r++)e[r]=i(t[r]);return e;case"regexp":var s="";return s+=t.multiline?"m":"",s+=t.global?"g":"",s+=t.ignoreCase?"i":"",new RegExp(t.source,s);case"date":return new Date(t.getTime());default:return t}}var o;try{o=n(1636)}catch(t){o=n(1636)}t.exports=i},1643:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1644:function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),o=setTimeout(t,n);return i=e,o}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var i=(new Date).getTime(),o=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){o.call(window,t)}},1653:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"route",function(){return o}),n.d(e,"fields",function(){return r});var i=n(2),o="/settings/account/notifications/",r={subscribeByDefault:{name:"subscribeByDefault",type:"boolean",label:Object(i.t)("Send Me Project Alerts"),help:Object(i.tct)("Alerts are defined in [locationPath]",{locationPath:"[Project] » Project Settings » Alerts » Rules."})},workflowNotifications:{name:"workflowNotifications",type:"radio",label:Object(i.t)("Send Me Workflow Notifications"),choices:[[0,"Always"],[1,"Only On Issues I Subscribe To"],[2,"Never"]],help:Object(i.t)("E.g. changes in issue assignment, resolution status, and comments.")},weeklyReports:{name:"weeklyReports",type:"boolean",label:Object(i.t)("Send Me Weekly Reports"),help:Object(i.t)("Reports contain a summary of what's happened within your organization."),disabled:!0},deployNotifications:{name:"deployNotifications",type:"radio",label:Object(i.t)("Send Me Deploy Notifications"),choices:[[2,"Always"],[3,"Only On Deploys With My Commits"],[4,"Never"]],help:Object(i.t)("Deploy emails include release, environment and commit overviews.")},personalActivityNotifications:{name:"personalActivityNotifications",type:"boolean",label:Object(i.t)("Notify Me About My Own Activity"),help:Object(i.t)("Enable this to receive notifications about your own actions on Sentry.")},selfAssignOnResolve:{name:"selfAssignOnResolve",type:"boolean",label:Object(i.t)("Claim Unassigned Issues I've Resolved"),help:Object(i.t)("You'll receive notifications about any changes that happen afterwards.")}},a=[{title:Object(i.t)("Alerts"),fields:[r.subscribeByDefault]},{title:Object(i.t)("Workflow Notifications"),fields:[r.workflowNotifications]},{title:Object(i.t)("Email Routing"),fields:[]},{title:Object(i.t)("Weekly Reports"),fields:[r.weeklyReports]},{title:Object(i.t)("Deploy Notifications"),fields:[r.deployNotifications]},{title:Object(i.t)("My Activity"),fields:[r.personalActivityNotifications,r.selfAssignOnResolve]}];e.default=a}});
//# sourceMappingURL=AccountNotificationsFineTuning.js.map