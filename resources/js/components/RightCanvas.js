import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function RightCanvas() {
    const [date, setDate] = useState(new Date());

    return (
        <div>

            <div className='calendar-container d-md-flex justify-content-center'>
                <Calendar onChange={setDate} value={date} nextLabel='→' prevLabel='←' prev2Label='' next2Label='' showWeekNumbers={true} />
            </div>
            <div className='my-5'>
                <h3 className='noticeHead text-primary fw-bold'>Notice Board</h3>
                <div>
                    <div class="card bg-primary mb-2 shadow">
                        <div class="card-body text-white">
                            <div className='d-flex justify-content-lg-between'>
                                <img src='/assets/noticeImg.png' width="83px" height="70px" className='rounded' />
                                <div className='ms-lg-auto p-2 bd-highlight'>
                                    <p className='lh-1 mb-1'>
                                        Activities to be held at lekki center
                                    </p>
                                    <p className='text-inactive opacity-70 mb-0'>By - Chigozie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-primary mb-2 shadow">
                        <div class="card-body text-white">
                            <div className='d-flex justify-content-lg-between'>
                                <img src='/assets/noticeImg.png' width="83px" height="70px" className='rounded' />
                                <div className='ms-lg-auto p-2 bd-highlight'>
                                    <p className='lh-1 mb-1'>
                                        Activities to be held at lekki center
                                    </p>
                                    <p className='text-inactive opacity-70 mb-0'>By - Chigozie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-primary mb-2 shadow">
                        <div class="card-body text-white">
                            <div className='d-flex justify-content-lg-between'>
                                <img src='/assets/noticeImg.png' width="83px" height="70px" className='rounded' />
                                <div className='ms-lg-auto p-2 bd-highlight'>
                                    <p className='lh-1 mb-1'>
                                        Activities to be held at lekki center
                                    </p>
                                    <p className='text-inactive opacity-70 mb-0'>By - Chigozie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}