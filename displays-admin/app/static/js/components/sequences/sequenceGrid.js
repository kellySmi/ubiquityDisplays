import React from 'react';
import ActionBar from '../common/action-bar';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
require('ag-grid/dist/styles/ag-grid.css');
require('ag-grid/dist/styles/ag-theme-bootstrap.css');

class SequenceGrid extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            columnDefs: [{headerName: "Seq ID", field: "sequence_id"},
                {headerName: "Name", field: "sequence_name"},
                {headerName: "Transition type", field: "transition_type"},
                {headerName: "Images", field: "image_list"},
                {headerName: "Image Path", field: "image_loc"}
            ],
            rowData: []
        }
    }
   
    render() {
    return  (<AgGridReact columnDefs={this.state.columnDefs} rowData={this.props.sequences} />);
  }
}
function mapStateToProps(state){
    return {
        sequences : state.sequences
    };
}
export default connect(mapStateToProps)(SequenceGrid);

