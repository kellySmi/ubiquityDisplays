export default class ClientApi{
	static getAllClients(){
		return fetch('api/clients')
        .then(result => result.json())
        .catch(err => {return err;});
        //.then(rowData => this.setState({"rowData":rowData}));
	}
}