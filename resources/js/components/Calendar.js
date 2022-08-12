import React from "react";
import ReactDOM from "react-dom";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

class FullCalendarTodoView extends React.Component {
    calendarComponentRef = React.createRef();
    componentDidUpdate(previousProps, previousState) {
        if (previousProps.newEvent !== this.props.newEvent && Object.keys(this.props.newEvent).length != 0 && !this.props.cancelled) {
            this.setState(prevState => ({
                events: [...prevState.events, this.props.newEvent]
            }));
        }
    }

    state = {
        events: [
            { id: 1, title: "event 1", date: "2019-12-01" },
            {
                title: "event 2",
                start: "2019-12-01",
                end: "2019-12-05",
                allDay: true,
                HostName: "William"
            },
            {
                title: "event 3",
                start: "2019-12-05",
                end: "2019-12-07",
                allDay: true
            },
            {
                title: "event 4",
                start: "2019-12-05",
                end: "2019-12-07",
                allDay: true
            },
            {
                title: "event 5",
                start: "2019-12-05",
                end: "2019-12-07",
                allDay: true
            },
            {
                title: "Lorem Ipsum",
                start: "2022-10-08",
                end: "2022-10-10",
                // date: "2022-10-08",
                allDay: true
            }
        ]
    };

    handleDateClick = arg => {
        alert(arg.dateStr);
    };

    handleSelectedDates = info => {
        alert("selected " + info.startStr + " to " + info.endStr);
        const title = prompt("What's the name of the title");
        console.log(info);
        if (title != null) {
            const newEvent = {
                title,
                start: info.startStr,
                end: info.endStr
            };
            const data = [...this.state.events, newEvent];
            this.setState({ events: data });
            console.log("here", data);
        } else {
            console.log("nothing");
        }
    };

    eventClick = (event) => {
        alert(event.event.title)
        // let myModal = new bootstrap.Modal(document.getElementById('viewTaskModal'), {});
        // var exampleModal = document.getElementById('viewTaskModal')
        // exampleModal.addEventListener('show.bs.modal', function (event) {
        //     // Button that triggered the modal
        //     var button = event.relatedTarget
        //     // Extract info from data-bs-* attributes
        //     var recipient = button.getAttribute('data-bs-whatever')
        //     // If necessary, you could initiate an AJAX request here
        //     // and then do the updating in a callback.
        //     //
        //     // Update the modal's content.
        //     var modalTitle = exampleModal.querySelector('.modal-title')
        //     var modalBodyInput = exampleModal.querySelector('.modal-body input')

        //     modalTitle.textContent = 'New message to ' + recipient
        //     modalBodyInput.value = recipient
        // })
        // myModal.show();
        // console.log(event, viewTaskModal);
    }

    render() {
        return (
            <div>
                <FullCalendar
                    schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                    ref={this.calendarComponentRef}
                    initialView="dayGridMonth"
                    dateClick={this.handleDateClick}
                    displayEventTime={true}
                    selectable={true}
                    plugins={[
                        dayGridPlugin,
                        interactionPlugin,
                        timeGridPlugin,
                        resourceTimeGridPlugin
                    ]}
                    eventClick={event => this.eventClick(event)}
                    events={this.state.events}
                    select={this.handleSelectedDates}
                />
            </div>
        );
    }
}
export default FullCalendarTodoView;