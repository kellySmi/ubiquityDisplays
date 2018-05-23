import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

class DisplayForm extends React.Component {
	constructor(props){
		super(props);
    
	}
  
	render(){
		return ( 
      <form className="modalForm" >
  		  <Grid>
        <Row className="show-grid">
            <Col>
              <h4>Displays</h4>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <label>Display Name
              <input type="text" name="name" onChange={this.props.onChange}/>
              <span></span>
              </label>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <label>Client
                <select name="client" onChange={this.props.onChange}>
                  <option value="1">PJ Whallinass</option>
                  <option value="2">Some Client</option>
                </select>
                <span></span>
              </label>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <label>Type
              <select name="type" onFocus={this.props.onChange}>
                <option value="1">ads</option>
                <option value="2">game</option>
              </select>
               <span></span>
              </label>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <label>Location
              <select name="location" onChange={this.props.onChange}>
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
              </select>
               <span></span>
              </label>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <label>Sequence
              <select name="sequence" onChange={this.props.onChange}>
                <option value="1">Sequence 1</option>
                <option value="2">Sequence 2</option>
              </select>
               <span></span>
              </label>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
            <button type="button" disabled={this.props.saving} className="btn btn-primary" onClick={this.props.onSubmit}>{this.props.saving ? 'Saving...' : 'Save'}</button>
            
            </Col>
          </Row>
        </Grid>
      </form>
      )
	}
}

/*DisplayForm.propTypes = {
  display: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}*/
export default DisplayForm;