import React from "react";
import CustomerList from "./components/CustomerList";
import CustomerStore from "./CustomerStore";

const customerStore = new CustomerStore();

const App = () => (
  <div>
    <CustomerList store={customerStore} />
  </div>
);

export default App;