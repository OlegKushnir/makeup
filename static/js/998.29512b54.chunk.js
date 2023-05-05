"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[998,810,491],{7810:function(e,t,r){r.r(t);var n=r(1289),i=r(197),o=r(184);t.default=function(){return(0,o.jsx)("section",{className:n.Z.about,children:(0,o.jsxs)("div",{className:n.Z.wrapper,children:[(0,o.jsx)("div",{className:n.Z.imgWrapper,children:(0,o.jsxs)(i.lr,{autoPlay:!0,showArrows:!1,interval:1e4,infiniteLoop:!0,showStatus:!1,showIndicators:!1,showThumbs:!1,transitionTime:2e3,stopOnHover:!1,swipeable:!1,children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/makeup/about1_d.jpg",alt:""})}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/makeup/about2_d.jpg",alt:""})}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/makeup/about3_d.jpg",alt:""})})]})}),(0,o.jsx)("h2",{className:n.Z.section__title,children:"About me"}),(0,o.jsxs)("article",{className:n.Z.text,children:[(0,o.jsx)("p",{children:"Dears, here I want to tell you a little about myself and how I got to where I am now."}),(0,o.jsx)("p",{children:"The start of my makeup career dates back to 2010, when, being a student of the Faculty of Philology, I worked as a fire show artist and spent most of the money on cosmetics and good makeup courses"}),(0,o.jsx)("p",{children:"In 2012 I started teaching, and in 2013 I opened my makeup school"}),(0,o.jsx)("p",{children:"The school lasted until 2022, had three teachers, an administrator, two basic makeup courses, one browist course, course of makeup for myself and advanced training for working make-up artists"}),(0,o.jsx)("p",{children:"I have been based in London since 2022 and enjoy working with clients. I do makeup and hair, but also with great pleasure I will give you a personal makeup lesson and help with the selection of cosmetics"}),(0,o.jsx)("p",{children:"I love working with people and I am sure you will enjoy working with me."})]})]})})}},1491:function(e,t,r){r.r(t);var n=r(1289),i=r(184);t.default=function(){return(0,i.jsxs)("section",{className:n.Z.faq,children:[(0,i.jsx)("h2",{className:n.Z.section__title,children:"FAQ"}),(0,i.jsx)("div",{className:n.Z.wrapper,children:(0,i.jsxs)("article",{className:n.Z.text,children:[(0,i.jsx)("h3",{children:"How to prepare for our meeting?"}),(0,i.jsx)("p",{children:"Try to avoid new procedures with your skin and do not use new cosmetic products for at least one week before the event. Try to do everything to avoid dehydration of the skin: apply a moisturizer in the morning and evening, you can make a moisturizing mask the day before or put a thick layer of moisturizer on the night before."}),(0,i.jsx)("p",{children:"The hair should be washed the night before or in the morning with shampoo and conditioner, oil and damp should not be applied. Thermal protection too - I will use it, I will treat your hair as carefully as possible."}),(0,i.jsx)("p",{children:"Please make sure your hair is 101% dry, it will make my job a lot easier."}),(0,i.jsx)("h3",{children:"How to prepare for a trial?"}),(0,i.jsx)("p",{children:"I will definitely ask you what makeup you wear every day, if you have a photo of your usual makeup, it will be great."}),(0,i.jsx)("h3",{children:"When is the best time for trial of a wedding look?"}),(0,i.jsx)("p",{children:"I recommend holding a trial a month and a half before the wedding. The sooner you do it, the greater the chance that you may change your mind and want a different look. You can find a photo of the makeup or hairstyle you like, ideally several photos."}),(0,i.jsx)("h3",{children:"Does the price include jewellery or extra hair?"}),(0,i.jsx)("p",{children:"No, they are not included. You need to bring your jewellery or hair and I will gladly complete your look with them."})]})})]})}},3998:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(7810),i=r(1289),o=r(9439),a=r(5671),s=r(3144),l=r(136),c=r(7277),h=r(2791);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}var u=new Map,f=new WeakMap,p=0,m=void 0;function y(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(r=e.root)?(f.has(r)||(p+=1,f.set(r,p.toString())),f.get(r)):"0":e[t]);var r})).toString()}function w(e){var t=y(e),r=u.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},u.set(t,r)}return r}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=w(r),a=o.id,s=o.observer,l=o.elements,c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(l.delete(e),s.unobserve(e)),0===l.size&&(s.disconnect(),u.delete(a))}}var v=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function b(e){return"function"!==typeof e.children}h.Component;var j=r(1491),k=r(184),x=function(){var e=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.threshold,n=t.delay,i=t.trackVisibility,a=t.rootMargin,s=t.root,l=t.triggerOnce,c=t.skip,d=t.initialInView,u=t.fallbackInView,f=t.onChange,p=h.useState(null),m=(0,o.Z)(p,2),y=m[0],w=m[1],v=h.useRef(),b=h.useState({inView:!!d,entry:void 0}),j=(0,o.Z)(b,2),k=j[0],x=j[1];v.current=f,h.useEffect((function(){var e;if(!c&&y)return e=g(y,(function(t,r){x({inView:t,entry:r}),v.current&&v.current(t,r),r.isIntersecting&&l&&e&&(e(),e=void 0)}),{root:s,rootMargin:a,threshold:r,trackVisibility:i,delay:n},u),function(){e&&e()}}),[Array.isArray(r)?r.toString():r,y,s,a,l,c,i,u,n]);var I=null==(e=k.entry)?void 0:e.target,Z=h.useRef();y||!I||l||c||Z.current===I||(Z.current=I,x({inView:!!d,entry:void 0}));var V=[w,k.inView,k.entry];return V.ref=V[0],V.inView=V[1],V.entry=V[2],V}({threshold:0}),t=e.ref,r=e.inView;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:i.Z.hero,"aria-label":"hero",children:(0,k.jsxs)("h2",{className:r?"".concat(i.Z.hero__title," ").concat(i.Z.show):i.Z.hero__title,ref:t,children:["Kate Makhlai",(0,k.jsx)("span",{className:i.Z.hero__sublogo,children:"makeup artist"})]})}),(0,k.jsxs)("div",{className:i.Z.container,children:[(0,k.jsx)(n.default,{}),(0,k.jsx)(j.default,{})]})]})}}}]);
//# sourceMappingURL=998.29512b54.chunk.js.map