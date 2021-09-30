import React from 'react';
import {Link} from "react-router-dom";
import {Row,Col,Table,Button} from 'reactstrap';
import axios from 'axios';
//import Swal from 'sweetalert2';

const ManagePlayers = ({list,setList}) => {
  return (
    <div className="mainContainer">
      <Link to={`/create`}>
          <h3>Manage players</h3>
      </Link>
      <Link to={'/status'}>
          <h3>Manage player Status</h3>
      </Link>
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
                        <td style={{textAlign: 'center'}}>{items.name}</td>
                        <td style={{textAlign: 'center'}}>{items.position}</td>
                        <td style={{textAlign: 'center'}}>
                            <Row>
                              <Col md={12}>
                                  <Button color="danger">Eliminar</Button>
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
