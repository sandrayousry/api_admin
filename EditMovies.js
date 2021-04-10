import React from 'react';
import {Modal, Button, Row, Col, Form} from  'react-bootstrap';

class EditMovies extends React.Component{
    // constructor(props){
    //     super(props);
    //     // this.handelSudmit =this.handelSubmit.bind(this)
    // }
    // componentDidUpdate(){
    //     this.refreshList();
    // }
   handelSubmit(event){
        event.preventDefault();
        console.log(event.target)
            fetch(`http://hazemmansour.pythonanywhere.com/api/movies/editmovie/${1}`,{
            method:'PUT',
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
                thumbnail_url:event.target.thumbnail_url.value,
                categories:event.target.categories.value,
                duration:event.target.duration.value,
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
            Edit Movie
            </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div className="container">
                     <Row >
                         <Col sm={6}>
                             <Form onSubmit={this.handelSubmit}>

                                     <Form.Group controlId="id">
                                     <Form.Label>MovieId</Form.Label>
                                     <Form.Control type="text" name="id"  placeholder="id" required
                                     disabled
                                     defaultValue={this.props.id}/>
                                     </Form.Group>

                                     <Form.Group controlId="description">
                                     <Form.Label>Description</Form.Label>
                                     <Form.Control type="text" name="description" placeholder="description"
                                     defaultValue={this.props.description}/>
                                     </Form.Group>

                                     <Form.Group controlId="release_date">
                                     <Form.Label>Release date</Form.Label>
                                     <Form.Control type="date" name="release_date"  placeholder="release_date"
                                       defaultValue={this.props.release_date}/> 
                                     </Form.Group>

                                 <Form.Group controlId="title">
                                     <Form.Label>Title</Form.Label>
                                     <Form.Control type="text" name="title"  placeholder="Movietitle" 
                                     defaultValue={this.props.title}/>
                                     </Form.Group>

                                     <Form.Group controlId="rate">
                                     <Form.Label>Rate</Form.Label>
                                     <Form.Control type="text" name="rate"  placeholder="rate" 
                                     defaultValue={this.props.rate}/>
                                     </Form.Group>

                                    <Form.Group controlId="language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" name="language"  placeholder="language" 
                                    defaultValue={this.props.language}/>
                                    </Form.Group>

                                    <Form.Group controlId="thumbnail_url">
                                    <Form.Label>Thumbil url</Form.Label>
                                    <Form.Control type="text" name="thumbnail_url"  placeholder="thumbnail_url" 
                                     defaultValue={this.props.thumbnail_ur}/>
                                    </Form.Group>

                                    <Form.Group controlId="categories">
                                    <Form.Label>Catgory</Form.Label>
                                    <Form.Control type="text" name="categories"  placeholder="categories" 
                                    defaultValue={this.props.categories}/>
                                    </Form.Group>

                                    <Form.Group controlId="video_url">
                                    <Form.Label>Video url</Form.Label>
                                    <Form.Control type="text" name="video_url"  placeholder="video_url" 
                                     defaultValue={this.props.video_url}/>
                                    </Form.Group>

                                    <Form.Group controlId="duration">
                                    <Form.Label>Duration</Form.Label>
                                    <Form.Control type="text" name="duration"  placeholder="duration" 
                                     defaultValue={this.props.duration}/>
                                    </Form.Group>

                                 <Form.Group>
                                     <Button variant="primary" type="submit">
                                         Update Movie

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


export default EditMovies;