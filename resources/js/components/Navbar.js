export default function Navbar() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="position-relative searchInput">
                <input className="rounded-pill nosubmit" type="text" />
                <div className="position-absolute faSearch">
                    <i className="fa fa-search "></i>
                </div>
            </div>
            <span className="position-relative">
                <i className="fa fa-bell-o ps-3 text-primary" aria-hidden="true"></i>
                <span className="position-absolute top-0 start-100 translate-custom p-c1 bg-primary border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                </span>
            </span>
        </div>
    )
}