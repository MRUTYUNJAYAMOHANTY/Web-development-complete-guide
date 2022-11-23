import React, { Component,Children  } from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css';
import {Link} from 'react-router-dom';
import events from './events';
// import ExampleControlSlot from './ExampleControlSlot';
import _ from 'lodash';
import Modal from 'react-modal';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
import Toolbar from './CalendarBlocks/Toolbar';
import EventComponent from './CalendarBlocks/EventComponent';

const DragAndDropCalendar = withDragAndDrop(Calendar)

moment.locale('en', {
  week: {
      dow: 1,
      doy: 1,
  },
});
// moment.locale('en-GB');
const CURRENT_DATE = moment().toDate();

class Calender extends Component {
  constructor(props){
    super(props);
    this.state = {
    events: events,
    viewState: "month",
    events: _.cloneDeep(events),
    dayLayoutAlgorithm: 'no-overlap',
    // isModalOpen:0
    };
    this.moveEvent= this.moveEvent.bind(this);
  }
handleSelect = ({start, end}) => {
  const title = window.prompt('Hey you want to add new event')
  // const title = this.handleOpen;
  if(title){
    this.setState({
      events:[
        ...this.state.events,
        {
          start,end,title,
        },
      ],
    })
  }
}
moveEvent({event, start, end, isAllDay: droppedOnAllDaySlot}){
  const { events } = this.state

  const idx = events.indexOf(event)
  let allDay = event.allDay

  if(!event.allDay && droppedOnAllDaySlot){
    allDay= true
  }
  else if(event.allDay && droppedOnAllDaySlot){
    allDay= false
  }

  const updatedEvent = {...event, start, end, allDay}

  const nextEvents = [...events]
  // const nextEvents = [...events]
  nextEvents.splice(idx, 1, updatedEvent)

  this.setState({
    events: nextEvents
  })
}
resizeEvent = ({ event, start, end }) => {
  const { events } = this.state
  const nextEvents = events.map(existingEvent => {
    return existingEvent.id == event.id
      ? { ...existingEvent, start, end }
      : existingEvent
  })
  this.setState({
    events: nextEvents,
  })
}
getCustomToolbar = (toolbar, filter) => {
    this.toolbarDate = toolbar.date;
    const goToDayView = () => {
      toolbar.onView("day");
      this.setState({ 
        viewState: "day",
    });
    };
    const goToWeekView = () => {
      toolbar.onView("week");
      this.setState({ 
        viewState: "week", 
      });
    };
const goToBack = () => {
    let view = this.state.viewState;
    let mDate = toolbar.date;
    let newDate;
    if (view === "month") {
    newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
    } else if (view === "week") {
    newDate = new Date(
    mDate.getFullYear(),
    mDate.getMonth(),
    mDate.getDate() - 7,
    1
    );
    } else {
    newDate = new Date(
    mDate.getFullYear(),
    mDate.getMonth(),
    mDate.getDate() - 1,
    1
    );
  }
    toolbar.onNavigate("prev", newDate);
};
const goToNext = () => {
    let view = this.state.viewState;
    let mDate = toolbar.date;
    let newDate;
    if (view === "month") {
    newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
    } else if (view === "week") {
    newDate = new Date(
    mDate.getFullYear(),
    mDate.getMonth(),
    mDate.getDate() + 7,
    1
    );
    } else {
    newDate = new Date(
    mDate.getFullYear(),
    mDate.getMonth(),
    mDate.getDate() + 1,
    1
    );
  }
    toolbar.onNavigate("next", newDate);
};

const month = () => {
  const date = moment(toolbar.date);
  // let month = date.format("MMMM");
  return (
    <div className="ToolbarDate">
    <span className="dateMonView">
    {/* <p>{date.format('ddd')},</p> */}
    <p className="MonthName">{date.format('MMMM')}</p></span>
    <p className="yearView">{date.format('YYYY')}</p>
    </div>
  )
};
const day = () => {
  let view = this.state.viewState;
  const date = moment(toolbar.date);
  let day;
  if (view === "day") {
    day = date.format("dddd") + ", " + date.format("Do");
  }
  return (
    <div className="DayViewHeader">
      <p className="DayViewDate">{day}</p>
    </div>
  );
};
const handleViewChange = (event) => {
  this.setState({
      dayView: event.target.value,
  })
}
return (
  <section className="calenderLayout">
       <Toolbar
       goToBack={goToBack}
       goToNext={goToNext}
       month={month()}
       day={day()}
       goToDayView={goToDayView}
       goToWeekView={goToWeekView}
       />   
  </section>
);
};

DateCell = ({range,value,children}) => {
      const now = new Date();
      now.setHours(0,0,0,0);
     
      return (
       <div className={ value < now ? "date-in-past" : "" }>
        { children }
       </div>
      )
    }

getCustomHeader(toolbar){
  const date = moment(toolbar.date);
  return (
    <div className="HeaderDate">
      <p className="DayName">{date.format('ddd')}</p>
      <div className="BorderLineCalendar"></div>
      <p className="DayDate">{date.format('DD')}</p>
    </div>
  )
}
customWeekDayEvent = () => {
  return(
    <section>
      <EventComponent />
    </section>
  )
}
render() {
  const localizer = momentLocalizer(moment);
return (
      <section className="AppointmentCalendar">
        <div className="HeaderSection" >
            <div className="HeaderContent" >
             <div className="backArrowButton">
                 <Link to="/PatientList"><i className="fas fa-arrow-left backArrow"></i></Link>
             </div>
             <h3 className="AllAppointments">all appointments</h3>
             </div>
        </div>
        <DragAndDropCalendar className="calenderLayout" 
        localizer={localizer}
        selectable
        events={this.state.events}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={this.handleSelect}
        dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
        resizable
        onEventResize={this.resizeEvent}
        onEventDrop={this.moveEvent}
        onDragStart={console.log}
        components={{
          toolbar: this.getCustomToolbar,
          timeSlotWrapper:this.DateCell,
          timeGutterHeader: () => {
            return (
              <div className="TimeGutterHeader">
                <span className="settingIcon"><i className="fas fa-cog"></i></span>
              </div>
            )
          },
          week:{
            header: this.getCustomHeader
          },
          event:this.customWeekDayEvent,
        }}
        step={60}
        timeslots={1}
        defaultView="week"
        views={["day", "week"]}
        defaultDate={new Date()}
        scrollToTime={new Date(1970, 1, 1, 6)}
        min={new Date(2020, 9, 0, 9, 0, 0)}
        max={new Date(2020, 6, 0, 18, 0, 0)} 
        />
        <div>
        </div>
      </section>
    )
  }
}
export default Calender;
