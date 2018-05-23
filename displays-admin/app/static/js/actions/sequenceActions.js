import * as types from './actionTypes';
import sequenceApi from '../api/sequenceApi';

export function loadSequences() {
	return function(dispatch){
		return sequenceApi.getAllSequences().then(sequences =>{
			dispatch(loadSequencesSuccess(sequences));
		}).catch(err =>{ 
			throw(err);
		});
	};
}
export function loadSequencesSuccess(sequences){
	return {type: types.LOAD_SEQUENCES_SUCCESS,sequences}
}
