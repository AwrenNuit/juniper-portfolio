import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ArtItem from '../ArtItem/ArtItem';

class ArtList extends Component{

  componentDidMount(){
    this.getArt();
  }

  getArt = () => {
    console.log('in GET');
    axios.get(`/portfolio`)
    .then(response=>{
      console.log('in RESPONSE');
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
        {this.props.reduxState.map((item, i) => 
          <ArtItem item={item} key={i} i={i} />
        )}
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.artReducer
});

export default connect(putReduxStateOnProps)(ArtList);