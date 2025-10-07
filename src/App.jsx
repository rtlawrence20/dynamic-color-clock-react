import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

/**
 * App displays a real-time clock.
 *
 * useState and useEffect hooks from React are used to track and update the current time
 * format is used from 'date-fns` to gracefully display time and date.
 *
 * @component
 * @returns {JSX.Element} A container with the current formatted date and time
 *
 * @description
 * - `useState` initializes and stores the current Date object.
 * - `useEffect` starts a timer that updates the `now` state every second.
 * - The timer is cleared when component unmounts to prevent memory leaks.
 * - Formatting of date/time is as follows: 
 * - - "MMM do, yyyy" (e.g., Oct 7th, 2025)
 * - - "hh:mm:ss a" (e.g., 05:23:10 PM).
 */
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
