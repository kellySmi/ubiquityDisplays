import React from 'react';
import PropTypes from 'prop-types';
import {conect} from  'react-redux';
import * as sequenceActions from '../../actions/sequenceActions';
import ReactModal from 'react-modal';
import SequenceForm from './sequenceForm'
import SequenceGrid from './sequenceGrid';
import ActionBar from '../common/action-bar';
import {connect} from 'react-redux';
import Config from '../../config'

class SequencesPage extends React.Component {  
	constructor(props){
    super(props);
    this.state = { isOpen: false};
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(e){
      this.setState({isOpen: !this.state.isOpen, action: e.target.value});
  }
  render() {
  	return  (
      <div className="ag-theme-balham" style={{height: '600px', width: '970px' }} >
            <ActionBar onButtonClick={this.toggleModal} />
            <SequenceGrid sequences={this.props.sequences}/>
            <ReactModal isOpen={this.state.isOpen} contentLabel="Example Modal"  onRequestClose={this.toggleModal} style={Config.modalStyles}>
              <SequenceForm />
            </ReactModal>
          </div>);
  }
}
SequencesPage.propTypes = {};

function mapStateToProps(state, ownProps) {
	return {
		sequences: state.sequences
	};
} 

export default connect(mapStateToProps)(SequencesPage);  