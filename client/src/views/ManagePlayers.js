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
      
    </div>
  );
}

export default ManagePlayers;
