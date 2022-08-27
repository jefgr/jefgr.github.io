window.addEventListener("load", init);

let status = 0;

function init() {
    let bestuur = [];
    for (let i = 0; i < bestuurData.length; i++) {
        bestuur[i] = new bestuurslid(bestuurData[i][0], bestuurData[i][1], bestuurData[i][2], bestuurData[i][3]);
    }
    bestuur.forEach(generateLid);
}

class bestuurslid {
    constructor(name, functie, geschiedenis, imgsrc) {
        this.name = name;
        this.functie = functie;
        this.geschiedenis = geschiedenis;
        this.imgsrc = imgsrc;
    }
}

function generateLid(bestuursLid) {
    let section = document.createElement("SECTION");
    let h3naam = document.createElement("h3");
    let h2functie = document.createElement("h2");
    let h4geschiedenis = document.createElement("h4");
    let text = document.createTextNode(bestuursLid.name);
    let textFunctie = document.createTextNode(bestuursLid.functie);
    let textGeschiedenis = document.createTextNode(bestuursLid.geschiedenis);
    let img =document.createElement("img");
    img.src = bestuursLid.imgsrc;
    img.alt = bestuursLid.name;

    h3naam.appendChild(text);
    h2functie.appendChild(textFunctie);
    h4geschiedenis.appendChild(textGeschiedenis);
    section.appendChild(h2functie);
    section.appendChild(h3naam);
    section.appendChild(img);
    section.appendChild(h4geschiedenis)
    document.getElementById("JSbody").appendChild(section);
}
