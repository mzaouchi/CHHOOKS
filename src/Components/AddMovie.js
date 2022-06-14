import { Modal,Button,Form } from "react-bootstrap";
import { useState } from "react";
import Rating from '@mui/material/Rating';

const AddMovie=({setMovies,movies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)
    const addMovie=()=> setMovies([...movies,{title , description  , posterURL , rating, id : Math.random() }])
    return(
    
            <>
                <Button  variant="success" onClick={handleShow} style={{marginLeft: '43px'}}>
                    Add movie
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Poster</Form.Label>
                        <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter image URL" />                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <br/>
                        <Rating
                        name="simple-controlled"
                        onChange={(e)=> setRating(e.target.value)}
                    />                     
                    </Form.Group>

                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{addMovie();handleClose()}}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
      
    )
}

export default AddMovie