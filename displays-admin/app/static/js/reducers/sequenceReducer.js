import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sequenceReducer(state=initialState.sequences, action){
	switch(action.type){
		case types.LOAD_SEQUENCES_SUCCESS:
			return action.sequences
		default:
			return state;
	}
}