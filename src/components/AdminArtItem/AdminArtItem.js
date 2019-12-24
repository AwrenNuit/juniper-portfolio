import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminArtItem extends Component{

  state = {
    edit: false
  }

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
    if(!this.state.edit){
      return(
        <>
          <div className="admin-art-div" key={this.props.i}>
            <div><img src={this.props.item.photo} alt={this.props.item.description} /></div>
            <div>{this.props.item.name}</div>
            <div>{this.props.item.medium}</div>
            <div>{this.props.item.year}</div>
            <div><button className="edit-btn" onClick={()=>this.handleEdit(this.props.item.id)}>EDIT</button></div>
            <div><button className="delete-btn" onClick={()=>this.handleDelete(this.props.item.id)}>DELETE</button></div>
          </div>
        </>
      )
    }
    // else{
    //   return(
    //     <>
    //       <div className="admin-art-div" key={this.props.i}>
    //         <div><img src={this.props.item.photo} alt={this.props.item.description} /></div>
    //         <div>{this.props.item.name}</div>
    //         <div>{this.props.item.medium}</div>
    //         <div>{this.props.item.year}</div>
    //         <div><button className="edit-btn" onClick={()=>this.handleEdit(this.props.item.id)}>EDIT</button></div>
    //         <div><button className="delete-btn" onClick={()=>this.handleDelete(this.props.item.id)}>DELETE</button></div>
    //       </div>
    //     </>
      // )
    // }
  }
}

export default connect()(AdminArtItem);