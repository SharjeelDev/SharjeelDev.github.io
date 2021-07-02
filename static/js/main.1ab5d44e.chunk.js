(this["webpackJsonpsharjeelyunus.github.io"]=this["webpackJsonpsharjeelyunus.github.io"]||[]).push([[0],{107:function(e,t,s){},108:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s.n(a),r=s(17),i=s.n(r),l=(s(97),s(98),s(34)),n=s(14),o=s(24),j=s(25),b=s(28),d=s(27),h=s(81),p=s.n(h),m=s(76),u=s.n(m),O=s(80),x=s.n(O),g=s(44),f=(s(99),s(63));s(104),s(105);f.a.initializeApp({apiKey:"AIzaSyDom6-HevSkTp6ytOU_1a3Tsn2oJfH_htA",authDomain:"sharjeel-portfolio.firebaseapp.com",databaseURL:"https://sharjeel-portfolio-default-rtdb.firebaseio.com",projectId:"sharjeel-portfolio",storageBucket:"sharjeel-portfolio.appspot.com",messagingSenderId:"157257454241",appId:"1:157257454241:web:a389005938833247d116e0",measurementId:"G-KCF5LL4YTK"}),f.a.firestore();var v=f.a,N=s(1),k=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),i=Object(g.a)(r,2),l=i[0],n=i[1],o=Object(a.useState)(""),j=Object(g.a)(o,2),b=j[0],d=j[1],h=Object(a.useState)(!1),p=Object(g.a)(h,2),m=p[0],u=p[1];return Object(N.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),u(!0),v.firestore().collection("contacts").add({name:s,email:l,message:b}).then((function(){alert("Message has been Submitted \u270c"),u(!1)})).catch((function(e){alert(e.message),u(!1)})),c(""),n(""),d("")},children:[Object(N.jsxs)("div",{className:"form__data",children:[Object(N.jsxs)("div",{className:"form__info",children:[Object(N.jsx)("input",{type:"text",placeholder:"Name",value:s,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:function(e){return n(e.target.value)}})]}),Object(N.jsx)("textarea",{placeholder:"Message",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(N.jsx)("button",{type:"submit",style:{background:m?"#ccc":"rgba(21, 18, 37, 0.8)"},children:"Submit"})]})},w=(s(107),function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).callApi=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sharjeelyunus";fetch("https://dev.to/api/articles?username=".concat(e)).then((function(e){return e.json()})).then((function(e){a.setState({articles:e})}))},a.state={articles:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.callApi(this.props.username)}},{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"container",children:this.state.articles.map((function(e){return Object(N.jsxs)("div",{className:"item",children:[Object(N.jsx)("a",{href:e.canonical_url,children:Object(N.jsx)("h1",{className:"heading",children:Object(N.jsx)("strong",{children:e.title})})}),e.cover_image?Object(N.jsx)("img",{src:e.cover_image,alt:""}):Object(N.jsx)("div",{className:"description",children:Object(N.jsx)("h2",{children:e.description})})]})}))})})}}]),s}(c.a.Component)),_=(s(108),function(e){var t=e.appName,s=e.live,a=e.liveSvg,c=e.devLang,r=e.devLangImg,i=e.sourceCode,l=e.webDesc,n=e.webImg;return Object(N.jsxs)("li",{className:"box-web zone-web",children:[Object(N.jsx)("div",{className:"live",children:Object(N.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(N.jsx)("img",{src:a,alt:""})})}),Object(N.jsx)("p",{children:t}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("img",{src:n,className:"image",alt:t})}),Object(N.jsxs)("div",{className:"middle",children:[Object(N.jsx)("p",{children:l}),Object(N.jsx)("div",{className:"text",children:Object(N.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"SOURCE CODE"})})]}),Object(N.jsxs)("div",{className:"dev-language",children:[Object(N.jsx)("img",{src:r,alt:c}),Object(N.jsx)("p",{children:c})]})]})}),D=function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={WebFeatured:[],AppFeatured:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("WebFeatured").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({WebFeatured:s})})),v.database().ref("AppFeatured").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({AppFeatured:s})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"LandingPage",children:[Object(N.jsxs)("div",{id:"home",className:"profile",children:[Object(N.jsx)("img",{className:"profile__pic",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/sharjeel-cover.png?alt=media&token=52e2228a-e5e5-4aa3-b87c-afedd11f1ea3",alt:"Sharjeel Yunus | Web Developer & Graphic Designer",title:"Sharjeel Yunus | Web Developer & Graphic Designer"}),Object(N.jsxs)("div",{className:"header__info",children:[Object(N.jsx)("div",{children:Object(N.jsx)("b",{children:Object(N.jsx)("span",{className:"hello",children:"Hello.\ud83d\udc4b"})})}),Object(N.jsxs)("div",{className:"intro__card",children:[Object(N.jsx)("span",{className:"comment",children:"// Self-Introduction"})," ",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"card__title",children:"Name"}),Object(N.jsxs)("span",{className:"yellow",children:["\xa0","{"]})," ",Object(N.jsx)("br",{}),"\xa0 FirstName: ",Object(N.jsx)("span",{className:"blue",children:"Sharjeel;"})," ",Object(N.jsx)("br",{}),"\xa0 LastName: ",Object(N.jsx)("span",{className:"blue",children:"Yunus;"})," ",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"yellow",children:"}"})]}),Object(N.jsx)("img",{src:"https://readme-typing-svg.herokuapp.com?color=FFFFFF&lines=Full-stack+Web+and+App+Developer;Self-taught+Designer;Always+Learning+new+techonologies",alt:""}),Object(N.jsxs)("div",{className:"intro__card",children:[Object(N.jsx)("span",{className:"card__title",children:"What I Do?"}),Object(N.jsxs)("span",{className:"yellow",children:["\xa0","{"]})," ",Object(N.jsx)("br",{}),"\xa0 Profession: ",Object(N.jsx)("span",{className:"blue",children:"Developer;"})," ",Object(N.jsx)("br",{}),"\xa0 Hobby: ",Object(N.jsx)("span",{className:"blue",children:"Designer;"})," ",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"yellow",children:"}"})]})]})]}),Object(N.jsx)("div",{id:"about",className:"about",children:Object(N.jsxs)("div",{className:"about__container",children:[Object(N.jsxs)("div",{className:"about__details",children:[Object(N.jsx)("h2",{title:"Who I am?",children:"About Me"}),Object(N.jsxs)("p",{id:"about-para",children:["Hi, I\u2019m Sharjeel Yunus, a\xa0",Object(N.jsx)("span",{title:"at Islamia University of Bahwalpur",children:"Computer Science Student."}),"\xa0 I have serious passion for modren looking websites with a little bit of animation."]}),Object(N.jsx)("div",{className:"technologies",children:"Technologies that I use:"}),Object(N.jsxs)("div",{className:"display__skills",children:[Object(N.jsxs)("ul",{className:"left__skills",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=700ef1d5-3433-4072-8310-85e6d86c183a",alt:"Reactjs"})," React"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fjs-logo.png?alt=media&token=679df788-0d75-4898-8fdc-062029340b9d",alt:"JS"})," JavaScript"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fhtml-logo.png?alt=media&token=afc1ed9c-0c1c-46a7-9fb3-d40edd76b2df",alt:"HTML"})," HTML / CSS"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2F5847f40ecef1014c0b5e488a.png?alt=media&token=23cc3649-079c-4662-b681-3a542064e727",alt:""})," Firebase"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6",alt:"Flutter"})," Flutter"]})]}),Object(N.jsxs)("ul",{className:"right__skills",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fnodejs.png?alt=media&token=2f4f2c45-0951-45e2-8665-cc2835f1a71c",alt:"NodeJS"})," Node.js / Express.js"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fmongodb.png?alt=media&token=5169fa2a-307b-47f8-9340-7b3077807b5d",alt:"MongoDB"})," MongoDB"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fbootstrap-5-1.svg?alt=media&token=19dcc7df-09f0-434c-ba35-7cca1cbf639d",alt:"Bootstrap"})," Bootstrap"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/illustrator.png?alt=media&token=6de3232e-ba22-4228-8383-6ae8b4270507",alt:"Illustrator"})," Illustrator"]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("img",{className:"skill",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/photoshop-cc.svg?alt=media&token=c5ea16d6-675f-43ba-9079-85957f2cc6f4",alt:"Photoshop"})," Photoshop"]})]})]}),Object(N.jsx)("div",{className:"button__certificates",children:Object(N.jsx)(l.b,{to:"Certificates",children:Object(N.jsxs)("button",{className:"button",children:[Object(N.jsx)(u.a,{}),"Certificates ",Object(N.jsx)(x.a,{})]})})})]}),Object(N.jsx)("div",{children:Object(N.jsx)("img",{className:"about__cover",src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Sharjeel%20artwork.png?alt=media&token=8e3ba1cd-0e01-4387-9517-b92da563bd8a",alt:"cover"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("p",{className:"github__stats",children:[Object(N.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=sharjeelyunus&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1F222E",alt:""}),Object(N.jsx)("img",{src:"https://github-readme-streak-stats.herokuapp.com?user=sharjeelyunus&theme=gotham&hide_border=true&fire=C77800&ring=DD910B&background=1F222E",alt:""})]})}),Object(N.jsxs)("div",{id:"portfolio",className:"portfolio",children:[Object(N.jsx)("h2",{children:"Portfolio"}),Object(N.jsxs)("div",{className:"portfolio__web",children:[Object(N.jsxs)("div",{id:"web-dev",children:[Object(N.jsx)("div",{className:"header__card",children:Object(N.jsx)(l.b,{to:"/WebDev",children:Object(N.jsx)("h3",{children:Object(N.jsx)("code",{children:"web dev projects"})})})}),Object(N.jsx)("div",{className:"dev",children:Object(N.jsx)("ul",{className:"grid-wrapper-developer",children:this.state.WebFeatured.map((function(e){return Object(N.jsx)(_,{appName:e.name,live:e.live,liveSvg:e.liveSvg,devLang:e.devLang,devLangImg:e.devLangImg,sourceCode:e.sourceCode,webDesc:e.webDesc,webImg:e.webImg})}))})}),Object(N.jsx)("br",{}),Object(N.jsxs)("p",{className:"gihub__repos",children:[Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/twitter-clone",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/pin/?username=sharjeelyunus&repo=twitter-clone&theme=react&bg_color=1F222E&title_color=F85D7F&icon_color=F8D866&hide_border=true&show_icons=false",alt:""})}),Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus/slack-clone",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/pin/?username=sharjeelyunus&repo=slack-clone&theme=react&bg_color=1F222E&title_color=F85D7F&icon_color=F8D866&hide_border=true&show_icons=false",alt:""})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/WebDev",children:Object(N.jsx)("button",{className:"button",children:"Click here to see more Web Apps"})})})]}),Object(N.jsxs)("div",{id:"app-dev",children:[Object(N.jsx)("div",{className:"header__card",children:Object(N.jsx)(l.b,{to:"/AppDev",children:Object(N.jsx)("h3",{children:Object(N.jsx)("code",{children:"app dev projects"})})})}),Object(N.jsx)("div",{className:"dev apps-dev",children:Object(N.jsx)("ul",{className:"grid-wrapper-developer",children:this.state.AppFeatured.map((function(e){return Object(N.jsx)(_,{appName:e.appName,devLang:e.Technology,devLangImg:e.TechImg,sourceCode:e.sourceCode,webDesc:e.appDesc,webImg:e.appImg})}))})}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/AppDev",children:Object(N.jsx)("button",{className:"button",children:"Click here to see more Apps"})})})]}),Object(N.jsxs)("div",{className:"graphic__design",children:[Object(N.jsx)("div",{className:"header__card",children:Object(N.jsx)(l.b,{to:"GraphicsDesign",children:Object(N.jsx)("h3",{children:"Graphic Design"})})}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"grid-wrapper graphics_grid",children:[Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FJohn%20Wick.png?alt=media&token=395e7b66-0428-460e-b089-ab917c351c7d",title:"John Wick",alt:"John Wick"})}),Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FMinal.png?alt=media&token=65426863-4f5c-44ac-9232-8ff2e6a25f8e",title:"Minal",alt:"Minal"})}),Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FShahveer%20J.png?alt=media&token=480a5f57-ec87-4675-b368-f647fdc4d13d",title:"Shahveer Jafary",alt:"Shahveer Jafary"})}),Object(N.jsx)("div",{className:"box zone",children:Object(N.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FBerlin.png?alt=media&token=4fdb080a-697b-4fef-90e4-8dba9c56cb29",title:"Berlin",alt:"Berlin"})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/GraphicsDesign",children:Object(N.jsx)("button",{className:"button",children:"Click here to see more Graphics"})})})]})]})]}),Object(N.jsx)("div",{className:"github__contributionGraph",children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus",children:Object(N.jsx)("img",{alt:"Sharjeel Yunus's Activity Graph",src:"https://activity-graph.herokuapp.com/graph?username=sharjeelyunus&bg_color=1F222E&color=ffffff&line=f08c2d&point=444040&area=true&hide_border=true"})})})]}),Object(N.jsx)("div",{id:"blogs",children:Object(N.jsxs)("div",{className:"blog-platforms",children:[Object(N.jsx)("h2",{children:"Blogs"}),Object(N.jsx)("div",{id:"flex",children:Object(N.jsxs)("div",{className:"grid-wrapper-blogs",children:[Object(N.jsx)("div",{id:"medium",children:Object(N.jsx)("a",{href:"https://medium.com/@sharjeelyunus",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("button",{className:"spin button",children:Object(N.jsx)("p",{children:"Read Blogs on MEDIUM"})})})}),Object(N.jsx)("div",{id:"dev",children:Object(N.jsx)("a",{href:"https://dev.to/sharjeelyunus",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("button",{className:"spin button",children:Object(N.jsx)("p",{children:"Read Blogs on DEV"})})})})]})})]})}),Object(N.jsx)(w,{}),Object(N.jsxs)("div",{id:"contact",children:[Object(N.jsx)("h2",{children:"Contact Me"}),Object(N.jsx)("div",{className:"contact",children:Object(N.jsx)("div",{className:"contact-box",children:Object(N.jsx)("div",{className:"box__contactInfo",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(k,{}),Object(N.jsx)("ul",{className:"info contact-box-items",children:Object(N.jsxs)("li",{className:"info-items",title:"Email",children:["Email me: \xa0",Object(N.jsx)(p.a,{}),Object(N.jsx)("a",{href:"mailto:sharjeel924@gmail.com",children:"sharjeel924@gmail.com"})]})})]})})})})]})]})}}]),s}(c.a.Component),y=s(69),C=s(60),F=(s(116),function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={certificatesList:[],badgesList:[],GCPBadgesList:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("Certificates-List").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({certificatesList:s})})),v.database().ref("Badges").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({badgesList:s})})),v.database().ref("GCP-Badges").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({GCPBadgesList:s})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"achievements",children:[Object(N.jsx)("div",{className:"certificates-page",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{id:"title-certificates",children:Object(N.jsx)("h1",{children:"Certifications"})}),Object(N.jsx)("div",{className:"certificates-list",children:Object(N.jsx)("ul",{className:"grid-wrapper-certificates",id:"certificates",children:this.state.certificatesList.map((function(e){return Object(N.jsxs)("li",{className:"box-c",children:[Object(N.jsx)(y.a,{icon:C.b})," \xa0",Object(N.jsx)("b",{children:e.courseName}),Object(N.jsx)("br",{})," ",Object(N.jsx)("em",{children:e.institute}),Object(N.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",title:"Credentials",children:Object(N.jsx)(y.a,{icon:C.a})})]})}))})})]})}),Object(N.jsxs)("div",{className:"badges",children:[Object(N.jsx)("h1",{children:"Badges"}),Object(N.jsx)("div",{className:"grid-wrapper-badges",id:"badges",children:Object(N.jsx)("div",{className:"badge",children:this.state.badgesList.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:e.img,alt:e.name,title:e.name}),Object(N.jsx)("p",{children:e.name})]})}))})})]}),Object(N.jsxs)("div",{className:"qwiklabs",children:[Object(N.jsx)("div",{className:"q-heading",children:Object(N.jsx)("h1",{children:"Qwiklabs - GCP"})}),Object(N.jsx)("div",{children:Object(N.jsxs)("p",{className:"q-description",children:["Qwiklabs provides real cloud environments that help developers and IT professionals learn cloud platforms and software. ",Object(N.jsx)("br",{}),"These are the Badges I got from Qwiklabs learning Google Cloud Platform (GCP) ",Object(N.jsx)("br",{}),Object(N.jsx)("a",{href:"https://www.qwiklabs.com/public_profiles/73e51438-ea6a-4ddf-808e-9f7f8f606296",target:"_blank",rel:"noreferrer",children:"Click here to see my Qwiklabs profile"})]})}),Object(N.jsx)("div",{className:"q-badges",children:Object(N.jsx)("div",{className:"grid-wrapper-qwiklabs",id:"badge_box",children:this.state.GCPBadgesList.map((function(e){return Object(N.jsxs)("div",{className:"box-q",children:[Object(N.jsx)("img",{src:e.img,alt:e.name,title:e.name}),Object(N.jsxs)("p",{children:[e.name," ",Object(N.jsx)("br",{})," ",Object(N.jsx)("span",{children:e.issueDate})]})]})}))})})]})]})}}]),s}(c.a.Component)),S=(s(117),function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={Portraits:[],gd_page:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("Portraits").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({Portraits:s})})),v.database().ref("gd_page").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({gd_page:s})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"head g_head",children:[this.state.gd_page.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("header",{children:[Object(N.jsx)("h1",{children:e.pageTitle}),Object(N.jsxs)("p",{children:[e.description_l1,Object(N.jsx)("br",{}),e.description_l2,Object(N.jsx)("br",{}),e.skill1," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill2," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill3," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill4]})]}),Object(N.jsx)("br",{}),Object(N.jsx)("h2",{title:"Vector Arts",children:e.title}),Object(N.jsx)("p",{children:e.desc})]})})),Object(N.jsx)("div",{className:"grid-wrapper",children:this.state.Portraits.map((function(e){return Object(N.jsx)("div",{className:"box zone blue portrait",children:Object(N.jsx)("img",{src:e.imgUrl,title:e.title,alt:e.title})})}))})]})}}]),s}(c.a.Component)),L=(s(118),function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={web_page:[],WebDevLive:[],WebDev:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("web_page").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({web_page:s})})),v.database().ref("WebDevLive").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({WebDevLive:s})})),v.database().ref("WebDev").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({WebDev:s})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[this.state.web_page.map((function(e){return Object(N.jsx)("div",{className:"webdev",children:Object(N.jsxs)("header",{className:"head",children:[Object(N.jsx)("h1",{children:e.pageTitle}),Object(N.jsxs)("p",{children:[e.description_l1,Object(N.jsx)("br",{}),e.description_l2,Object(N.jsx)("br",{}),e.skill1," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill2," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill3," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill4," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill5]})]})})})),Object(N.jsxs)("ul",{className:"grid-wrapper-dev",id:"web-dev",children:[this.state.WebDevLive.map((function(e){return Object(N.jsx)(_,{appName:e.name,live:e.live,liveSvg:e.liveSvg,devLang:e.devLang,devLangImg:e.devLangImg,sourceCode:e.sourceCode,webDesc:e.webDesc,webImg:e.webImg})})),this.state.WebDev.map((function(e){return Object(N.jsx)(_,{appName:e.name,devLang:e.devLang,devLangImg:e.devLangImg,sourceCode:e.sourceCode,webDesc:e.webDesc,webImg:e.webImg})}))]})]})}}]),s}(c.a.Component)),I=function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={AppDevelopment:[],app_page:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.database().ref("AppDevelopment").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({AppDevelopment:s})})),v.database().ref("app_page").on("value",(function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.setState({app_page:s})}))}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[this.state.app_page.map((function(e){return Object(N.jsx)("div",{className:"head g_head",children:Object(N.jsxs)("header",{children:[Object(N.jsx)("h1",{children:e.pageTitle}),Object(N.jsxs)("p",{children:[e.description_l1,Object(N.jsx)("br",{}),e.description_l2,Object(N.jsx)("br",{}),e.skill1," ",Object(N.jsx)("span",{className:"yellow",children:"/"})," ",e.skill2," ",Object(N.jsx)("span",{className:"yellow",children:"x"})," ",e.skill3]})]})})})),Object(N.jsx)("ul",{className:"grid-wrapper-dev",id:"app-dev",children:this.state.AppDevelopment.map((function(e){return Object(N.jsx)(_,{appName:e.appName,devLang:e.Technology,devLangImg:e.TechImg,sourceCode:e.sourceCode,webDesc:e.appDesc,webImg:e.appImg})}))})]})}}]),s}(c.a.Component);var W=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(l.a,{children:Object(N.jsxs)(n.d,{children:[Object(N.jsx)(n.b,{path:"/",exact:!0,children:Object(N.jsx)(D,{})}),Object(N.jsx)(n.b,{path:"/Certificates",exact:!0,children:Object(N.jsx)(F,{})}),Object(N.jsx)(n.b,{path:"/GraphicsDesign",exact:!0,children:Object(N.jsx)(S,{})}),Object(N.jsx)(n.b,{path:"/WebDev",children:Object(N.jsx)(L,{})}),Object(N.jsx)(n.b,{path:"/AppDev",children:Object(N.jsx)(I,{})}),Object(N.jsx)(n.a,{to:"/"})]})})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,158)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),r(e),i(e)}))},E=s(149),T=s(151),B=s(152),G=s(153),M=s(156),P=s(157),J=s(154),z=s(82),H=s.n(z),R=s(83),Y=s.n(R),q=s(84),U=s.n(q),K=s(85),Q=s.n(K),V=s(86),X=s.n(V);s(119);var Z=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)("ul",{className:"social-icon",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.facebook.com/aslisharjeel",target:"_blank",title:"Like me on Facebook",rel:"noreferrer",children:Object(N.jsx)(H.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.instagram.com/sharjeel_arts/",target:"_blank",rel:"noreferrer",title:"Follow me on Instagram",children:Object(N.jsx)(Y.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://twitter.com/sharjeelyunus",target:"_blank",rel:"noreferrer",title:"Follow me on Twitter",children:Object(N.jsx)(U.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://github.com/sharjeelyunus",target:"_blank",rel:"noreferrer",title:"Follow me on GitHub",children:Object(N.jsx)(Q.a,{})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.linkedin.com/in/sharjeel-yunus",target:"_blank",rel:"noreferrer",title:"Connect with me on LinkedIn",children:Object(N.jsx)(X.a,{})})})]})})},$=s(87),ee=s(155),te=s(150),se=(s(120),Object(E.a)({list:{width:250},sidebarLinks:{display:"flex",flexDirection:"column",margin:"20px",fontSize:"18px"},sidebarLinksTag:{color:"white",textDecoration:"none",lineHeight:1.8}})),ae=function(){var e,t=se(),s=Object(a.useState)({right:!1}),r=Object(g.a)(s,2),i=r[0],l=r[1],n=function(e,t){return function(s){("keydown"!==s.type||"Tab"!==s.key&&"Shift"!==s.key)&&l(Object($.a)({},e,t))}};return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)(M.a,{edge:"start","aria-label":"menu",onClick:n("right",!0),children:Object(N.jsx)(te.a,{fontSize:"large",style:{color:"rgba(255, 255, 255, 0.5)"}})}),Object(N.jsx)(ee.a,{anchor:"right",open:i.right,onOpen:n("right",!0),onClose:n("right",!1),children:(e="right",Object(N.jsxs)("div",{className:t.list,role:"presentation",onClick:n(e,!1),onKeyDown:n(e,!1),children:[Object(N.jsxs)("div",{className:t.sidebarLinks,children:[Object(N.jsx)("a",{className:t.sidebarLinksTag,href:"https://www.sharjeelyunus.me/Certificates",children:"Certificates"}),Object(N.jsx)("a",{className:t.sidebarLinksTag,href:"https://www.sharjeelyunus.me/GraphicsDesign",children:"Graphics Design"}),Object(N.jsx)("a",{className:t.sidebarLinksTag,href:"https://www.sharjeelyunus.me/WebDev",children:"Web Dev Projects"}),Object(N.jsx)("a",{className:t.sidebarLinksTag,href:"https://www.sharjeelyunus.me/AppDev",children:"App Dev Projects"}),Object(N.jsx)("a",{className:t.sidebarLinksTag,href:"https://dev.to/sharjeelyunus",children:"Read Blogs on DEV"}),Object(N.jsx)("a",{className:t.sidebarLinksTag,href:"https://medium.com/@sharjeelyunus",children:"Read Blogs on Medium"})]}),Object(N.jsx)(Z,{})]}))})]})},ce=Object(E.a)({navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navbar:{backgroundColor:"#141123"}}),re=function(){var e=ce();return Object(N.jsx)(T.a,{position:"fixed",className:e.navbar,children:Object(N.jsx)(B.a,{children:Object(N.jsxs)(G.a,{maxWidth:"md",className:e.navbarDisplayFlex,children:[Object(N.jsx)("a",{href:"https://www.sharjeelyunus.me/",children:Object(N.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"home",children:Object(N.jsx)(J.a,{fontSize:"large"})})}),Object(N.jsx)(P.a,{smDown:!0,children:Object(N.jsx)(Z,{})}),Object(N.jsx)(P.a,{mdUp:!0,children:Object(N.jsx)(ae,{})})]})})})},ie=Object(E.a)({footer:{padding:"10px 0px",opacity:"0.7",color:"#e7e7e8",marginTop:"90px",textAlign:"center"}});var le=function(){var e=ie();return Object(N.jsx)("div",{children:Object(N.jsx)("footer",{className:e.footer,children:Object(N.jsxs)("p",{children:[(new Date).getFullYear(),"\xa9 Sharjeel Yunus"]})})})};i.a.render(Object(N.jsxs)(c.a.StrictMode,{children:[Object(N.jsx)(re,{}),Object(N.jsx)(W,{}),Object(N.jsx)(le,{})]}),document.getElementById("root")),A()},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.1ab5d44e.chunk.js.map