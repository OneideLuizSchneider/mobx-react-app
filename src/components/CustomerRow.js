import React from 'react';

const CustomerRow = ({ customer }) => (
  <div>
    <span>CNPJ: {customer.cnpj}</span>, <span>Name: {customer.nome}</span>{" "}
  </div>
);

export default CustomerRow;