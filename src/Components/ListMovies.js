import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies,titleF,ratingF})=>{
    var movieToShow = movies.filter(movie => movie.title.toUpperCase().includes(titleF.toUpperCase()) && movie.rating <= ratingF).map(movie=> <CardMovie movie={movie} setMovies={setMovies} movies={movies}/>)
    return(
        <div className="List">
            {
                movieToShow.length == 0 ? <img src="https://unbxd.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdW5ieGQuY29tJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE0JTJGMDIlMkZOby1yZXN1bHRzLWZvdW5kLmpwZyZjYWNoZU1hcmtlcj0xNjE0ODY5NDkxLTk1NDImdG9rZW49Njg1ZmMxY2ZmNzdjYmQ4Mg.q.jpg"/> : movieToShow
            }
        </div>
    )
}

 
export default ListMovies