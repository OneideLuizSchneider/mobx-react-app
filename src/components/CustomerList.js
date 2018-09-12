import React, { Component } from 'react';
import CustomerRow from "./CustomerRow";
import { observer } from "mobx-react";

@observer
class CustomerList extends Component {
    componentDidMount() {
        this.props.store.getCustomers();
    }
    render() {
        const { customers } = this.props.store;
        return customers.map(customer => (
            <CustomerRow
                key={customer.id}
                customer={customer}
            />
        ));
    }
}

export default CustomerList;