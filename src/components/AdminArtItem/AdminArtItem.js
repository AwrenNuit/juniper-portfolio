import React, {Component} from 'react';

class AdminArtItem extends Component{

  handleDelete = () => {

  }

  handleEdit = () => {

  }
  
  render(){
    return(
      <>
        <div className="admin-art-div" key={this.props.i}>
          <div><img src={this.props.item.photo} alt={this.props.item.description} /></div>
          <div>{this.props.item.name}</div>
          <div>{this.props.item.medium}</div>
          <div>{this.props.item.year}</div>
          <div><button className="edit-btn" onClick={this.handleEdit}>EDIT</button></div>
          <div><button className="delete-btn" onClick={this.handleDelete}>DELETE</button></div>
        </div>
      </>
    )
  }
}

export default AdminArtItem;