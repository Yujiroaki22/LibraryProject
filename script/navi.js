const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

searchButton.addEventListener("click", () => {
    const searchText = searchBar.value;
    // Perform search logic here (e.g., fetch books, filter results, etc.).
    console.log("Search for:", searchText);
});