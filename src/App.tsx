import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { StorageManager, StorageImage } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { ListAllOutput } from 'aws-amplify/storage';

import { uploadData } from 'aws-amplify/storage';

function App() {
  
  
  return (
    <>
      <StorageManager
        acceptedFileTypes={['image/*']}
        accessLevel="guest" 
        maxFileCount={1}
        path=""
        />

        <StorageImage alt="cat" imgKey="cat.jpg" accessLevel="guest" />
        
      
    </>
  );
}

export default App;
