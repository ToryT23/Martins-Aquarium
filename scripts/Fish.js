export const Fish = (fishObj) => {
	return `<article class="fish-card">
				<div><img class="fish-image" src="/images/${fishObj.image}" /></div>
				<h3 class="fish-name">${fishObj.name}</h3>
				<ul>
					<li class="fish-details">${fishObj.type}</li>
					<li class="fish-details">Length: ${fishObj.measurement} inches</li>
					<li class="fish-details">Saltwater: ${fishObj.saltwater}</li>
					<li class="fish-details">Eats: ${fishObj.food}</li>
                    <button class="deatils">Details</button>
				</ul>
        	</article>`
}