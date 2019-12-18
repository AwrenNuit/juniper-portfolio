import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* rootSaga(){
  yield takeEvery(`GET_ART`, getArtSaga);
  yield takeEvery(`ADD_ART`, addArtSaga);
}

function* addArtSaga(action){
  console.log('in POST with:', action.payload);
  try{
    yield axios.post(`/portfolio`, action.payload);
    yield put({type: `GET_ART`});
  }
  catch(error){
    console.log('error in POST', error);
  }
}

function* getArtSaga(){
  console.log('in GET');
  try{
    const getResponse = yield axios.get(`/portfolio`);
    yield put({type: `SEND_ART`, payload: getResponse.data});
  }
  catch(error){
    console.log('error in GET', error);
  }
}

const artReducer = (state=[], action) => {
  if (action.type === 'SEND_ART'){
      return action.payload
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
      artReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
