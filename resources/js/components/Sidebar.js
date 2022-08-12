function Nav() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-blue">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 py-4 mb-md-0 mx-md-auto  text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Logo</span>
                            </a>
                            <div className="pb-4 mx-auto">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" aria-expanded="false">
                                    <div className="profilePicName">
                                        <img src="https://github.com/mdo.png" alt="hugenerd" className="rounded-circle profilePic img-fluid" width="100" height="100" />
                                        <h6 className="fs-5 mt-1 fw-bolder">Akerele B.</h6>
                                        <p className="opacity-75">Grade 1</p>
                                    </div>
                                </a>
                            </div>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start align-self-center" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0 text-inactive active">
                                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">My Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">no. of pupils</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">Schedule</span></a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">Reports</span></a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-comments-o" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">Chats</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">Media</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">Logout</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle text-inactive">
                                        <i class="fa fa-globe" aria-hidden="true"></i>
                                        <span className="ms-1 d-none d-sm-inline">Website</span> </a>
                                </li>
                            </ul>
                            <div className="align-self-center">
                                <p className="text-center text-inactive">
                                    <span className="fw-bolder">DAYCARE</span>, <span className="opacity-75">All rights reserved, {new Date().getFullYear()}.</span>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col py-3">
                        Content area...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;