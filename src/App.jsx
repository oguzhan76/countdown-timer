import bg_hills from '/pattern-hills.svg';
import bg_stars from '/bg-stars.svg';
import Clock from './components/Clock';

function App() {
  return (
    <div className='main'>
      <img className='bg-stars' src={bg_stars} />  
      <img className='bg-hills' src={bg_hills} />
      <h1>WE&apos;RE LAUNCHING SOON</h1>
      <Clock />
    </div>
  )
}

export default App;