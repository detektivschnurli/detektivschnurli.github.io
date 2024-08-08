const searchInput = document.getElementById("search");
const iFrame = document.getElementById("iframe");

const history = [];

function openPage(url) {
    if ((url.startsWith('https://')) || (url == "home.html")) {
        searchInput.value = url;
        iFrame.src = url;
        history.push(url);
        console.log(history);
    } else if (url.startsWith('www.')) {
        url = "https://" + url;
        openPage(url);
    } else {
        url = "https://duckduckgo.com/" + url;
        openPage(url);
    }
}

if (searchInput.value) {
    openPage(searchInput.value);
}
