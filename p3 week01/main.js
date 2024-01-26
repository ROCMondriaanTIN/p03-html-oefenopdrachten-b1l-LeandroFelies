const object1 = {
  clothingbrand: "Nike",
  description:
    "Bill Bowerman en Phil Knight richtten het bedrijf in 1964 onder de naam Blue Ribbon Sports (BRS) op, voerden het merk 'Nike' vanaf 1972 en veranderden in 1978 de naam van het bedrijf in ",
};

const object2 = {
  clothingbrand: "adidas",
  description:
    "Oprichtende vader Op 18 augustus 1949 begon Adi Dassler op 49-jarige leeftijd opnieuw, registreerde de Adi Dassler adidas Sportschuhfabrik en ging met 47 medewerkers aan de slag in de kleine stad Herzogenaurach. Dezelfde dag registreerde hij een schoen met de registratie van de binnenkort-beroemde adidas 3-Stripes",
};

const object3 = {
  clothingbrand: "Under Armour",
  description:
    "Under Armour werd opgericht door Kevin Plank. In 1996 introduceerde hij THE SHORTY, een zacht en strak T-shirt dat zweet sneller afvoerde dan wat dan ook.",
};

const object4 = {
  clothingbrand: "Black bananas",
  description:
    "Black Bananas is onbedoeld ontstaan tijdens zijn stage in Curaçao. Als afscheidscadeau had hij bedacht om voor een andere stagiair een T-shirt te ontwerpen. Hij begon daarom ook met het ontwerpen van zijn eigen logo. Deze werd geïnspireerd door de dieren om",
};

const objectArray = [object1, object2, object3, object4];

function createCard() {
  let cardHtml = `
    <div class="card">
    <div class="card-header">Heade</div>
    <div class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem.</div>
    <button class="card-button">Knop</button>
    </div>
    `;
  return cardHtml;
}
const container = document.querySelector(".card-container")

for (let i = 0; i < objectArray.length; i++) {
    const object = objectArray[i];
    
    
}