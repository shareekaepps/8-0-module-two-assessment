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

    let form = document.querySelector("titles");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let selectedTitle = e.target["titles"].value;
        if(selectedTitle !== "default" ){
            fetch("https://ghibliapi.herokuapp.com/films/" + selectedTitle)
            .then((response) => response.json())
            .then((data) => {
                let currentTitleEl = document.querySelector("#display-info");

                currentTitleEl.textContent = 

            });
        }
        // console.log(selectedTitle);
    })