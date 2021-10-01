import React, {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import ManagePlayers from './views/ManagePlayers';
import PlayersStatus from './views/PlayersStatus';
import PlayersForm from './views/PlayersForm';
import {Link} from "react-router-dom";

function App() {

  const [data,setData] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('/api/players')
         .then(res=>{
           setData(res.data.data)
           setLoaded(true);
         })
  },[]);

  console.log(data)


  return (
    <div className="App">
     
      <Router>
        <div className="manageTitles">
              <Link to={`/`}>
                  <h3>Manage players</h3>
              </Link>
              <Link to={'/status'}>
                  <h3>Manage player Status</h3>
              </Link>
        </div>
        <div className="listTitles">
          <Link to={`/`}>
                <h4>List</h4>
            </Link>
            <Link to={'/create'}>
                <h4>Add player</h4>
            </Link>
        </div>
        <Switch>
          <Route exact path={`/`}>
            {
              loaded? <ManagePlayers list={data} setList={setData}/>:''
            }
             
          </Route>
          <Route excat path={`/status`}>
              <PlayersStatus list={data} setList={setData}/>
          </Route>
          <Route exact path={`/create`}>
            <PlayersForm create={true}/>
          </Route>
          <Route exact path={`/update/:id`}>
            <PlayersForm update={true}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
