let review = document.querySelector("#yreview");
let film = document.querySelector("#release-date");
let year = document.querySelector("#description");
let currMovie = document.querySelector("#titles-select");

fetch("https://ghibliapi.herokuapp.com/films")
    .then((response)=> {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
    })
    
        for(let movie of currMovie) {
            let option = document.createElement("option");
            option.setAttribute("el", movie.title);
            option.textContent = movie.title;
            currMovie.append(option);
        }
        let currSele = "";
        currMovie.addEventListener("input", () => {
            for(let movie of currMovie) {
                if(currMovie.value === movie.title) {
                    currSele = movie;

                    titlesSelect.textContent = movie.title;
                    film.textContent = movie.release_date;
                    year.textContent = movie.description;
                }
            }
        })
        let form = document.querySelector("#submit")
        form.addEventListener("click", e => {

            //line 33 event listener not being read -- will continue to work on it
            e.preventDefault();
        }) 
    