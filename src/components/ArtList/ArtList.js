import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtItem from '../ArtItem/ArtItem';

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
        <nav>
          <ul className="art-types-ul">
            <li className="art-types-li">Ceramics</li>
            <li>|</li>
            <li className="art-types-li">Drawing</li>
            <li>|</li>
            <li className="art-types-li">Glass Blowing</li>
            <li>|</li>
            <li className="art-types-li">Painting</li>
            <li>|</li>
            <li className="art-types-li">Sculpture</li>
          </ul>
        </nav>
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