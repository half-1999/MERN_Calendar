// import React, { useRef, useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import AddEventModal from './AddEventModal';
// import axios from 'axios';
// import moment from 'moment';

// const Calendar = () => {
      
//     const [modalOpen, setModalOpen] = useState(false);
//     const [events, setEvents] = useState([]);
//     const calendarRef = useRef();

//     const onEventAdded = event => {
//         let calendarApi = calendarRef.current.getApi(); // Remove 'this.'
//         calendarApi.addEvent(event);
//     }

//     const handleEventAdd = async(data)=>{	
//             await axios.post('/api/calendar/create-event', data.event)	
//     }

//     const handleDatesSet = async(data)=>{	
//         const response = await axios.get('api/calendar/get-events?starts'+moment(data.start).toISOString()+'&end'+moment(data.end).toISOString())	
//         setEvents(response.data);
//     }
//     return (
//         <section>
//             <button onClick={() => setModalOpen(true)}>Add Event</button>
//             <div style={{ position: 'relative', zIndex: 0 }}>
//                 <FullCalendar
//                     ref={calendarRef}
//                     events={events}
//                     plugins={[dayGridPlugin]}
//                     initialView="dayGridMonth"
//                     eventAdd={event => handleEventAdd(event)}
//                     datesSet={(date)=>handleDatesSet(date)}
//                 />
//             </div>

//             <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={e => onEventAdded(e)} />
//         </section>
//     )
// }

// export default Calendar;


import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from './AddEventModal';
import axios from 'axios';
import moment from 'moment';

const Calendar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef();

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate(),
            title:event.title
        });
    }

    const handleEventAdd = async (data) => {
        // await axios.post('/api/calendar/create-event', data);
        // console.log(data)
    }

    const handleDatesSet = async data => {
        // const response = await axios.get(
        //     '/api/calendar/get-events?start=' + moment(data.start).toISOString() +
        //     '&end=' + moment(data.end).toISOString()
        // );
        // setEvents(response.data);
    }

    return (
        <section>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
            <div style={{ position: 'relative', zIndex: 0 }}>
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    eventAdd={event => handleEventAdd(event)}
                    datesSet={date => handleDatesSet(date)}
                />
            </div>

            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={e => onEventAdded(e)} />
        </section>
    )
}

export default Calendar;
