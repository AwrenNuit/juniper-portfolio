import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

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
          
          <div>
            <Link to={"/edit/"+this.props.item.id}>
              <button className="edit-btn" onClick={()=>this.handleEdit(this.props.item.id)}>EDIT</button>
            </Link>
          </div>

          <div><button className="delete-btn" onClick={()=>this.handleDelete(this.props.item.id)}>DELETE</button></div>
        </div>
      </>
    )
  }
}

export default connect()(AdminArtItem);