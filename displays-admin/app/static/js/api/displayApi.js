export default class DisplayApi{
	static getAllDisplays(){
		return fetch('api/displays')
        .then(result => result.json())
        .catch(err => {return err;});
        //.then(rowData => this.setState({"rowData":rowData}));
	}
	static createDisplay(display){
		const request = new Request('api/display', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify(display)
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
	}
  static updateDisplay(display){
     const request = new Request(`api/display/${display.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({display: display})
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static deleteDisplay(display_id){
     const request = new Request(`api/display/${display_id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({id: display_id})
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}