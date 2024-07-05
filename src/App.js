import React from 'react';
import ClickCounter from './components/ClickCounter';
import TextToggler from './components/TextToggler';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <h1>Exemplos de Componentes React</h1>
      <ClickCounter />
      <TextToggler />
      <TaskList />
    </div>
  );
}

export default App;