import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* rootSaga(){
  yield takeEvery(`ADD_ART`, addArtSaga);
  yield takeEvery(`DELETE_ART`, deleteArtSaga);
  yield takeEvery(`EDIT_ART`, editArtSaga);
  yield takeEvery(`GET_ART`, getArtSaga);
  yield takeEvery(`GET_THIS_ART`, getThisArtSaga);
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

function* deleteArtSaga(action){
  console.log('in DELETE with:', action.payload);
  try{
    yield axios.post(`/portfolio/${action.payload}`);
    yield put({type: `GET_ART`});
  }
  catch(error){
    console.log('error in DELETE', error);
  }
}

function* editArtSaga(action){
  console.log('in PUT with:', action.payload);
  try{
    yield axios.put(`/portfolio/${action.payload}`);
    yield put({type: `GET_ART`});
  }
  catch(error){
    console.log('error in PUT', error);
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

function* getThisArtSaga(action){
  console.log('in GET THIS with:', action.payload);
  try{
    const getResponse = yield axios.get(`/portfolio/${action.payload}`);
    yield put({type: `SEND_THIS_ART`, payload: getResponse.data});
  }
  catch(error){
    console.log('error in GET THIS', error);
  }
}

const artReducer = (state=[], action) => {
  if (action.type === 'SEND_ART'){
      return action.payload;
  }
  return state;
}

const thisArtReducer = (state=[], action) => {
  if (action.type === 'SEND_THIS_ART'){
      return action.payload;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
      artReducer,
      thisArtReducer
}),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));