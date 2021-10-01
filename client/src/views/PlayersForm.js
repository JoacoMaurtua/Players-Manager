import React, {useState, useEffect} from 'react';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label,Row,Col } from 'reactstrap';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const PlayersForm = ({create,update}) => {
  return (
    <div>
      <Card style={{width: '35%', margin:'3rem auto'}}>
            <CardHeader>Formulario</CardHeader>
            <CardBody>
                <Form >
                    <FormGroup>
                        <Label for="tipo">Player Name : </Label>
                        <Input 
                          type="text" 
                          id="tipo"
                          name="name"
                        /> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="tipo">Preferred Position : </Label>
                        <Input 
                          type="text" 
                          id="tipo"
                          name="name"
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
