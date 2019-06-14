const movies = [
    {title: "Titanic", diretor: "James Cameron", genero: "romance"},
    {title: "A Forma da Água", diretor: "Guilherme del Toro", genero: "Romance"},
    {title: "Que Horas Ela Volta", diretor: "Anna Muylaert", genero: "Drama"},
    {title: "Corra!", diretor: "Jordan Peele", genero: "Terror"},
    {title: "Histórias Cruzadas", diretor: "Tate Taylor", genero: "Drama"},
    {title: "Um Lugar Silencioso", diretor: "John Krasinski", genero: "Terror"},
    {title: "Os Vingadores", diretor: "Joss Whedon", genero: "Ação"}
    
];

title.addEventListener("keyup", function(event) {
    const matchs = movies.filter(value => {
    return value.title.indexOf(this.value) !== -1;
});

list.innerHTML = "";
for (let movie of matchs) {
  list.innerHTML += "<li><a href='"+movie.url+"'>"+movie.title+"</a></li>";
}
});


// let filmes = [
//     {titulo: "as branquelas", idade: 14},
//     {titulo: "os vingadores", idade:16},
//     {titulo: "bastardos inglorios", idade:18},
//     {titulo: "killbill", idade: 25}
//  ];
 
//  let userIdade = prompt("digite sua idade");
//  for ( let indice in filmes){
//     if (userIdade >= filmes[indice].idade){
//         console.log (filmes[indice]. titulo);
//     }
//  }
 
//  in - indice
//  of - valores
//  let filmes = [
//     {titulo: "as branquelas", idade: 14},
//     {titulo: "os vingadores", idade:16},
//     {titulo: "bastardos inglorios", idade:18},
//     {titulo: "killbill", idade: 25}
//  ];
 
//  let userIdade = prompt("digite sua idade");
//  for ( let i in filmes){
//     if (userIdade >= filmes[i].idade){
//         console.log (filmes[i]. titulo);
//     }
//  }
//  for(let j of filmes){
//     if (userIdade >= j.idade){
//         console.log (j.titulo);
//     }
//  }
 
