// Dynamic menue
let myelement=document.createElement("ul")
let att=document.createAttribute("navigation")
myelement.setAttributeNode(att)
let element1=document.createElement("li")
let info1=document.createTextNode("HTML")
element1.appendChild(info1)
myelement.appendChild(element1)
let element2=document.createElement("li")
let info2=document.createTextNode("CSS")
element2.appendChild(info2)
myelement.appendChild(element2)
let element3=document.createElement("li")
let info3=document.createTextNode("JS")
element3.appendChild(info3)
myelement.appendChild(element3)
let element4=document.createElement("li")
let info4=document.createTextNode("React")
element4.appendChild(info4)
myelement.appendChild(element4)
console.log(myelement)
// Easy find code
document.getElementById('navbar').addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('a')) {
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }});
// scale & location code
function scale () {
        let diva = document.getElementById("myDiv");
        let rectangle = diva.getBoundingClientRect();
        x = rectangle.left;
        y = rectangle.top;
        w = rectangle.width;
        z = rectangle.height;
        console.log(`Left:${x}, Top:${y}, Width:${w}, Height:${z}`);
        
    }



