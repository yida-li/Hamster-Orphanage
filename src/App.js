import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeaderMore from './components/HeaderMore';
import Products from './components/Food';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Navbar/>
      <Header></Header>
      <Title/>
      <UploadForm />
      
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      

      <Products></Products>
      <HeaderMore/>
    </div>
  );
}

export default App;

