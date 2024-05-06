// Get references to DOM elements
const wineList = document.getElementById('wine-list');
const wineDetail = document.getElementById('wine-detail');

// Sample data for wines
const wines = [
    { name: 'Chardonnay', year: 2018, description: 'A smooth and buttery white wine with hints of oak and vanilla.' },
    { name: 'Cabernet Sauvignon', year: 2017, description: 'A bold and full-bodied red wine with notes of blackberry and spice.' },
    { name: 'Merlot', year: 2016, description: 'A soft and fruity red wine with flavors of cherry and plum.' },
    { name: 'Sauvignon Blanc', year: 2019, description: 'A crisp and zesty white wine with citrus notes.' },
];

// Function to display the wine list
function displayWineList() {
    wineList.innerHTML = ''; // Clear previous list
    wines.forEach((wine, index) => {
        const wineItem = document.createElement('li');
        wineItem.textContent = `${wine.name} (${wine.year})`;
        wineItem.addEventListener('click', () => showWineDetail(index)); // Click to show details
        wineList.appendChild(wineItem);
    });
}

// Function to display wine details
function showWineDetail(index) {
    const wine = wines[index];
    wineDetail.innerHTML = `
        <h2>${wine.name} (${wine.year})</h2>
        <p>${wine.description}</p>
    `;
}

// Display the wine list on page load
window.addEventListener('load', displayWineList);
