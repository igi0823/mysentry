webpackJsonpexports([22],{1592:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n.n(r),s=n(3),a=n.n(s),o=n(80),c=n(2),u=n(1665),l=n(8),d=n(600),p=n(1637),f=n(15),h=n(11),m=n(39),g=n(52),b=n(81),v=n(45),y=n(57),_=n(18),E={native_no_crashed_thread:Object(c.t)("No crashed thread found in crash report"),native_internal_failure:Object(c.t)("Internal failure when attempting to symbolicate: {error}"),native_bad_dsym:Object(c.t)("The debug information file used was broken."),native_missing_optionally_bundled_dsym:Object(c.t)("An optional debug information file was missing."),native_missing_dsym:Object(c.t)("A required debug information file was missing."),native_missing_system_dsym:Object(c.t)("A system debug information file was missing."),native_missing_symbol:Object(c.t)("Unable to resolve a symbol."),native_simulator_frame:Object(c.t)("Encountered an unprocessable simulator frame."),native_unknown_image:Object(c.t)("A binary image is referenced that is unknown."),proguard_missing_mapping:Object(c.t)("A proguard mapping file was missing."),proguard_missing_lineno:Object(c.t)("A proguard mapping file does not contain line info.")},w={native_missing_dsym:"https://docs.sentry.io/clients/cocoa/dsym/",native_bad_dsym:"https://docs.sentry.io/clients/cocoa/dsym/",native_missing_system_dsym:"https://docs.sentry.io/server/dsym/",native_missing_symbol:"https://docs.sentry.io/server/dsym/"},O=a()({displayName:"ProjectProcessingIssues",mixins:[l.default,m.a],getInitialState:function(){return{formData:{},loading:!0,reprocessing:!1,expected:0,error:!1,processingIssues:null}},componentDidMount:function(){this.fetchData()},fetchData:function(){var e=this,t=this.props.params,n=t.orgId,r=t.projectId;this.setState({expected:this.state.expected+2}),this.api.request("/projects/"+n+"/"+r+"/",{success:function(t,n,r){var i=e.state.expected-1;e.setState({expected:i,loading:i>0,formData:t.options})},error:function(){var t=e.state.expected-1;e.setState({expected:t,error:!0,loading:t>0})}}),this.api.request("/projects/"+n+"/"+r+"/processingissues/?detailed=1",{success:function(t,n,r){var i=e.state.expected-1;e.setState({expected:i,error:!1,loading:i>0,processingIssues:t,pageLinks:r.getResponseHeader("Link")})},error:function(){var t=e.state.expected-1;e.setState({expected:t,error:!0,loading:t>0})}})},sendReprocessing:function(){var e=this;this.setState({reprocessing:!0});var t=Object(o.b)(Object(c.t)("Started reprocessing..")),n=this.props.params,r=n.orgId,i=n.projectId;this.api.request("/projects/"+r+"/"+i+"/reprocessing/",{method:"POST",success:function(t,n,r){e.fetchData(),e.setState({reprocessing:!1})},error:function(){e.setState({reprocessing:!1})},complete:function(){Object(o.e)(t)}})},discardEvents:function(){var e=this,t=this.props.params,n=t.orgId,r=t.projectId;this.setState({expected:this.state.expected+1}),this.api.request("/projects/"+n+"/"+r+"/processingissues/discard/",{method:"DELETE",success:function(t,n,r){var i=e.state.expected-1;e.setState({expected:i,error:!1,loading:i>0}),window.location.reload()},error:function(){var t=e.state.expected-1;e.setState({expected:t,error:!0,loading:t>0})}})},deleteProcessingIssues:function(){var e=this,t=this.props.params,n=t.orgId,r=t.projectId;this.setState({expected:this.state.expected+1}),this.api.request("/projects/"+n+"/"+r+"/processingissues/",{method:"DELETE",success:function(t,n,r){var i=e.state.expected-1;e.setState({expected:i,error:!1,loading:i>0}),window.location.reload()},error:function(){var t=e.state.expected-1;e.setState({expected:t,error:!0,loading:t>0})}})},renderDebugTable:function(){return this.state.loading?this.renderLoading():this.state.error?i.a.createElement(f.default,{onRetry:this.fetchData}):this.state.processingIssues.hasIssues||this.state.processingIssues.resolveableIssues||this.state.processingIssues.issuesProcessing?this.renderResults():this.renderEmpty()},renderLoading:function(){return i.a.createElement("div",{className:"box"},i.a.createElement(h.default,null))},renderEmpty:function(){return i.a.createElement(_.a,null,i.a.createElement(y.a,null,i.a.createElement("p",null,Object(c.t)("Good news! There are no processing issues."))))},getProblemDescription:function(e){return E[e.type]||e.message||"Unknown Error"},getImageName:function(e){var t=e.split(/^[a-z]:\\/i.test(e)?"\\":"/");return t[t.length-1]},renderProblem:function(e){var t=this.getProblemDescription(e),n=w[e.type];return i.a.createElement("div",{className:"processing-issue"},i.a.createElement("span",{className:"description"},t)," ",n&&i.a.createElement("a",{href:n,className:"help-link"},i.a.createElement("span",{className:"icon-question"})))},renderDetails:function(e){var t=null,n=null,r=null;return"native"===e.data._scope&&(e.data.image_uuid&&(t=i.a.createElement("code",{className:"uuid"},e.data.image_uuid)),e.data.image_path&&(n=i.a.createElement("em",null,this.getImageName(e.data.image_path))),e.data.image_arch&&(r=e.data.image_arch)),i.a.createElement("span",null,t&&i.a.createElement("span",null," ",t),r&&i.a.createElement("span",null," ",r),n&&i.a.createElement("span",null," (for ",n,")"))},renderResolveButton:function(){var e=this.state.processingIssues;if(null===e||this.state.reprocessing)return null;if(e.resolveableIssues<=0)return null;var t=Object(c.tn)("Click here to trigger processing for %d pending event","Click here to trigger processing for %d pending events",e.resolveableIssues);return i.a.createElement("div",{className:"alert alert-block alert-info"},"Pro Tip: ",i.a.createElement("a",{onClick:this.sendReprocessing},t))},renderResults:function(){var e=this,t=!!this.state.processingIssues&&this.state.processingIssues.signedLink,n=null;t&&(n=i.a.createElement("div",{className:"panel panel-info"},i.a.createElement("div",{className:"panel-heading"},i.a.createElement("h3",null,Object(c.t)("Having trouble uploading debug informations? We can help!"))),i.a.createElement("div",{className:"panel-body"},i.a.createElement("div",{className:"form-group",style:{marginBottom:0}},i.a.createElement("label",null,Object(c.t)("Paste this command into your shell and we'll attempt to upload the missing symbols from your machine:")),i.a.createElement("div",{className:"form-control disabled auto-select",style:{marginBottom:6}},"curl -sL ",t," | bash")))));var r=null;return this.state.processingIssues.issuesProcessing>0&&(r=i.a.createElement("div",{className:"list-group-item alert-info"},i.a.createElement("div",{className:"row row-flex row-center-vertically"},i.a.createElement("div",{className:"col-sm-12"},i.a.createElement("span",{className:"icon icon-processing play",style:{display:"inline",marginRight:12}}),Object(c.tn)("Reprocessing %d event …","Reprocessing %d events …",this.state.processingIssues.issuesProcessing))))),i.a.createElement("div",null,n,i.a.createElement("h3",null,Object(c.t)("Pending Issues"),i.a.createElement("a",{className:"btn btn-default btn-sm pull-right",onClick:function(){e.discardEvents()}},Object(c.t)("Discard all"))),i.a.createElement("div",{className:"panel panel-default"},i.a.createElement("div",{className:"panel-heading panel-heading-bold hidden-xs"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-3"},Object(c.t)("Problem")),i.a.createElement("div",{className:"col-sm-5"},Object(c.t)("Details")),i.a.createElement("div",{className:"col-sm-2"},Object(c.t)("Events")),i.a.createElement("div",{className:"col-sm-2"},Object(c.t)("Last seen")))),i.a.createElement("div",{className:"list-group"},r,this.state.processingIssues.issues.map(function(t,n){return i.a.createElement("div",{key:n,className:"list-group-item"},i.a.createElement("div",{className:"row row-flex row-center-vertically"},i.a.createElement("div",{className:"col-sm-3"},e.renderProblem(t)),i.a.createElement("div",{className:"col-sm-5"},e.renderDetails(t)),i.a.createElement("div",{className:"col-sm-2"},t.numEvents+""),i.a.createElement("div",{className:"col-sm-2"},i.a.createElement(v.default,{date:t.lastSeen}))))}))))},renderReprocessingSettings:function(){var e=this.getAccess();if(this.state.loading)return this.renderLoading();var t=this.state.formData,n=this.props.params,r=n.orgId,s=n.projectId;return i.a.createElement(d.a,{saveOnBlur:!0,onSubmitSuccess:this.deleteProcessingIssues,apiEndpoint:"/projects/"+r+"/"+s+"/",apiMethod:"PUT",initialData:t},i.a.createElement(p.a,{access:e,forms:u.default}))},render:function(){return i.a.createElement("div",null,i.a.createElement(g.default,{title:Object(c.t)("Processing Issues")}),i.a.createElement(b.default,null,Object(c.t)("\n          For some platforms the event processing requires configuration or\n          manual action.  If a misconfiguration happens or some necessary\n          steps are skipped, issues can occur during processing. (The most common\n          reason for this is missing debug symbols.) In these cases you can see\n          all the problems here with guides of how to correct them.\n        ")),this.renderDebugTable(),this.renderResolveButton(),this.renderReprocessingSettings())}});t.default=O},1636:function(e,t){var n=Object.prototype.toString;e.exports=function(e){switch(n.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!==e?"nan":e&&1===e.nodeType?"element":typeof(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))}},1637:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o,c,u,l,d,p=n(14),f=n(1),h=n.n(f),m=n(0),g=n.n(m),b=n(1638),v=n.n(b),y=n(10),_=n(601),E=n(18),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=(c=o=function(e){function t(e){var n;i(this,t);for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];var c=s(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,e].concat(a)));return u.call(c),c.state={highlighted:c.getLocation(e).hash},c}return a(t,e),O(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(e,t){if(this.getLocation(this.props).hash!==this.getLocation(e).hash){var n=this.getLocation(e).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(e){var t=e||this.getLocation(this.props).hash;t&&v()(t,{align:"middle",offset:-100})}},{key:"render",value:function(){var e=this.props,t=e.forms,n=e.title,i=e.fields,s=e.access,a=e.features,o=e.additionalFieldProps,c=e.renderFooter,u=e.renderHeader,l=(e.location,r(e,["forms","title","fields","access","features","additionalFieldProps","renderFooter","renderHeader","location"])),d=Object(y.d)(t),f={access:s,features:a,additionalFieldProps:o,renderFooter:c,renderHeader:u,highlighted:this.state.highlighted};return g.a.createElement(p.Box,l,d?t.map(function(e){return g.a.createElement(x,w({key:e.title,title:e.title,fields:e.fields},f))}):g.a.createElement(x,w({title:n,fields:i},f)))}}]),t}(g.a.Component),o.propTypes={forms:h.a.arrayOf(h.a.shape({title:h.a.string,fields:h.a.arrayOf(h.a.oneOfType([h.a.func,_.a.propTypes.field]))})),fields:h.a.arrayOf(h.a.oneOfType([h.a.func,_.a.propTypes.field])),title:h.a.string,access:h.a.object,features:h.a.object,additionalFieldProps:h.a.object,renderFooter:h.a.func,renderHeader:h.a.func},o.defaultProps={additionalFieldProps:{}},o.contextTypes={location:h.a.object},u=function(){var e=this;this.getLocation=function(t){return t.location||e.context.location||{}}},c);t.a=j;var x=(d=l=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),O(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.fields,s=t.access,a=t.additionalFieldProps,o=t.renderFooter,c=t.renderHeader,u=(t.location,r(t,["title","fields","access","additionalFieldProps","renderFooter","renderHeader","location"])),l="function"==typeof o,d="function"==typeof c;return g.a.createElement(E.a,{key:n,id:n},g.a.createElement(E.e,null,n),g.a.createElement(E.c,null,d&&c({title:n,fields:i}),i.map(function(t){if("function"==typeof t)return t();var n=(t.defaultValue,r(t,["defaultValue"]));return g.a.createElement(_.a,w({access:s,key:t.name},u,a,{field:n,highlighted:e.props.highlighted==="#"+t.name}))}),l&&o({title:n,fields:i})))}}]),t}(g.a.Component),l.propTypes={title:h.a.string,fields:h.a.arrayOf(h.a.oneOfType([h.a.func,_.a.propTypes.field])),access:h.a.object,additionalFieldProps:h.a.object,highlighted:h.a.string,renderHeader:h.a.func,renderFooter:h.a.func},d)},1638:function(e,t,n){function r(e,t,n){var r=document.body,i=document.documentElement,s=e.getBoundingClientRect(),a=i.clientHeight,o=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);t=t||0;var c;c="bottom"===n?s.bottom-a:"middle"===n?s.bottom-a/2-s.height/2:s.top;var u=o-a;return Math.min(c+t+window.pageYOffset,u)}var i=n(1639);e.exports=function(e,t){if(t=t||{},"string"==typeof e&&(e=document.querySelector(e)),e)return i(0,r(e,t.offset,t.align),t)}},1639:function(e,t,n){function r(e,t,n){function r(){a(r),c.update()}n=n||{};var o=i(),c=s(o).ease(n.ease||"out-circ").to({top:t,left:e}).duration(n.duration||1e3);return c.update(function(e){window.scrollTo(0|e.left,0|e.top)}),c.on("end",function(){r=function(){}}),r(),c}function i(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}}var s=n(1640),a=n(1644);e.exports=r},1640:function(e,t,n){function r(e){if(!(this instanceof r))return new r(e);this._from=e,this.ease("linear"),this.duration(500)}var i=n(1641),s=n(1642),a=n(1636),o=n(1643);e.exports=r,i(r.prototype),r.prototype.reset=function(){return this.isArray="array"===a(this._from),this._curr=s(this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(e){return this.reset(),this._to=e,this},r.prototype.duration=function(e){return this._duration=e,this},r.prototype.ease=function(e){if(!(e="function"==typeof e?e:o[e]))throw new TypeError("invalid easing function");return this._ease=e,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var e=this._duration,t=Date.now();if(t-this._start>=e)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,i=this._curr,s=this._ease,a=(t-this._start)/e,o=s(a);if(this.isArray){for(var c=0;c<n.length;++c)i[c]=n[c]+(r[c]-n[c])*o;return this._update(i),this}for(var u in n)i[u]=n[u]+(r[u]-n[u])*o;return this._update(i),this}},r.prototype.update=function(e){return 0==arguments.length?this.step():(this._update=e,this)}},1641:function(e,t){function n(e){if(e)return r(e)}function r(e){for(var t in n.prototype)e[t]=n.prototype[t];return e}e.exports=n,n.prototype.on=n.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},n.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},n.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},n.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},n.prototype.hasListeners=function(e){return!!this.listeners(e).length}},1642:function(e,t,n){function r(e){switch(i(e)){case"object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=r(e[n]));return t;case"array":for(var t=new Array(e.length),s=0,a=e.length;s<a;s++)t[s]=r(e[s]);return t;case"regexp":var o="";return o+=e.multiline?"m":"",o+=e.global?"g":"",o+=e.ignoreCase?"i":"",new RegExp(e.source,o);case"date":return new Date(e.getTime());default:return e}}var i;try{i=n(1636)}catch(e){i=n(1636)}e.exports=r},1643:function(e,t){t.linear=function(e){return e},t.inQuad=function(e){return e*e},t.outQuad=function(e){return e*(2-e)},t.inOutQuad=function(e){return e*=2,e<1?.5*e*e:-.5*(--e*(e-2)-1)},t.inCube=function(e){return e*e*e},t.outCube=function(e){return--e*e*e+1},t.inOutCube=function(e){return e*=2,e<1?.5*e*e*e:.5*((e-=2)*e*e+2)},t.inQuart=function(e){return e*e*e*e},t.outQuart=function(e){return 1- --e*e*e*e},t.inOutQuart=function(e){return e*=2,e<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},t.inQuint=function(e){return e*e*e*e*e},t.outQuint=function(e){return--e*e*e*e*e+1},t.inOutQuint=function(e){return e*=2,e<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},t.inSine=function(e){return 1-Math.cos(e*Math.PI/2)},t.outSine=function(e){return Math.sin(e*Math.PI/2)},t.inOutSine=function(e){return.5*(1-Math.cos(Math.PI*e))},t.inExpo=function(e){return 0==e?0:Math.pow(1024,e-1)},t.outExpo=function(e){return 1==e?e:1-Math.pow(2,-10*e)},t.inOutExpo=function(e){return 0==e?0:1==e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))},t.inCirc=function(e){return 1-Math.sqrt(1-e*e)},t.outCirc=function(e){return Math.sqrt(1- --e*e)},t.inOutCirc=function(e){return e*=2,e<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},t.inBack=function(e){var t=1.70158;return e*e*((t+1)*e-t)},t.outBack=function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},t.inOutBack=function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)},t.inBounce=function(e){return 1-t.outBounce(1-e)},t.outBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.inOutBounce=function(e){return e<.5?.5*t.inBounce(2*e):.5*t.outBounce(2*e-1)+.5},t["in-quad"]=t.inQuad,t["out-quad"]=t.outQuad,t["in-out-quad"]=t.inOutQuad,t["in-cube"]=t.inCube,t["out-cube"]=t.outCube,t["in-out-cube"]=t.inOutCube,t["in-quart"]=t.inQuart,t["out-quart"]=t.outQuart,t["in-out-quart"]=t.inOutQuart,t["in-quint"]=t.inQuint,t["out-quint"]=t.outQuint,t["in-out-quint"]=t.inOutQuint,t["in-sine"]=t.inSine,t["out-sine"]=t.outSine,t["in-out-sine"]=t.inOutSine,t["in-expo"]=t.inExpo,t["out-expo"]=t.outExpo,t["in-out-expo"]=t.inOutExpo,t["in-circ"]=t.inCirc,t["out-circ"]=t.outCirc,t["in-out-circ"]=t.inOutCirc,t["in-back"]=t.inBack,t["out-back"]=t.outBack,t["in-out-back"]=t.inOutBack,t["in-bounce"]=t.inBounce,t["out-bounce"]=t.outBounce,t["in-out-bounce"]=t.inOutBounce},1644:function(e,t){function n(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-r)),i=setTimeout(e,n);return r=t,i}t=e.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var r=(new Date).getTime(),i=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;t.cancel=function(e){i.call(window,e)}},1665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"route",function(){return i});var r=n(2),i="/settings/:orgId/:projectId/processing-issues/",s=[{title:"Settings",fields:[{name:"sentry:reprocessing_active",type:"boolean",label:Object(r.t)("Reprocessing active"),disabled:function(e){return!e.access.has("project:write")},disabledReason:Object(r.t)("Only admins may change reprocessing settings"),help:Object(r.t)("If reprocessing is enabled, Events with fixable issues will be\n                held back until you resolve them. Processing issues will then\n                show up in the list above with hints how to fix them.\n                If reprocessing is disabled Events with unresolved issues will also\n                show up in the stream.\n                "),getData:function(e){return{options:e}}}]}];t.default=s}});
//# sourceMappingURL=ProjectProcessingIssues.js.map