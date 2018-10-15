// CreateComponent.js

import React, {
  Component
} from 'react';
import axios from 'axios';


export default class CreateComponent extends Component {

  constructor(props) {
    super(props);
    this.onChangeHostName = this.onChangeHostName.bind(this);
    this.onChangePort = this.onChangePort.bind(this);
    this.onChangeTest = this.onChangeTest.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      port: '',
      test: ''
    }
  }
  onChangeHostName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePort(e) {
    this.setState({
      port: e.target.value
    });
  }
  onChangeTest(e) {
    this.setState({
      test: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const serverport = {
      name: this.state.name,
      port: this.state.port,
      test: this.state.test
    }
    axios.post('http://localhost:4200/serverport/add', serverport)
      .then(res => console.log(res.data));
    this.setState({
      name: '',
      port: '',
      test: ''
    })
  }

  render() {
    return ( <
      div style = {
        {
          marginTop: 50
        }
      } >
      <
      h3 > Ajouter un user < /h3> <
      form onSubmit = {
        this.onSubmit
      } >
      <
      div className = "form-group" >
      <
      label > Nom: < /label> <
      input type = "text"
      value = {
        this.state.name
      }
      className = "form-control"
      onChange = {
        this.onChangeHostName
      }
      /> < /
      div > <
      div className = "form-group" >
      <
      label > Age: < /label> <
      input type = "text"
      value = {
        this.state.port
      }
      className = "form-control"
      onChange = {
        this.onChangePort
      }
      /> < /
      div > <
      div className = "form-group" >
      <
      label > Type: < /label> <
      input type = "text"
      value = {
        this.state.test
      }
      className = "form-control"
      onChange = {
        this.onChangeTest
      }
      /> < /
      div ><
      div className = "form-group" >
      <
      input type = "submit"
      value = "Ajouter un user"
      className = "btn btn-primary" / >
      <
      /div> < /
      form > <
      /div>
    )
  }
}
