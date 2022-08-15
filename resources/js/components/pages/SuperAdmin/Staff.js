import moment from 'moment';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import staff from '../../../data/staff.data';
import states from '../../../data/states.data';
import Navbar from '../../Navbar';
// import Nav from '../components/Nav';

let datum;
const TableDataItems = (props) => {
    return (
        props.staffs.map((data) =>
            <tr key={data.id} className="shadow">
                <td className='d-none d-md-table-cell'>
                    <a href="#">
                        <img src={data.passport} className="rounded" width="40" alt={data.surname} />
                    </a>
                </td>
                <td>{data.surname + ' ' + data.last_name}</td>
                <td className='d-none d-md-table-cell'>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={'mailto:' + data.email} >{data.email}</a>
                </td>
                <td className='d-none d-md-table-cell'>{data.gender}</td>
                <td className='d-none d-md-table-cell'>{data.credential_type}</td>
                <td className='d-none d-md-table-cell'>{data.marital_status}</td>
                <td>{data.phone}</td>
                <td className='d-none d-md-table-cell'>{data.created_at}</td>
                {
                    data.deleted_at == null
                        ?
                        <td className="text-end d-flex">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => { props.setDataToDelete(data) }} >
                                <i className="fa fs-6 fa-trash-o super-text  pe-3" aria-hidden="true"></i>
                            </a>
                            <a href='#'>
                                <i className="fa fs-6 fa-pencil super-text" aria-hidden="true" onClick={() => { datum = data; props.setView(2); }}></i>
                            </a>
                        </td>
                        :
                        <td className="text-end">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#restoreModal">
                                <i className="fa fs-6 fa-undo super-text" aria-hidden="true" onClick={() => { props.setDataToDelete(data) }}></i>
                            </a>
                        </td>

                }
            </tr >
        )
    );
}

const Staffs = (props) => {
    return (
        <div className="table-responsive" tabIndex="1" >
            <table className="table table-custom table-lg mb-0" id="products">
                <thead className='super-color text-white'>
                    <tr>
                        <th className='d-none d-md-table-cell'>Photo</th>
                        <th>Name</th>
                        <th className='d-none d-md-table-cell'>Email</th>
                        <th className='d-none d-md-table-cell'>Gender</th>
                        <th className='d-none d-md-table-cell'>Credential</th>
                        <th className='d-none d-md-table-cell'>Status</th>
                        <th>Phone</th>
                        <th className='d-none d-md-table-cell'>Created At</th>
                        <th className="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TableDataItems staffs={props.staffs} setView={props.setView} setDataToDelete={props.setDataToDelete} />
                </tbody>
            </table>
        </div>
    )
}

const AddStaff = (props) => {
    const [inputs, setInputs] = useState(datum ?? {});
    const [passport, setPassport] = useState(null);
    const [state, setStates] = useState(states)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newValues = { id: props.staffs.length + 1, created_at: moment(new Date()).format('LL'), passport: passport };
        let newData = { ...inputs, ...newValues };
        const updatedArr = props.staffs.map(obj => {
            if (obj.id === inputs.id) {
                return { ...inputs, passport: passport ?? inputs.passport };
            }

            return obj;
        });
        console.log(props.staffs, updatedArr);
        // console.log(indexToUpdate, inputs, ni);
        const updatedStaffs = props.view == 1 ? [...props.staffs, newData] : updatedArr;
        alert(props.view == 1 ? 'Staff Added succesfully!' : 'Staff Updated Successfuly!');
        props.setStaff(updatedStaffs);
        setInputs({});
        props.setView(0);
    };

    const onFileChange = event => {
        setPassport(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className='card my-3 p-md-5 p-3 shadow bg-body'>
            <form className="row g-3 needs-validation dropzone" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Surname</label>
                    <input type="text" className="form-control" name="surname" value={inputs.surname || ""} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="last_name" value={inputs.last_name || ""} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" name="email" value={inputs.email || ""} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={inputs.address || ""} onChange={handleChange} required />
                   
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Credential Type</label>
                    <select className="form-select" name="credential_type" value={inputs.credential_type || ""} onChange={handleChange} required>
                        <option disabled value="">Choose...</option>
                        <option value="OND">OND</option>
                        <option value="HND">HND</option>
                        <option value="SSCE">SSCE</option>
                        <option value="BSC">BSC</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={inputs.phone || ""} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" name="dob" value={inputs.dob || ""} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Marital Status</label>
                    <select className="form-select" name="marital_status" value={inputs.marital_status || ""} onChange={handleChange} required>
                        <option disabled value="">Choose...</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorce">Divorce</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">City</label>
                    <input type="text" className="form-control" name="city" value={inputs.city || ""} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">State</label>
                    <select className="form-select" name="state" value={inputs.state || ""} onChange={handleChange} required>
                        <option disabled value="">Choose State</option>
                        {
                            state.map(data => {
                                return (
                                    <option value={data.name}>{data.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-3 col-md-9">
                    <label htmlFor="formFile" className="form-label">Passport</label>
                    <input className="form-control" type="file" id="formFile" name="photo" accept="image/jpeg, image/png, image/jpg" onChange={onFileChange} />
                </div>
                <div className="col-12">
                    <button className="staffSubmit btn super-color text-white" type="submit">{props.view == 1 ? 'Submit' : 'Update'}</button>
                </div>
            </form>
        </div>
    )
}

function Staff() {
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(0);
    const [staffs, setParents] = useState(staff);
    const [dataToDelete, setDataToDelete] = useState({});

    const deleteParent = () => {
        // staffs.splice(
        //     this.orders.data.findIndex(findId),
        //     1
        // );
        const updatedArr = staffs.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: Date.now() };
            }

            return obj;
        });
        setParents(updatedArr);
        document.getElementById('deleteModal').getElementsByClassName('btn-close')[0].click();
        alert('Staff data archived success')
    }
    const restoreStaff = () => {
        // staffs.splice(
        //     this.orders.data.findIndex(findId),
        //     1
        // );
        const updatedArr = staffs.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: null };
            }

            return obj;
        });
        setParents(updatedArr);
        document.getElementById('restoreModal').getElementsByClassName('btn-close')[0].click();
        alert('Staff data restored success')
    }

    // const view = {'staff': 0, 'add': 1, 'edit': 2, 'delete': 'modal'}
    return (
        <div className='my-5'>
            <Navbar />
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="card-body px-3">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="d-md-flex">{view == 0 ? 'All ' : view == 1 ? 'Add ' : 'Update '}Staff</div>
                                    {
                                        view == 0 ?
                                            <button className="date customBtn ms-auto super-color text-white" onClick={() => setView(1)}>
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
                                </div>
                            </div>
                        </div>
                        {
                            view == 1 || view == 2
                                ?
                                <AddStaff setView={setView} view={view} setStaff={setParents} staffs={staffs} />
                                :
                                <Staffs staffs={staffs} setView={setView} setDataToDelete={setDataToDelete} />
                        }

                    </div>
                </div>
            </div>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete {dataToDelete.surname + ' ' + dataToDelete.last_name}</h5>
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
                            <h5 className="modal-title" id="exampleModalLabel">Restore {dataToDelete.surname + ' ' + dataToDelete.last_name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to restore?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" onClick={restoreStaff}>Restore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Staff;

// if (document.getElementById('staff')) {
//     ReactDOM.render(<Staff />, document.getElementById('parent'));
// }
