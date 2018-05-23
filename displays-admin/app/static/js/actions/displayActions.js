import * as types from './actionTypes';
import displayApi from '../api/displayApi';

export const loadDisplays = () => {
	return function(dispatch){
		return displayApi.getAllDisplays().then(displays =>{
			dispatch(loadDisplaysSuccess(displays));
		}).catch(err =>{ 
			throw(err);
		});
	};
}

export const createDisplay = (display) => {
	return function(dispatch){
		return displayApi.createDisplay(display).then(display =>{
			dispatch(createDisplaySuccess(display));
		}).catch(err =>{ 
			throw(err);
		});
	};
}
export function updateDisplay(display) {
  return function (dispatch) {
    return displayApi.updateDisplay(display).then(responseDisplay => {
      dispatch(updateDisplaySuccess(responseDisplay));
    }).catch(error => {
      throw(error);
    });
  };
}
export function deleteDisplay(display) {
  return function(dispatch) {
    return displayApi.deleteDisplay(display).then(() => {
      console.log(`Deleted ${display.display_id}`)
      dispatch(deleteDisplaySuccess(display));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
export function loadDisplaysSuccess(displays) {
  return {type: types.LOAD_DISPLAYS_SUCCESS, displays};
}
export function updateDisplaySuccess(display) {
  return {type: types.UPDATE_DISPLAY_SUCCESS, display}
}
export function deleteDisplaySuccess(display) {
  return {type: types.DELETE_DISPLAY_SUCCESS, display}
}
export function createDisplaySuccess(display){
	return {type: types.CREATE_DISPLAY_SUCCESS,display}
}
