const searchInput = document.getElementById("search");
const iFrame = document.getElementById("iframe");

let history = [];

function openPage(url) {
    searchInput.value = url;
    iFrame.src = url;
    history += '"' + url + '", ';
    console.log(history);
}

openPage(searchInput.value);