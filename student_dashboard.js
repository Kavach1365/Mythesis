import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './StudentDashboard.css';
//import "./App.css";

// Dummy data for the student's current thesis and progress
const currentThesis = {
  title: 'Your Thesis Title',
  guide: 'Your Guide Name',
};

const progressData = [
  { step: 1, label: 'Proposal', completed: true },
  { step: 2, label: 'Literature Review', completed: false },
  { step: 3, label: 'Data Collection', completed: false },
  { step: 4, label: 'Proposal', completed: true },
  { step: 5, label: 'Literature Review', completed: false },
  { step: 6, label: 'Data Collection', completed: false },
  // Add more steps as needed
];

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

export const StudentDashboard=()=> {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
      <div>
          <div className="card-container">
        {/* My Current Thesis */}
        <div className="card" style={{ minWidth: '400px' }}>
          <div className="card-header">
            <h1 className="h3 mb-4 text-white">My Current Thesis</h1>
          </div>
          <div className="card-body">
            <p>Thesis Title: {currentThesis.title}</p>
            <p>Guide: {currentThesis.guide}</p>
          </div>
        </div>

        <div className="calender-card" style={{ height: 500,width:300, margin: "50px" }}>
            <h2>Calendar</h2>
            <h3>Add New Event</h3>
            <div className="calender-body">
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 400,marginTop:50}} />
        </div>

      </div>
      

      

      <div className="card" style={{   }}>
        <div className="card-header">
          <h2 className="h4 mb-4">Progress Tracking</h2>
        </div>
        <div className="card-body">
          <ul className="stepper">
            {progressData.map((step, index) => (
              <li key={step.step} className={`step ${step.completed ? 'completed' : ''} ${index === progressData.length - 1 ? 'last-step' : ''}`}>
                {index > 0 && <div className="line"></div>}
                <div className="step-number">{step.step}</div>
                <div className="step-label">{step.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
}

//export default App;