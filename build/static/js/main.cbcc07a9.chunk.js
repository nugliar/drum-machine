(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{21:function(e,r,t){},22:function(e,r,t){"use strict";t.r(r);var c=t(0),n=t.n(c),o=t(4),a=t.n(o),s=t(2),i=t(9),d=t(5),m=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],u=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],l={bank:m,bankId:0,power:!0,volume:30,display:"-----"},p=Object(d.b)({name:"soundbank",initialState:l,reducers:{switchSoundbank:function(e){e.bank=0===e.bankId?u:m,e.bankId=(e.bankId+1)%2},switchPower:function(e){e.power=!e.power},setVolume:function(e,r){var t=r.payload.volume;e.volume=t},setDisplay:function(e,r){var t=r.payload.text;e.power&&(e.display=t)}}}),k=function(e){return e.soundbank.bankId},b=function(e){return e.soundbank.power},j=function(e){return e.soundbank.volume},h=function(e){return e.soundbank.display},y=function(e){return e.soundbank.bank},g=p.actions,f=g.switchSoundbank,O=g.switchPower,w=g.setVolume,v=g.setDisplay,x=p.reducer,C=t(1),H={backgroundColor:"#ffa331fa",border:"none",borderRadius:"2px"},T=function(e){var r=e.keyChar,t=e.keyCode,n=e.name,o=e.audioUrl,a=Object(c.useState)(!1),d=Object(i.a)(a,2),m=d[0],u=d[1],l=Object(s.c)(b),p=Object(s.c)(j),k=Object(s.b)(),h=function(){var e=document.getElementById(r);l&&e?(v({text:n}),e.currentTime=0,e.volume=p/100,e.play()):v({text:"---"})};return Object(c.useEffect)((function(){var e=function(e){e.target.id===n&&(k(v({text:n})),h())},r=function(e){e.repeat||e.keyCode===t&&(k(v({text:n})),u(!0),h())},c=function(e){e.keyCode===t&&u(!1)};return document.addEventListener("click",e),document.addEventListener("keydown",r),document.addEventListener("keyup",c),function(){document.removeEventListener("click",e),document.removeEventListener("keydown",r),document.removeEventListener("keyup",c)}})),Object(C.jsxs)("div",{id:n,className:"drum-pad",style:m?H:{},children:[r,Object(C.jsx)("audio",{id:r,className:"clip",src:o})]})},_={width:"300px",height:"300px",flexWrap:"wrap",gap:"2%",backgroundColor:"#ccc"},z=function(){var e=Object(s.c)(y).map((function(e){return Object(C.jsx)(T,{keyChar:e.keyTrigger,keyCode:e.keyCode,name:e.id,audioUrl:e.url},e.keyTrigger)}));return Object(C.jsx)("div",{id:"drum-pad-board",className:"container",style:_,children:e})},N=function(){var e=Object(s.c)(b),r=Object(s.b)(),t=e?"switch-pointer switch-pointer-on":"switch-pointer switch-pointer-off";return Object(C.jsxs)("div",{id:"power-control",className:"container control-container",children:[Object(C.jsx)("p",{className:"control-label",children:"Power"}),Object(C.jsx)("div",{className:"switch",onClick:function(){r(v({text:""})),r(O())},children:Object(C.jsx)("div",{className:t})})]})},S=function(){var e=Object(s.c)(j),r=Object(s.b)();return Object(C.jsxs)("div",{id:"volume-control",className:"container control-container",children:[Object(C.jsx)("p",{className:"control-label",children:"Volume"}),Object(C.jsx)("input",{type:"range",min:"0",max:"100",increment:"1",value:e,onChange:function(e){r(w({volume:e.target.value})),r(v({text:"Volume: ".concat(e.target.value)}))}})]})},E=t(3),I={backgroundColor:"rgb(255 163 49 / 70%)",width:"80%",minHeight:"40px",border:"1px solid #ccc"},B={fontWeight:"bold",textAlign:"center",margin:"auto",color:"#222"},D=function(){var e=Object(s.c)(h),r=Object(s.c)(b);return Object(C.jsx)("div",{id:"display",className:"container",style:r?I:Object(E.a)(Object(E.a)({},I),{},{backgroundColor:"#666"}),children:Object(C.jsx)("p",{style:B,children:e})})},K=function(){var e=Object(s.c)(k),r=Object(s.b)(),t=0===e?"switch-pointer switch-pointer-off":"switch-pointer switch-pointer-on";return Object(C.jsxs)("div",{id:"bank-control",className:"container control-container",children:[Object(C.jsx)("p",{className:"control-label",children:"Bank"}),Object(C.jsx)("div",{className:"switch",onClick:function(){r(v({text:"Bank "+((e+1)%2+1)})),r(f())},children:Object(C.jsx)("div",{className:t})})]})},L=function(){return Object(C.jsxs)("div",{id:"control-board",className:"container",children:[Object(C.jsx)(N,{}),Object(C.jsx)(D,{}),Object(C.jsx)(S,{}),Object(C.jsx)(K,{})]})};var P=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)("div",{className:"outer-container",children:Object(C.jsxs)("div",{id:"drum-machine",className:"container",children:[Object(C.jsx)(z,{}),Object(C.jsx)(L,{})]})})})},A=Object(d.a)({reducer:{soundbank:x}});t(21);a.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(s.a,{store:A,children:Object(C.jsx)(P,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cbcc07a9.chunk.js.map