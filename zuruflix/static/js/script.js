document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    const movies = [
        { title: "Soy Nevenka", img: "https://www.bizcochito.es/Films/Poster/tt30973261.webp", video: "pelicula1.html", category: "pelicula" },
        { title: "Antes de tí", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/20d5708d15616c1cacb57351d47118756a5abd3037583b62b8ebe44525ae54d9._RI_TTW_.jpg", video: "pelicula2.html", category: "pelicula" },
        { title: "Yo no soy esa", img: "https://pics.filmaffinity.com/yo_no_soy_esa-281280047-large.jpg", video: "pelicula3.html", category: "pelicula" },
        { title: "Lilo & Sitch", img: "https://lumiere-a.akamaihd.net/v1/images/image_01f8d16d.jpeg?region=0,0,540,810", video: "pelicula4.html", category: "pelicula" },
        { title: "Un sueño posible", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/02e4fbb2178496292dadddafa79f12ef61b406fb44b3c48a1fc13aa7b06424ba._RI_V_TTW_.jpg", video: "pelicula5.html", category: "pelicula" },
        { title: "Karate Kid Leyends", img: "https://www.noticiasgobierno.com/wp-content/uploads/2024/12/Karate-Kid-Leyendas.jpg", video: "pelicula6.html", category: "pelicula" },
        { title: "28 años después", img: "https://es.web.img3.acsta.net/img/5c/f3/5cf309bb27c25dd8a20548e7e6ae9d94.jpg", video: "pelicula7.html", category: "pelicula" },
        { title: "Jurassic World: El Renacer", img: "https://tse4.mm.bing.net/th/id/OIP.BMWnaisMhN0jx6mbJmqjFQHaK-?rs=1&pid=ImgDetMain&o=7&rm=3", video: "pelicula8.html", category: "pelicula" },
        { title: "Película 9", img: "https://image.tmdb.org/t/p/original/aGJkPbMixqD6j0OjbbGouSMbiZO.jpg", video: "pelicula9.html", category: "pelicula" },
        { title: "Película 10", img: "https://image.tmdb.org/t/p/original/aGJkPbMixqD6j0OjbbGouSMbiZO.jpg", video: "pelicula10.html", category: "pelicula" }
    ];

    movies.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("item", movie.category);
        div.innerHTML = `<a href="${movie.video}"><img src="${movie.img}" alt="${movie.title}"><p>${movie.title}</p></a>`;
        gallery.appendChild(div);
    });
});

function mostrarTodo() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = 'block';
    });
}

function filtrarContenido(tipo) {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (item.classList.contains(tipo)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}