import React from "react";

export default function Navbar() {
    const [type, setType] = React.useState(null);
    React.useEffect(() => {
        // Anything in here is fired on component mount.
        let type = localStorage.getItem('type');
        setType(type)
    }, []);
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center nav-lg d-sm-none d-md-flex">
                <div className="position-relative searchInput">
                    <input className="rounded-pill nosubmit" type="text" />
                    <div className="position-absolute faSearch">
                        <i className="fa fa-search " style={{ color: type == 'staff' ? "#1364DC" : "#FF70A6" }}></i>
                    </div>
                </div>
                <span className="position-relative">
                    <i className={`fa fa-bell-o ps-3 ${type == "staff" ? "text-primary" : "text-pink"}`} aria-hidden="true"></i>
                    <span className={`position-absolute top-0 start-100 translate-custom p-c1  border border-light rounded-circle ${type == 'staff' ? 'bg-primary' : 'bg-pink'}`}>
                        <span className="visually-hidden">New alerts</span>
                    </span>
                </span>
            </div>
            {/* Parent Mobile View */}
            <div className="shadow d-flex justify-content-between px-4 pe-4 py-1 align-items-center bg-pink d-none parentMobile shadow text-white">
                <p className="fs-3 m-0">Logo</p>
                <div className="d-flex flex-column justify-content-center align-content-center">
                    <img src="/assets/profile2.png" alt="parent" width="40" height="40" className="rounded-circle align-self-center" />
                    <p className="m-0">Mrs. Ajoke B.</p>
                </div>
                <a href="#!" data-bs-toggle="modal" data-bs-target="#logoutModal">
                    <img src="/assets/Vector.svg" />
                </a>
            </div>

            <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content rounde-0">
                        <div className="modal-body">
                            <div className=" d-flex justify-content-center flex-column align-items-center">
                            <p> Are you sure? </p>

                                <div className=" ">
                                    <button className="logoutModalBtns bg-pink">
                                        Yes
                                    </button>
                                    <button className="logoutModalBtns bg-primary">
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}