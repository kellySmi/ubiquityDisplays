import React from 'react';
import DisplaysPage from '../displays/displaysPage';
import SequencesPage from '../sequences/sequencesPage';
import ClientsPage from '../clients/clientsPage';
import { Nav,NavItem,Tab, Row, Col } from "react-bootstrap";

export default class MainTabs extends React.Component {
	constructor(props) {
        super(props);
    }
    handleSelect(eventKey) {
      //e.preventDefault();
      //alert(`selected ${eventKey}`);
    }
    render(){
  		return (
  			<Tab.Container id="nav-tabs" defaultActiveKey="displays" activeKey={this.props.activeTab} onSelect={key => this.handleSelect(key)}>
          <Row className="clearfix">
            <Col sm={16}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="displays">Displays</NavItem>
                <NavItem eventKey="clients">Clients</NavItem> 
                <NavItem eventKey="seq">Sequences</NavItem>
              </Nav>
            </Col>
            <Col sm={16}>
              <Tab.Content>
                <Tab.Pane eventKey="displays"><DisplaysPage /></Tab.Pane>
                <Tab.Pane eventKey="clients"><ClientsPage /></Tab.Pane>
                <Tab.Pane eventKey="seq"><SequencesPage /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
          )
    }
}
