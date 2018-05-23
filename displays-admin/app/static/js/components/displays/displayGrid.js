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
   editRow(){

   }
   getContextMenuItems (params){
    if (!params.node) return [];
    let display_id = params.node.data ? params.node.data.display_id : [];

    let deleteItem = {
        name: "Delete",
        action: () => this.props.actions.deleteDisplay(display_id)
    };

    /*let editItem = {
        name: "Edit",
        action: () => this.props.actions.editDisplay(filePath)
    };*/
    //return params.node.data.file ? [deleteItem] : [editItem, deleteItem];
    return [deleteItem];

};
    render() {
        return  (<AgGridReact id="display-grid" getContextMenuItems={this.getContextMenuItems(this)} columnDefs={this.state.columnDefs} rowData={this.props.displays} />);
    }
}

function mapStateToProps(state){
    return {
        displays : state.displays
    };
}
export default connect(mapStateToProps)(DisplayGrid);
