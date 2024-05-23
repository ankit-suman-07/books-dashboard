import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BookProvider } from './context/booksContext';
import { AuthProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider >
        <App />
      </BookProvider>
    </AuthProvider>
  </React.StrictMode>
);