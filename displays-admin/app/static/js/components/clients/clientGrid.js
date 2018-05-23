import React from 'react';
import ActionBar from '../common/action-bar';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
require('ag-grid/dist/styles/ag-grid.css');
require('ag-grid/dist/styles/ag-theme-balham.css');

class ClientGrid extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            columnDefs: [
                {headerName: "Client ID", field: "client_id"},
                {headerName: "Client Name", field: "client_name"},
                {headerName: "Client Email", field: "client_email"},
                {headerName: "Address", field: "address"}
            ],
            rowData: []
        }
    }
    render() {
    return  (<AgGridReact columnDefs={this.state.columnDefs} rowData={this.props.clients} />);
  }
}
function mapStateToProps(state){
    return {
        clients : state.clients
    };
}
export default connect(mapStateToProps)(ClientGrid);
