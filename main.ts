function displayInfo(pInfo: string) {
    let DOMEl = window.document.querySelector('body');

    pInfo = pInfo.replace(/\n/g, '<br />');
    DOMEl.innerHTML += '------------<br />' + pInfo + '<br />------------<br /><br />';
}

let p = new Person('Louis', 30);
let p2 = new Fighter('Jordan', 43);
let p3 = new Boxer('Mike', 30);
let p4 = new Karateka();
let p5 = new Rasta('Emile', 4);



displayInfo(p.toString());
displayInfo(p2.toString());
displayInfo(p2.hit());
displayInfo(p3.toString());
displayInfo(p3.giveCrochet());
displayInfo(p3.hit());
displayInfo(p4.toString());
displayInfo(p4.giveMawashi());
displayInfo(p5.toString());
displayInfo(p5.givePeace());