"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[998],{998:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(289),i=n(439),o=n(671),a=n(466),s=n(136),c=n(516),l=n(791);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var h=new Map,f=new WeakMap,d=0,v=void 0;function g(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(n=e.root)?(f.has(n)||(d+=1,f.set(n,d.toString())),f.get(n)):"0":e[t]);var n})).toString()}function y(e){var t=g(e),n=h.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},h.set(t,n)}return n}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=y(n),a=o.id,s=o.observer,c=o.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),s.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),h.delete(a))}}var b=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function w(e){return"function"!==typeof e.children}l.Component;var k=n(184),V=function(){var e=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.threshold,r=t.delay,o=t.trackVisibility,a=t.rootMargin,s=t.root,c=t.triggerOnce,u=t.skip,h=t.initialInView,f=t.fallbackInView,d=t.onChange,v=l.useState(null),g=(0,i.Z)(v,2),y=g[0],b=g[1],w=l.useRef(),k=l.useState({inView:!!h,entry:void 0}),V=(0,i.Z)(k,2),m=V[0],I=V[1];w.current=d,l.useEffect((function(){var e;if(!u&&y)return e=p(y,(function(t,n){I({inView:t,entry:n}),w.current&&w.current(t,n),n.isIntersecting&&c&&e&&(e(),e=void 0)}),{root:s,rootMargin:a,threshold:n,trackVisibility:o,delay:r},f),function(){e&&e()}}),[Array.isArray(n)?n.toString():n,y,s,a,c,u,o,f,r]);var O=null==(e=m.entry)?void 0:e.target,_=l.useRef();y||!O||c||u||_.current===O||(_.current=O,I({inView:!!h,entry:void 0}));var j=[b,m.inView,m.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}({threshold:0}),t=e.ref,n=e.inView;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:r.Z.hero,"aria-label":"hero",children:(0,k.jsxs)("h2",{className:n?"".concat(r.Z.hero__title," ").concat(r.Z.show):r.Z.hero__title,ref:t,children:["Katherine Makhlay",(0,k.jsx)("span",{className:r.Z.hero__sublogo,children:"makeup artist"})]})}),(0,k.jsx)("div",{className:r.Z.container})]})}}}]);
//# sourceMappingURL=998.cf7479fc.chunk.js.map