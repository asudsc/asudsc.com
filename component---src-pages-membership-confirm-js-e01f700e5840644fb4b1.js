(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{516:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.2 270.4c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1-30.3-90 45.4-15.1c19.1-6.2 29.1-26.8 23-45.9-6.2-19-26.9-29.1-46-22.9l-45.4 15.1-15.7-47c-6.2-19-26.9-29.1-46-22.9-19.1 6.2-29.1 26.8-23 45.9l15.7 47-93.4 31.2-15.7-47c-6.2-19-26.9-29.1-46-22.9-19.1 6.2-29.1 26.8-23 45.9l15.7 47-45.3 15c-19.1 6.2-29.1 26.8-23 45.9 5 14.5 19.1 24 33.6 24.6 6.8 1 12-1.6 57.7-16.8l30.3 90L78 354.8c-19 6.2-29.1 26.9-23 45.9 5 14.5 19.1 24 33.6 24.6 6.8 1 12-1.6 57.7-16.8l15.7 47c5.9 16.9 24.7 29 46 22.9 19.1-6.2 29.1-26.8 23-45.9l-15.7-47 93.6-31.3 15.7 47c5.9 16.9 24.7 29 46 22.9 19.1-6.2 29.1-26.8 23-45.9l-15.7-47 45.4-15.1c19-6 29.1-26.7 22.9-45.7zm-254.1 47.2l-30.3-90.2 93.5-31.3 30.3 90.2-93.5 31.3z"}}]})(e)};r.displayName="FaSlackHash"},523:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));a(4),a(2),a(9);var n=a(1),r=a.n(n),l=a(515),c=a(535),o=a(538),i=a(514),s=a(516);var u=a(519),m=a(518),d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={loading:!0,error:!1,errorCode:"",success:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var d=n.prototype;return d.getUrlVars=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,a,n){e[a]=n}));return e},d.componentDidMount=function(){var e=this,t=this.getUrlVars().token;t?u.confirm(t).then((function(t){e.setState({success:!0,loading:!1})})).catch((function(t){"alreadyVerified"==t.toString()&&e.setState({errorCode:"alreadyVerified"}),e.setState({error:!0})})):this.setState({error:!0})},d.render=function(){return r.a.createElement(l.a,{showLogo:!0},r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(o.a,{pt:25},this.state.loading&&!this.state.error&&r.a.createElement("div",null,r.a.createElement(m,{isLoading:this.state.loading,width:80,height:80,strokeWidth:4}),r.a.createElement(o.a,{pt:5},r.a.createElement("h1",null,"Confirming your membership"))),this.state.error&&"alreadyVerified"==this.state.errorCode&&r.a.createElement("div",null,r.a.createElement("h1",null,"You're already verified."),r.a.createElement("br",null),r.a.createElement("p",null,"You don't need to confirm your membership again! Instead, get started by hopping on to our Slack."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("a",{href:"https://ananay.me/asudsc-slack"},r.a.createElement(i.a,{variant:"contained",theme:"blue",id:"slackbutton"},r.a.createElement(s.a,null),"   ","Join the Slack!")))),this.state.error&&"alreadyVerified"!=this.state.errorCode&&r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry, we couldn't confirm your membership!"),r.a.createElement("br",null),r.a.createElement("p",null,"Your confirmation link might be expired or invalid. Please get in touch with us at ",r.a.createElement("a",{href:"mailto:team@asudsc.com"},"team@asudsc.com")," or the Slack."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("a",{href:"https://asudsc.slack.com/signup"},r.a.createElement(i.a,{variant:"contained",theme:"blue",id:"slackbutton"},r.a.createElement(s.a,null),"   ","Join the Slack!")))),this.state.success&&r.a.createElement("div",{className:"wrap"},r.a.createElement("h1",null,"Thank you! Your membership has been confirmed."),r.a.createElement("br",null),r.a.createElement("p",null,"Please check your ASU email for more information, and click the button below to ",r.a.createElement("b",null,"sign up on our Slack"),". ",r.a.createElement("br",null)," We will also be sending you an invite to our information session to your ASU Email."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("a",{href:"https://asudsc.slack.com/signup"},r.a.createElement(i.a,{variant:"contained",theme:"blue",id:"slackbutton"},r.a.createElement(s.a,null),"   ","Join the Slack!")))))))},n}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-membership-confirm-js-e01f700e5840644fb4b1.js.map