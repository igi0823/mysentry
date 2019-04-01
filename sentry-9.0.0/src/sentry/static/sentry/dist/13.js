webpackJsonpexports([13],{1577:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(27),c=n(9),s=n(0),l=n.n(s),f=n(80),p=n(2),h=n(104),d=n(92),m=n(26),b=n(1702),y=n(600),g=n(1637),v=n(18),O=n(1776),w=n(1703),_=n(52),j=n(81),E=n(615),k=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},C="/users/me/authenticators/",T=function(t){var e=t.authenticator,n=t.hasSentCode,r=t.onSmsReset,o=t.onSmsSubmit,i=t.onU2fTap,c=e||{},s=c.form,f=c.qrcode,h=c.challenge,d=c.id;if(!s)return null;if(f)return[function(){return l.a.createElement(v.f,{key:"qrcode",justify:"center",p:2},l.a.createElement(O.a,{code:e.qrcode}))}].concat(a(s),[function(){return l.a.createElement(v.f,{key:"confirm",justify:"flex-end",p:2},l.a.createElement(m.default,{priority:"primary",type:"submit"},Object(p.t)("Confirm")))}]);if("sms"===d)return[P({},s[0],{disabled:function(){return n}}),P({},s[1],{required:!0,visible:function(){return n}}),function(){return l.a.createElement(v.f,{key:"sms-footer",justify:"flex-end",p:2,pr:"36px"},n&&l.a.createElement(m.default,{className:Object(u.css)({marginRight:6}),onClick:r},Object(p.t)("Start Over")),l.a.createElement(m.default,{priority:"primary",type:"button",onClick:o},n?Object(p.t)("Confirm"):Object(p.t)("Send Code")))}];if("u2f"===d){return[s.find(function(t){return"deviceName"===t.name}),function(){return l.a.createElement(E.default,{key:"u2f-enroll",style:{marginBottom:0},challengeData:h,displayMode:"enroll",flowMode:"enroll",onTap:i})}]}return null},x=function(t){function e(){var t;r(this,e);for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];var u=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i)));return u.handleFieldChange=function(t,e){u._form[t]=e},u.handleSmsReset=function(){u.setState({hasSentCode:!1},u.remountComponent)},u.handleSmsSubmit=function(t){var e=u.state,n=e.authenticator,r=e.hasSentCode;if(u._form.phone){var o={phone:u._form.phone,otp:r?u._form.otp||"":void 0,secret:n.secret};u.setState({loading:r}),r||Object(f.c)(Object(p.t)("Sending code to %s...",o.phone)),u.api.requestPromise(""+C+u.props.params.authId+"/enroll/",{data:o}).then(function(){r?(u.props.router.push("/settings/account/security/"),Object(h.g)({authenticatorName:n.name})):(u.setState({hasSentCode:!0,loading:!1}),Object(f.c)(Object(p.t)("Sent code to %s",o.phone)))},function(t){u._form={};var e="sms"===n.id;u.setState({hasSentCode:!e}),u.remountComponent();var r=u.state.hasSentCode?Object(p.t)("Incorrect OTP"):Object(p.t)("Error sending SMS");Object(f.a)(r)})}},u.handleU2fTap=function(t){return u.api.requestPromise(""+C+u.props.params.authId+"/enroll/",{data:P({},t,u._form)}).then(u.handleEnrollSuccess,u.handleEnrollError)},u.handleSubmit=function(t){var e=u.state.authenticator,n=P({},u._form,t||{},{secret:e.secret});u.setState({loading:!0}),u.api.requestPromise(""+C+u.props.params.authId+"/enroll/",{method:"POST",data:n}).then(u.handleEnrollSuccess,u.handleEnrollError)},u.handleEnrollSuccess=function(){var t=u.state.authenticator&&u.state.authenticator.name||"Authenticator";u.props.router.push("/settings/account/security"),Object(h.g)({authenticatorName:t})},u.handleEnrollError=function(){var t=u.state.authenticator&&u.state.authenticator.name||"Authenticator";u.setState({loading:!1}),Object(f.a)(Object(p.t)("Error adding %s authenticator",t))},u.handleRemove=function(){var t=u.state.authenticator;t&&t.authId&&u.api.requestPromise(""+C+t.authId+"/",{method:"DELETE"}).then(function(){u.props.router.push("/settings/account/security/"),Object(f.d)(Object(p.t)("Authenticator has been removed"))},function(){Object(f.a)(Object(p.t)("Error removing authenticator"))})},u._form={},u}return i(e,t),S(e,[{key:"getTitle",value:function(){return Object(p.t)("Security")}},{key:"getEndpoints",value:function(){return[["authenticator",""+C+this.props.params.authId+"/enroll/"]]}},{key:"renderBody",value:function(){var t=this.state.authenticator,e=""+C+this.props.params.authId+"/",n=T({authenticator:t,hasSentCode:this.state.hasSentCode,onSmsReset:this.handleSmsReset,onSmsSubmit:this.handleSmsSubmit,onU2fTap:this.handleU2fTap}),r=n?n.filter(function(t){return void 0!==t.defaultValue}).map(function(t){return[t.name,t.defaultValue]}).reduce(function(t,e){var n=k(e,2),r=n[0],o=n[1];return t[r]=o,t},{}):{};return l.a.createElement("div",null,l.a.createElement(_.default,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,t.name),l.a.createElement(b.a,{className:Object(u.css)({marginLeft:6}),enabled:t.isEnrolled})),action:t.isEnrolled&&t.removeButton&&l.a.createElement(w.a,{onConfirm:this.handleRemove},l.a.createElement(m.default,{priority:"danger"},t.removeButton))}),l.a.createElement(j.default,null,t.description),t.form&&!!t.form.length&&l.a.createElement(y.a,{apiMethod:"POST",onFieldChange:this.handleFieldChange,apiEndpoint:e,onSubmit:this.handleSubmit,initialData:P({},r,t),hideFooter:!0},l.a.createElement(g.a,P({},this.props,{forms:[{title:"Configuration",fields:n}]}))))}}]),e}(d.default);e.default=Object(c.withRouter)(x)},1636:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1637:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u,c,s,l,f,p=n(14),h=n(1),d=n.n(h),m=n(0),b=n.n(m),y=n(1638),g=n.n(y),v=n(10),O=n(601),w=n(18),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},j=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),E=(c=u=function(t){function e(t){var n;o(this,e);for(var r=arguments.length,a=Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];var c=i(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(a)));return s.call(c),c.state={highlighted:c.getLocation(t).hash},c}return a(e,t),j(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(t,e){if(this.getLocation(this.props).hash!==this.getLocation(t).hash){var n=this.getLocation(t).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(t){var e=t||this.getLocation(this.props).hash;e&&g()(e,{align:"middle",offset:-100})}},{key:"render",value:function(){var t=this.props,e=t.forms,n=t.title,o=t.fields,i=t.access,a=t.features,u=t.additionalFieldProps,c=t.renderFooter,s=t.renderHeader,l=(t.location,r(t,["forms","title","fields","access","features","additionalFieldProps","renderFooter","renderHeader","location"])),f=Object(v.d)(e),h={access:i,features:a,additionalFieldProps:u,renderFooter:c,renderHeader:s,highlighted:this.state.highlighted};return b.a.createElement(p.Box,l,f?e.map(function(t){return b.a.createElement(k,_({key:t.title,title:t.title,fields:t.fields},h))}):b.a.createElement(k,_({title:n,fields:o},h)))}}]),e}(b.a.Component),u.propTypes={forms:d.a.arrayOf(d.a.shape({title:d.a.string,fields:d.a.arrayOf(d.a.oneOfType([d.a.func,O.a.propTypes.field]))})),fields:d.a.arrayOf(d.a.oneOfType([d.a.func,O.a.propTypes.field])),title:d.a.string,access:d.a.object,features:d.a.object,additionalFieldProps:d.a.object,renderFooter:d.a.func,renderHeader:d.a.func},u.defaultProps={additionalFieldProps:{}},u.contextTypes={location:d.a.object},s=function(){var t=this;this.getLocation=function(e){return e.location||t.context.location||{}}},c);e.a=E;var k=(f=l=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),j(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,o=e.fields,i=e.access,a=e.additionalFieldProps,u=e.renderFooter,c=e.renderHeader,s=(e.location,r(e,["title","fields","access","additionalFieldProps","renderFooter","renderHeader","location"])),l="function"==typeof u,f="function"==typeof c;return b.a.createElement(w.a,{key:n,id:n},b.a.createElement(w.e,null,n),b.a.createElement(w.c,null,f&&c({title:n,fields:o}),o.map(function(e){if("function"==typeof e)return e();var n=(e.defaultValue,r(e,["defaultValue"]));return b.a.createElement(O.a,_({access:i,key:e.name},s,a,{field:n,highlighted:t.props.highlighted==="#"+e.name}))}),l&&u({title:n,fields:o})))}}]),e}(b.a.Component),l.propTypes={title:d.a.string,fields:d.a.arrayOf(d.a.oneOfType([d.a.func,O.a.propTypes.field])),access:d.a.object,additionalFieldProps:d.a.object,highlighted:d.a.string,renderHeader:d.a.func,renderFooter:d.a.func},f)},1638:function(t,e,n){function r(t,e,n){var r=document.body,o=document.documentElement,i=t.getBoundingClientRect(),a=o.clientHeight,u=Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);e=e||0;var c;c="bottom"===n?i.bottom-a:"middle"===n?i.bottom-a/2-i.height/2:i.top;var s=u-a;return Math.min(c+e+window.pageYOffset,s)}var o=n(1639);t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return o(0,r(t,e.offset,e.align),e)}},1639:function(t,e,n){function r(t,e,n){function r(){a(r),c.update()}n=n||{};var u=o(),c=i(u).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);return c.update(function(t){window.scrollTo(0|t.left,0|t.top)}),c.on("end",function(){r=function(){}}),r(),c}function o(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}}var i=n(1640),a=n(1644);t.exports=r},1640:function(t,e,n){function r(t){if(!(this instanceof r))return new r(t);this._from=t,this.ease("linear"),this.duration(500)}var o=n(1641),i=n(1642),a=n(1636),u=n(1643);t.exports=r,o(r.prototype),r.prototype.reset=function(){return this.isArray="array"===a(this._from),this._curr=i(this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(t){return this.reset(),this._to=t,this},r.prototype.duration=function(t){return this._duration=t,this},r.prototype.ease=function(t){if(!(t="function"==typeof t?t:u[t]))throw new TypeError("invalid easing function");return this._ease=t,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,o=this._curr,i=this._ease,a=(e-this._start)/t,u=i(a);if(this.isArray){for(var c=0;c<n.length;++c)o[c]=n[c]+(r[c]-n[c])*u;return this._update(o),this}for(var s in n)o[s]=n[s]+(r[s]-n[s])*u;return this._update(o),this}},r.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1641:function(t,e){function n(t){if(t)return r(t)}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1642:function(t,e,n){function r(t){switch(o(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=r(t[n]));return e;case"array":for(var e=new Array(t.length),i=0,a=t.length;i<a;i++)e[i]=r(t[i]);return e;case"regexp":var u="";return u+=t.multiline?"m":"",u+=t.global?"g":"",u+=t.ignoreCase?"i":"",new RegExp(t.source,u);case"date":return new Date(t.getTime());default:return t}}var o;try{o=n(1636)}catch(t){o=n(1636)}t.exports=r},1643:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1644:function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-r)),o=setTimeout(t,n);return r=e,o}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var r=(new Date).getTime(),o=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){o.call(window,t)}},1698:function(t,e,n){"use strict";var r=n(5),o=Object(r.default)("div",{target:"e1ty3hc0"})("font-size:1.2em;margin-bottom:10px;");e.a=o},1702:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a,u,c=n(0),s=n.n(c),l=n(1),f=n.n(l),p=n(5),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=function(t){return"\n  background: "+(t.enabled?t.theme.success:t.theme.error)+";\n"},m=function(t){return"\n  border-radius: "+t.size+"px;\n  height: "+t.size+"px;\n  width: "+t.size+"px;\n"},b=Object(p.default)("div",{target:"eljqieg0"})("display:inline-block;position:relative;",m," ",d,";"),y=(u=a=function(t){function e(t){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),h(e,[{key:"render",value:function(){return s.a.createElement(b,this.props)}}]),e}(s.a.Component),a.propTypes={enabled:f.a.bool.isRequired,size:f.a.number.isRequired},a.defaultProps={enabled:!0,size:14},u);e.a=y},1703:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),u=n.n(a),c=n(2),s=n(1698),l=n(119),f=n(81),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),h(e,[{key:"render",value:function(){return u.a.createElement(l.a,p({message:u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,null,Object(c.t)("Do you want to remove this method?")),u.a.createElement(f.default,null,Object(c.t)("Removing the last authentication method will disable two-factor authentication completely.")))},this.props))}}]),e}(u.a.Component);e.a=d},1776:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a,u,c=n(0),s=n.n(c),l=n(1),f=n.n(l),p=n(5),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=Object(p.default)("td",{target:"eazifik0"})("height:6px;width:6px;padding:0;"),m=Object(p.default)(d,{target:"eazifik1"})("background-color:black;"),b=Object(p.default)(d,{target:"eazifik2"})("background-color:white;"),y=Object(p.default)("table",{target:"eazifik3"})("margin:0;"),g=(u=a=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),h(e,[{key:"render",value:function(){var t=this.props.code;return s.a.createElement(y,null,s.a.createElement("tbody",null,t.map(function(t,e){return s.a.createElement("tr",{key:e},t.map(function(t,e){return t?s.a.createElement(m,{key:e}):s.a.createElement(b,{key:e})}))})))}}]),e}(s.a.Component),a.propTypes={code:f.a.arrayOf(f.a.arrayOf(f.a.number))},u);e.a=g}});
//# sourceMappingURL=AccountSecurityEnroll.js.map