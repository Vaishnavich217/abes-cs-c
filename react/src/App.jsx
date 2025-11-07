import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div id="row">
      <Navbar />
      <Card name="Pizza" edu="$58.9" img="" />
      <br />
      <Card name="Sohan" edu="12 class" />
      <br />
      <Card name="Pulkit" edu="10 class" />
    </div>
  );
}

export default App