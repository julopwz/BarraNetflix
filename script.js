const movies = [
    {title: "Titanic", diretor: "James Cameron", genero: "romance"},
    {title: "A Forma da Água", diretor: "Guilherme del Toro", genero: "Romance"},
    {title: "Que Horas Ela Volta", diretor: "Anna Muylaert", genero: "Drama"},
    {title: "Corra!", diretor: "Jordan Peele", genero: "Terror"},
    {title: "Histórias Cruzadas", diretor: "Tate Taylor", genero: "Drama"},
    {title: "Um Lugar Silencioso", diretor: "John Krasinski", genero: "Terror"},
    {title: "Os Vingadores", diretor: "Joss Whedon", genero: "Ação"}
    
];

// const title = document.getElementById("Titanic");
// const title = document.getElementById("A Forma da Água");
// const title = document.getElementById("Corra!");
// const title = document.getElementById("Histórias Cruzadas");
// const title = document.getElementById("Um Lugar Silencioso");
// const title = document.getElementById("Que Horas ela Volta");
// const title = document.getElementById("Os Vingadores");

const list = document.getElementById("movies");
const title = document.getElementById("title");

title.addEventListener("keyup", function(event) {
    const matchs = movies.filter(value => {
    return value.title.indexOf(this.value) !== -1;
});

list.innerHTML = "";
for (let movie of matchs) {
  list.innerHTML += "<li><a href='"+movie.url+"'>"+movie.title+"</a></li>";
}
});