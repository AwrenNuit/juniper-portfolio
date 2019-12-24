import React, {Component} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ArtItem extends Component{

  handleClick = (id) => {
    this.props.dispatch({type: `GET_THIS_ART`, payload: id});
  }
  render(){
    return(
      <>
        <div className="art-div" key={this.props.i}>

          <Link to={"/details/"+this.props.item.id}>
            <img  onClick={()=>this.handleClick(this.props.item.id)} 
                  src={this.props.item.photo} 
                  alt={this.props.item.name} 
                  className="art-img"
            />
          </Link>

          <div className="art-title">{this.props.item.name}</div>
          <div className="art-medium">{this.props.item.medium}</div>
          <div><Moment format="YYYY">{this.props.item.year}</Moment></div>
        </div>
      </>
    )
  }
}

export default connect()(ArtItem);