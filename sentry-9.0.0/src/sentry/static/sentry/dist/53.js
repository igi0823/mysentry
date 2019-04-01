webpackJsonpexports([53],{1626:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r.n(n),o=r(36),s=r.n(o),i=r(3),l=r.n(i),u=r(2),c=r(8),p=r(158),h=r(1697),f=r(183),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function(e){return s()(e).format("ll LTS")},y=l()({displayName:"GroupEventDetails",mixins:[c.default],getInitialState:function(){return{loading:!1}},onDelete:function(e){var t=this;this.setState({loading:!0}),this.api.request("/relays/"+e+"/",{method:"DELETE",success:function(){t.setState({loading:!1})},error:function(){t.setState({loading:!1})}})},getRow:function(e){var t=this;return[a.a.createElement("td",null,a.a.createElement("strong",null,e.relayId)),a.a.createElement("td",null,e.publicKey),a.a.createElement("td",{style:{textAlign:"right"}},d(e.firstSeen)),a.a.createElement("td",{style:{textAlign:"right"}},d(e.lastSeen)),a.a.createElement("td",{style:{textAlign:"right"}},a.a.createElement("span",{className:"editor-tools"},a.a.createElement(f.a,{className:"danger",title:"Remove",message:Object(u.t)("Are you sure you wish to delete this relay?"),onConfirm:function(){return t.onDelete(e.id)}},Object(u.t)("Remove"))))]},render:function(){var e=[a.a.createElement("th",{style:{width:350,textAlign:"left"}},"Relay"),a.a.createElement("th",null,"Public Key"),a.a.createElement("th",{style:{width:150,textAlign:"right"}},"First seen"),a.a.createElement("th",{style:{width:150,textAlign:"right"}},"Last seen"),a.a.createElement("th",null)];return a.a.createElement("div",null,a.a.createElement("h3",null,Object(u.t)("Relays")),a.a.createElement(h.a,m({path:"/manage/relays/",endpoint:"/relays/",method:"GET",columns:e,columnsForRow:this.getRow,hasSearch:!1,sortOptions:[["firstSeen","First seen"],["lastSeen","Last seen"],["relayId","Relay ID"]],defaultSort:"firstSeen"},this.props)))}});t.default=Object(p.a)(y)},1697:function(e,t,r){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,i,l,u,c=r(1),p=r.n(c),h=r(0),f=r.n(h),m=r(3),d=r.n(m),y=r(13),g=r.n(y),v=r(9),E=r(8),b=r(37),S=r(44),q=r(54),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),O=(i=s=function(e){function t(){var e,r,o,s;n(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.getCurrentLabel=function(){var e=o.props.options.filter(function(e){return e[0]===(o.props.value||"")})[0];return e?o.props.name+": "+e[1]:o.props.name+": Any"},o.getDefaultItem=function(){var e=g.a.extend({},o.props.location.query,{cursor:""});return delete e[o.props.queryKey],f.a.createElement(S.default,{key:"",isActive:""===o.props.value||!o.props.value,to:o.props.path,query:e},"Any")},o.getSelector=function(){return f.a.createElement(b.default,{title:o.getCurrentLabel()},o.getDefaultItem(),o.props.options.map(function(e){var t={};t[o.props.queryKey]=e[0],t.cursor="";var r=g.a.extend({},o.props.location.query,t);return f.a.createElement(S.default,{key:e[0],isActive:o.props.value===e[0],to:o.props.path,query:r},e[1])}))},s=r,a(o,s)}return o(t,e),R(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"filter-options"},1===this.props.options.length?f.a.createElement("strong",null,this.getCurrentLabel()):this.getSelector())}}]),t}(f.a.Component),s.propTypes={name:p.a.string.isRequired,queryKey:p.a.string.isRequired,options:p.a.array.isRequired,path:p.a.string.isRequired,value:p.a.any},i),N=(u=l=function(e){function t(){var e,r,o,s;n(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.getCurrentSortLabel=function(){return o.props.options.filter(function(e){return e[0]===o.props.value})[0][1]},o.getSortBySelector=function(){return f.a.createElement(b.default,{title:o.getCurrentSortLabel(),className:"sorted-by"},o.props.options.map(function(e){var t=g.a.extend({},o.props.location.query,{sortBy:e[0],cursor:""});return f.a.createElement(S.default,{isActive:o.props.value===e[0],key:e[0],to:o.props.path,query:t},e[1])}))},s=r,a(o,s)}return o(t,e),R(t,[{key:"render",value:function(){return 0===this.props.options.length?null:f.a.createElement("div",{className:"sort-options"},"Showing results sorted by",1===this.props.options.length?f.a.createElement("strong",{className:"sorted-by"},this.getCurrentSortLabel()):this.getSortBySelector())}}]),t}(f.a.Component),l.propTypes={options:p.a.array.isRequired,path:p.a.string.isRequired,location:p.a.string.isRequired,value:p.a.any},u),j=d()({displayName:"ResultGrid",propTypes:{columns:p.a.array,columnsForRow:p.a.func,defaultSort:p.a.string,defaultParams:p.a.object,endpoint:p.a.string,filters:p.a.object,hasPagination:p.a.bool,hasSearch:p.a.bool,keyForRow:p.a.func,location:p.a.string,method:p.a.string,options:p.a.array,path:p.a.string,sortOptions:p.a.array},mixins:[E.default],getDefaultProps:function(){return{path:"",endpoint:"",method:"GET",columns:[],sortOptions:[],filters:{},defaultSort:"",keyForRow:function(e){return e.id},columnsForRow:function(e){return[]},defaultParams:{per_page:50},hasPagination:!0,hasSearch:!1}},getInitialState:function(){var e=(this.props.location||{}).query||{};return{rows:[],loading:!0,error:!1,pageLinks:null,query:e.query||"",sortBy:e.sortBy||this.props.defaultSort,filters:Object.assign({},e)}},componentWillMount:function(){this.fetchData()},componentWillReceiveProps:function(e){var t=(e.location||{}).query||{};this.setState({query:t.query||"",sortBy:t.sortBy||this.props.defaultSort,filters:Object.assign({},t),pageLinks:null,loading:!0,error:!1},this.fetchData)},remountComponent:function(){this.setState(this.getInitialState(),this.fetchData)},refresh:function(){this.setState({loading:!0},this.fetchData())},fetchData:function(){var e=this,t=g.a.extend({},this.props.defaultParams,{sortBy:this.state.sortBy},(this.props.location||{}).query||{});this.api.request(this.props.endpoint,{method:this.props.method,data:t,success:function(t,r,n){e.setState({loading:!1,error:!1,rows:t,pageLinks:n.getResponseHeader("Link")})},error:function(){e.setState({loading:!1,error:!0})}})},onSearch:function(t){var r=this.props.location||{},n=this.state.query,a=e.extend({},r.query||{},{query:n,cursor:""});t.preventDefault(),v.browserHistory.push({pathname:this.props.path,query:a})},onQueryChange:function(e){this.setState({query:e.target.value})},renderLoading:function(){return f.a.createElement("tr",null,f.a.createElement("td",{colSpan:this.props.columns.length},f.a.createElement("div",{className:"loading"},f.a.createElement("div",{className:"loading-indicator"}),f.a.createElement("div",{className:"loading-message"},"Hold on to your butts!"))))},renderError:function(){return f.a.createElement("tr",null,f.a.createElement("td",{colSpan:this.props.columns.length},f.a.createElement("div",{className:"alert-block alert-error"},"Something bad happened :(")))},renderNoResults:function(){return f.a.createElement("tr",null,f.a.createElement("td",{colSpan:this.props.columns.length},"No results found."))},renderResults:function(){var e=this;return this.state.rows.map(function(t){return f.a.createElement("tr",{key:e.props.keyForRow(t)},e.props.columnsForRow(t))})},render:function(){var e=this,t=this.props.filters;return f.a.createElement("div",{className:"result-grid"},f.a.createElement("div",{className:"table-options"},this.props.hasSearch&&f.a.createElement("div",{className:"result-grid-search"},f.a.createElement("form",{onSubmit:this.onSearch},f.a.createElement("div",{className:"form-group"},f.a.createElement("input",{type:"text",className:"form-control input-search",placeholder:"search",style:{width:300},name:"query",ref:"searchInput",autoComplete:"off",value:this.state.query,onChange:this.onQueryChange}),f.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary"},f.a.createElement("span",{className:"icon-search"}))))),f.a.createElement(N,{options:this.props.sortOptions,value:this.state.sortBy,path:this.props.path,location:this.props.location}),Object.keys(t).map(function(r){return f.a.createElement(O,w({key:r,queryKey:r,value:e.state.filters[r],path:e.props.path,location:e.props.location},t[r]))})),f.a.createElement("table",{className:"table table-grid"},f.a.createElement("thead",null,f.a.createElement("tr",null,this.props.columns)),f.a.createElement("tbody",null,this.state.loading?this.renderLoading():this.state.error?this.renderError():0===this.state.rows.length?this.renderNoResults():this.renderResults())),this.props.hasPagination&&this.state.pageLinks&&f.a.createElement(q.default,{pageLinks:this.state.pageLinks}))}});t.a=j}).call(t,r(13))}});
//# sourceMappingURL=AdminRelays.js.map