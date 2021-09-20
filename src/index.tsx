import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer } from "miragejs";
import { Model } from "miragejs";

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          amount: 12000,
          transactionType: "deposit",
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Casa',
          amount: 1100,
          transactionType: "withdraw",
          createdAt: new Date('2021-02-12 11:00:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
     return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
