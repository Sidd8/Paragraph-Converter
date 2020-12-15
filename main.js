function showpara1(){
    var input= [];  
    for (var i=1; i<=6; i++){
        input.push(document.getElementById("P1_input_"+i).value);
    }
    document.getElementById("show_para1").innerHTML=input.join(". ");
}   

function showpara2(){
    var input= [];  
    for (var i=1; i<=6; i++){
        input.push(document.getElementById("P2_input_"+i).value);
    }
    document.getElementById("show_para2").innerHTML=input.join(". ");
}   