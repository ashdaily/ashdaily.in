import React from 'react';

import { Container } from "react-bootstrap";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation";


function App() {
  return (
    <Container fluid id="page-body" className="p-0">
      <Navigation />
    </Container>
  );
}

export default App;
