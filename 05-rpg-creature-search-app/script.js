const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');


const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const searchCreature = async () => {
  const query = searchInput.value.toLowerCase().trim();
  try{
    const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`)

    if (!response.ok) {
      throw new Error('Creature not found');
    }

    const data = await response.json();
    console.log(data)
    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;

    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    data.stats.forEach((element) => {
      document.getElementById(element.name).textContent =element.base_stat;
    });

    types.innerHTML = '';
    data.types.forEach((element) => {
      const newSpan = document.createElement('span');
      newSpan.textContent = element.name.toUpperCase();
      types.appendChild(newSpan)
    });
    
  } catch(error){
    alert('Creature not found');
  }
};

searchButton.addEventListener('click', searchCreature);