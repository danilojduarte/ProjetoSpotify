const searchInput = document.getElementById('search__input');
const resultArtisat = documento.getElementById('result__artist');
const resultPlaylist = documento.getElementById('result__playlist');

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtisat.classList.remove('hidden');
        return;
    }
})