// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+pokemon.id+'.gif"
const poke_container = document.getElementById('poke_container');
const pokemons_number = 649;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = 'rgb(18 18 18)';

	const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h4 class="name">${name}</h4>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);



	let genCount = document.getElementsByClassName('generation');
	search.addEventListener('keyup', ()=>{
		MoreBTN.style.display = "none";
		const searchReal1 = searchReal.value;
		
		
		if(name.indexOf(searchReal1) > -1){
			pokemonEl.style.display = "block";

		  }else{
			  
			pokemonEl.style.display = "none";
			for(let i = 0; i < genCount.length; i++){
				genCount[i].style.display = "none";
			}

		  }

		  if(searchReal1 == ''){
			pokemonEl.style.display = "block";
			for(let i = 0; i < genCount.length; i++){
				genCount[i].style.display = "";
			}
			pokemonEl.style.position = "relative";
			pokemonEl.style.top = "0";
		  }
	});

	exitSearch.addEventListener('click', ()=>{
		pokemonEl.style.display = "block";
		for(let i = 0; i < genCount.length; i++){
			genCount[i].style.display = "";
		}
		pokemonEl.style.position = "relative";
		pokemonEl.style.top = "0";
	});


	let counts = poke_container.children;
	console.log(counts.length);

	//Przycik More
	const MoreBTN = document.createElement('button');
		MoreBTN.classList.add('more-Button');
		const MoreINNERHTML = 'Show More <i class="bi bi-caret-down-fill"></i>';
		MoreBTN.innerHTML = MoreINNERHTML;
	if(counts.length == 19){
		
		poke_container.appendChild(MoreBTN);
	}else if(counts.length > 19){
		pokemonEl.classList.add('activeMore');
		for(let i = 0; i < genCount.length; i++){
			genCount[i].classList.add('activeMore');
		}
	}
	
	MoreBTN.addEventListener('click', () => {
		for(let i = 20; i < counts.length; i++){
			counts[i].classList.toggle('activeMore');
			for(let j = 0; j < genCount.length; j++){
				genCount[j].classList.toggle('countActive');
			}
		}
		MoreBTN.classList.toggle('activeMore');
	});

	if(counts.length == 1){
		const generationText = document.createElement('div');
		generationText.classList.add('generation');
		const genINNERHTML = '<p>GENERATION</p><br><p class="countGen">I</p>';
		generationText.innerHTML = genINNERHTML;
		poke_container.insertBefore(generationText, counts[0]);
	}else if(counts.length == 151 + 1){
		generationText = document.createElement('div');
		generationText.classList.add('generation');
		genINNERHTML = '<p>GENERATION</p><br><p class="countGen">II</p>';
		generationText.innerHTML = genINNERHTML;
		poke_container.appendChild(generationText);
	}else if(counts.length == 251 + 2){
		generationText = document.createElement('div');
		generationText.classList.add('generation');
		genINNERHTML = '<p>GENERATION</p><br><p class="countGen">III</p>';
		generationText.innerHTML = genINNERHTML;
		poke_container.appendChild(generationText);
	}else if(counts.length == 386 + 3){
		generationText = document.createElement('div');
		generationText.classList.add('generation');
		genINNERHTML = '<p>GENERATION</p><br><p class="countGen">IV</p>';
		generationText.innerHTML = genINNERHTML;
		poke_container.appendChild(generationText);
	}
	else if(counts.length == 493 + 4){
		generationText = document.createElement('div');
		generationText.classList.add('generation');
		genINNERHTML = '<p>GENERATION</p><br><p class="countGen">V</p>';
		generationText.innerHTML = genINNERHTML;
		poke_container.appendChild(generationText);
	}
	else if(counts.length == 251 + 2){
		generationText = document.createElement('div');
		generationText.classList.add('generation');
		genINNERHTML = '<p>GENERATION</p><br><p class="countGen">III</p>';
		generationText.innerHTML = genINNERHTML;
		poke_container.appendChild(generationText);
	}
}

fetchPokemons();

const icon = document.querySelector('.icon1');
const search = document.querySelector('.search1');
const searchReal = document.getElementById('mysearch');
const exitSearch = document.querySelector('.clear');

icon.addEventListener('click', ()=>{
  search.classList.toggle('active1');
});