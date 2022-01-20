"use strict";(self.webpackChunkreact_crypto_tracker_s_comp=self.webpackChunkreact_crypto_tracker_s_comp||[]).push([[500],{6713:function(n,e,r){r.d(e,{X7:function(){return t},P9:function(){return c},XW:function(){return i},ZF:function(){return a}});var t=function(n){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(n,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},c=function(n){return"https://api.coingecko.com/api/v3/coins/".concat(n)},i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,r=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(n,"/market_chart?vs_currency=").concat(r,"&days=").concat(e)},a=function(n){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(n,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")}},5625:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,c,i,a,s=r(885),o=r(2791),u=r(3336),l=r(2402),m=r(9233),p=r(168),d=r(5751),f=r(184),h=(0,o.memo)((function(n){var e=n.coin,r=(0,l.Z)().symbol,t=e.name,c=e.image,i=e.current_price,a=e.price_change_percentage_24h,s=e.market_cap,o=(a=a>0?"+"+a:a)>0?"true":"false";return s=s.toString().slice(0,6),(0,f.jsxs)("tr",{children:[(0,f.jsx)(v,{name:t,image:c}),(0,f.jsx)(v,{name:i,symbol:r}),(0,f.jsx)(v,{name:a,profit:o}),(0,f.jsx)(v,{name:s,symbol:r})]})})),v=(0,o.memo)((function(n){var e=n.name,r=n.image,t=n.symbol,c=n.profit;return(0,f.jsxs)("td",{style:r&&{display:"flex",alignItems:"center"},className:c&&("true"===c?"profit":"lose"),children:[r&&(0,f.jsx)("img",{src:r,alt:"coin"}),t&&t+" ",e]})})),g=(0,o.memo)((function(n){var e=n.TABLE_COINS,r=n.start,t=n.end;return(0,f.jsx)(x,{children:e.slice(r,t+1).map((function(n){return(0,f.jsx)(h,{coin:n},n.name)}))})})),x=d.ZP.tbody(t||(t=(0,p.Z)(["\n    font-size:clamp(1.6rem,1.7rem,1.7vw);\n"]))),y=(0,o.memo)((function(n){var e=n.heads;return(0,f.jsx)(_,{children:(0,f.jsx)("tr",{children:e.map((function(n){return(0,f.jsx)(v,{name:n},n)}))})})})),_=d.ZP.thead(c||(c=(0,p.Z)(["\n    color:var(--secondary-clr);\n    font-size:clamp(1.8rem,2rem,2vw);\n"]))),j=(0,o.memo)((function(n){var e=n.data,r=e.TABLE_COINS,t=e.start,c=e.end,i=e.table_heads,a=e.id,s=e.styles;return(0,f.jsxs)(w,{id:a,style:s,children:[(0,f.jsx)(y,{heads:i}),(0,f.jsx)(g,{TABLE_COINS:r,start:t,end:c})]})})),b=j,w=d.ZP.table(i||(i=(0,p.Z)(["\n    text-align:center;\n    width:100%;\n    background:var(--table-bg);\n    color:var(--prm-clr);\n    max-width:90rem;\n    margin:auto;\n    tbody,tr,td{\n        border:1px solid var(--border);\n        border-collapse:collapse;\n    }\n    td{\n        padding:1rem;\n        img{\n            width:3rem;\n            height:3rem;\n            margin-inline-end:2rem;\n        }\n    }\n"]))),k=["Coin","Price","24h Change","Market Cap"],Z={borderCollapse:"collapse",minWidth:"60rem"},C=(0,o.memo)((function(){var n=(0,l.Z)(),e=n.TABLE_COINS,r=n.start,t=n.end;return(0,f.jsx)(b,{data:{TABLE_COINS:e,start:r,end:t,table_heads:k,id:"coin_table",styles:Z}})})),P=(0,o.memo)((function(){for(var n=(0,l.Z)(),e=n.TABLE_COINS,r=n.active_page,t=n.setPage,c=e.length/10,i=[],a=0;a<c;a++)i.push(a+1);var s=function(n){return t({start:(n-1)*c,end:n*c-1,active_page:n})};return(0,f.jsx)(S,{children:i.map((function(n){return(0,f.jsx)(I,{text:n,handleClick:s,style_cls:n===r&&"active_page_styles"},n)}))})})),I=(0,o.memo)((function(n){var e=n.text,r=n.handleClick,t=n.style_cls;return(0,f.jsx)("li",{onClick:function(){return r&&r(e)},className:t||"",children:e})})),S=d.ZP.div(a||(a=(0,p.Z)(["\n    width:100%;\n    display:flex;\n    justify-content:center;\n    margin-top:1rem;\n    li{\n        color:var(--prm-clr);\n        &:hover{\n            background: var(--secondary-clr);\n            color:var(--prm-clr);\n            border-radius: 0.3rem;\n        }\n    }\n    .active_page_styles{\n        background:var(--secondary-clr);\n        color:var(--prm-clr);\n    }\n"]))),T=(0,o.memo)((function(n){var e=n.heading,r=n.visible,t=(0,l.Z)(),c=t.currency,i=t.setTableCoins;return(0,o.useEffect)((function(){r&&(0,m.ZP)(c).then((function(n){return i(n)}))}),[i,c,r]),(0,f.jsxs)("section",{style:{padding:"3rem clamp(1rem,3rem,3vw)",textAlign:"center",height:"100%"},children:[(0,f.jsx)("h2",{style:{fontSize:"clamp(2rem,2.6rem,2.6vw)",margin:"1rem 0 2rem 0"},children:e}),(0,f.jsx)("section",{style:{width:"100%",overflowX:"auto"},children:(0,f.jsx)(C,{})}),(0,f.jsx)(P,{})]})})),E=r(5861),B=r(7757),N=r.n(B),z=r(1052),A=r.n(z),O=r(6713),L=(r(6505),r(1523)),X=(0,o.memo)((function(n){var e=n.coin,r=n.select_symbol,t=e.id,c=e.name,i=e.symbol,a=e.image,s=e.price_change_percentage_24h,o=e.current_price,u=s>=0;return(0,f.jsxs)(L.rU,{to:"/coins/".concat(t),style:F,children:[(0,f.jsx)("img",{src:a,alt:c,style:{height:"clamp(6rem,8rem,10vw)",marginBottom:"1rem"}}),(0,f.jsxs)("span",{style:D,children:[i," \xa0",(0,f.jsxs)("span",{style:{color:u?"var(--profit-clr)":"var(--lose-clr)"},children:[u>0&&" +",null===s||void 0===s?void 0:s.toFixed(2),"%"]})]}),(0,f.jsxs)("span",{style:{fontSize:"clamp(1.4rem,1.4rem,1.4vw)",marginTop:"1rem",color:"var(--price-clr)"},children:[r,o.toFixed(2)]})]})})),F={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",cursor:"pointer",textTransform:"uppercase"},D={color:"var(--coin-name-clr)",fontSize:"clamp(1.3rem,1.5rem,1.5vw)"},M=(0,o.memo)((function(){var n=(0,l.Z)(),e=n.currency,r=n.symbol,t=n.trending_coins,c=n.setTrendingCoins,i=(0,o.useState)(!1),a=(0,s.Z)(i,2),u=a[0],m=a[1];return setTimeout((function(){return m(!0)}),1e3),(0,o.useEffect)((function(){(function(n){return U.apply(this,arguments)})(e).then((function(n){return c(n)}))}),[e,c]),(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",height:"60%",width:"100%"},children:(0,f.jsx)(A(),{items:J(t,r),infinite:!0,autoPlayInterval:1e3,animationDuration:1e3,responsive:G,disableDotsControls:!0,disableButtonsControls:!0,autoPlay:u})})})),W=M,G={0:{items:2},700:{items:4},1200:{items:6}};function U(){return(U=(0,E.Z)(N().mark((function n(e){var r;return N().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch((0,O.ZF)(e));case 2:return r=n.sent,n.next=5,r.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var q,H,J=function(n,e){return n.map((function(n){return(0,f.jsx)(X,{coin:n,select_symbol:e})}))},K=(0,o.memo)((function(){return(0,f.jsxs)(Q,{children:[(0,f.jsx)("img",{className:"hero_img",src:"./imgs/hero_bg.avif",alt:"hero"}),(0,f.jsxs)(R,{children:[(0,f.jsx)("h2",{children:"Crypto Tracker"}),(0,f.jsx)("p",{children:"Get all information about crypto currencies"})]}),(0,f.jsx)(W,{})]})})),Q=d.ZP.section(q||(q=(0,p.Z)(["\n   display:flex;\n   flex-direction:column;\n   justify-content:space-between;\n   align-items:center;\n   height:80%;\n   width:100%;\n   overflow:hidden;\n   position:relative;\n   background:none;\n\n   >img{\n      position:absolute;\n      height:100%;\n      width:100%;\n      z-index:-1;\n      filter:brightness(0.25);\n   }\n   @media (min-width:700px){\n      max-height:60rem;\n      height:100%;\n      >img{\n         height:100%;\n         max-height:60rem\n      }\n   }\n"]))),R=d.ZP.div(H||(H=(0,p.Z)(["\n   height:40%;\n   display:flex;\n   flex-direction:column;\n   align-items:center;\n   justify-content:center;\n   h2{\n      font-size:clamp(4rem,5rem,5vw);\n      font-weight:500;\n      color:var(--hero-title-clr);\n   }\n   p{\n      font-size:clamp(1.6rem,1.8rem,1.8vw);\n      color:var(--hero-caption-clr);\n      margin-top:1rem;\n   }\n"]))),V=(0,o.memo)((function(){var n=(0,o.useState)(!1),e=(0,s.Z)(n,2),r=e[0],t=e[1];return(0,o.useEffect)((function(){return(0,u.Z)(t,"coin_table")}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(K,{}),(0,f.jsx)(T,{heading:"Crypto-Currency's Prices by Market Cap",visible:r})]})}))},9233:function(n,e,r){r.d(e,{n_:function(){return o},XB:function(){return u}});var t=r(5861),c=r(7757),i=r.n(c),a=r(6713),s=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch((0,a.X7)(e));case 2:return n.next=4,n.sent.json();case 4:return n.next=6,n.sent;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();e.ZP=s;var o=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch((0,a.P9)(e));case 2:return n.next=4,n.sent.json();case 4:return n.next=6,n.sent;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e,r,t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch((0,a.XW)(e,r,t));case 2:return n.next=4,n.sent.json();case 4:return n.next=6,n.sent;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}()},3336:function(n,e){e.Z=function(n,e){var r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(n(!0),r.unobserve(window[e]))}))}),{root:null,rootMargin:"0px",threshold:.5});r.observe(window[e])}}}]);
//# sourceMappingURL=500.fb72d537.chunk.js.map