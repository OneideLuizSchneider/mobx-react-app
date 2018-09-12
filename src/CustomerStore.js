import axios from "axios";
import { observable, action } from "mobx";

class CustomerStore {
    @observable customers = [];

    @action.bound
    getCustomers() {
        axios
            .get("http://localhost:3000/customer")
            .then(response => (this.customers = response.data))
            .catch(error => console.log(error));
    }

}

export default CustomerStore;