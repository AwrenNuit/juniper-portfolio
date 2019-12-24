import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminArtList from "../AdminArtList/AdminArtList";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';


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
          <h2>Add Some Art!</h2>
          
          <TextField  id="outlined-basic" 
                      label="name" 
                      variant="outlined" 
                      onChange={(event)=>this.handleChange(event, 'name')} 
                      value={this.state.name} 
                      style={{margin:'10px'}}
          />

          <TextField  id="outlined-basic" 
                      label="medium" 
                      variant="outlined" 
                      onChange={(event)=>this.handleChange(event, 'medium')} 
                      value={this.state.medium} 
                      style={{margin:'10px'}}
          />

          <br />

          <TextField  id="outlined-basic" 
                      label="photo" 
                      variant="outlined" 
                      onChange={(event)=>this.handleChange(event, 'photo')} 
                      value={this.state.photo} 
                      style={{margin:'10px'}}
          />
          
          <TextField  id="outlined-basic" 
                      label="year (2020-01-01)" 
                      variant="outlined" 
                      onChange={(event)=>this.handleChange(event, 'year')} 
                      value={this.state.year} 
                      style={{margin:'10px'}}
          />
          
          <br />

          <TextField  id="outlined-basic" 
                      label="description" 
                      variant="outlined" 
                      onChange={(event)=>this.handleChange(event, 'description')} 
                      value={this.state.description} 
                      style={{margin:'10px'}}
                      multiline
          />

          <br />
          <br />

          <Tooltip title="Add" aria-label="add">
            <Fab color="primary" aria-label="add" type="submit">
              <AddIcon />
            </Fab>
          </Tooltip>

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