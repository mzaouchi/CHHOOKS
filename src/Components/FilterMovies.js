import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';

const FilterMovies=({setTitleF,setRatingF,titleF,ratingF})=>{
    const resetFilter=()=>{setTitleF('');setRatingF(5)}
    return(
        <div>
           <input type='text' onChange={(e)=> setTitleF(e.target.value)} value={titleF}/>
           <Rating name="simple-controlled" onChange={(e)=>setRatingF(e.target.value)} value={ratingF}/>    
           <Button variant="warning" onClick={resetFilter}>Reset</Button>      

        </div>
    )
}

export default FilterMovies