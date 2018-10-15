// TableRow.js

import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

class TableRow2 extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('http://localhost:4200/serverport/delete/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }
  render() {
    return ( <
      tr >
      <
      td > {
        this.props.obj._id
      } <
      /td> <
      td > {
        this.props.obj.titre
      } <
      /td> <
      td > {
        this.props.obj.description
      } <
      /td> <
      td > {
        this.props.obj.createur
      } <
      /td> <
      td >
      <
      Link to = {
        "/edit/" + this.props.obj._id
      }
      className = "btn btn-primary" > Edit < /Link> <
      /td> <
      td >
      <
      button onClick = {
        this.delete
      }
      className = "btn btn-danger" > Delete < /button> <
      /td> <
      /tr>
    );
  }
}

export default TableRow2;
