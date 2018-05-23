import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function displayReducer(state=initialState.displays, action){
	switch(action.type){
		case types.LOAD_DISPLAYS_SUCCESS:
			//return action.displays
			return Object.assign([], state, action.displays)
		case types.CREATE_DISPLAY_SUCCESS: 
			return [ ...state.filter(display=> name !== action.name), Object.assign({}, action.display)];
		case types.UPDATE_DISPLAY_SUCCESS: 
			return [ ...state.filter(display=> display_id !== action.display_id), Object.assign({}, action.display)];
		case types.DELETE_DISPLAY_SUCCESS: 
			const newState = Object.assign([], state);
      		const indexOfDisplayToDelete = state.findIndex(display => {return display.display_id == action.display.display_id})
      		newState.splice(indexOfDisplayToDelete, 1);
      		return newState;
		default:
			return state;
	}
}