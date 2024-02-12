import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPositions } from './store/positions/positions-actions'
import data from './mockup/data.json';
import { Header } from './components/Header';
import { JobList } from './components/JobList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const featuredPos = data.filter((pos) => pos.featured === true);
    const otherPos = data.filter((pos) => pos.featured === false);
    const totalPos = featuredPos.concat(otherPos);
    dispatch(addPositions(totalPos));
  });

  return (
    <div className="App">
      <Header />
      <JobList />
    </div>
  );
}

export default App;
