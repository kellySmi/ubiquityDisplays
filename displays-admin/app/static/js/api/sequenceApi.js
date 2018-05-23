export default class SequenceApi{
	static getAllSequences(){
		return fetch('api/sequences')
        .then(result => result.json())
        .catch(err => {return err;});
        //.then(rowData => this.setState({"rowData":rowData}));
	}
}