// scripts.js

document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = 'search.html?q=' + encodeURIComponent(query);
    }
});
