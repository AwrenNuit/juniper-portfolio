import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminArtList from "../AdminArtList/AdminArtList";

class Admin extends Component{

  state = {
    name: '',
    medium: '',
    description: '',
    year: '',
    photo: ''
  }

  clearState = () => {
    this.setState({
      name: '',
      medium: '',
      description: '',
      year: '',
      photo: ''
    });
  }

  handleChange = (event, propName) => {
    this.setState({
      ...this.state,
      [propName]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: `ADD_ART`, payload: this.state});
    alert(`Art added!~`);
    this.clearState();
  }

  render(){
    return(
      <>
        <form className="admin-form" onSubmit={this.handleSubmit}>
          <input type="text" className="admin-in"
          onChange={(event)=>this.handleChange(event, 'name')} 
          value={this.state.name}
          placeholder="name" />
          
          <input type="text" className="admin-in"
          onChange={(event)=>this.handleChange(event, 'medium')} 
          value={this.state.medium}
          placeholder="medium" />

          <br />
          
          <input type="text" className="admin-in"
          onChange={(event)=>this.handleChange(event, 'photo')} 
          value={this.state.photo}
          placeholder="photo" />
          
          <input type="number" className="admin-in"
          onChange={(event)=>this.handleChange(event, 'year')} 
          value={this.state.year}
          placeholder="year" />
          
          <br />

          <textarea rows="4" className="admin-in"
          onChange={(event)=>this.handleChange(event, 'description')} 
          value={this.state.description}
          placeholder="description"></textarea>

          <br />

          <button className="admin-btn" type="submit">Add</button>
        </form>
        <AdminArtList />
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.artReducer
});

export default connect(putReduxStateOnProps)(Admin);