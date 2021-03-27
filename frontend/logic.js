window.addEventListener('load', loadMovies)


async function loadMovies() {
    const result = await fetch('/movies')
    const movies = await result.json()
    let contant = document.getElementById("result")
    movies.forEach(weather => {
        let div = document.createElement("div")
        let ul = document.createElement("ul")
        ul.className = 'ul';

        let li1 = document.createElement("li")
        li1.className = 'li';
        let li2 = document.createElement("li")
        li2.className = 'li';
        let li3 = document.createElement("li")
        li3.className = 'li';

        li1.innerText = weather.title
        li2.innerText = weather.movie_type
        li3.innerText = weather.year


        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        div.appendChild(ul)
        contant.appendChild(div)

    });
}

function getAll() {
    makeRequest("/movies", "get")
}

function addMovie() {
    var title = document.getElementById("title").value;
    var movie_type = document.getElementById("movieType").value;
    var year = document.getElementById("year").value;

    let body = {

        title: title,
        movie_type: movie_type,
        year: year

    }
    makeRequest("/movies/", "post", JSON.stringify(body))
}


async function makeRequest(url, reqmethod, body) {
    const response = await fetch(url, {
        headers: { "content-type": "application/json" },
        method: reqmethod,
        body: body
    })
    location.reload()
    const data = await response.json()
    return data

}

let payload1 = {
    token: "kwi1dWHzH1_yr40gXM9p_A",
    data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 300
    }
};

$.ajax({
    type: "POST",
    url: "https://app.fakejson.com/q",
    data: payload1,
    success: function (resp) {
        for (let index = 0; index < resp.length; index++) {
            document.getElementById("APIData").innerHTML += "<li>" + resp[index].email + "- " + resp[index].name + " , " + resp[index].phone + "</li>";

        }
    }
});
