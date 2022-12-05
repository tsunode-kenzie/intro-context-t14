import './App.css';
import { Componente1 } from './components/Componente1';
import { Componente2 } from './components/Componente2';
import { TestProvider } from './contexts/TestContext';

export const App = () => {
  console.log('teste app')

  return (
    <div className="App">
      <h1>Teste</h1>

      <TestProvider>
        <Componente1 />
        <Componente2 />
      </TestProvider>
    </div>
  );
}