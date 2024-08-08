const searchInput = document.getElementById("search");
const iFrame = document.getElementById("iframe");

const history = [];

function openPage(url) {
    if (url.startsWith('https://')) {
        searchInput.value = url;
        iFrame.src = url;
        history.push(url);
        console.log(history);
    } else if (url.startsWith('www.')) {
        url = "https://" + url;
        openPage(url);
    } else {
        url = "https://duckduckgo.com/?t=h_&q=" + url + "&ia=web";
        openPage(url);
    }
}

if (searchInput.value) {
    openPage(searchInput.value);
}
