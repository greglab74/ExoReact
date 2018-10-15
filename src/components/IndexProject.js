// IndexComponent.js

import React, {
  Component
} from 'react';
import axios from 'axios';
import TableRow2 from './TableRow2';

export default class IndexProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serverports: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4200/serverport')
      .then(response => {
        this.setState({
          serverports: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.serverports.map(function(object, i) {
      return <TableRow2 obj = {
        object
      }
      key = {
        i
      }
      />;
    });
  }

  render() {
    return ( <
      div className = "container" >
      <
      table className = "table table-striped" >
      <
      thead >
      <
      tr >
      <
      td > ID < /td> <
      td > Titre < /td> <
      td > Description < /td> <
      td > Createur < /td>< /
      tr > <
      /thead> <
      tbody > {
        this.tabRow()
      } <
      /tbody> < /
      table > <
      /div>
    );
  }
}
