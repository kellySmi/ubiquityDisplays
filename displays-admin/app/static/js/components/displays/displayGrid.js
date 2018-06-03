import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
require('ag-grid/dist/styles/ag-grid.css');
require('ag-grid/dist/styles/ag-theme-bootstrap.css');

class DisplayGrid extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            columnDefs: [
                {headerName: "Display ID", field: "display_id"},
                {headerName: "Display Name", field: "display_name"},
                {headerName: "Client", field: "client_id"},
                {headerName: "Display Type", field: "display_type"},
                {headerName: "Display Sequence", field: "display_sequence"}
            ],
            rowData: []
            /*, modalIsOpen: false*/
        }
        this.editRow =  this.editRow.bind(this);
        this.getContextMenuItems = this.getContextMenuItems.bind(this);
    }
    render() {
        return  (<AgGridReact id="display-grid" columnDefs={this.state.columnDefs} rowData={this.props.displays} />);
    }
}

function mapStateToProps(state){
    return {
        displays : state.displays
    };
}
export default connect(mapStateToProps)(DisplayGrid);
