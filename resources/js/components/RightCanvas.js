import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
export default function RightCanvas(props) {
    
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState(null);
    const [kids, setKids] = useState([]);
    
    useEffect(() => {
        // Anything in here is fired on component mount.
        let type = localStorage.getItem('type');
        setType(type);
        let localKids = localStorage.getItem('kids');
        let user = localStorage.getItem('user');
        localKids = JSON.parse(localKids);
        user = JSON.parse(user);
        let myKids = type == "parent" ? localKids.filter(el => el.parent_id == user.id) : null;
        setKids(myKids)
    }, []);
    console.log(kids);
    return (
        <div>

            <div className='calendar-container d-md-flex justify-content-center'>
                <Calendar onChange={setDate} value={date} nextLabel='→' prevLabel='←' prev2Label='' next2Label='' showWeekNumbers={true} />
            </div>
            <div className='my-5 noticeLg'>
                <h3 className={`noticeHead fw-bold ${type == "staff" ? "text-primary" : "text-pink"}`}>{type == "staff" ? "Notice Board" : "Activities"}</h3>
                <div>
                    <div class={`card mb-2 shadow ${type == "staff" ? "bg-primary" : "bg-pink"}`}>
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
                    <div class={`card mb-2 shadow ${type == "staff" ? "bg-primary" : "bg-pink"}`}>
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
                    <div class={`card mb-2 shadow ${type == "staff" ? "bg-primary" : "bg-pink"}`}>
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

            <div className='childViewMobile my-5 d-none'>
                <h3 className={`noticeHead fw-bold text-pink text-center`}>View your child report</h3>
                <p className='m-0 text-center'>Kindly view by clicking the image below</p>
                <div className='row justify-content-between'>
                    {
                        kids != null ?
                        kids.map(el => {
                            return (
                                <div class={`card  col-6`} key={el.id}>
                                    <div class="card-body text-muted rounded-0">
                                        <div className='d-flex flex-column justify-content-between'>
                                            <Link to="/reports" state={el}> <img src='/assets/noticeImg.png' width="" height="124px" /></Link>
                                            <div className='ms-lg-auto p-2 bd-highlight'>
                                                <p className='lh-1 mb-1'>
                                                    <span className='text-pink'>Full Name : </span>
                                                    {el.first_name}  {el.last_name}
                                                </p>
                                                <p className='text-inactive mb-0'><span className='text-pink'>Age : </span>
                                                    5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}