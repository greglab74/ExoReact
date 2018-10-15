// CreateComponent.js

import React, {
  Component
} from 'react';
import axios from 'axios';


export default class CreateProject extends Component {

  constructor(props) {
    super(props);
    this.onChangeHostTitre = this.onChangeHostTitre.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCreateur = this.onChangeCreateur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      titre: '',
      description: '',
      createur: ''
    }
  }
  onChangeHostTitre(e) {
    this.setState({
      titre: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeCreateur(e) {
    this.setState({
      createur: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const serverport = {
      titre: this.state.titre,
      description: this.state.description,
      createur: this.state.createur
    }
    axios.post('http://localhost:4200/serverport/add', serverport)
      .then(res => console.log(res.data));
    this.setState({
      titre: '',
      description: '',
      createur: ''
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
      h3 > Ajouter un projet < /h3> <
      form onSubmit = {
        this.onSubmit
      } >
      <
      div className = "form-group" >
      <
      label > Titre: < /label> <
      input type = "text"
      value = {
        this.state.titre
      }
      className = "form-control"
      onChange = {
        this.onChangeHostTitre
      }
      /> < /
      div > <
      div className = "form-group" >
      <
      label > Description: < /label> <
      input type = "text"
      value = {
        this.state.description
      }
      className = "form-control"
      onChange = {
        this.onChangeDescription
      }
      /> < /
      div > <
      div className = "form-group" >
      <
      label > Createur: < /label>
      <
      select className = "form-control"
      onChange = {
        this.onChangeCreateur
      }><option>New York </option>
	<option>Bucharest</option>
	<option>Madrid</option>< /select> < /
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
