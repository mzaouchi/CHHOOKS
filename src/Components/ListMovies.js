import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies})=>{
    return(
        <div className="List">
            {
                movies.map(movie=> <CardMovie movie={movie} setMovies={setMovies} movies={movies}/>)
            }
        </div>
    )
}


export default ListMovies