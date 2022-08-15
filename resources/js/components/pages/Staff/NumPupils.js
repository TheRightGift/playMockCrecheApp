import Navbar from "../../Navbar";
import RightCanvas from "../../RightCanvas";
import kiddies from "../../../data/kids";
import { useState } from "react";
import moment from 'moment'
import parents from '../../../data/parents'
let datum;
const TableDataItems = (props) => {
    const getAge = (dob) => {
        let age = moment(new Date()).isSame(dob, 'year')
            ?
            Math.round(moment(new Date()).diff(dob, 'month', true)) + ' Month'
            :
            Math.round(moment(new Date()).diff(dob, 'year', true)) + ' Year'
        return age;
    }
    return (
        props.kids.map((data) =>
            <tr key={data.id} className="shadow bg-white fw-normal">
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{getAge(data.dob)}</td>
                <td>{data.gender}</td>
                {
                    data.deleted_at == null
                        ?
                        <td className="text-end d-flex">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => { props.setDataToDelete(data) }} >
                                <i className="fa fa-trash-o text-system pe-3" aria-hidden="true"></i>
                            </a>
                            <a href='#'>
                                <i className="fa fa-pencil text-system pe-3" aria-hidden="true" onClick={() => { datum = data; props.setView(2); }}></i>
                            </a>
                        </td>
                        :
                        <td className="text-end d-flex justify-content-start">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#restoreModal">
                                <i className="fa fa-undo text-system" aria-hidden="true" onClick={() => { props.setDataToDelete(data) }}></i>
                            </a>
                        </td>
                }
            </tr >
        )
    );
}


const Kids = (props) => {
    return (
        <>
            <div className="table-responsive" tabIndex="1">
                <table className="table table-custom table-lg mb-0" id="products">
                    <thead className="bg-primary text-white shadow">
                        <tr>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th className="text-end d-flex"></th>
                        </tr>
                    </thead>
                    <tbody className="text-system">
                        <TableDataItems kids={props.kids} setDataToDelete={props.setDataToDelete} setView={props.setView} />
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-end align-items-center px-3">
                <p className="text-muted">page 1 of 1 &nbsp;</p>
                <p className="text-muted cursor-pointer paginator">
                    <i className="fa fa-arrow-left px-2" aria-hidden="true"></i>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
            </div>
        </>
    )
}

const AddKid = (props) => {
    const [inputs, setInputs] = useState(datum ?? {});
    const [passport, setPassport] = useState(null);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newValues = { id: props.kids.length + 1, ip_address: '216.25.20.22', created_at: '8/5/2022', photo: passport };
        let newData = { ...inputs, ...newValues };
        const updatedArr = props.kids.map(obj => {
            if (obj.id === inputs.id) {
                return { ...inputs, photo: passport ?? inputs.photo };
            }

            return obj;
        });
        console.log(props.kids, updatedArr);
        // console.log(indexToUpdate, inputs, ni);
        const updatedKids = props.view == 1 ? [...props.kids, newData] : updatedArr;
        alert(props.view == 1 ? 'Kid Added succesfully!' : 'Kid Updated Successfuly!');
        props.setKid(updatedKids);
        props.setView(0);
    };

    const onFileChange = event => {
        setPassport(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className='card my-3 p-5'>
            <form className="row g-3 needs-validation dropzone" onSubmit={handleSubmit}>
                <p>Kid Info</p>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="first_name" value={inputs.first_name || ""} onChange={handleChange} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="last_name" value={inputs.last_name || ""} onChange={handleChange} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Other name(Pet Name)</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" name="username" value={inputs.username || ""} onChange={handleChange} required />
                        <div className="invalid-feedback">
                            Please enter an email.
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <label htmlFor="validationCustom03" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={inputs.address || ""} onChange={handleChange} required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom04" className="form-label">Gender</label>
                    <select className="form-select" name="gender" value={inputs.gender || ""} onChange={handleChange} required>
                        <option disabled value="">Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid gender.
                    </div>
                </div>
                <div className="mb-3 col-md-12">
                    <label htmlFor="formFile" className="form-label">Passport</label>
                    <input className="form-control" type="file" id="formFile" name="photo" accept="image/jpeg, image/png, image/jpg" onChange={onFileChange} />
                </div>
                <hr />
                <p>Other Persons that can collect kid after school</p>
                <div className="col-md-4">
                    <label htmlFor="validationCustom05" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={inputs.name || ""} onChange={handleChange} required />
                    <div className="invalid-feedback">
                        Please provide a valid name.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom05" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={inputs.phone || ""} onChange={handleChange} required />
                    <div className="invalid-feedback">
                        Please provide a valid phone.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom05" className="form-label">Relationship</label>
                    <input type="text" className="form-control" name="relationship" value={inputs.relationship || ""} onChange={handleChange} required />
                    <div className="invalid-feedback">
                        Please provide a valid relationship.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">{props.view == 1 ? 'Submit' : 'Update'}</button>
                </div>
            </form>
        </div>
    )
}


