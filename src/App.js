import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import FilterMovies from './Components/FilterMovies';
import ListMovies from './Components/ListMovies';
import NavbarMovies from './Components/NavbarMovies';

function App() {
  const [movies,setMovies] = useState([
    {title : "The Father" , description : "Film de Florian Zeller avec Olivia Colman, Anthony Hopkins, Mark Gatiss" , posterURL : "/1.jpg" , rating : 5, id : Math.random()},
    {title : "Nomadland " , description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" , rating : 3 , id : Math.random()},
    {title : "Les Mitchell contre les machines" , description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg" , rating : 2 , id : Math.random()},
    {title : "Zack Snyder's Justice League " , description : "Film de Zack Snyder avec Ben Affleck, Gal Gadot, Henry Cavill" , posterURL : "/4.jpg" , rating : 5 , id : Math.random()}
  ])
  const [titleF,setTitleF] = useState('')
  const [ratingF,setRatingF] = useState(5)
  return (
    <div>
      <NavbarMovies/>
      <br/>
      <AddMovie setMovies={setMovies} movies={movies}/>
      <br/>
      <br/>
      <FilterMovies setTitleF={setTitleF} setRatingF={setRatingF} titleF={titleF} ratingF={ratingF}/>
      <br/>
      <br/>
      <ListMovies movies={movies} setMovies={setMovies} titleF={titleF} ratingF={ratingF}/>
    </div>
  );
}

export default App;
