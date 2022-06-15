import { Modal,Button,Form } from "react-bootstrap";
import { useState } from "react";
import Rating from '@mui/material/Rating';

const EditMovie=({movie,movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setTitle(movie.title)
        setDescription(movie.description)
        setPosterURL(movie.setPosterURL)
        setRating(movie.rating)
    }
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState(movie.title)
    const [description,setDescription] = useState(movie.description)
    const [posterURL,setPosterURL] = useState(movie.posterURL)
    const [rating,setRating] = useState(movie.rating)
    const handleEdit=(id)=> setMovies(movies.map(movie => movie.id == id ? {...movie,title,description,posterURL,rating} : movie))
    return(
       
            
            <>
                <Button  variant="danger" onClick={handleShow} style={{marginLeft: '43px'}}>
                    Edit movie
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" value={title} />                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" value={description} />                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Poster</Form.Label>
                        <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter image URL" value={posterURL} />                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <br/>
                        <Rating
                        name="simple-controlled"
                        onChange={(e)=> setRating(e.target.value)}
                        value={rating}
                    />                     
                    </Form.Group>

                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleEdit(movie.id);handleClose()}}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
   
    )
}

export default EditMovie