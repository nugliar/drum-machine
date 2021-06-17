(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{20:function(e,c,n){},21:function(e,c,n){},22:function(e,c,n){"use strict";n.r(c);var r=n(0),t=n.n(r),a=n(3),o=n.n(a),i=n(2),s=n(8),d=n(4),m=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],u=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],l={bank:m,bankId:0,power:!0,volume:30,display:"-----"},p=Object(d.b)({name:"soundbank",initialState:l,reducers:{switchSoundbank:function(e){e.bank=0===e.bankId?u:m,e.bankId=(e.bankId+1)%2},switchPower:function(e){e.power=!e.power},setVolume:function(e,c){var n=c.payload.volume;e.volume=n},setDisplay:function(e,c){var n=c.payload.text;e.power&&(e.display=n)}}}),b=function(e){return e.soundbank.bankId},k=function(e){return e.soundbank.power},j=function(e){return e.soundbank.volume},g=function(e){return e.soundbank.display},A=function(e){return e.soundbank.bank},h=p.actions,w=h.switchSoundbank,y=h.switchPower,O=h.setVolume,v=h.setDisplay,f=p.reducer,C=n(1),x={backgroundColor:"#ffa331fa",borderRadius:"2px"},D=function(e){var c=e.keyChar,n=e.keyCode,t=e.name,a=e.audioUrl,o=Object(r.useState)(!1),d=Object(s.a)(o,2),m=d[0],u=d[1],l=Object(i.c)(k),p=Object(i.c)(j),b=Object(i.b)(),g=function(){var e=document.getElementById(c);l&&e?(v({text:t}),e.currentTime=0,e.volume=p/100,e.play()):v({text:"---"})},A=function(e){u(!1)};return Object(r.useEffect)((function(){var e=function(e){e.repeat||e.keyCode===n&&(b(v({text:t})),u(!0),g())},c=function(e){e.keyCode===n&&u(!1)};return document.addEventListener("keydown",e),document.addEventListener("keyup",c),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",c)}})),Object(C.jsxs)("div",{id:t,className:"drum-pad",style:m?x:{},onPointerDown:function(e){e.cancelable&&e.preventDefault(),b(v({text:t})),u(!0),g()},onPointerUp:A,onPointerCancel:A,onPointerLeave:A,onTouchCancel:A,children:[c,Object(C.jsx)("audio",{id:c,className:"clip",src:a})]})},T=function(){var e=Object(i.c)(A).map((function(e){return Object(C.jsx)(D,{keyChar:e.keyTrigger,keyCode:e.keyCode,name:e.id,audioUrl:e.url},e.keyTrigger)}));return Object(C.jsx)("div",{id:"drumpad-board",className:"container",children:e})},I=function(){var e=Object(i.c)(k),c=Object(i.b)(),n=e?"switch-pointer switch-pointer-on":"switch-pointer switch-pointer-off";return Object(C.jsxs)("div",{id:"power-control",className:"container control-container",children:[Object(C.jsx)("p",{className:"control-label",children:"Power"}),Object(C.jsx)("div",{className:"switch",onClick:function(){c(v({text:""})),c(y())},children:Object(C.jsx)("div",{className:n})})]})},N=function(){var e=Object(i.c)(j),c=Object(i.b)();return Object(C.jsxs)("div",{id:"volume-control",className:"container control-container",children:[Object(C.jsx)("p",{className:"control-label",children:"Volume"}),Object(C.jsx)("input",{type:"range",min:"0",max:"100",increment:"1",value:e,onChange:function(e){c(O({volume:e.target.value})),c(v({text:"Volume: ".concat(e.target.value)}))}})]})},E=function(){var e=Object(i.c)(g),c=Object(i.c)(k),n="container display-container ".concat(c?"display-active":"display-inactive");return Object(C.jsx)("div",{id:"display",className:n,children:Object(C.jsx)("p",{className:"display-text",children:e})})},B=function(){var e=Object(i.c)(b),c=Object(i.b)(),n=0===e?"switch-pointer switch-pointer-off":"switch-pointer switch-pointer-on";return Object(C.jsxs)("div",{id:"bank-control",className:"container control-container",children:[Object(C.jsx)("p",{className:"control-label",children:"Bank"}),Object(C.jsx)("div",{className:"switch",onClick:function(){c(v({text:"Bank "+((e+1)%2+1)})),c(w())},children:Object(C.jsx)("div",{className:n})})]})},S=function(){return Object(C.jsxs)("div",{id:"control-board",className:"container",children:[Object(C.jsx)(I,{}),Object(C.jsx)(E,{}),Object(C.jsx)(N,{}),Object(C.jsx)(B,{})]})};var H=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)("div",{className:"outer-container",children:[Object(C.jsx)(T,{}),Object(C.jsx)(S,{})]}),Object(C.jsx)("div",{className:"links",children:Object(C.jsxs)("a",{href:"https://github.com/nugliar/drum-machine",children:[Object(C.jsx)("span",{children:"Javascript Drum Machine"}),Object(C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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",alt:""})]})})]})},R=Object(d.a)({reducer:{soundbank:f}});n(20),n(21);o.a.render(Object(C.jsx)(t.a.StrictMode,{children:Object(C.jsx)(i.a,{store:R,children:Object(C.jsx)(H,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.482403f7.chunk.js.map