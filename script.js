var btns = document.querySelectorAll(".key");
var device="";
var process=[];
var past = [];
var disans = false;
var  DIVISOR;
try{
    document.createEvent("TouchEvent");
    device="mobile"
    DIVISOR = 5;
}
catch(err){
    device="pc";
    DIVISOR=3;
}
document.addEventListener("keydown",(e)=>{
  if(e.key=="1"){
    document.querySelector(".onekey").click();
    ripple(document.querySelector(".onekey"),"no",true)
  }
  if(e.key=="2"){
    document.querySelector(".twokey").click();
    ripple(document.querySelector(".twokey"),"no",true)
  }
  if(e.key=="3"){
    document.querySelector(".threekey").click();
    ripple(document.querySelector(".threekey"),"no",true)
  }
  if(e.key=="4"){
    document.querySelector(".fourkey").click();
    ripple(document.querySelector(".fourkey"),"no",true)
  }
  if(e.key=="5"){
    document.querySelector(".fivekey").click();
    ripple(document.querySelector(".fivekey"),"no",true)
  }
  if(e.key=="6"){
    document.querySelector(".sixkey").click();
    ripple(document.querySelector(".sixkey"),"no",true)
  }
  if(e.key=="7"){
    document.querySelector(".sevenkey").click();
    ripple(document.querySelector(".sevenkey"),"no",true)
  }
  if(e.key=="8"){
    document.querySelector(".eightkey").click();
    ripple(document.querySelector(".eightkey"),"no",true)
  }
  if(e.key=="9"){
    document.querySelector(".ninekey").click();
    ripple(document.querySelector(".ninekey"),"no",true)
  }
  if(e.key=="0"){
    document.querySelector(".zerokey").click();
    ripple(document.querySelector(".zerokey"),"no",true)
  }
  if(e.key=="."){
    document.querySelector(".pointkey").click();
    ripple(document.querySelector(".pointkey"),"no",true)
  }
  if(e.key=="+"){
    document.querySelector(".pluskey").click();
    ripple(document.querySelector(".pluskey"),"no",true)
  }
  if(e.key=="-"){
    document.querySelector(".minuskey").click();
    ripple(document.querySelector(".minuskey"),"no",true)
  }
  if(e.key=="*"){
    document.querySelector(".timeskey").click();
    ripple(document.querySelector(".timeskey"),"no",true)
  }
  if(e.key=="/"){
    document.querySelector(".divkey").click();
    ripple(document.querySelector(".divkey"),"no",true)
  }
  if(e.key=="Backspace"){
    document.querySelector(".bkkey").click();
    ripple(document.querySelector(".bkkey"),"no",true)
  }
  if(e.key=="Delete"){
    document.querySelector(".ackey").click();
    ripple(document.querySelector(".ackey"),"no",true)
    return false;
  }
  if(e.key=="c" && e.ctrlKey){
    document.querySelector(".ackey").click();
    ripple(document.querySelector(".ackey"),"no",true)
    return false;
  }
  if(e.key=="Enter" || e.key=="="){
    document.querySelector(".eqkey").click();
    ripple(document.querySelector(".eqkey"),"no",true)
  }
  if(e.key=="(" || e.key==")"){
    document.querySelector(".brkey").click();
    ripple(document.querySelector(".brkey"),"no",true)
  }
})
function ripple(el,e,type){
  var key = type;
    var sp = document.createElement("span");
    sp.classList.add("ripple");
    if(key){
    sp.style.left=50+"%";
    sp.style.top="50"+"%";
    }
    else{
    sp.style.left=device=="pc"?e.clientX-((document.querySelector(".calculator_body").offsetLeft-(document.querySelector(".calculator_body").offsetWidth/2))+el.offsetLeft)+"px":e.x-(document.querySelector(".calculator_body").offsetLeft-(document.querySelector(".calculator_body").offsetWidth/2))+el.offsetLeft+"px";
    sp.style.top=device=="pc"?e.clientY-((document.querySelector(".calculator_body").offsetTop-(document.querySelector(".calculator_body").offsetHeight/2))+el.offsetTop)+"px":e.y-(document.querySelector(".calculator_body").offsetTop-(document.querySelector(".calculator_body").offsetHeight/2))+el.offsetTop+"px";
    }
    // console.log((document.querySelector(".calculator_body").offsetLeft-(document.querySelector(".calculator_body").offsetWidth/2))+el.offsetLeft)
    el.appendChild(sp);
    sp.addEventListener("animationend",()=>{
        sp.remove();
    })
}
dragElement(document.querySelector(".calculator_body"))
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


  function bracketValidator(expression) {
    let count = 0;
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == '('){
            count++
            }
        else if(expression[i] == ')'){
            if(count == 0){
                return [false, count];
            }
            else {
                count--;
              }
    }
    }

    if(count == 0){
        return [true, count];
     }

    return [false, count];
}


