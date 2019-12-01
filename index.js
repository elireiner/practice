'use strict'


function displayNews(responseJson) {
    for (let i = 0; i < responseJson.articles.length; i++) {
        $('#results-list').append(`<li><p>${responseJson.articles[i].title}</p></li>`)
    }
}

function getNews(query) {
    /*let params = {
        q = query,
        page = 1,
        apiKey = `832ecf1cdf9741c19ffe553820ed8d60`
    }*/



    let baseUrl = `https://newsapi.org/v2/everything?`;
    let queryString = `q=${query}&apiKey=832ecf1cdf9741c19ffe553820ed8d60`;
    let url = baseUrl + queryString;
    console.log(url)
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then(responseJson => displayNews(responseJson))
        .catch(err => alert(`Error:` + err + url));

}

function handleNews() {
    $('#news-form').submit(event => {
        event.preventDefault();
        let input = $('#query').val();
        getNews(input);
    })
}

function loadPlayground() {
    handleNews();
}

$(loadPlayground);