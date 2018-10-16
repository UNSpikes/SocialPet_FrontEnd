
export class Validate{

	constructor (value, number){
		this.value = value;
		this.number = number;
	}
	
	isEmpty_v(){
		if (!this.value){
			return false;	
		}else{
			return true;
		}
	}

	name_v(){
		if (!this.value.match(/^[a-zA-Z ]*$/)){
			return false;
		}else{
			return true;
		}
	}

	email_v(){
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.value)) {
        	return false;
        }else{
        	return true;
        }
	}

	lenght_v(){
		if (this.value < this.number){
			return false;
		}else{
			return true;
		}
	}

	get email(){
		return this.email_v();
	}

	get name(){
		return this.name_v();
	}

	get lenght(){
		return this.lenght_v();
	}

	get isEmpty(){
		return this.isEmpty_v();
	}


}