function addnum(el){
  var num = el.dataset.value;
  if(num=="+" || num=="-" || num=="/" || num=="*" || num=="(" || num==")"){
    if(process[process.length-1] == "+" || process[process.length-1] == "-" || process[process.length-1] == "/" || process[process.length-1] == "*"){
      process[process.length-1]=num;
    }
    else{
      if(process.length<1)return;
      else if(process[process.length-1]=="(")return;
      process.push(num);
    }
  }
  else{
    if(process.length<1){
      process.push(num);
    }
    else{
      if(process[process.length-1] == "+" || process[process.length-1] == "-" || process[process.length-1] == "/" || process[process.length-1] == "*" || process[process.length-1] == "(" || process[process.length-1] == ")"){
        if(process[process.length-1] == ")"){
          process.push("*")
          process.push(num)
        }
        else{
          process.push(num)
        }
      }
      else{
        if(process[process.length-1] != "0"){
          process[process.length-1]+=num;
        }
        else{
          process[process.length-1]=num;
        }
      }
    }
  }
  writeOnScreen()
}


function writeOnScreen(){
  var screen = document.querySelector(".screen");
  screen.innerHTML="";
  for(i=0;i<process.length;i++){
    if(process[i] == "+" || process[i] == "-" || process[i] == "/" || process[i] == "*" || process[i] == "(" || process[i] == ")"){
      var op = process[i];
      if(op=="+"){
        op="&plus;";
      }
      else if(op=="-"){
        op="&minus;"
      }
      else if(op=="*"){
        op="&times;"
      }
      else if(op=="/"){
        op="&div;"
      }
      screen.innerHTML+=`<span class="operations">${op}</span>`;
    }
    else{
      screen.innerHTML+=`<span class="num">${process[i]}</span>`;
    }
  }
  try{
    var tot = eval(process.join(""));
    document.querySelector(".subscreen").innerHTML=tot;
    document.querySelector(".subscreen").scrollTo(0,0)
    if(process.length<1)allClear();
  }
  catch(err){
    document.querySelector(".subscreen").innerHTML="";
  }
}
function addpoint(){
  if(process[process.length-1] == "+" || process[process.length-1] == "-" || process[process.length-1] == "/" || process[process.length-1] == "*" || process[process.length-1] == "(" || process[process.length-1] == ")" ){
    process.push("0.");
  }
  else{
    if(process[process.length-1]){
      if(process[process.length-1].toString().includes("."))return;
      process[process.length-1]+=".";
    }
    else{
      process.push("0.");
    }
  }
  writeOnScreen();
}

function switchsign(){
    if(process[process.length-2] == "+"){
        process[process.length-2] = "-"
    } else if(process[process.length-2] == "-") {
        process[process.length-2] = "+"
    }
    else if(process[process.length-1] == "+" || process[process.length-1] == "-" || process[process.length-1] == "/" || process[process.length-1] == "*" || process[process.length-1] == "(" || process[process.length-1] == ")"){
      return;
    }
    else if(process[process.length-2] != "-"){
        process[process.length-1] = (-(Number(process[process.length-1]))).toString();
        
    } 
  writeOnScreen();
}


function backspace(){
  var sc = document.querySelector(".screen");
  if(sc.textContent=="Invalid" || sc.textContent=="Infinity" || sc.textContent=="Undefined"){
    allClear();
  }

          if(process.length){
            
        if(process[process.length-1].length == 1) {
            process.pop();
        } else {
            if(process[process.length-1]){
                if(process[process.length-1].length == 2 && process[process.length-1].indexOf("-") !== -1) {
                    process.pop();
                } else {
                    
                    
                    let text = process[process.length-1];
            text = text.split("");
            text.pop("");
            text = text.join("");
            process[process.length-1] = text;
                }
                
            } else {
                process.pop();
            }
            
        }
  writeOnScreen();
}
}


function allClear(){
  process=[];
  document.querySelector(".screen").innerHTML="";
  var sp =  document.createElement("span");
  sp.classList.add("scrple");
  document.querySelector(".screen").appendChild(sp);
  sp.addEventListener("animationend",()=>{
    sp.remove();
  })
  document.querySelector(".subscreen").innerHTML="";
}

