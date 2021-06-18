(this["webpackJsonpsharjeelyunus.github.io"]=this["webpackJsonpsharjeelyunus.github.io"]||[]).push([[0],{107:function(e,s,t){},108:function(e,s,t){},116:function(e,s,t){},117:function(e,s,t){},118:function(e,s,t){},119:function(e,s,t){},120:function(e,s,t){},121:function(e,s,t){"use strict";t.r(s);var a=t(3),c=t.n(a),r=t(17),i=t.n(r),l=(t(97),t(98),t(34)),n=t(14),o=t(24),j=t(25),b=t(28),d=t(27),h=t(81),p=t.n(h),m=t(76),O=t.n(m),x=t(80),g=t.n(x),u=t(44),f=(t(99),t(63));t(104),t(105);f.a.initializeApp({apiKey:"AIzaSyDom6-HevSkTp6ytOU_1a3Tsn2oJfH_htA",authDomain:"sharjeel-portfolio.firebaseapp.com",databaseURL:"https://sharjeel-portfolio-default-rtdb.firebaseio.com",projectId:"sharjeel-portfolio",storageBucket:"sharjeel-portfolio.appspot.com",messagingSenderId:"157257454241",appId:"1:157257454241:web:a389005938833247d116e0",measurementId:"G-KCF5LL4YTK"}),f.a.firestore();var v=f.a,N=t(0),k=function(){var e=Object(a.useState)(""),s=Object(u.a)(e,2),t=s[0],c=s[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),l=i[0],n=i[1],o=Object(a.useState)(""),j=Object(u.a)(o,2),b=j[0],d=j[1],h=Object(a.useState)(!1),p=Object(u.a)(h,2),m=p[0],O=p[1];return Object(N.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),O(!0),v.firestore().collection("contacts").add({name:t,email:l,message:b}).then((function(){alert("Message has been Submitted \u270c"),O(!1)})).catch((function(e){alert(e.message),O(!1)})),c(""),n(""),d("")},children:[Object(N.jsxs)("div",{className:"form__data",children:[Object(N.jsxs)("div",{className:"form__info",children:[Object(N.jsx)("input",{type:"text",placeholder:"Name",value:t,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:function(e){return n(e.target.value)}})]}),Object(N.jsx)("textarea",{placeholder:"Message",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(N.jsx)("button",{type:"submit",style:{background:m?"#ccc":"rgba(21, 18, 37, 0.8)"},children:"Submit"})]})},w=(t(107),function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).callApi=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sharjeelyunus";fetch("https://dev.to/api/articles?username=".concat(e)).then((function(e){return e.json()})).then((function(e){a.setState({articles:e})}))},a.state={articles:[]},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.callApi(this.props.username)}},{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"container",children:this.state.articles.map((function(e){return Object(N.jsxs)("div",{className:"item",children:[Object(N.jsx)("a",{href:e.canonical_url,children:Object(N.jsx)("h1",{className:"heading",children:Object(N.jsx)("strong",{children:e.title})})}),e.cover_image?Object(N.jsx)("img",{src:e.cover_image,alt:""}):Object(N.jsx)("div",{className:"description",children:Object(N.jsx)("h2",{children:e.description})})]})}))})})}}]),t}(c.a.Component)),_=(t(108),function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"LandingPage",children:[Object(N.jsxs)("div",{id:"home",className:"profile",children:[Object(N.jsx)("img",{className:"profile__pic",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/sharjeel-cover.png?alt=media&token=52e2228a-e5e5-4aa3-b87c-afedd11f1ea3",alt:"Sharjeel Yunus | Web Developer & Graphic Designer",title:"Sharjeel Yunus | Web Developer & Graphic Designer"}),Object(N.jsxs)("div",{className:"header__info",children:[Object(N.jsx)("div",{children:Object(N.jsx)("b",{children:Object(N.jsx)("span",{className:"hello",children:"Hello.\ud83d\udc4b"})})}),Object(N.jsxs)("div",{className:"intro__card",children:[Object(N.jsx)("span",{className:"comment",children:"// Self-Introduction"})," ",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"card__title",children:"Name"}),Object(N.jsxs)("span",{className:"yellow",children:["\xa0","{"]})," ",Object(N.jsx)("br",{}),"\xa0 FirstName: ",Object(N.jsx)("span",{className:"blue",children:"Sharjeel;"})," ",Object(N.jsx)("br",{}),"\xa0 LastName: ",Object(N.jsx)("span",{className:"blue",children:"Yunus;"})," ",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"yellow",children:"}"})]}),Object(N.jsx)("img",{src:"https://readme-typing-svg.herokuapp.com?color=FFFFFF&lines=Full-stack+Web+and+App+Developer;Self-taught+Designer;Always+Learning+new+techonologies",alt:""}),Object(N.jsxs)("div",{className:"intro__card",children:[Object(N.jsx)("span",{className:"card__title",children:"What I Do?"}),Object(N.jsxs)("span",{className:"yellow",children:["\xa0","{"]})," ",Object(N.jsx)("br",{}),"\xa0 Profession: ",Object(N.jsx)("span",{className:"blue",children:"Developer;"})," ",Object(N.jsx)("br",{}),"\xa0 Hobby: ",Object(N.jsx)("span",{className:"blue",children:"Designer;"})," ",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"yellow",children:"}"})]})]})]}),Object(N.jsx)("div",{id:"about",className:"about",children:Object(N.jsxs)("div",{className:"about__container",children:[Object(N.jsxs)("div",{className:"about__details",children:[Object(N.jsx)("h2",{title:"Who I am?",children:"About Me"}),Object(N.jsxs)("p",{id:"about-para",children:["Hi, I\u2019m Sharjeel Yunus, a\xa0",Object(N.jsx)("span",{title:"at Islamia University of Bahwalpur",children:"Computer Science Student."}),"\xa0 I have serious passion for modren looking websites with a little bit of animation."]}),Object(N.jsx)("div",{className:"technologies",children:"Technologies that I use:"}),Object(N.jsxs)("div",{className:"display__skills",children:[Object(N.jsxs)("ul",{className:"left__skills",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=700ef1d5-3433-4072-8310-85e6d86c183a",alt:"Reactjs"})," React"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fjs-logo.png?alt=media&token=679df788-0d75-4898-8fdc-062029340b9d",alt:"JS"})," JavaScript"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fhtml-logo.png?alt=media&token=afc1ed9c-0c1c-46a7-9fb3-d40edd76b2df",alt:"HTML"})," HTML / CSS"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2F5847f40ecef1014c0b5e488a.png?alt=media&token=23cc3649-079c-4662-b681-3a542064e727",alt:""})," Firebase"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6",alt:"Flutter"})," Flutter"]})]}),Object(N.jsxs)("ul",{className:"right__skills",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fnodejs.png?alt=media&token=2f4f2c45-0951-45e2-8665-cc2835f1a71c",alt:"NodeJS"})," Node.js / Express.js"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fmongodb.png?alt=media&token=5169fa2a-307b-47f8-9340-7b3077807b5d",alt:"MongoDB"})," MongoDB"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fbootstrap-5-1.svg?alt=media&token=19dcc7df-09f0-434c-ba35-7cca1cbf639d",alt:"Bootstrap"})," Bootstrap"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/illustrator.png?alt=media&token=6de3232e-ba22-4228-8383-6ae8b4270507",alt:"Illustrator"})," Illustrator"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/photoshop-cc.svg?alt=media&token=c5ea16d6-675f-43ba-9079-85957f2cc6f4",alt:"Photoshop"})," Photoshop"]})]})]}),Object(N.jsx)("div",{className:"button__certificates",children:Object(N.jsx)(l.b,{to:"Certificates",children:Object(N.jsxs)("button",{className:"button",children:[Object(N.jsx)(O.a,{}),"Certificates ",Object(N.jsx)(g.a,{})]})})})]}),Object(N.jsx)("div",{children:Object(N.jsx)("img",{className:"about__cover",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Sharjeel%20artwork.png?alt=media&token=8e3ba1cd-0e01-4387-9517-b92da563bd8a",alt:"cover"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("p",{className:"github__stats",children:[Object(N.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=sharjeelyunus&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1F222E",alt:""}),Object(N.jsx)("img",{src:"https://github-readme-streak-stats.herokuapp.com?user=sharjeelyunus&theme=gotham&hide_border=true&fire=C77800&ring=DD910B&background=1F222E",alt:""})]})}),Object(N.jsxs)("div",{id:"portfolio",className:"portfolio",children:[Object(N.jsx)("h2",{children:"Portfolio"}),Object(N.jsxs)("div",{className:"portfolio__web",children:[Object(N.jsxs)("div",{className:"graphic__design",children:[Object(N.jsx)("div",{className:"header__card",children:Object(N.jsx)(l.b,{to:"GraphicsDesign",children:Object(N.jsx)("h3",{children:"Graphic Design"})})}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"grid-wrapper",children:[Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FJohn%20Wick.png?alt=media&token=395e7b66-0428-460e-b089-ab917c351c7d",title:"John Wick",alt:"John Wick"})}),Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FMinal.png?alt=media&token=65426863-4f5c-44ac-9232-8ff2e6a25f8e",title:"Minal",alt:"Minal"})}),Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FShahveer%20J.png?alt=media&token=480a5f57-ec87-4675-b368-f647fdc4d13d",title:"Shahveer Jafary",alt:"Shahveer Jafary"})}),Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FBerlin.png?alt=media&token=4fdb080a-697b-4fef-90e4-8dba9c56cb29",title:"Berlin",alt:"Berlin"})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/GraphicsDesign",children:Object(N.jsx)("button",{className:"button",children:"Click here to see more Graphics"})})})]})]}),Object(N.jsxs)("div",{id:"web-dev",children:[Object(N.jsx)("div",{className:"header__card",children:Object(N.jsx)(l.b,{to:"/WebDev",children:Object(N.jsx)("h3",{children:Object(N.jsx)("code",{children:"web dev projects"})})})}),Object(N.jsx)("div",{className:"dev",children:Object(N.jsxs)("ul",{className:"grid-wrapper-developer",children:[Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("p",{children:"PEEK"}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fpeek.jpg?alt=media&token=593d2461-cc03-427d-aaf9-831eee428102",className:"image",alt:"PEEK"})}),Object(N.jsx)("div",{className:"middle",children:Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/peek-mern",target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2FMERN-logo.png?alt=media&token=aee49d64-950b-48dd-bf39-3846c33aaa78",alt:"MERN"}),Object(N.jsx)("p",{children:"MERN"})]})]}),Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("p",{children:"SMART BRAIN"}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fsmart-brain.jpg?alt=media&token=694bc634-806d-47d8-94e7-5a2c22823b72",className:"image",alt:"Smart Brain"})}),Object(N.jsx)("div",{className:"middle",children:Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/Smart-Brain",rel:"noreferrer",target:"_blank",children:"SOURCE CODE"})})}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=700ef1d5-3433-4072-8310-85e6d86c183a",alt:"react-logo"}),Object(N.jsx)("p",{children:"REACT"})]})]}),Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("p",{children:"Instagram Clone"}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Finstagram%20clone.jpg?alt=media&token=e2fe7895-75c4-4312-8bae-f5b532f4ff88",className:"image",alt:"PEEK"})}),Object(N.jsx)("div",{className:"middle",children:Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/instagram-clone",target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=700ef1d5-3433-4072-8310-85e6d86c183a",alt:"react-logo"}),Object(N.jsx)("p",{children:"REACT"})]})]})]})}),Object(N.jsx)("br",{}),Object(N.jsxs)("p",{className:"gihub__repos",children:[Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/twitter-clone",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/pin/?username=sharjeelyunus&repo=twitter-clone&theme=react&bg_color=1F222E&title_color=F85D7F&icon_color=F8D866&hide_border=true&show_icons=false",alt:""})}),Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/slack-clone",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/pin/?username=sharjeelyunus&repo=slack-clone&theme=react&bg_color=1F222E&title_color=F85D7F&icon_color=F8D866&hide_border=true&show_icons=false",alt:""})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/WebDev",children:Object(N.jsx)("button",{className:"button",children:"Click here to see more Web Apps"})})})]}),Object(N.jsxs)("div",{id:"app-dev",children:[Object(N.jsx)("div",{className:"header__card",children:Object(N.jsx)(l.b,{to:"/AppDev",children:Object(N.jsx)("h3",{children:Object(N.jsx)("code",{children:"app dev projects"})})})}),Object(N.jsx)("div",{className:"dev apps-dev",children:Object(N.jsxs)("ul",{className:"grid-wrapper-developer",children:[Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("p",{children:"FLASH CHAT"}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflash%20chat.png?alt=media&token=91b134f6-d2e0-47ab-af6e-6ae5850ba902",className:"image",alt:"Flash Chat"})}),Object(N.jsx)("div",{className:"middle",children:Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/flash-chat-flutter",target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6",alt:"Flutter Logo"}),Object(N.jsx)("p",{children:"FLUTTER"})]})]}),Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("p",{children:"COVID TRACKER"}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FCorona%20tracker.jpg?alt=media&token=9f40d54d-4a97-476b-b7c3-6fd92b981bfa",className:"image",alt:"Corona Tracker"})}),Object(N.jsx)("div",{className:"middle",children:Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/covid19_tracker",target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6",alt:"Flutter Logo"}),Object(N.jsx)("p",{children:"FLUTTER"})]})]}),Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("p",{children:"BMI CALCULATOR"}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FBMI%20Calculator.jpg?alt=media&token=f8e2bae9-0c8d-4f06-96fa-fc21237aaf60",className:"image",alt:"BMI Calculator"})}),Object(N.jsx)("div",{className:"middle",children:Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/bmi-calculator-flutter",target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6",alt:"Flutter Logo"}),Object(N.jsx)("p",{children:"FLUTTER"})]})]})]})}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/AppDev",children:Object(N.jsx)("button",{className:"button",children:"Click here to see more Apps"})})})]})]}),Object(N.jsx)("div",{className:"github__contributionGraph",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus",children:Object(N.jsx)("img",{alt:"Sharjeel Yunus's Activity Graph",src:"https://activity-graph.herokuapp.com/graph?username=sharjeelyunus&bg_color=1F222E&color=ffffff&line=f08c2d&point=444040&area=true&hide_border=true"})})})]}),Object(N.jsx)("div",{id:"blogs",children:Object(N.jsxs)("div",{className:"blog-platforms",children:[Object(N.jsx)("h2",{children:"Blogs"}),Object(N.jsx)("div",{id:"flex",children:Object(N.jsxs)("div",{className:"grid-wrapper-blogs",children:[Object(N.jsx)("div",{id:"medium",children:Object(N.jsx)("a",{href:"https://medium.com/@sharjeelyunus",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("button",{className:"spin button",children:Object(N.jsx)("p",{children:"Read Blogs on MEDIUM"})})})}),Object(N.jsx)("div",{id:"dev",children:Object(N.jsx)("a",{href:"https://dev.to/sharjeelyunus",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("button",{className:"spin button",children:Object(N.jsx)("p",{children:"Read Blogs on DEV"})})})})]})})]})}),Object(N.jsx)(w,{}),Object(N.jsxs)("div",{id:"contact",children:[Object(N.jsx)("h2",{children:"Contact Me"}),Object(N.jsx)("div",{className:"contact",children:Object(N.jsx)("div",{className:"contact-box",children:Object(N.jsx)("div",{className:"box__contactInfo",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(k,{}),Object(N.jsx)("ul",{className:"info contact-box-items",children:Object(N.jsxs)("li",{className:"info-items",title:"Email",children:["Email me: \xa0",Object(N.jsx)(p.a,{}),Object(N.jsx)("a",{href:"mailto:sharjeel924@gmail.com",children:"sharjeel924@gmail.com"})]})})]})})})})]})]})}}]),t}(c.a.Component)),D=t(69),y=t(60),C=(t(116),function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={certificatesList:[],badgesList:[],GCPBadgesList:[]},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("Certificates-List").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({certificatesList:t})})),v.database().ref("Badges").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({badgesList:t})})),v.database().ref("GCP-Badges").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({GCPBadgesList:t})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"achievements",children:[Object(N.jsx)("div",{className:"certificates-page",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{id:"title-certificates",children:Object(N.jsx)("h1",{children:"Certifications"})}),Object(N.jsx)("div",{className:"certificates-list",children:Object(N.jsx)("ul",{className:"grid-wrapper-certificates",id:"certificates",children:this.state.certificatesList.map((function(e){return Object(N.jsxs)("li",{className:"box-c",children:[Object(N.jsx)(D.a,{icon:y.b})," \xa0",Object(N.jsx)("b",{children:e.courseName}),Object(N.jsx)("br",{})," ",Object(N.jsx)("em",{children:e.institute}),Object(N.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",title:"Credentials",children:Object(N.jsx)(D.a,{icon:y.a})})]})}))})})]})}),Object(N.jsxs)("div",{className:"badges",children:[Object(N.jsx)("h1",{children:"Badges"}),Object(N.jsx)("div",{className:"grid-wrapper-badges",id:"badges",children:Object(N.jsx)("div",{className:"badge",children:this.state.badgesList.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:e.img,alt:e.name,title:e.name}),Object(N.jsx)("p",{children:e.name})]})}))})})]}),Object(N.jsxs)("div",{className:"qwiklabs",children:[Object(N.jsx)("div",{className:"q-heading",children:Object(N.jsx)("h1",{children:"Qwiklabs - GCP"})}),Object(N.jsx)("div",{children:Object(N.jsxs)("p",{className:"q-description",children:["Qwiklabs provides real cloud environments that help developers and IT professionals learn cloud platforms and software. ",Object(N.jsx)("br",{}),"These are the Badges I got from Qwiklabs learning Google Cloud Platform (GCP) ",Object(N.jsx)("br",{}),Object(N.jsx)("a",{href:"https://www.qwiklabs.com/public_profiles/73e51438-ea6a-4ddf-808e-9f7f8f606296",target:"_blank",rel:"noreferrer",children:"Click here to see my Qwiklabs profile"})]})}),Object(N.jsx)("div",{className:"q-badges",children:Object(N.jsx)("div",{className:"grid-wrapper-qwiklabs",id:"badge_box",children:this.state.GCPBadgesList.map((function(e){return Object(N.jsxs)("div",{className:"box-q",children:[Object(N.jsx)("img",{src:e.img,alt:e.name,title:e.name}),Object(N.jsxs)("p",{children:[e.name," ",Object(N.jsx)("br",{})," ",Object(N.jsx)("span",{children:e.issueDate})]})]})}))})})]})]})}}]),t}(c.a.Component)),F=(t(117),function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={Portraits:[],gd_page:[]},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("Portraits").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({Portraits:t})})),v.database().ref("gd_page").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({gd_page:t})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"head g_head",children:[this.state.gd_page.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("header",{children:[Object(N.jsx)("h1",{children:e.pageTitle}),Object(N.jsxs)("p",{children:[e.description_l1,Object(N.jsx)("br",{}),e.description_l2,Object(N.jsx)("br",{}),e.skill1," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill2," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill3," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill4]})]}),Object(N.jsx)("br",{}),Object(N.jsx)("h2",{title:"Vector Arts",children:e.title}),Object(N.jsx)("p",{children:e.desc})]})})),Object(N.jsx)("div",{className:"grid-wrapper",children:this.state.Portraits.map((function(e){return Object(N.jsx)("div",{className:"box zone blue portrait",children:Object(N.jsx)("img",{src:e.imgUrl,title:e.title,alt:e.title})})}))})]})}}]),t}(c.a.Component)),S=(t(118),function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={web_page:[],WebDevLive:[],WebDev:[]},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("web_page").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({web_page:t})})),v.database().ref("WebDevLive").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({WebDevLive:t})})),v.database().ref("WebDev").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({WebDev:t})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[this.state.web_page.map((function(e){return Object(N.jsx)("div",{className:"webdev",children:Object(N.jsxs)("header",{className:"head",children:[Object(N.jsx)("h1",{children:e.pageTitle}),Object(N.jsxs)("p",{children:[e.description_l1,Object(N.jsx)("br",{}),e.description_l2,Object(N.jsx)("br",{}),e.skill1," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill2," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill3," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill4," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill5]})]})})})),Object(N.jsxs)("ul",{className:"grid-wrapper-dev",id:"web-dev",children:[this.state.WebDevLive.map((function(e){return Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("div",{className:"live",children:Object(N.jsx)("a",{href:e.live,target:"_blank",rel:"noreferrer",children:Object(N.jsx)("img",{src:e.liveSvg,alt:""})})}),Object(N.jsx)("div",{className:"bar",children:Object(N.jsx)("p",{children:e.name})}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:e.webImg,className:"image",alt:""})}),Object(N.jsxs)("div",{className:"middle",children:[Object(N.jsx)("p",{children:e.webDesc}),Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:e.sourceCode,target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})]}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:e.devLangImg,alt:""}),Object(N.jsx)("p",{children:e.devLang})]})]})})),this.state.WebDev.map((function(e){return Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("div",{className:"bar",children:Object(N.jsx)("p",{children:e.name})}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:e.webImg,className:"image",alt:""})}),Object(N.jsxs)("div",{className:"middle",children:[Object(N.jsx)("p",{children:e.webDesc}),Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:e.sourceCode,target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})]}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:e.devLangImg,alt:""}),Object(N.jsx)("p",{children:e.devLang})]})]})}))]})]})}}]),t}(c.a.Component)),E=function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={AppDevelopment:[],app_page:[]},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("AppDevelopment").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({AppDevelopment:t})})),v.database().ref("app_page").on("value",(function(s){var t=[];s.forEach((function(e){t.push(e.val())})),e.setState({app_page:t})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[this.state.app_page.map((function(e){return Object(N.jsx)("div",{className:"head g_head",children:Object(N.jsxs)("header",{children:[Object(N.jsx)("h1",{children:e.pageTitle}),Object(N.jsxs)("p",{children:[e.description_l1,Object(N.jsx)("br",{}),e.description_l2,Object(N.jsx)("br",{}),e.skill1," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill2," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill3]})]})})})),Object(N.jsx)("ul",{className:"grid-wrapper-dev",id:"app-dev",children:this.state.AppDevelopment.map((function(e){return Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("div",{className:"bar",children:Object(N.jsx)("p",{children:e.appName})}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:e.appImg,className:"image",alt:""})}),Object(N.jsxs)("div",{className:"middle",children:[Object(N.jsx)("p",{children:e.appDesc}),Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:e.sourceCode,target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})]}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:e.TechImg,alt:""}),Object(N.jsx)("p",{children:e.Technology})]})]})}))})]})}}]),t}(c.a.Component);var L=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(l.a,{children:Object(N.jsxs)(n.d,{children:[Object(N.jsx)(n.b,{path:"/",exact:!0,children:Object(N.jsx)(_,{})}),Object(N.jsx)(n.b,{path:"/Certificates",exact:!0,children:Object(N.jsx)(C,{})}),Object(N.jsx)(n.b,{path:"/GraphicsDesign",exact:!0,children:Object(N.jsx)(F,{})}),Object(N.jsx)(n.b,{path:"/WebDev",children:Object(N.jsx)(S,{})}),Object(N.jsx)(n.b,{path:"/AppDev",children:Object(N.jsx)(E,{})}),Object(N.jsx)(n.a,{to:"/"})]})})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,158)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,r=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},T=t(149),W=t(151),I=t(152),B=t(153),R=t(156),M=t(157),G=t(154),P=t(82),z=t.n(P),U=t(83),J=t.n(U),H=t(84),K=t.n(H),Y=t(85),q=t.n(Y),Q=t(86),V=t.n(Q);t(119);var X=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)("ul",{className:"social-icon",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.facebook.com/aslisharjeel",target:"_blank",title:"Like me on Facebook",rel:"noreferrer",children:Object(N.jsx)(z.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.instagram.com/sharjeel_arts/",target:"_blank",rel:"noreferrer",title:"Follow me on Instagram",children:Object(N.jsx)(J.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://twitter.com/sharjeelyunus",target:"_blank",rel:"noreferrer",title:"Follow me on Twitter",children:Object(N.jsx)(K.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus",target:"_blank",rel:"noreferrer",title:"Follow me on GitHub",children:Object(N.jsx)(q.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.linkedin.com/in/sharjeel-yunus",target:"_blank",rel:"noreferrer",title:"Connect with me on LinkedIn",children:Object(N.jsx)(V.a,{})})})]})})},Z=t(87),$=t(155),ee=t(150),se=(t(120),Object(T.a)({list:{width:250},sidebarLinks:{display:"flex",flexDirection:"column",margin:"20px",fontSize:"18px"},sidebarLinksTag:{color:"white",textDecoration:"none",lineHeight:1.8}})),te=function(){var e,s=se(),t=Object(a.useState)({right:!1}),r=Object(u.a)(t,2),i=r[0],l=r[1],n=function(e,s){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(Object(Z.a)({},e,s))}};return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)(R.a,{edge:"start","aria-label":"menu",onClick:n("right",!0),children:Object(N.jsx)(ee.a,{fontSize:"large",style:{color:"rgba(255, 255, 255, 0.5)"}})}),Object(N.jsx)($.a,{anchor:"right",open:i.right,onOpen:n("right",!0),onClose:n("right",!1),children:(e="right",Object(N.jsxs)("div",{className:s.list,role:"presentation",onClick:n(e,!1),onKeyDown:n(e,!1),children:[Object(N.jsxs)("div",{className:s.sidebarLinks,children:[Object(N.jsx)("a",{className:s.sidebarLinksTag,href:"https://www.sharjeelyunus.me/Certificates",children:"Certificates"}),Object(N.jsx)("a",{className:s.sidebarLinksTag,href:"https://www.sharjeelyunus.me/GraphicsDesign",children:"Graphics Design"}),Object(N.jsx)("a",{className:s.sidebarLinksTag,href:"https://www.sharjeelyunus.me/WebDev",children:"Web Dev Projects"}),Object(N.jsx)("a",{className:s.sidebarLinksTag,href:"https://www.sharjeelyunus.me/AppDev",children:"App Dev Projects"}),Object(N.jsx)("a",{className:s.sidebarLinksTag,href:"https://dev.to/sharjeelyunus",children:"Read Blogs on DEV"}),Object(N.jsx)("a",{className:s.sidebarLinksTag,href:"https://medium.com/@sharjeelyunus",children:"Read Blogs on Medium"})]}),Object(N.jsx)(X,{})]}))})]})},ae=Object(T.a)({navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navbar:{backgroundColor:"#141123"}}),ce=function(){var e=ae();return Object(N.jsx)(W.a,{position:"fixed",className:e.navbar,children:Object(N.jsx)(I.a,{children:Object(N.jsxs)(B.a,{maxWidth:"md",className:e.navbarDisplayFlex,children:[Object(N.jsx)("a",{href:"https://www.sharjeelyunus.me/",children:Object(N.jsx)(R.a,{edge:"start",color:"inherit","aria-label":"home",children:Object(N.jsx)(G.a,{fontSize:"large"})})}),Object(N.jsx)(M.a,{smDown:!0,children:Object(N.jsx)(X,{})}),Object(N.jsx)(M.a,{mdUp:!0,children:Object(N.jsx)(te,{})})]})})})},re=Object(T.a)({footer:{padding:"10px 0px",opacity:"0.7",color:"#e7e7e8",marginTop:"90px",textAlign:"center"}});var ie=function(){var e=re();return Object(N.jsx)("div",{children:Object(N.jsx)("footer",{className:e.footer,children:Object(N.jsxs)("p",{children:[(new Date).getFullYear(),"\xa9 Sharjeel Yunus"]})})})};i.a.render(Object(N.jsxs)(c.a.StrictMode,{children:[Object(N.jsx)(ce,{}),Object(N.jsx)(L,{}),Object(N.jsx)(ie,{})]}),document.getElementById("root")),A()},97:function(e,s,t){},98:function(e,s,t){},99:function(e,s,t){}},[[121,1,2]]]);
//# sourceMappingURL=main.ae05deeb.chunk.js.map