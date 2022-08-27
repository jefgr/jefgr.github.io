window.addEventListener("load", init);

let status = 0;

function init() {
    let proSenioren = [];
    for (let i = 0; i < tijdlijnData.length; i++){
        proSenioren[i] = new proSenior(tijdlijnData[i], 1977+i);
    }

    proSenioren.reverse().forEach(generateProSenior);
}

class proSenior {
    constructor(name, seniorYear) {
        this.name = name;
        this.seniorYear = seniorYear;
    }
}

function generateProSenior(proSenior){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td")
    let text = document.createTextNode(proSenior.seniorYear + " - " + (++proSenior.seniorYear))
    let text2 = document.createTextNode(proSenior.name);


    td1.appendChild(text);
    td2.appendChild(text2)
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById("JSTijdlijn").appendChild(tr);
}
