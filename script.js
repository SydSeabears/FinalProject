var nav=document.body.querySelector(".nav");
var display=document.body.querySelector(".display");
var text=document.body.querySelector(".text");
var number =document.body.querySelector(".number");

var list=[];
var pages = [
  {
    name:"Grade View",
    content:"Grades"
  },
  {
    name:"Add Grade",
    content:"Submit Grade"
  }
  ];

function login(){
  var valEle=document.body.querySelector(".valMess");
  var user=document.body.querySelector(".username").value;
  var pass=document.body.querySelector(".password").value;
  if(user==="cool" && pass=== "password"){
    for(var i=0; i<pages.length; i++){
      createPage(pages[i]);
    }
    contentWrite(pages[0].content, "Grades");
    document.body.querySelector(".username").style.visibilty="hidden";
    document.body.querySelector(".password").style.visibilty="hidden";
    document.body.querySelector(".login").style.visibilty="hidden";
  }else if (user!== "cool" && pass!=="password"){
    valEle.innerHTML="You didn't enter anything valid.";
  }else if (user!== "cool" && pass==="password"){
    valEle.innerHTML="You didn't enter a valid username.";
  }else if (user=== "cool" && pass!=="password"){
    valEle.innerHTML="You didn't enter a valid password.";
  }
}
document.body.querySelector(".login").addEventListener("click",function(){
  login();
});

function createPage(pg){
  var bttn=document.createElement("button");
  bttn.addEventListener("click",function(){
    contentWrite(pg.content, pg.name);
  });
  bttn.innerHTML=pg.name;
  nav.appendChild(bttn);
}
function GViewPage(){
  display.innerHTML="Grades";
  text.style.display="none";
  number.style.display="none";
  document.body.querySelector(".Submit").style.display="none";
  document.body.querySelector(".login").style.display="hidden";
}
function AddGPage(){
  display.innerHTML="";
  text.style.display="";
  number.style.display="";
  document.body.querySelector(".Submit").style.display="";
}
function contentWrite(wd,pg){
   if(wd==="Grades"){
    GViewPage();
  }else{
    AddGPage();
  }
}

function rndrItems(){
  text.style.display="none";
  number.style.display="none";
  document.body.querySelector(".Submit").style.display="none";
   document.body.querySelector(".display").innerHTML="";
  for (var i=0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

function Sbmt(){
  var text=document.body.querySelector(".text").value;
  var number=document.body.querySelector(".number").value;

  if(text.length!==0){
    list.push(text);
  }
  if(number.length!==0){
    list.push(number);
  }
    
  rndrItems();
}
  Sbmt();