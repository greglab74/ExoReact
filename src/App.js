import React, {
  Component
} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditComponent';
import IndexProject from './components/IndexProject';

class App extends Component {
  render() {
    return ( < div className = "container" >
      <
      nav className = "navbar navbar-expand-lg navbar-light bg-light" >
      <
      a className = "navbar-brand" > React Express App < /a> <
      div className = "collapse navbar-collapse"
      id = "navbarSupportedContent" >
      <
      ul className = "navbar-nav mr-auto" >
      <
      li className = "nav-item" >
      <
      Link to = {
        '/'
      }
      className = "nav-link" > Home < /Link> <
      /li> <
      li className = "nav-item" >
      <
      Link to = {
        '/create'
      }
      className = "nav-link" > Créer un user < /Link> <
      /li> <
      li className = "nav-item" >
      <
      Link to = {
        '/index'
      }
      className = "nav-link" > Index user< /Link> <
      /li> <
      li className = "nav-item" >
      <
      Link to = {
        '/edit/:id'
      }
      className = "nav-link" > Edit user< /Link> <
      /li>




      <
      li className = "nav-item" >
      <
      Link to = {
        '/create2'
      }
      className = "nav-link" > Créer un projet < /Link> <
      /li> <
      li className = "nav-item" >
      <
      Link to = {
        '/index2'
      }
      className = "nav-link" > Index projet < /Link> <
      /li> <
      li className = "nav-item" >
      <
      Link to = {
        '/edit2/:id'
      }
      className = "nav-link" > Edit projet< /Link> <
      /li>
      <
      /ul> <
      /div> <
      /nav> <
      Switch >
      <
      Route exact path = '/create'
      component = {
        CreateComponent
      }
      /> <
      Route path = '/edit/:id'
      component = {
        EditComponent
      }
      /> <
      Route path = '/index'
      component = {
        IndexComponent
      }
      />


      <
      Route exact path = '/create2'
      component = {
        CreateProject
      }
      /> <
      Route path = '/edit2/:id'
      component = {
        EditProject
      }
      /> <
      Route path = '/index2'
      component = {
        IndexProject
      }
      /> <
      /Switch> <
      /div>
    );
  }
}

export default App;
