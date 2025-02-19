document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    const movies = [
        { title: "Soy Nevenka", img: "https://www.bizcochito.es/Films/Poster/tt30973261.webp", video: "pelicula1.html", category: "pelicula" },
        { title: "Luna de miel con mama", img: "https://th.bing.com/th/id/OIP.JgHCRTTIt251oscy97pKkwAAAA?rs=1&pid=ImgDetMain", video: "pelicula2.html", category: "pelicula" },
        { title: "Yo no soy esa", img: "https://pics.filmaffinity.com/yo_no_soy_esa-281280047-large.jpg", video: "pelicula3.html", category: "pelicula" },
        { title: "Película 4", img: "https://i0.wp.com/rpereznetonline.com.ar/wp-content/uploads/2021/10/1288399.jpg?resize=1096%2C1536", video: "pelicula4.html", category: "serie" },
        { title: "Antes de tí", img: "https://seriesxtra.com/wp-content/uploads/2022/09/Antes-de-ti_8207_poster_de_pelicula0.jpg", video: "pelicula5.html", category: "pelicula" },
        { title: "Película 6", img: "https://image.tmdb.org/t/p/original/aGJkPbMixqD6j0OjbbGouSMbiZO.jpg", video: "pelicula6.html", category: "pelicula" },
        { title: "Película 7", img: "https://image.tmdb.org/t/p/original/aGJkPbMixqD6j0OjbbGouSMbiZO.jpg", video: "pelicula7.html", category: "pelicula" },
        { title: "Película 8", img: "https://image.tmdb.org/t/p/original/aGJkPbMixqD6j0OjbbGouSMbiZO.jpg", video: "pelicula8.html", category: "pelicula" },
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