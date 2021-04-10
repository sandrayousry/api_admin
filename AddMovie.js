import React from 'react';
import {Modal, Button, Row, Col, Form} from  'react-bootstrap';

class AddMovie extends React.Component{
    constructor(props){
        super(props)
    }
    handelSubmit(event){
        event.preventDefault();
            fetch('http://hazemmansour.pythonanywhere.com/api/movies/createmovie',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({
            
                description:event.target.description.value,
                release_date:event.target.release_date.value,
                title:event.target.title.value,
                rate:event.target.rate.value,
                language:event.target.language.value,
                thumbil_url:event.target.thumbil_url.value,
                categories:event.target.categories.value,
                video_url:event.target.video_url.value,
                duration:event.target.duration.value,
                
            })
            })
            .then(res=> res.json())
            .then((result)=>
            {
                alert(result);
            },
            (error)=>{
                alert('Failed')
            }
            
            )
        
    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-model-title-vcenter" centered
            >
            <Modal.Header closeButton>
            <Modal.Title id="contained-model-title-vcenter">
            Add Movie
            </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div className="container">
                     <Row >
                         <Col sm={6}>
                             <Form onSubmit={this.handelSubmit}>

                                 
                             <Form.Group controlId="id">
                                     <Form.Label>MovieId</Form.Label>
                                     <Form.Control type="text" name="id"  placeholder="Id" required />
                                     </Form.Group>

                                     <Form.Group controlId="description">
                                     <Form.Label>Description</Form.Label>
                                     <Form.Control type="text" name="description"  placeholder="Description"
                                      required />
                                     </Form.Group>

                                     <Form.Group controlId="release_date">
                                     <Form.Label>Release date</Form.Label>
                                     <Form.Control type="date" name="release_date"  placeholder="Release_date"
                                      required /> 
                                     </Form.Group>

                                 <Form.Group controlId="title">
                                     <Form.Label>Title</Form.Label>
                                     <Form.Control type="text" name="title"  placeholder="Movietitle" required
                                     />
                                     </Form.Group>

                                     <Form.Group controlId="rate">
                                     <Form.Label>Rate</Form.Label>
                                     <Form.Control type="text" name="rate"  placeholder="Rate" required
                                     />
                                     </Form.Group>

                                    <Form.Group controlId="language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" name="language"  placeholder="Language" required
                                    />
                                    </Form.Group>

                                    <Form.Group controlId="thumbil_url">
                                    <Form.Label>Thumbil url</Form.Label>
                                    <Form.Control type="text" name="thumbil_url"  placeholder="Thumbil_url" required
                                     />
                                    </Form.Group>

                                    <Form.Group controlId="categories">
                                    <Form.Label>Catgory</Form.Label>
                                    <Form.Control type="text" name="categories"  placeholder="Catgory" required
                                    />
                                    </Form.Group>

                                    <Form.Group controlId="video_url">
                                    <Form.Label>Video url</Form.Label>
                                    <Form.Control type="text" name="video_url"  placeholder="Video url" required
                                     />
                                    </Form.Group>

                                    <Form.Group controlId="duration">
                                    <Form.Label>Duration</Form.Label>
                                    <Form.Control type="text" name="duration"  placeholder="Duration" required
                                     />
                                    </Form.Group>


                                 <Form.Group>
                                     <Button  variant="primary" type="submit"  >
                                         Add 

                                     </Button>
                                 </Form.Group>

                             </Form>
                         </Col>

                     </Row>

                 </div>
             </Modal.Body>
             <Modal.Footer>
             <Button variant="danger" onClick={this.props.onHide}>Close</Button>
             
             </Modal.Footer>
            </Modal>
        )
    }
}

export default AddMovie;