export default function Pupil() {
    const [kids, setKids] = useState(kiddies);
    const [dataToDelete, setDataToDelete] = useState({});
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(0);

    const deleteParent = () => {
        // kids.splice(
        //     this.orders.data.findIndex(findId),
        //     1
        // );
        const updatedArr = kids.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: Date.now() };
            }

            return obj;
        });
        setKids(updatedArr);
        document.getElementById('deleteModal').getElementsByClassName('btn-close')[0].click();
        alert('Kids data archived success')
    }
    const restoreParent = () => {
        // kids.splice(
        //     this.orders.data.findIndex(findId),
        //     1
        // );
        const updatedArr = kids.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: null };
            }

            return obj;
        });
        setKids(updatedArr);
        document.getElementById('restoreModal').getElementsByClassName('btn-close')[0].click();
        alert('Kids data restored success')
    }
    return (
        <main>
            <section className="dashboard">
                <div className="row">
                    <div className="col-lg-8 py-4 justify-content-center">
                        <Navbar />
                        <section id="numPupil">
                            {/* <div className="d-flex gap-4 align-items-center">
                                <div className="d-md-flex">{view == 0 ? 'All Kids' : view == 1 ? 'Add Kid' : 'Update Kid'}</div>
                                {
                                    view == 0 ?
                                        <button className="date customBtn ms-auto bg-primary text-white" onClick={() => setView(1)}>
                                            <i
                                                className="fa fa-plus pe-2 text-white"
                                                aria-hidden="true"
                                            ></i>
                                            Add
                                        </button>
                                        :
                                        <button className="date btn-back customBtn ms-auto btn-dark text-white" onClick={() => setView(0)}>
                                            Back
                                        </button>
                                }
                            </div> */}
                            {view == 0 ? <div className="d-flex justify-content-end align-items-center">
                                <p>Sort By: &nbsp;</p>
                                <p className="text-system cursor-pointer">First Name <i className="fa fa-arrow-down" aria-hidden="true"></i></p>
                            </div> : null}
                            {
                                view == 1 || view == 2
                                    ?
                                    <AddKid setView={setView} view={view} setKid={setKids} kids={kids} />
                                    :
                                    <Kids kids={kids} setView={setView} setDataToDelete={setDataToDelete} />
                            }

                            {/* Delete */}
                            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Delete {dataToDelete.first_name + ' ' + dataToDelete.last_name}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Are you sure to delete?
                                            <p><small>Note that this data will be archived</small></p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger" onClick={deleteParent}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Restor Modal */}
                            <div className="modal fade" id="restoreModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Restore {dataToDelete.first_name + ' ' + dataToDelete.last_name}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Are you sure to restore?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger" onClick={restoreParent}>Restore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Parent Modal */}
                            <div className="modal fade" id="parentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Child's Guardian for {dataToDelete.first_name + ' ' + dataToDelete.last_name}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Parent:
                                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option defaultValue={''} disabled>Select Parent</option>
                                                {
                                                    parents.map((option, index) =>
                                                        <option key={option.id} value={option.id} >{option.first_name + ' ' + option.last_name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger" onClick={restoreParent}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <aside className="col-lg-4 calendarNotice bg-white min-vh-100 py-5 px-3">
                        <RightCanvas />
                    </aside >
                </div>
            </section>
        </main>
    )
}