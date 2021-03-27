
const express = require('express')
function getId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};
const app = express()

app.use(express.json())
app.use(express.static('frontend'))
/* for (var i = 0; i < 5; i++) {
    console.log(getId())
}
 */

/* Array of Movies */
const movies = [
    {
        title: 'Kung fu',
        movie_type: 'Action Drama',
        id: '1',
        year: '1920'
    },
    {
        title: 'Titanic',
        movie_type: 'romantic',
        id: '2',
        year: '1914'
    },
    {
        title: 'Sindbad',
        movie_type: 'Cartoon',
        id: '3',
        year: '1955'
    },
    {
        title: 'Toy',
        movie_type: 'Horror',
        id: '4',
        year: '1190'
    },
    {
        title: 'Hunk',
        movie_type: 'Action',
        id: '5',
        year: '1877'
    },]


app.get("/movies", (req, res) => {
    res.json(movies)
})

app.post("/movies", (req, res) => {
    let newMovie = req.body
    newMovie.id = getId()
    movies.push(newMovie)
    res.json("New Movie is added")
})


app.listen(3002, 'localhost', () => {
    console.log('Server is up & working, App is running on port 3002');
})

