function addMe(){
    let a = "L'impronta lasciatami da questo liceo è stata principalmente umanistica. Lo studio della psicologia,"+"<br>"+
    "della sociologia e  della pedagogia mi hanno permesso di sviluppare la capacità di studiare il modo di porsi"+"<br>"+
"dinnanzi alle menti umane e riuscirà e destreggiarsi al meglio all'interno di gruppi di persone eterogenee. \n P.s. Il CV è Responsive. Se attivate gli strumenti per Sviluppatori [F12] e giocate con \n le dimensioni capirete ;-)";
    document.getElementsByClassName("paragr")[0].innerHTML = a;
}
function Canc(){
    let a = '';
    document.getElementsByClassName("paragr")[0].innerHTML = a;
}

function ChangeMe(){
    let a = document.getElementsByClassName("divInfo")[2];
    a.style.backgroundColor = "darkgreen";
    a.style.color = "white"
}
function goBack(){
    let a = document.getElementsByClassName("divInfo")[2];
    a.style.backgroundColor = "rgba(255, 255, 255, 0.850)";
    a.style.color = "rgb(0, 0, 0)";
}

setTimeout(function Click(){
   
    const Ul = document.getElementById("compari");
    const fragment = new DocumentFragment();
    const skills = ["Curioso;", "Ambizioso;", "Caparbio"];
    for(const skill of skills){
        let LI = document.createElement("li");
        LI.textContent = skill;
        fragment.append(LI);
    }
    Ul.append(fragment);

}, 5000);

setInterval(function passion(){
    const lista = ["Appassionato di teatro, in particolare del teatro dialettale modicano nel quale mi sono messo in gioco per quattro anni.", "Da oltre quindici anni agricoltore innamorato del biologico inteso come sistema di equilibrio tra la natura e l'uomo.", "Attratto dall'astronomia, dalla poesia. Compositore di musica colta e, ogni tanto, corista."];
    const para = document.getElementById("inter");
    const UL = document.querySelector(".rightPara");
    const fragment = new DocumentFragment();
    for(const pezzo of lista){
        let LI = document.createElement("li");
        LI.textContent = pezzo;
        fragment.append(LI);
    }
    UL.append(fragment);
    para.append(UL);
}, 12000);

setInterval(function canc(){
    let UL = document.querySelector(".rightPara");
    UL.textContent = '';
}, 18000)