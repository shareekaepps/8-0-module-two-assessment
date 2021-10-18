fetch("https://ghibliapi.herokuapp.com/films")

    .then((response)=> {
        return response.json();
    }).then((data) => {
        let movieTitle = data;
        for(let movie of movieTitle){
            console.log(movie.title)
        }

        console.log(movieTitle);
    }).catch((err) => {
        console.log(err);
    });
