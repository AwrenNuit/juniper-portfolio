import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArtGenre extends Component{

  handleClick = (medium) => {
    this.props.dispatch({type: `GET_MEDIUM`, payload: medium});
  }

  render(){
    return(
      <>
        <nav>
          <ul className="art-types-ul">
            <li className="art-types-li" onClick={()=>this.handleClick('ceramics')}>Ceramics</li>
            <li className="art-types-pipe">|</li>
            <li className="art-types-li" onClick={()=>this.handleClick('drawing')}>Drawing</li>
            <li className="art-types-pipe">|</li>
            <li className="art-types-li"onClick={()=>this.handleClick('glass blowing')}>Glass Blowing</li>
            <li className="art-types-pipe">|</li>
            <li className="art-types-li" onClick={()=>this.handleClick('painting')}>Painting</li>
            <li className="art-types-pipe">|</li>
            <li className="art-types-li" onClick={()=>this.handleClick('sculpture')}>Sculpture</li>
          </ul>
        </nav>
      </>
    )
  }
}

export default connect()(ArtGenre);