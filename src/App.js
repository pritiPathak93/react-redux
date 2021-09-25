    import {useState} from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import {addBirds, incrementBird} from './store/birds/birds';
    import './App.css';

    function App() {
      const birds = useSelector(state => state.birds);
      const dispatch = useDispatch();
      const [birdName, setBird] = useState('');

      const handleIncrement = (bird) => {
        
        dispatch(incrementBird(bird.name))
        
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBirds(birdName));
        setBird('');
      }

      return (
        <div className="wrapper">
          <h1>Bird List</h1>
          <form onClick={handleSubmit}>
            <label>
              <p>Add Bird</p>
              <input 
                type='text' 
                value={birdName || ''}
                onChange={(e)=>setBird(e.target.value)}
              />
            </label><br /><br />
            <button type='submit' >Add</button>
          </form>
          <ul>
            {birds.map((bird) => (
              <li key={bird.name}>
                <h3>{bird.name}</h3>
                <div>Views : {bird.views}</div>
                <button onClick={() => handleIncrement(bird)}>Add Views</button>
              </li>
            ))}
          </ul>

        </div>
      );
    }

    export default App;
