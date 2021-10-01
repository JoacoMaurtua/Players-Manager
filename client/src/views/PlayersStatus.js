import React,{useState,useEffect} from 'react';
import {Row,Col,Table,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const PlayersStatus = ({list,setList}) => {

  const {playerState,setPlayerState} = useState({
    state:''
  })

  //Extraer la data del boton

  //crear una variable que se iguale al className o contenido de los botones
  //una vez que la variable tome como valor el nombre de la clase o contenido del valor Seleccionado
  //le pase ese valor al contenido de state

  return (
    <div>
      <h2>Player Status - Game 1</h2>
      <Table striped>
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>Player Name</th>
                    <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list&&list.map((items, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>
                          <Link to={`/update/${items._id}`}>{items.name}</Link>
                        </td>
                        <td style={{textAlign: 'center'}}>
                            <Row>
                              <Col md={4}>
                                  <Button className="Playing" outline color="primary">Playing</Button>
                              </Col>
                              <Col md={4}>
                                  <Button className="Not playing" outline color="primary">Not playing</Button>
                              </Col>
                              <Col md={4}>
                                  <Button className="Undesided"outline color="primary">Undesided</Button>
                              </Col>
                            </Row>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table> 
    </div>
  );
}

export default PlayersStatus;
