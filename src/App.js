import { useState } from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  const hello = 'Hello guys';
  const [count, setCount] = useState(25);

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);

  const changeCount = (e) => {
    console.log(e.target.value);
    setCount(e.target.value);
  }

  const Add = () => {
    setJobs(prev => [...prev, job]);
    setJob('');
  }


  return (
    <>
      <div className='App'>
        <h1>This a React App</h1>
        <Person changeCount={changeCount} name='Binh' age={count} hello={hello}> (Developer)</Person>
        <button onClick={() => setCount(count+1)}>Count Age</button>

        <input value={job} onChange={e =>setJob(e.target.value)} />
        <button onClick={Add}>Add</button>

        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
