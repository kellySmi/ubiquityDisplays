import * as types from './actionTypes';
import clientApi from '../api/clientApi';

export function loadClients() {
	return function(dispatch){
		return clientApi.getAllClients().then(clients =>{
			dispatch(loadClientsSuccess(clients));
		}).catch(err =>{ 
			throw(err);
		});
	};
}
export function loadClientsSuccess(clients){
	return {type: types.LOAD_CLIENTS_SUCCESS,clients}
}
