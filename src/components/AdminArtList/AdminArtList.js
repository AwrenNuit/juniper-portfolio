import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminArtItem from '../AdminArtItem/AdminArtItem';

class AdminArtList extends Component{

  componentDidMount(){
    this.getArt();
  }

  getArt = () => {
    console.log('in GET');
    this.props.dispatch({type: `GET_ART`});
  }

  render(){
    return(
      <div className="main-map-div">
        {this.props.reduxState.map((item, i) => 
          <AdminArtItem item={item} key={i} i={i} />
        )}
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.artReducer
});

export default connect(putReduxStateOnProps)(AdminArtList);