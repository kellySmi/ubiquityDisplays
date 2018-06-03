import React from 'react';
import PropTypes from 'prop-types';
import * as displayActions from '../../actions/displayActions';
import ReactModal from 'react-modal';
import DisplayForm from './displayForm'
import DisplayGrid from './displayGrid';
import ActionBar from '../common/action-bar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {browserHistory} from 'react-router';

//import Config from '../../config';
 const modalStyles = { "content" : {
            "top" : "50%",
            "left" : "50%",
            "right" : "auto",
            "bottom" : "auto",
            "marginRight" : "-50%",
            "transform": "translate(-50%, -50%)",
            "background" : "#ccc",
            "color" : "#000", 
          },
          "overlay" : {
            "backgroundColor" : "#333"
          }
}; 
ReactModal.setAppElement('#root');
class DisplaysPage extends React.Component {  
    constructor(props){
      super(props);
      this.state = { 
        isOpen: false, 
        display: Object.assign({},this.props.display),
       // displays: [],
        saving: false,
        isEditing: false
      };
      //this.redirect = this.redirect.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.saveDisplay = this.saveDisplay.bind(this);
      this.updateDisplayState = this.updateDisplayState.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      
      if (this.props.display.name != nextProps.display.name) {
        this.setState({display: Object.assign({}, nextProps.display)});
      }
      /*if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
        this.setState({catHobbies: [...nextProps.catHobbies], checkBoxHobbies: [...nextProps.checkBoxHobbies]});
      }*/

      this.setState({saving: false, isEditing: false});
    }
    /*redirect(){
      this.props.history.push('/displays');
    }*/
    toggleModal(){
      //this.state.React();
      this.setState({isOpen: !this.state.isOpen});
    }
    updateDisplayState(event) {
      const field = event.target.name;
      const display = this.state.display;
      display[field] = event.target.value;
      return this.setState({display: display});
    }
    saveDisplay(event){
       event.preventDefault();
       this.setState({saving: true});
       this.props.actions.createDisplay(this.state.display);
       this.toggleModal();
       //this.redirect();
    }
  	render() {
      return  (
          <div className="ag-theme-balham" style={{height: '600px', width: '970px' }} >
            <ActionBar onButtonClick={this.toggleModal} />
            <DisplayGrid />
            <ReactModal isOpen={this.state.isOpen} contentLabel="Example Modal"  onRequestClose={this.toggleModal} style={modalStyles}>
              <DisplayForm onSubmit={this.saveDisplay} onChange={this.updateDisplayState} display={this.state.display}/>

            </ReactModal>
          </div>);
    }
} 
function collectClients(clients,display){

}
DisplaysPage.propTypes = { 
  //display: PropTypes.object.isRequired,
  actions : PropTypes.object.isRequired};

function mapStateToProps(state, ownProps) {
	let display = {name:'', client:1, type:1,location:1, sequence:1 }
  return {
		display:  Object.assign(display, state.display)
	};
} 
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(displayActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplaysPage);  