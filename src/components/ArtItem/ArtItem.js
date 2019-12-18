import React, {Component} from 'react';

class ArtItem extends Component{

  render(){
    return(
      <>
        <div key={this.props.i}>
          <div><img src={this.props.item.photo} alt={this.props.item.description} /></div>
          <div>{this.props.item.name}</div>
          <div>{this.props.item.medium}</div>
          <div>{this.props.item.year}</div>
        </div>
      </>
    )
  }
}

export default ArtItem;