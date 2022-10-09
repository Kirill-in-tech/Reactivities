import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);      
      setActivities(response.data);
    })
  },[])

  return (
    <div className='App'>
      <Header className='App-header' as='h2' icon = {{name:'users', color: 'teal'}} subheader={{content:'Hello'}} content='Reactivities' />
  
        <List>
            {activities.map((activity: any) => (
            <List.Item key={activity.id}>
            {activity.title}
            </List.Item>
            ))}
        </List>     
                 
    </div>
  );
}

export default App;
 