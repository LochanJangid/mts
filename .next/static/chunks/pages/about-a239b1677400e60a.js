(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(3211)}])},3211:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return r}});var s,n=i(5893);i(7294);var a=i(9008),l=i.n(a);function o(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function h(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}i(5675),s=function(){var e,t,i;function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),!h(e,Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(t),this.reverse=this.settings.reverse?-1:1,this.glare=s.isSettingTrue(this.settings.glare),this.glarePrerender=s.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=s.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=s.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}return e=s,t=[{key:"getElementListener",value:function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return h(this.settings["mouse-event-element"],Node)?this.settings["mouse-event-element"]:this.element}},{key:"addEventListeners",value:function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}},{key:"removeEventListeners",value:function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}},{key:"destroy",value:function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}},{key:"onDeviceOrientation",value:function(e){if(null!==e.gamma&&null!==e.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=t/this.width,n=i/this.height,a=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),l=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero);null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:a/s+this.left,clientY:l/n+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}}},{key:"onMouseEnter",value:function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}},{key:"onMouseMove",value:function(e){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}},{key:"onMouseLeave",value:function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}},{key:"reset",value:function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective(".concat(this.settings.perspective,"px) ")+"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()}},{key:"resetGlare",value:function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}},{key:"updateInitialPosition",value:function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}}},{key:"getValues",value:function(){this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);var e,t,i,s=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2);return{tiltX:s,tiltY:(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*e,percentageY:100*t,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(){var e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:e.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate(".concat(e.angle,"deg) translate(-50%, -50%)"),this.glareElement.style.opacity="".concat(e.percentageY*this.settings["max-glare"]/100)),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}},{key:"prepareGlare",value:function(){if(!this.glarePrerender){var e=document.createElement("div");e.classList.add("js-tilt-glare");var t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}},{key:"updateGlareSize",value:function(){if(this.glare){var e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:"".concat(e,"px"),height:"".concat(e,"px")})}}},{key:"updateClientSize",value:function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},{key:"onWindowResize",value:function(){this.updateGlareSize(),this.updateClientSize()}},{key:"setTransition",value:function(){var e=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity ".concat(this.settings.speed,"ms ").concat(this.settings.easing)),this.transitionTimeout=setTimeout(function(){e.element.style.transition="",e.glare&&(e.glareElement.style.transition="")},this.settings.speed)}},{key:"extendSettings",value:function(e){var t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in t)if(s in e)i[s]=e[s];else if(this.element.hasAttribute("data-tilt-"+s)){var n=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(n)}catch(a){i[s]=n}}else i[s]=t[s];return i}}],i=[{key:"isSettingTrue",value:function(e){return""===e||!0===e||1===e}},{key:"init",value:function(e,t){h(e,Node)&&(e=[e]),h(e,NodeList)&&(e=[].slice.call(e)),h(e,Array)&&e.forEach(function(e){"vanillaTilt"in e||(e.vanillaTilt=new s(e,t))})}}],t&&o(e.prototype,t),i&&o(e,i),s}(),"undefined"!=typeof document&&(window.VanillaTilt=s,s.init(document.querySelectorAll("[data-tilt]")));var r=function(){return VanillaTilt.init(document.querySelector(".vanilla"),{max:25,speed:400}),VanillaTilt.init(document.querySelectorAll(".vanilla")),(0,n.jsxs)("div",{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"About - MTS School"}),(0,n.jsx)("meta",{name:"description",content:"mtsschool.com we provide better education"}),(0,n.jsx)("link",{rel:"icon",href:"/logo/favicon.png"})]}),(0,n.jsxs)("div",{className:"glass p-3 m-5",children:[(0,n.jsx)("h1",{className:"glass-blur p-3 text-2xl font-semibold text-gray-700",children:"About MOTHER TERESA SENIOR SECONDARY SCHOOL BAHARAWANDA KALAN"}),(0,n.jsx)("p",{className:"m-3",children:"MOTHER TERESA SEC.BAHARAWANDA KALA was established in 1998 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in KHANDAR block of SAWAI MADHOPUR district of Rajasthan. The school consists of Grades from 1 to 12. The school is Co-educational and it have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. Hindi is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April. The school has Private building. It has got 9 classrooms for instructional purposes. All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher. The school has Pucca boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional. The school has 3 boys toilet and it is functional. and 2 girls toilet and it is functional. The school has a playground. The school has a library and has 369 books in its library. The school does not need ramp for disabled children to access classrooms. The school has 2 computers for teaching and learning purposes and all are functional. The school is not having a computer aided learning lab. The school is Not Provided providing mid-day meal."})]})]})}},9008:function(e,t,i){e.exports=i(5443)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);