function bracketValidator(expression) {
  let count = 0;
  for(let i = 0; i < expression.length; i++) {
      if(expression[i] == '('){
          count++
          }
      else if(expression[i] == ')'){
          if(count == 0){
              return [false, count];
          }
          else {
              count--;
            }
  }
  }

  if(count == 0){
      return [true, count];
   }

  return [false, count];
}

function addbracket(){
  if( (isNumber(process[process.length-1]) || process[process.length-1] == ")") && !bracketValidator(process.join(""))[0]){
                                   
    process.push(")");
    writeOnScreen()
} else {
    if(isNumber(process[process.length-1]) || process[process.length-1] == ")") {
        
        process.push("*");
        process.push("(");
        writeOnScreen()
    } else {
        
        process.push("(");
        writeOnScreen();
    }
    
}

}


function isNumber (num) {
  if(num == Number(num) || num == "π" || num == "e" || num == ")" || num == "!"){
      return true;
  }
}


function finalize(){
  try{
    // console.log(process)
    if(document.querySelector(".screen").textContent=="")return;
    var tot = eval(process.join("")).toString();
    document.querySelector(".screen").innerHTML=`<span class="answer">${tot}<span>`;
    if(document.querySelector(".answer").offsetWidth > document.querySelector(".screen").offsetWidth){
      var diff = document.querySelector(".answer").offsetWidth - document.querySelector(".screen").offsetWidth;
      document.querySelector(".answer").style.fontSize=(diff/DIVISOR)+"px";
      console.log(document.querySelector(".answer").offsetWidth+"  "+document.querySelector(".screen").offsetWidth)
    }
    document.querySelector(".subscreen").innerHTML="";
    past.push(new historyObj(process,tot))
    process=[];
    process.push(tot);
    if(process.length<1)allClear2(tot);
  }
  catch(err){
    document.querySelector(".screen").innerHTML="<span class='answer'>Invalid</span>";
    // console.error(err)
  }
}
function allClear2(d){
  process=[];
  process.push(d)
  document.querySelector(".screen").innerHTML="";
  document.querySelector(".subscreen").innerHTML="";
}


class historyObj{
  constructor(exp,tot){
    this.expression = exp;
    this.total = tot;
  }
}


function openHist(){
  if(past.length<1)return;
  document.querySelector('.history_window').style.left='0px';
  for(i=0;i<past.length;i++){
    var exp = "";
    var toProcess = [];
    for(x=0;x<past[i].expression.length;x++){
      var runble = past[i].expression;
      if(past[i].expression[x] == "+" || past[i].expression[x] == "-" || past[i].expression == "/" || past[i].expression[x] == "*" || past[i].expression[x] == "(" || past[i].expression[x] == ")"){
        var op;
        toProcess.push(past[i].expression[x].toString());
        if(past[i].expression[x] == "+"){
          op="&plus;";
        }
        else if(past[i].expression[x] == "-"){
          op = "&minus;"
        }
        else if(past[i].expression[x] == "*"){
          op = "&times;"
        }
        else if(past[i].expression[x] == "/"){
          op = "&div;"
        }
        exp+=`<span class="operation">${op}</span>`;
      }
      else{
        exp+=`<span>${past[i].expression[x]}</span>`;
        toProcess.push(past[i].expression[x]);
      }
    }
    var his_area = document.querySelector(".history_area");
    var htmltogive = `<div class="calcul" onclick="addThis(this)" onload="this.animationDelay=${i}s" data-expression="${past[i].expression}">
    <span class="expression">${exp}</span><br/>
    <span class="ans">${past[i].total}</span>
</div>`;
    his_area.innerHTML+=htmltogive;
  }
  var hists = document.querySelectorAll(".calcul");
  his_area.scrollTo(0,his_area.scrollHeight)
  if(past.length!=0){
    document.querySelector(".clearHistory").style.display="visible";
    setTimeout(() => {
      document.querySelector(".clearHistory").style.transform="translate(-50%,calc(-100% - 20px))";
      document.querySelector(".clearHistory").style.opacity="100%";
    }, 500);
  }
}
function closeHist(){
  document.querySelector('.history_window').style.left='-100%'
  document.querySelector('.history_area').innerHTML="";
  document.querySelector(".clearHistory").style.transform="translate(-50%,calc(-100% + 20px))";
  document.querySelector(".clearHistory").style.opacity="0%";
  setTimeout(() => {
    document.querySelector(".clearHistory").style.display="visible";
  }, 500);
}

function addThis(el){
  process=[...el.dataset.expression.split(",")];
  writeOnScreen();
  closeHist();
}

function clearHistory(){
  past=[];
  document.querySelector(".history_area").innerHTML="";
  closeHist();
}