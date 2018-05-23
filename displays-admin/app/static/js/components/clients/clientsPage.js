import React from 'react';
import PropTypes from 'prop-types';
import {conect} from  'react-redux';
import * as clientActions from '../../actions/clientActions';
import ReactModal from 'react-modal';
import ClientForm from './clientForm'
import ClientGrid from './clientGrid';
import ActionBar from '../common/action-bar';
import {connect} from 'react-redux';
import Config from '../../config'


class ClientsPage extends React.Component {  
  constructor(props){
      super(props);
      this.state = { isOpen: false};
      this.toggleModal = this.toggleModal.bind(this);
    }
  toggleModal(e){
      //this.state.React();
      this.setState({isOpen: !this.state.isOpen, action: e.target.value});
  }
  render() {
    	return  (
          <div className="ag-theme-balham" style={{height: '600px', width: '1000px' }} >
            <ActionBar onButtonClick={this.toggleModal} />
            <ClientGrid clients={this.props.clients}/>
            <ReactModal isOpen={this.state.isOpen} contentLabel="Example Modal"  onRequestClose={this.toggleModal} style={Config.modalStyles}>
              <ClientForm />
            </ReactModal>
          </div>);
  }
}
ClientsPage.propTypes = {};

function mapStateToProps(state, ownProps) {
	return {
		clients: state.clients
	};
} 

export default connect(mapStateToProps)(ClientsPage);  