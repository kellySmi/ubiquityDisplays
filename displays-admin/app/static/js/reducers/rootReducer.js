
import {combineReducers} from 'redux';  
import displays from './displayReducer';
import clients from './clientReducer';
import sequences from './sequenceReducer';

const rootReducer = combineReducers({
	displays,
	clients,
	sequences
});
export default rootReducer;