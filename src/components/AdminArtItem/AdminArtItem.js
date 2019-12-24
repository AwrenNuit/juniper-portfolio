import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import BrushIcon from '@material-ui/icons/Brush';
import RemoveIcon from '@material-ui/icons/Remove';

class AdminArtItem extends Component{

  componentDidUpdate(){
    this.props.dispatch({type: `EDIT_ART`});
  }

  handleDelete = (id) => {
    this.props.dispatch({type: `DELETE_ART`, payload: id});
  }

  handleEdit = (id) => {
    !this.state.edit ? this.setState({edit: true}) : this.setState({edit: false});
  }
  
  render(){
    return(
      <>
        <div className="admin-art-div" key={this.props.i}>
          <img src={this.props.item.photo} alt={this.props.item.name} className="art-img" />
          <div className="art-title">{this.props.item.name}</div>
          <div className="art-medium">{this.props.item.medium}</div>
          <div><Moment format="YYYY">{this.props.item.year}</Moment></div>
          
          <span style={{marginRight:'180px'}}>
            <Tooltip title="Delete" aria-label="delete">
              <Fab color="secondary" aria-label="delete" onClick={()=>this.handleDelete(this.props.item.id)}>
                <RemoveIcon />
              </Fab>
            </Tooltip>
          </span>

          <span>
            <Link to={"/edit/"+this.props.item.id}>
              <Tooltip title="Edit" aria-label="edit">
                <Fab color="primary" aria-label="edit" onClick={()=>this.handleEdit(this.props.item.id)}>
                  <BrushIcon />
                </Fab>
              </Tooltip>
            </Link>
          </span>

        </div>
      </>
    )
  }
}

export default connect()(AdminArtItem);