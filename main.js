let form = document.getElementById("button");

let country;
form.addEventListener("click", function () {
	let error = document.getElementsByClassName("forError")[0];

	error.innerHTML = "";

	country = document.getElementById("country").value;

	let serverURL = "https://restcountries.com/v3.1/name/" + country;

	let server = fetch(serverURL);

	server
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			if (response.length > 1) {
				let error = document.getElementsByClassName("forError")[0];

				error.innerHTML = "Please specify the country";
			} else {
				reset();
				officialName(response);
				flagCoat(response);
				flagCoatText();
				capital(response);
				population(response);
				region(response);
				subRegion(response);
			}
		});
});

document.getElementById("country").addEventListener("keypress", function (e) {
	reset();
	let submitError = document.createElement("div");
	submitError.className = "submit-Error";
	submitError.innerText = `After typing, please press submit button`;

	document.getElementsByClassName("countryInfo")[0].appendChild(submitError);
});

function flagCoat(response) {
	let flag = document.createElement("div");
	let coat = document.createElement("div");
	let flagSVG = response[0].flags.svg;
	let coatSVG = response[0].coatOfArms.svg;

	flag.className = "flag";
	coat.className = "coat";
	flag.innerHTML = `<img src = "${flagSVG}" alt="flag"/> `;
	coat.innerHTML = `<img src = "${coatSVG}" alt="coast"/>`;

	let flagPart = document.createElement("div");
	flagPart.className = "flag-part";

	document.getElementsByClassName("countryInfo")[0].appendChild(flagPart);
	flagPart.appendChild(flag);
	flagPart.appendChild(coat);
}

function flagCoatText() {
	let textFlag = document.createElement("div");
	let textCoat = document.createElement("div");

	let flag = document.getElementsByClassName("flag")[0];
	let coat = document.getElementsByClassName("coat")[0];

	textFlag.innerText = "National Flag";
	textCoat.innerText = "National Coat";
	flag.appendChild(textFlag);
	coat.appendChild(textCoat);
}

function capital(response) {
	let capital = document.createElement("div");
	capital.className = "capital";
	capital.innerText = `Capital: ${response[0].capital[0]}`;

	let capitalPart = document.createElement("div");
	capitalPart.className = "capital-part";

	document.getElementsByClassName("countryInfo")[0].appendChild(capitalPart);

	capitalPart.appendChild(capital);
}
function reset() {
	document.getElementsByClassName("countryInfo")[0].innerHTML = "";
}

function population(response) {
	let population = document.createElement("div");
	population.className = "population";
	population.innerText = `Population: ${response[0].population}`;

	let populationPart = document.createElement("div");
	populationPart.className = "population-part";

	document.getElementsByClassName("countryInfo")[0].appendChild(populationPart);

	populationPart.appendChild(population);
}

function officialName(response) {
	let name = document.createElement("div");
	name.className = "official-name";
	name.innerText = `${response[0].name.official}`;

	let namePart = document.createElement("div");
	namePart.className = "name-part";

	document.getElementsByClassName("countryInfo")[0].appendChild(namePart);

	namePart.appendChild(name);
}

function region(response) {
	let region = document.createElement("div");
	region.className = "region";
	region.innerText = `Region: ${response[0].region}`;

	let regionPart = document.createElement("div");
	regionPart.className = "region-part";

	document.getElementsByClassName("countryInfo")[0].appendChild(regionPart);

	regionPart.appendChild(region);
}

function subRegion(response) {
	let subRegion = document.createElement("div");
	subRegion.className = "seb-region";
	subRegion.innerText = `Sub-Region: ${response[0].subregion}`;

	let subRegionPart = document.createElement("div");
	subRegionPart.className = "sub-region-part";

	document.getElementsByClassName("countryInfo")[0].appendChild(subRegionPart);

	subRegionPart.appendChild(subRegion);
}
