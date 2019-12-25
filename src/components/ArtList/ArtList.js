import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtItem from '../ArtItem/ArtItem';
import ArtGenre from '../ArtGenre/ArtGenre';

class ArtList extends Component{

  componentDidMount(){
    this.getArt();
  }

  getArt = () => {
    console.log('in GET');
    this.props.dispatch({type: `GET_ART`});
  }

  render(){
    return(
      <>
        <h2>All Art</h2>
        <ArtGenre />
        <div className="main-map-div">
          {this.props.reduxState.map((item, i) => 
            <ArtItem item={item} key={i} i={i} />
          )}
        </div>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.artReducer
});

export default connect(putReduxStateOnProps)(ArtList);