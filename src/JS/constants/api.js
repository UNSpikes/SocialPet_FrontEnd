import axios from 'axios';

export function GET(path, auth) {
	if (auth) {
		return axios({
			method: "GET",
			url: "http://localhost:4200/" + path,
			headers: {
				Authorization: localStorage.getItem("jwt")
			}
		});
	} else {
		return axios.get('http://localhost:4200/' + path)
	}
}

export function POST(path, params) {
	return axios.post('http://localhost:4200/' + path)
}

export const serverLink = 'http://localhost:4200/';

export function RM_SESION() {
	localStorage.setItem("IsLogged", false);
	localStorage.setItem("jwt", "");
	localStorage.setItem("UsrID", "");
	localStorage.setItem("UsrName", "");
	localStorage.setItem("UsrLastName", "");
	localStorage.setItem("UsrProfile", false);
	return "Sesion eliminada";
}

export function ADD_SESION(token) {
  localStorage.setItem("jwt", token);
  localStorage.setItem("IsLogged", true);
  GET("/users/current", true).then( (res)=> {
    localStorage.setItem("UsrID", res.data.id);
    localStorage.setItem("UsrName", res.data.name);
    localStorage.setItem("UsrLastName", res.data.last_name);
  });
	return "Sesion creada"
}