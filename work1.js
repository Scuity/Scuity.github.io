function menu(){
    window.location.href="puzzle.html";
}

function puzzle1(){
    window.location.href="puzzle01.html";
}

function puzzle2(){
    window.location.href="puzzle02.html";
}

function puzzle3(){
    window.location.href="puzzle03.html";
}

function back(){
    window.location.href="puzzle.html";
}

var x = "恭喜你完成本次挑战！"     

/*回答跳转*/
function answer01(){
    for(i=1;i<6;i++) {
       var response=prompt("请填写您的答案");
      if(response==="蜘蛛"){
        alert("恭喜您回答正确！");
        document.getElementById("con").innerHTML=x;
        break
        }
      else if(response===null){
             break;
          }
      else if(i===5){
          alert("很遗憾，您没能成功在规定的次数内成功解谜。\n您可以点击下方的提示获取灵感，或者尝试一下其他难度的PUZZLE。\n当然您也可以再次尝试这个谜题。")
          break
      }
      else{
        alert("很遗憾，请再仔细思考一下。\n您也可以点击下方的提示获取灵感。");}
    }
}
function hint01(){
    var hi1=["简单的元宵灯谜","打一昆虫"]
    for(i=0;i<hi1.length;i++){
        alert(hi1[i]);
        }
}

function answer02(){
    for(i=1;i<6;i++) {
       var response=prompt("请填写您的答案");
      if(response==="时间"){
        alert("恭喜您回答正确！");
        document.getElementById("con").innerHTML=x;
        break
        }
      else if(response===null){
             break;
          }
      else if(i===5){
          alert("很遗憾，您没能成功在规定的次数内成功解谜。\n您可以点击下方的提示获取灵感，或者尝试一下其他难度的PUZZLE。\n当然您也可以再次尝试这个谜题。")
          break
      }
      else{
        alert("很遗憾，请再仔细思考一下。\n您也可以点击下方的提示获取灵感。");}
    }
}

function hint02(){
    var hi2=["它是无形的存在","打一常用词语"]
    for(i=0;i<hi2.length;i++){
        alert(hi2[i]);
        }
}

function answer03(){
    for(i=1;i<6;i++) {
       var response=prompt("请填写您的答案");
      if(response==="月亮"){
        alert("恭喜您回答正确！");
        document.getElementById("con").innerHTML=x;
        break
        }
      else if(response===null){
             break;
          }
      else if(i===5){
          alert("很遗憾，您没能成功在规定的次数内成功解谜。\n您可以点击下方的提示获取灵感，或者尝试一下其他难度的PUZZLE。\n当然您也可以再次尝试这个谜题。")
          break
      }
      else{
        alert("很遗憾，请再仔细思考一下。\n您也可以点击下方的提示获取灵感。");}
    }
}

function hint03(){
    var hi2=["来自埃及的谜语,\n或许答案就在黑夜的天空中","打一天体"]
    for(i=0;i<hi2.length;i++){
        alert(hi2[i]);
        }
}

