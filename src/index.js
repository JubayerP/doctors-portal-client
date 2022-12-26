import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import 'react-day-picker/dist/style.css';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AuthProvider from './context/AuthProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <App />
            <Toaster />
        </AuthProvider>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
