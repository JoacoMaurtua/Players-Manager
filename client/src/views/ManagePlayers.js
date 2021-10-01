import React from 'react';
import {Link} from "react-router-dom";
import {Row,Col,Table,Button} from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManagePlayers = ({list,setList}) => {

  //ALERTA DE ELIMINACION
  const deletePlayer =id=>{
    Swal.fire({
      title:'Alert',
      text:'Are you sure you want to delete this player?',
      icon:'warning',
      showCancelButton:true
    }).then(result=>{
      if(result.value){
        axios.delete(`/api/players/delete/${id}`)
        .then(res=>{
          const newPlayerssList = list.filter((newPlayerssList) => newPlayerssList._id !== id)
          setList(newPlayerssList);
        })
        .catch(error => Swal.fire({
          icon:'error',
          title:'Error al eliminar',
          text:'Se produjo un error al eliminar'
        }))
      }
    })
   
  }

  return (
    <div className="mainContainer">
      
      <Table striped>
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>Player Name</th>
                    <th style={{textAlign: 'center'}}>Preferred Position</th>
                    <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list&&list.map((items, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>
                          <Link to={`/update/${items._id}`}>{items.name}</Link>
                        </td>
                        <td style={{textAlign: 'center'}}>{items.position}</td>
                        <td style={{textAlign: 'center'}}>
                            <Row>
                              <Col md={12}>
                                  <Button color="danger" onClick={e => deletePlayer(items._id)}>Eliminar</Button>
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

export default ManagePlayers;
