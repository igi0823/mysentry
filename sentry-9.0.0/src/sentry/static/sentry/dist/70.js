webpackJsonpexports([70],{1631:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return b});var o=n(156),l=n.n(o),u=n(0),s=n.n(u),c=n(92),f=n(2),p=n(636),m=n(55),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=["system.url-prefix","system.admin-email","system.support-email","system.security-email","system.rate-limit","auth.allow-registration","auth.ip-rate-limit","auth.user-rate-limit","api.rate-limit.org-create","beacon.anonymous"],b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),y(t,[{key:"getEndpoints",value:function(){return[["data",this.getEndpoint()]]}},{key:"getEndpoint",value:function(){return"/internal/options/"}},{key:"renderBody",value:function(){var e=this.state.data,t={},n={},r=!0,a=!1,i=void 0;try{for(var o,u=h[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var c=o.value,y=e[c]||{field:{}};if(l()(y.value)||""===y.value){var b=Object(p.b)(c);t[c]=b.defaultValue?b.defaultValue():""}else t[c]=y.value;n[c]=Object(p.c)(c,y.field)}}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return s.a.createElement("div",null,s.a.createElement("h3",null,Object(f.t)("Settings")),s.a.createElement(m.ApiForm,{apiMethod:"PUT",apiEndpoint:this.getEndpoint(),onSubmit:this.onSubmit,initialData:t,requireChanges:!0},s.a.createElement("h4",null,"General"),n["system.url-prefix"],n["system.admin-email"],n["system.support-email"],n["system.security-email"],n["system.rate-limit"],s.a.createElement("h4",null,"Security & Abuse"),n["auth.allow-registration"],n["auth.ip-rate-limit"],n["auth.user-rate-limit"],n["api.rate-limit.org-create"],s.a.createElement("h4",null,"Beacon"),n["beacon.anonymous"]))}}]),t}(c.default)}});
//# sourceMappingURL=AdminSettings.js.map