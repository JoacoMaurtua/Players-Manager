import React, {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import ManagePlayers from './views/ManagePlayers';
import PlayersStatus from './views/PlayersStatus';
import Form from './views/Form';

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
        <Switch>
          <Route exact path={`/`}>
            {
              loaded? <ManagePlayers list={data} setList={setData}/>:''
            }
             
          </Route>
          <Route excat path={`/status`}>
              <PlayersStatus/>
          </Route>
          <Route exact path={`/create`}>
            <Form create={true}/>
          </Route>
          <Route exact path={`/update`}>
            <Form update={true}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
