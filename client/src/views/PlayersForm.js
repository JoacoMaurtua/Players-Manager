import React, {useState, useEffect} from 'react';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label,Row,Col } from 'reactstrap';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const PlayersForm = ({create,update}) => {

  const [formInput, setFormInput] = useState({
    name:'',
    position:''
  });

  const handleOnChange =(e)=>{
    const {name,value} = e.target;
    setFormInput({
      ...formInput,
      [name]:value
    })
  };

  const addPlayers=()=>{
    axios.post('api/players/create',formInput)
          .then(res=>{
            if(res.data.data){
              console.log(res.data.data)
            }else{
              alert(res.data.error.message)
            };
          })
          .catch(err=>console.lof(err))
  }

  const handleOnSubmit=e=>{
    e.preventDefault();
    addPlayers();
  }

  return (
    <div>
      <Card style={{width: '35%', margin:'3rem auto'}}>
            <CardHeader style={{fontSize:'1.5rem'}}>Add Player</CardHeader>
            <CardBody>
                <Form onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <Label for="tipo">Player Name : </Label>
                        <Input
                          name="name"
                          value={formInput.name}
                          style={{marginBottom:'1rem'}} 
                          type="text" 
                          id="tipo"
                          onChange={handleOnChange}
                
                        /> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="tipo">Preferred Position : </Label>
                        <Input
                          name="position"
                          value={formInput.position}
                          style={{marginBottom:'1rem'}}  
                          type="text" 
                          id="tipo"
                          onChange={handleOnChange}
                        
                        /> 
                    </FormGroup>
                    <Row style={{marginTop:'1rem'}}>
                      <Col md={6}>
                        {
                          create? <Button type="submit" size="lg" color="success" style={{float:'right'}}>Agregar</Button>:
                          update? <Button type="submit" size="lg" color="success" style={{float:'right'}}>Editar</Button>:''
                        }
                       
                      </Col>
                      <Col md={6}>
                        <Button size="lg" color="danger" style={{float:'left'}}>Cancelar</Button>{' '}
                      </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
      
    </div>
  );
}

export default PlayersForm;
