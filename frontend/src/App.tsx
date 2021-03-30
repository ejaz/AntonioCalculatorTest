import React from 'react';
import './App.css';
import Calculator from './components/calculator/calculator';
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Calculator />
    </QueryClientProvider>
  );
}

export default App;
