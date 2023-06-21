//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Custom comparison function
const compareBandNames = (nameA, nameB) => {
  const articles = ['a', 'an', 'the'];

  // Function to remove articles from the band name
  const removeArticles = (name) => {
    const words = name.split(' ');
    return words.filter(word => !articles.includes(word.toLowerCase())).join(' ');
  };

  const bandNameA = removeArticles(nameA);
  const bandNameB = removeArticles(nameB);

  return bandNameA.localeCompare(bandNameB);
};

// Sort the band names
const sortedBandNames = touristSpots.sort(compareBandNames);

const list = document.getElementById("band");
for (let i = 0; i < sortedBandNames.length; i++) {
	const listTag = document.createElement("li");
	listTag.innerContent = sortedBandNames[i];
	list.appendChild(listTag);
	
}

// console.log(sortedBandNames);

