import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css'
import App from './App';

const root = createRoot(document.getElementById('react-container'));
root.render(<App />);