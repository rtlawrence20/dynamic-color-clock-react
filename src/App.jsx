import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
    // need current time and a way to set a 'future' current time
    const [now, setNow] = useState(new Date());

    // start a timer that updates every second
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(interval); //runs when component unmounts: prevent memory leaks
    }, []); //[] effect runs only once, when the component mounts

  return (
    <div className='clock-container'>
        <h1>Current Time</h1>
        <p>
            {format(now, 'MMM do, yyyy')}<br />
            {format(now, 'hh:mm:ss a')}
        </p>
    </div>
  );
};

export default App
