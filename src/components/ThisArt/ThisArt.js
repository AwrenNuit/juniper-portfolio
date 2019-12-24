import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';

class ThisArt extends Component{

  componentDidMount(){
    this.props.dispatch({type: `GET_THIS_ART`, payload: this.props.match.params.id});
  }

  render(){
    return(
      <>
        {this.props.reduxState.map((item, i)=>
          <div className="this-art-div" key={i}>

            <img className="this-art-img" src={item.photo} alt={item.name} />
            <div className="this-art-title">{item.name}</div>
            <div className="art-medium">{item.medium}</div>
            <div><Moment format="YYYY">{item.year}</Moment></div>
            <div className="this-art-desc">{item.description}</div>
          </div>
        )}
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.thisArtReducer
});

export default connect(putReduxStateOnProps)(ThisArt);