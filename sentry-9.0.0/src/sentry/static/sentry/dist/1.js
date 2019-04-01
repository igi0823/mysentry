webpackJsonpexports([1],{1781:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(13),o=n.n(a),i=n(9),l=n(1),c=n.n(l),s=n(0),u=n.n(s),p=n(3),h=n.n(p),f=n(5),d=n(102),m=n(18),y=n(55),b=n(80),g=n(2),v=n(8),O=n(26),j=n(154),E=n(11),w=n(1782),C=n(148),R=n(38),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P=[["5",Object(g.t)("5 minutes")],["10",Object(g.t)("10 minutes")],["30",Object(g.t)("30 minutes")],["60",Object(g.t)("60 minutes")],["180",Object(g.t)("3 hours")],["720",Object(g.t)("12 hours")],["1440",Object(g.t)("24 hours")],["10080",Object(g.t)("one week")],["43200",Object(g.t)("30 days")]],_=[["all",Object(g.t)("all")],["any",Object(g.t)("any")],["none",Object(g.t)("none")]],k=Object(f.default)("h6",{target:"elb7f1e0"})("display:flex;align-items:center;"),q=h()({displayName:"RuleEditor",propTypes:{actions:c.a.array.isRequired,conditions:c.a.array.isRequired,project:c.a.object.isRequired,organization:c.a.object.isRequired},mixins:[v.default],getInitialState:function(){return{rule:null,loading:!1,error:null}},componentDidMount:function(){this.fetchRule()},componentDidUpdate:function(){this.state.error&&o()(document.body).scrollTop(o()(this.formNode).offset().top)},fetchRule:function(){var e=this,t=this.props.params,n=t.ruleId,r=t.projectId,a=t.orgId;if(n){var o="/projects/"+a+"/"+r+"/rules/"+n+"/";this.api.request(o,{success:function(t){e.setState({rule:t})}})}else{var i={actionMatch:"all",actions:[],conditions:[],name:"",frequency:30,environment:d.a};this.setState({rule:i})}},handleSubmit:function(e){var t=this;e.preventDefault();var n=x({},this.state.rule),r=!n.id,a=this.props,o=a.project,l=a.organization,c="/projects/"+l.slug+"/"+o.slug+"/rules/";n.id&&(c+=n.id+"/"),n.environment===d.a&&delete n.environment,Object(b.c)(Object(g.t)("Saving...")),this.api.request(c,{method:r?"POST":"PUT",data:n,success:function(e){t.setState({error:null,loading:!1,rule:e}),r&&i.browserHistory.replace(Object(C.a)(e.id+"/",x({},t.props,{stepBack:-1}))),Object(b.d)(r?Object(g.t)("Created alert rule"):Object(g.t)("Updated alert rule"))},error:function(e){t.setState({error:e.responseJSON||{__all__:"Unknown error"},loading:!1}),Object(b.a)(Object(g.t)("An error occurred"))}})},hasError:function(e){var t=this.state.error;return!!t&&!!t[e]},handleEnvironmentChange:function(e){e===d.a?this.handleChange("environment",null):this.handleChange("environment",e)},handleChange:function(e,t){this.setState(function(n){var r=x({},n.rule);return r[e]=t,{rule:r}})},handlePropertyChange:function(e){var t=this;return function(n){return function(r,a){var o=x({},t.state.rule);o[e][n][r]=a,t.setState({rule:o})}}},handleAddRow:function(e){var t=this;return function(n){t.setState(function(t){return t.rule[e].push({id:n}),{rule:t.rule}})}},handleDeleteRow:function(e){var t=this;return function(n){t.setState(function(t){return t.rule[e].splice(n,1),{rule:t.rule}})}},render:function(){var e=this,t=j.a.getActive()||[],n=[[d.a,Object(g.t)("All Environments")]].concat(r(t.map(function(e){return[e.name,e.displayName]})));if(!this.state.rule)return u.a.createElement(E.default,null);var a=this.state,o=a.rule,i=a.loading,l=a.error,c=o.actionMatch,s=o.actions,p=o.conditions,h=o.frequency,f=o.name,b=null===o.environment?d.a:o.environment;return u.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){return e.formNode=t}},u.a.createElement(m.a,{className:"rule-detail"},u.a.createElement(m.e,null,o.id?"Edit Alert Rule":"New Alert Rule"),u.a.createElement(m.c,{disablePadding:!1},l&&u.a.createElement("div",{className:"alert alert-block alert-error"},u.a.createElement("p",null,Object(g.t)("There was an error saving your changes. Make sure all fields are valid and try again."))),u.a.createElement("h6",null,Object(g.t)("Rule name"),":"),u.a.createElement(y.TextField,{name:"name",defaultValue:f,required:!0,placeholder:Object(g.t)("My Rule Name"),onChange:function(t){return e.handleChange("name",t)}}),u.a.createElement("hr",null),u.a.createElement(k,null,Object(g.t)("Every time %s of these conditions are met:",u.a.createElement(y.Select2Field,{className:this.hasError("actionMatch")?" error":"",style:{marginBottom:0,marginLeft:5,marginRight:5,width:100},name:"actionMatch",value:c,required:!0,choices:_,onChange:function(t){return e.handleChange("actionMatch",t)}}))),this.hasError("conditions")&&u.a.createElement("p",{className:"error"},this.state.error.conditions[0]),u.a.createElement(w.a,{nodes:this.props.conditions,items:p||[],className:"rule-condition-list",handlePropertyChange:this.handlePropertyChange("conditions"),handleAddRow:this.handleAddRow("conditions"),handleDeleteRow:this.handleDeleteRow("conditions")}),u.a.createElement("hr",null),u.a.createElement("h6",null,Object(g.t)("In this environment"),":"),u.a.createElement(y.Select2Field,{className:this.hasError("environment")?" error":"",style:{marginBottom:0,marginLeft:5,marginRight:5},name:"environment",value:b,required:!0,choices:n,onChange:function(t){return e.handleEnvironmentChange(t)}}),u.a.createElement("hr",null),u.a.createElement("h6",null,Object(g.t)("Take these actions:")),this.hasError("actions")&&u.a.createElement("p",{className:"error"},this.state.error.actions[0]),u.a.createElement(w.a,{nodes:this.props.actions,items:s||[],handlePropertyChange:this.handlePropertyChange("actions"),handleAddRow:this.handleAddRow("actions"),handleDeleteRow:this.handleDeleteRow("actions")}),u.a.createElement("hr",null),u.a.createElement(k,null,Object(g.t)("Perform these actions at most once every %s for an issue.",u.a.createElement(y.Select2Field,{name:"frequency",className:this.hasError("frequency")?" error":"",value:h,style:{marginBottom:0,marginLeft:5,marginRight:5,width:140},required:!0,choices:P,onChange:function(t){return e.handleChange("frequency",t)}}))),u.a.createElement(T,null,u.a.createElement(S,{to:Object(C.a)("",x({},this.props,{stepBack:-1}))},Object(g.t)("Cancel")),u.a.createElement(O.default,{priority:"primary",disabled:i},Object(g.t)("Save Rule"))))))}});t.a=q;var S=Object(f.default)(O.default,{target:"elb7f1e1"})("margin-right:",Object(R.a)(1),";"),T=Object(f.default)("div",{target:"elb7f1e2"})("display:flex;justify-content:flex-end;padding:",Object(R.a)(2),";border-top:1px solid ",function(e){return e.theme.borderLight},";margin:0 -20px -20px;")},1782:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,l,c=n(1),s=n.n(c),u=n(0),p=n.n(u),h=n(5),f=n(1783),d=n(1784),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=(l=i=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.getNode=function(e){return o.props.nodes.find(function(t){return t.id===e})},i=n,a(o,i)}return o(t,e),m(t,[{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:this.props.className},p.a.createElement(b,null,this.props.items.map(function(t,n){return p.a.createElement(d.a,{key:n,node:e.getNode(t.id),handleDelete:function(){return e.props.handleDeleteRow(n)},data:t,handlePropertyChange:e.props.handlePropertyChange(n)})})),p.a.createElement("fieldset",null,p.a.createElement(f.a,{onChange:function(t){return e.props.handleAddRow(t.val())},style:{width:"100%"}},p.a.createElement("option",{key:"blank"}),this.props.nodes.filter(function(e){return e.enabled}).map(function(e){return p.a.createElement("option",{value:e.id,key:e.id},e.label)}))))}}]),t}(p.a.Component),i.propTypes={items:s.a.array,nodes:s.a.array.isRequired,handlePropertyChange:s.a.func.isRequired,handleAddRow:s.a.func.isRequired,handleDeleteRow:s.a.func.isRequired},l);t.a=y;var b=Object(h.default)("div",{target:"e17yy09u0"})("display:flex;flex-direction:column;margin-bottom:10px;")},1783:function(e,t,n){"use strict";(function(e){function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,s,u=n(1),p=n.n(u),h=n(0),f=n.n(h),d=n(13),m=n.n(d),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=(c=l=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),s.call(r),i=n,o(r,i)}return i(t,e),b(t,[{key:"componentDidMount",value:function(){if(this.create(),this.refs.select){var e=this.refs.select.selectedIndex;if(e>=0){var t=this.refs.select.options;t[(e+1)%t.length].selected=!0,t[e].selected=!0}}}},{key:"componentWillUpdate",value:function(){this.destroy()}},{key:"componentDidUpdate",value:function(){this.create()}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e=r(this.props,[]);return delete e.showSearch,f.a.createElement("select",y({ref:"select"},e),this.props.children)}}]),t}(f.a.Component),l.propTypes={disabled:p.a.bool,multiple:p.a.bool,required:p.a.bool,showSearch:p.a.bool,placeholder:p.a.oneOfType([p.a.string,p.a.number]),value:p.a.oneOfType([p.a.string,p.a.number]),onChange:p.a.func},l.defaultProps={disabled:!1,multiple:!1,required:!1,showSearch:!0,placeholder:"Select an option...",value:"",onChange:e.noop},s=function(){var e=this;this.getSelect2Value=function(){return e.select2.getValue()},this.create=function(){e.select2=m()(e.refs.select).select2({width:"element",minimumResultsForSearch:e.props.showSearch?0:-1}),e.select2.on("change",e.onChange)},this.destroy=function(){e.select2.off("change",e.onChange),m()(e.refs.select).select2("destroy")},this.onChange=function(){for(var t,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];(t=e.props.onChange).call.apply(t,[e,e.select2].concat(r))}},c);t.a=g}).call(t,n(13))},1784:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,l,c=n(1),s=n.n(c),u=n(0),p=n.n(u),h=n(5),f=n(26),d=n(55),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=(l=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),m(t,[{key:"getChoiceField",value:function(e,t){var n=this,r=void 0;return void 0===this.props.data[e]?(r=t.choices[0][0],this.props.handlePropertyChange(e,r)):r=this.props.data[e],p.a.createElement(d.Select2Field,{name:e,value:r,choices:t.choices,key:e,style:{marginBottom:0},onChange:function(t){return n.props.handlePropertyChange(e,t)}})}},{key:"getTextField",value:function(e,t){var n=this;return p.a.createElement(d.TextField,{name:e,value:this.props.data[e],placeholder:t.placeholder,key:e,style:{marginBottom:0},onChange:function(t){return n.props.handlePropertyChange(e,t)}})}},{key:"getNumberField",value:function(e,t){var n=this;return p.a.createElement(d.NumberField,{name:e,value:this.props.data[e],placeholder:t.placeholder.toString(),key:e,style:{marginBottom:0},onChange:function(t){return n.props.handlePropertyChange(e,t)}})}},{key:"getField",value:function(e,t){return{choice:this.getChoiceField.bind(this),number:this.getNumberField.bind(this),string:this.getTextField.bind(this)}[t.type](e,t)}},{key:"getComponent",value:function(e){var t=this,n=e.label,r=e.formFields;return n.split(/({\w+})/).map(function(e){if(!/^{\w+}$/.test(e))return e;var n=e.slice(1,-1);return r[n]?t.getField(n,r[n]):e})}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.node,r=this.getComponent(n);return p.a.createElement(b,null,p.a.createElement(g,null,p.a.createElement("input",{type:"hidden",name:"id",value:t.id}),r),p.a.createElement(v,null,p.a.createElement(f.default,{onClick:this.props.handleDelete,type:"button",tabIndex:"-1",size:"small"},p.a.createElement("span",{className:"icon icon-trash"}))))}}]),t}(p.a.Component),i.propTypes={data:s.a.object.isRequired,node:s.a.shape({label:s.a.string.isRequired,formFields:s.a.object}).isRequired,handleDelete:s.a.func.isRequired,handlePropertyChange:s.a.func.isRequired},l);t.a=y;var b=Object(h.default)("div",{target:"e1qnqozx0"})("display:flex;align-items:center;padding:0 15px;&:nth-child(odd){background-color:",function(e){return e.theme.offWhite},";}"),g=Object(h.default)("div",{target:"e1qnqozx1"})("display:flex;flex-wrap:wrap;flex:1;line-height:40px;margin:5px 12px 5px 0;align-items:center;.control-group{margin:0 6px;}.form-control{padding:3px 12px;}.select2-container,input{min-width:100px;}"),v=Object(h.default)("div",{target:"e1qnqozx2"})("margin-left:6px;")},644:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l,c=n(0),s=n.n(c),u=n(6),p=n(92),h=n(1781),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(l=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"getEndpoints",value:function(){var e=this.props.params;return[["configs","/projects/"+e.orgId+"/"+e.projectId+"/rules/configuration/"]]}},{key:"renderBody",value:function(){var e=this.context,t=e.organization,n=e.project,r=this.state.configs,a=r.actions,o=r.conditions;return s.a.createElement(h.a,{organization:t,project:n,actions:a,conditions:o,params:this.props.params,routes:this.props.routes})}}]),t}(p.default),i.contextTypes={organization:u.e.Organization,project:u.e.Project},l);t.default=d}});
//# sourceMappingURL=ProjectAlertRuleDetails.js.map