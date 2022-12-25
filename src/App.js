import './App.css';
import { useSelector } from 'react-redux';
import Likes from './Likes';
import { Title } from './redux/Title';
import Comments from './Comments';
import Spin from './Spin';


function App() {
  const error = useSelector(state => state.appReducer.error)
  console.log('errror', error);
  return (
    <div className="App">
      <div className="wrap">
      <Spin/>
        <div className="card">
          {error && (
            <div className='error-message'>{error}</div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes/>
          </div>
       <Comments/>
    
        </div>
      </div>
    </div>
  );
}

export default App;
