import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model} from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
      {
        id: 1,
        title: 'Freelancer WebSite',
        amount: 12000,
        type: 'deposit',
        category: 'DEV',
        createdAt : new Date('2022-04-01 09:00:00')
      },
      {
        id: 2,
        title: 'Aluguel',
        amount: 1200,
        type: 'withdraw',
        category: 'Moradia',
        createdAt : new Date('2022-04-05 12:00:00')
      }
    ]
    }
  )},
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

