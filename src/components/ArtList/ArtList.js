import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArtList extends Component{

  getArt = () => {
    axios.get(`/art`)
    .then(response=>{
      this.props.dispatch({type: `SEND_ART`, payload: response.data});
    })
    .catch(error=>{
      alert(`error getting art from database`);
      console.log('error in GET', error);
    });
  }

  render(){
    return(
      <>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.OBJECT
});

export default connect(putReduxStateOnProps)(ArtList);