let respc;
let respl;
let pc 
let vit_pl = 0
let vit_pc = 0

function gerale() {
    respl = 0
    pc = 0 
    
    respc = Math.floor(Math.random() * 3) + 1; 
    console.log(respc);
    if (respc === 1) {
        document.getElementById("res_PC").innerHTML = "👊"
    }
    else if(respc === 2){
        document.getElementById("res_PC").innerHTML = "🖐️"
    }
    else{
        document.getElementById("res_PC").innerHTML = "&#9996;&#65039;"
    }
    
}

function pedra(){
    
    document.getElementById("play_OP").innerHTML = "👊"
    document.getElementById("res_PC").innerHTML = `${respc}`
    
    gerale();  
    placar = 1

    
    if(placar === 1 && respc === 2){
        console.log('teste kkkkk');
        document.getElementById("p2").innerHTML = `${++vit_pc}`;
        document.getElementById("span2").style.color = "green"
        document.getElementById("span1").style.color = "red"

}
    else if( placar === 1 && respc === 3){
        document.getElementById("p1").innerHTML = `${++vit_pl}`
        document.getElementById("span2").style.color = "red"
        document.getElementById("span1").style.color = "green"
}else {
    document.getElementById("span2").style.color = "yellow"
    document.getElementById("span1").style.color = "yellow"
}
}

function papel (){

    document.getElementById("play_OP").innerHTML = "🖐️";
    document.getElementById("res_PC").innerHTML = `${respc}`
    gerale();
    placar = 2

    
    if(placar === 2 && respc === 3){
        console.log('teste kkkkk');
        document.getElementById("p2").innerHTML = `${++vit_pc}`;
        document.getElementById("span2").style.color = "green"
        document.getElementById("span1").style.color = "red"
    
    }
    else if( placar === 2 && respc === 1){
        document.getElementById("p1").innerHTML = `${++vit_pl}`
        document.getElementById("span2").style.color = "red"
        document.getElementById("span1").style.color = "green"
    }
    else {//so se o prof pedir
        document.getElementById("span2").style.color = "yellow"
        document.getElementById("span1").style.color = "yellow"
    }
}   


function tesoura(){

    document.getElementById("play_OP").innerHTML = "&#9996;&#65039;"
    document.getElementById("res_PC").innerHTML = `${respc}`
    gerale();
    placar = 3
    
    if(placar === 3 && respc === 1){
        console.log('teste kkkkk');
        document.getElementById("p2").innerHTML = `${++vit_pc}`;
        document.getElementById("span2").style.color = "green"
        document.getElementById("span1").style.color = "red"

}
    else if( placar === 3 && respc === 2){
        document.getElementById("p1").innerHTML = `${++vit_pl}`
        document.getElementById("span2").style.color = "red"
        document.getElementById("span1").style.color = "green"
}
else {//so se o prof pedir
    document.getElementById("span2").style.color = "yellow"
    document.getElementById("span1").style.color = "yellow"
}
}
function reset(){
    document.getElementById("play_OP").innerHTML = " "
    document.getElementById("res_PC").innerHTML = "🖥️"
    vit_pc = 0
    vit_pl = 0
    document.getElementById("p2").innerHTML = `${vit_pc}`
    document.getElementById("p1").innerHTML = `${vit_pl}`
    document.getElementById("span1").style.color = "yellow"
    document.getElementById("span2").style.color = "yellow"
}