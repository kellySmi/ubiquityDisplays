import React from 'react';
import PropTypes from 'prop-types';
import {conect} from  'react-redux';
import * as displayActions from '../../actions/displayActions';
//import DisplayList from './DisplayList';
import MainTabs from '../common/main-tabs';
import {connect} from 'react-redux';

export default class HomePage extends React.Component {  
  	constructor(props){
  		super(props);
  	}
  	render() {
    	return(
            <div className="col-md-12">
              <div className="col-md-4">
                <MainTabs activeTab={this.props.activeTab} />
              </div>
            </div>
    	);
  }
}