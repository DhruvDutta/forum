var quesnumber = "";
let numofques = 3;
function submit(){
    answer=document.getElementById("answer").value;
    let ul = document.getElementById("ans"+quesnumber);
    var li = document.createElement("li");
    let submitting_ans = document.createTextNode(answer);
    li.appendChild(submitting_ans);
    ul.appendChild(li);
    document.getElementById("answer").value = "";
    document.getElementById("reply").style.display = "none";
    document.getElementById("main").style.visibility = "visible";
}


function ans(q){   
    quesnumber = q.id;
    question = document.getElementById("q"+q.id);
    document.getElementById("reply-head").innerHTML = "Q."+question.innerHTML;
    document.getElementById("reply").style.display = "block";
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("ans"+quesnumber).style.display = "block";
}

function askquestion(){
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("createquestion").style.display = "block";
    document.getElementById("askedques").value = "";
}
function cancel(){
    document.getElementById("reply").style.display = "none";
    document.getElementById("createquestion").style.display = "none";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("answer").value = "";
    document.getElementById("askedques").value = "";


}

function create(){
    let main = document.getElementById('questions');
    let li = document.createElement("li");
    numofques+=1;
    li.setAttribute("id",String(numofques));
    li.setAttribute("class","ques");
    li.setAttribute("onclick","showans(this);")
    let span= document.createElement("span");
    span.setAttribute("id","q"+numofques);
    let node = document.createTextNode(document.getElementById("askedques").value);
    span.appendChild(node);
    li.appendChild(span);
    main.appendChild(li);
    let ul = document.createElement("ul");
    ul.setAttribute("id","ans"+numofques);
    ul.setAttribute("class","ans")
    main.appendChild(ul);
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("createquestion").style.display = "none";
    
}

function showans(Q){
    Q = Q.id;
    for(let k = 1;k<=numofques;k++){
        if(k!=Q){
            document.getElementById(String(k)).style.display = "none";
            
        }else{
            document.getElementById(String(k)).style.top = "1em";
            document.getElementById("askbtn").style.display= "none";
            document.getElementById("ans"+String(k)).style.display = "block";
            var func = function (){
                ans(this);
            };
            document.getElementById(String(k)).onclick = func;
            
        }
    }
    
}