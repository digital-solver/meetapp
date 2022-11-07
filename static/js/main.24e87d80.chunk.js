(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(267),i=n.n(o),c=(n(280),n(43)),s=n(21),l=n(26),u=n(24),h=n(22),f=n(23),p=(n(282),n(285),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).clickHandler=function(){n.setState({isVisible:!n.state.isVisible})},n.state={isVisible:!1},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.isVisible,t=this.props.event;return a.a.createElement("div",{className:"details__outer-container event"},a.a.createElement("h2",null,t.summary),a.a.createElement("p",null,t.description),a.a.createElement("button",{className:"details__toggle",onClick:this.clickHandler},a.a.createElement("span",{className:e?"details__toggle--show-text":"details__toggle--show-text visible"},"Show"),a.a.createElement("span",{className:e?"details__toggle--hide-text visible":"details__toggle--hide-text"},"Hide")),a.a.createElement("div",{className:e?"details__inner-container visible":"details__inner-container"},a.a.createElement("p",{className:"event__location"},"Location: ",t.location),a.a.createElement("p",{className:"event__start"},"From: ",t.start.dateTime),a.a.createElement("p",{className:"event__end"},"Until: ",t.end.dateTime)))}}]),t}(r.Component)),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.events;return a.a.createElement("ul",{className:"EventList"},e.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(p,{event:e}))}))}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).getStyle=function(){return{color:n.color,marginTop:0,display:"contents"}},n.color=null,n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Alert",style:this.getStyle()},a.a.createElement("p",null,this.props.text))}}]),t}(r.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).color="blue",n}return Object(f.a)(t,e),t}(m),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).color="red",n}return Object(f.a)(t,e),t}(m),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).color="orange",n}return Object(f.a)(t,e),t}(m),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t});var r=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==r.length)return n.setState({query:t,suggestions:r,infoText:""});n.setState({query:t,infoText:"Not found, try again."})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1,infoText:""}),n.props.updateEvents(e)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"CitySearch",style:{display:"block"}},a.a.createElement(v,{text:this.state.infoText}),a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),a.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return a.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),a.a.createElement("li",{key:"all",onClick:function(){return e.handleItemClicked("all")}},a.a.createElement("b",null,"See all cities"))))}}]),t}(r.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.eventsLength,n=e.handleChange,r=e.errorText,o=e.warningText;return a.a.createElement("div",{className:"numberOfEvents"},a.a.createElement("label",null,"Number of Events:",a.a.createElement("input",{type:"number",className:"event-number",value:t,onChange:n})),a.a.createElement(g,{text:r}),a.a.createElement(g,{text:r}),a.a.createElement(y,{text:o}))}}]),t}(r.Component),E=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20220519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2022-11-19T19:17:46.000Z",updated:"2022-11-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2022-11-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2022-11-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2022-11-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20220520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2022-11-19T19:14:30.000Z",updated:"2022-11-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2022-11-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2022-11-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2022-11-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,eventType:"default"}])),x=n(211),k=n(245),L=n.n(k),S=n(94),j=n.n(S);function O(){O=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var u={};function h(){}function f(){}function p(){}var d={};c(d,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==t&&n.call(v,a)&&(d=v);var g=p.prototype=h.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var T=function(e){var t=e.map(function(e){return e.location});return Object(x.a)(new Set(t))},_=function(){var e=Object(c.a)(O().mark(function e(){var t,n,r,a,o,i;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,L.a.get("https://phqdew19ve.execute-api.eu-west-3.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&N(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(O().mark(function e(t){var n,r,a;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://phqdew19ve.execute-api.eu-west-3.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(O().mark(function e(t){var n;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),W=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(c.a)(O().mark(function e(){var t,n,r,a,o;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(j.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return j.a.done(),e.abrupt("return",E);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),j.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,_();case 10:if(!(n=e.sent)){e.next=20;break}return W(),r="https://phqdew19ve.execute-api.eu-west-3.amazonaws.com/dev/api/get-events/"+n,e.next=16,L.a.get(r);case 16:return(a=e.sent).data&&(o=T(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),j.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();n(309),n(311);var Z=function(e){return e.showWelcomeScreen?a.a.createElement("div",{className:"WelcomeScreen"},a.a.createElement("h1",null,"Welcome to the Meet app"),a.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),a.a.createElement("div",{className:"button_cont",align:"center"},a.a.createElement("div",{class:"google-btn"},a.a.createElement("div",{class:"google-icon-wrapper"},a.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})),a.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},a.a.createElement("b",null,"Sign in with google")))),a.a.createElement("a",{href:"https://Digital-Solver.github.io/meetapp/privacy.html",rel:"nofollow noopener"},"Privacy policy")):null},A=n(353),G=n(354),F=n(359),q=n(208),P=n(209),D=n(351),J=n(229);function M(){M=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var u={};function h(){}function f(){}function p(){}var d={};c(d,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==t&&n.call(v,a)&&(d=v);var g=p.prototype=h.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={events:E,locations:T(E),eventsLength:32,errorText:"",warningText:"Range limit!",showWelcomeScreen:void 0},n.updateEvents=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.eventsLength;I().then(function(r){var a="all"===e?r:r.filter(function(t){return t.location===e});n.setState({events:a.slice(0,t)})})},n.handleChange=function(e){var t=e.target.value;n.setState({eventsLength:t}),t<1||t>32?n.setState({errorText:"Not in range (1 to 32)"}):n.setState({errorText:""}),1==t||32==t?n.setState({warningText:"Range limit!"}):n.setState({warningText:""})},n.getData=function(){var e=n.state,t=e.locations,r=e.events;return t.map(function(e){var t=r.filter(function(t){return t.location===e}).eventsLength;return{city:e.split(", ").shift(),number:t}})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(M().mark(function e(){var t,n,r,a,o=this;return M().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,C(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&I().then(function(e){o.mounted&&o.setState({events:e,locations:T(e)})});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){if(void 0===this.state.showWelcomeScreen)return a.a.createElement("div",{className:"App"});var e=this.state,t=e.events,n=e.locations,r=e.eventsLength;return navigator.onLine?a.a.createElement("div",{className:"App"},a.a.createElement(w,{locations:n,updateEvents:this.updateEvents}),a.a.createElement(b,{eventsLength:r,handleChange:this.handleChange,errorText:this.state.errorText,warningText:this.state.warningText}),a.a.createElement(A.a,{height:400},a.a.createElement(G.a,{margin:{top:20,right:20,bottom:20,left:20}},a.a.createElement(F.a,null),a.a.createElement(q.a,{type:"category",dataKey:"city",name:"city"}),a.a.createElement(P.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),a.a.createElement(D.a,{cursor:{strokeDasharray:"3 3"}}),a.a.createElement(J.a,{data:this.getData(),fill:"#8884d8"}))),a.a.createElement(d,{events:t.slice(0,r)}),a.a.createElement(Z,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){_()}})):a.a.createElement("div",{className:"App"},a.a.createElement(y,{text:"This app is offline!"}),a.a.createElement(w,{locations:n,updateEvents:this.updateEvents}),a.a.createElement(b,{eventsLength:r,handleChange:this.handleChange,errorText:this.state.errorText,warningText:this.state.warningText}),a.a.createElement(A.a,{height:400},a.a.createElement(G.a,{margin:{top:20,right:20,bottom:20,left:20}},a.a.createElement(F.a,null),a.a.createElement(q.a,{type:"category",dataKey:"city",name:"city"}),a.a.createElement(P.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),a.a.createElement(D.a,{cursor:{strokeDasharray:"3 3"}}),a.a.createElement(J.a,{data:this.getData(),fill:"#8884d8"}))),a.a.createElement(d,{events:t.slice(0,r)}),a.a.createElement(Z,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){_()}}))}}]),t}(r.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var H=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,360)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};n(203).config("0cbd9dce4cf741ef85592e538946f999").install(),i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null))),function(e){if("serviceWorker"in navigator){if(new URL("/meetapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meetapp","/service-worker.js");U?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):B(t,e)})}}(),H()},274:function(e,t,n){e.exports=n(228)},280:function(e,t,n){},282:function(e,t,n){},285:function(e,t,n){},309:function(e,t,n){},311:function(e,t,n){}},[[274,3,2]]]);
//# sourceMappingURL=main.24e87d80.chunk.js.map