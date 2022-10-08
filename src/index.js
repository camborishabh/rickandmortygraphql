import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient,
  ApolloProvider, //component to connect react with gql
  InMemoryCache} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", //this is telling us that this is our endpoint
  cache: new InMemoryCache(), //after making one memory, if we'll create same query again, it will hit the cache and not the gql server again 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApolloProvider client={client} > 
       <App />
      </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
