import { useState } from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  const hello = 'Hello guys';
  const [count, setCount] = useState(25);

  const changeCount = (e) => {
    console.log(e.target.value);
    setCount(e.target.value);
  }

  return (
    <>
      <div className='App'>
        <h1>This a React App</h1>
        <Person changeCount={changeCount} name='Binh' age={count} hello={hello}> (Developer)</Person>
        <button onClick={() => setCount(count+1)}>Count Age</button>
      </div>
    </>
  );
}

export default App;
