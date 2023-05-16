import bg_hills from '/pattern-hills.svg';
import bg_stars from '/bg-stars.svg';
import Clock from './components/Clock';

function App() {
  const now = new Date()
  // this is solely to match with the design.
  now.setMilliseconds(now.getMilliseconds() + (9 * 24*3600*1000) - (4 * 60000) - (18 * 1000) );
  const deadline = new Date(import.meta.env.VITE_DEADLINE || now);

  return (
    <div className='main'>
      <img className='bg-stars' src={bg_stars} />  
      <img className='bg-hills' src={bg_hills} />
      <h1>{import.meta.env.VITE_HEADLINE}</h1>
      <Clock deadline={deadline}/>
      <div className='socials-section'>
        <span className='facebook-button' /> 
        <span className='pinterest-button' />
        <span className='instagram-button' />
      </div>
    </div>
  )
}

export default App;