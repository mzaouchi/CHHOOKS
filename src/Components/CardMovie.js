import { useState } from "react";
import { Card,Button} from "react-bootstrap"
import Rating from '@mui/material/Rating';
import EditMovie from "./EditMovie";


const CardMovie=({movie,movies,setMovies})=>{
    const [showMore, setShowMore] = useState(false)
    const handleShow=()=> setShowMore(!showMore)
    const handleDelete=(id)=>  setMovies(movies.filter(movie => movie.id != id))
    return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterURL} style={{width:'286px',height:'389px'}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {showMore ? movie.description : `${movie.description.substring(0, 50)}...`}
                <a className="btn" onClick={handleShow}>{showMore ? 'Show Less' : 'Show More'}</a>
                </Card.Text>
                <Rating name="read-only" value={movie.rating}  readOnly />
                <br/>
                <Button variant="primary" onClick={()=>{handleDelete(movie.id) }}>Delete</Button>
                <EditMovie movie={movie} movies={movies} setMovies={setMovies}/>
            </Card.Body>
            </Card>
    )
}

export default CardMovie