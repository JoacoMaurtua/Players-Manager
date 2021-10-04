import React,{useState,useEffect} from 'react';
import {Row,Col,Table,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const PlayersStatus = ({list,setList}) => {

  const [playerState,setPlayerState] = useState({
    state:''
  });

  const [activeGreen,setActiveGreen] = useState(false);
  const [activeRed,setActiveRed] = useState(false);
  const [activeYellow, setActiveYellow] = useState(false);
   
  console.log(activeGreen);
  console.log(activeRed);
  console.log(activeYellow);

  useEffect(()=>{
    const verifyAndSetState =()=>{
      if(activeGreen){
        setActiveRed(false);
        setActiveYellow(false);
        setPlayerState({
          state:'Playing'
        })
      }
      else if(activeRed){
        setActiveGreen(false);
        setActiveYellow(false);
        setPlayerState({
          state:'Not playing'
        })
      }
      else if(activeYellow){
        setActiveGreen(false);
        setActiveRed(false);
        setPlayerState({
          state:'Undesided'
        })
      }
    }
    verifyAndSetState();
  },[activeGreen,activeRed,activeYellow]);
    

  //en el lado del controlador crear un arreglo que almacene los estados
  //3 variables si una en true las otras son false

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
                            <Row className="buttonsContainer">
                                <Col md={4}>
                                    <Button
                                      value={activeGreen}
                                      className="Playing" 
                                      outline color="primary"
                                      onClick={()=>setActiveGreen(!activeGreen)}
                                    >Playing</Button>
                                </Col>
                                <Col md={4}>
                                    <Button 
                                      value={activeRed}
                                      className="Not-playing" 
                                      outline color="primary"
                                      onClick={()=>setActiveRed(!activeRed)}
                                    >Not playing</Button>
                                </Col>
                                <Col md={4}>
                                    <Button 
                                      value={activeYellow}
                                      className="Undesided"
                                      outline color="primary"
                                      onClick={()=>setActiveYellow(!activeYellow)}
                                    >Undesided</Button>
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
