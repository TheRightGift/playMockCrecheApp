import React, { useState } from "react";
import { chats, users } from "../../../data/chats.data";
import Navbar from "../../Navbar";

export default function Chat() {
    const [chat, setChat] = useState(chats ?? []);
    const [msg, setMsg] = useState('');
    const [user, setUser] = useState(users)
    const [unreadChatLen, setUnreadChatLen] = useState(0);
    const [selectedUserChat, setSelectedChat] = useState('');
    const [userLoggedIn, setUserLoggedIn] = useState(1)
    const [type, setType] = React.useState(null);
    React.useEffect(() => {
        // Anything in here is fired on component mount.
        let typeO = localStorage.getItem('type');
        setType(typeO)
        document.getElementsByTagName('body')[0].setAttribute('id', typeO);
    }, []);

    const sendChat = (event) => {
        if (msg != '') {
            let newMsg = {}
            setChat(newmsg)
        }
        event.preventDefault();
        alert(`The name you entered was: ${msg}`)
    }
    return (
        <main>
            <section className="reports">
                <div className="row">
                    <div className="col-lg-12 py-4 justify-content-center">
                        <Navbar />
                        <section id="chat" className="py-4">
                            <div className="container">

                                <div className="row d-flex justify-content-center ">
                                    <div className="col-md-3 col-lg-3 col-xl-3 d-md-block d-sm-none" id="searchPersons">
                                        <div className="position-relative searchInput mb-3">
                                            <input className="px-2 w-100" type="text" placeholder="Search..." />
                                            <div className="position-absolute text-muted me-5 faSearch">
                                                <i className="fa fa-search "></i>
                                            </div>
                                        </div>
                                        {
                                            users.map(user => {
                                                return (
                                                    <div className="card cursor-pointer bg-white shadow rounded-0 mb-3" key={user.id} onClick={() => setSelectedChat(user)}>
                                                        <div className="card-body d-flex justify-content-around align-items-center">
                                                            <img src={user.passport} className="rounded-circle" width="50px" height="50px" />
                                                            <div>
                                                                <p className={type == "staff" ? "text-system" : "text-pink"}>{user.name}</p>
                                                                <p className="text-muted">{user.handler}</p>
                                                            </div>
                                                            <div>
                                                                <p className="opacity-50">
                                                                    9.20 am
                                                                </p>
                                                                <p className="text-end ">
                                                                    <span className={`${type == "staff" ? "bg-primary" : "bg-pink"} text-white rounded-circle px-1`}>2</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3 d-none mobileViewPersons justify-content-center scrollable-div">
                                        {
                                            users.map((user, index) => {
                                                return (
                                                    <div className="position-relative cursor-pointer pe-1" key={user.id} onClick={() => setSelectedChat(user)}>
                                                        <img src={user.passport} className="rounded-circle" width="38" height="38" />
                                                        <span className={`position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle ${index / 2 == 0 ? "bg-danger" : "bg-success"}`}>
                                                            <span className="visually-hidden">New alerts</span>
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        
                                    </div>
                                    <div className="col-md-9 col-lg-9 col-xl-9">
                                        {
                                            selectedUserChat != '' ?
                                                <div className="card bg-white shadow mb-4">
                                                    <div className="card-body overflow-auto py-5" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>

                                                        {
                                                            selectedUserChat.chats.map(chat => {
                                                                return (
                                                                    <>
                                                                        <>
                                                                            {chat.userTo.id !== userLoggedIn ?
                                                                                <>
                                                                                    <div className="d-flex flex-row justify-content-start rounded-0 align-items-center">
                                                                                        <img src={chat.userTo.passport}
                                                                                            alt="avatar 1" style={{ width: "45px", height: "100%" }} />
                                                                                        <div>
                                                                                            <p className="small p-2 ms-3 mb-3 rounded-0 bg-primary text-white">{chat.msg}</p>
                                                                                        </div>
                                                                                        <p className="small mb-1 text-muted px-5">23 Jan 5:37 pm</p>
                                                                                    </div>
                                                                                    <div className="divider d-flex align-items-center mb-4">
                                                                                        <p className="text-center mx-3 mb-0" style={{ color: '#a2aab7' }}>Today</p>
                                                                                    </div>
                                                                                </>
                                                                                : chat.userFrom.id !== userLoggedIn ?
                                                                                    <>
                                                                                        <div className="d-flex flex-row justify-content-end mb-4 pt-1 align-items-center ">
                                                                                            <p className="small mb-1 text-muted px-5">23 Jan 6:10 pm</p>
                                                                                            <div>
                                                                                                <p className="small p-2 me-3 px-3 mb-3 text-white rounded-0" style={{ backgroundColor: "#FF70A6" }}>Dolorum quasi voluptates quas
                                                                                                    {chat.msg}</p>
                                                                                            </div>
                                                                                            <img src={chat.userFrom.passport}
                                                                                                alt="avatar 1" style={{ width: "45px", height: "100%" }} />
                                                                                        </div>
                                                                                    </>
                                                                                    : null
                                                                            }
                                                                        </>
                                                                    </>
                                                                )
                                                            })
                                                        }


                                                    </div>
                                                    <div className="text-muted  p-3">
                                                        <form onSubmit={sendChat}>
                                                            <div className="input-group mb-0 position-relative">
                                                                <button className="btn btn-white position-absolute" type="submit" id="button-addon1" style={{ paddingTop: ".55rem" }} onClick={(values) => console.log(values)} >
                                                                    <i className="fa fa-cloud-upload text-muted" aria-hidden="true"></i>

                                                                </button>
                                                                <input type="text" className="form-control rounded-0 px-5" placeholder="Type your message here" style={{ backgroundColor: 'white', height: '7vh' }}
                                                                    aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setMsg(e.target.value)} required />
                                                                <button className="btn btn-white position-absolute" type="submit" id="button-addon2" style={{ paddingTop: ".55rem" }} onClick={(values) => console.log(values)} >
                                                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>

                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                :
                                                <div className="card bg-body h-100 shadow d-flex justify-content-center align-items-center">
                                                    <p>Select a user to start</p>
                                                </div>
                                        }


                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    )
}