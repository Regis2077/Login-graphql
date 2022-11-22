import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import { Home, Login } from './pages';

function App() {

  return (
    <div className="wrapper">
      <ApolloProvider client={client}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/home" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
        
    </div>
  );
}
export default App;
