import{d,_ as u,o,c as s,b as e,n,f as i,g as l}from"./index-9b59ce11.js";const f=d({data(){return{Login:!0}}}),p={class:"container bg-darkBlue my-20 py-10"},b={class:"flex flex-col gap-5"},m={class:"text-white flex-col items-center sm:flex-row flex justify-center gap-5"},c=e("div",{class:"w-full h-[2px] sm:w-[2px] sm:h-10 bg-white"},null,-1),x={action:"",class:"sm:mt-0 mt-10 p-5 flex flex-col gap-2 items-center"},h=e("label",{for:"email",class:"text-white text-2xl"},"Email",-1),g=e("input",{required:"",class:"p-2 px-3 text-lg md:w-2/5 w-full",type:"email",name:"email",id:"email",placeholder:"Example@gmail.com"},null,-1),w=e("br",null,null,-1),_=e("label",{for:"password",class:"text-white text-2xl"},"Password",-1),y=e("input",{required:"",class:"p-2 px-3 text-lg md:w-2/5 w-full",type:"password",name:"password",id:"password",placeholder:"At least 8 characters"},null,-1),v={key:0},k={key:1,for:"name",class:"text-white text-2xl"},L={key:2,required:"",class:"p-2 px-3 text-lg md:w-2/5 w-full",type:"text",name:"name",id:"name",placeholder:"Enter your Name"},B=e("br",null,null,-1),C={key:3,for:"surename",class:"text-white text-2xl"},S={key:4,required:"",class:"p-2 px-3 text-lg md:w-2/5 w-full",type:"text",name:"surename",id:"surename",placeholder:"Enter your Surname"},$={key:5},E={class:"flex gap-5"};function N(t,r,q,V,P,j){return o(),s("div",p,[e("div",b,[e("div",m,[e("div",{onClick:r[0]||(r[0]=a=>t.Login=!0),class:n([{"before:w-full":t.Login==!0},"relative cursor-pointer p-1 text-xl before:content-[''] before:bg-white before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150"])},"Sign in",2),c,e("div",{onClick:r[1]||(r[1]=a=>t.Login=!1),class:n([{"before:w-full":t.Login==!1},"relative cursor-pointer p-1 text-xl before:content-[''] before:bg-white before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150"])},"Sign up",2)])]),e("form",x,[h,g,w,_,y,i(),t.Login?l("",!0):(o(),s("br",v)),t.Login?l("",!0):(o(),s("label",k,"Name")),t.Login?l("",!0):(o(),s("input",L)),B,t.Login?l("",!0):(o(),s("label",C,"Surename")),t.Login?l("",!0):(o(),s("input",S)),i(),t.Login?l("",!0):(o(),s("br",$)),e("div",E,[t.Login?(o(),s("button",{key:0,onClick:r[2]||(r[2]=()=>{}),type:"submit",class:n(" bg-mainBlue text-white border-solid border-2 border-white px-4 py-2 text-xl rounded-xl  hover:bg-white  hover:text-mainBlue transition delay-30")},"Sign In")):l("",!0),t.Login==!1?(o(),s("button",{key:1,onClick:r[3]||(r[3]=()=>{}),type:"submit",class:"bg-mainBlue text-white border-solid border-2 border-white px-4 py-2 text-xl rounded-xl hover:bg-white hover:text-mainBlue transition delay-30"},"Sign Up")):l("",!0)])])])}const A=u(f,[["render",N]]);export{A as default};
