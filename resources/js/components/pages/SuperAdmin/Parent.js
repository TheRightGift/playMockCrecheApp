import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import parent from '../../../data/parents';
import Navbar from '../../Navbar';
// import Nav from '../components/Nav';

let datum;
const TableDataItems = (props) => {
    return (
        props.parents.map((data) =>
            <tr key={data.id}>
                <td className='d-none d-md-table-cell'>
                    <a href="#">
                        <img src={data.photo} className="rounded" width="40" alt={data.first_name} />
                    </a>
                </td>
                <td>{data.first_name + ' ' + data.last_name}</td>
                <td className='d-none d-md-table-cell'>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={'mailto:' + data.email} >{data.email}</a>
                </td>
                <td className='d-none d-md-table-cell'>{data.gender}</td>
                <td className='d-none d-md-table-cell'>{data.ip_address}</td>
                <td className='d-none d-md-table-cell'>{data.job_title}</td>
                <td>{data.phone}</td>
                <td className='d-none d-md-table-cell'>{data.created_at}</td>
                {
                    data.deleted_at == null
                        ?
                        <td className="text-end d-flex">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => { props.setDataToDelete(data) }} >
                                <i className="fa super-text fa-trash-o pe-3" aria-hidden="true"></i>
                            </a>
                            <a href='#'>
                                <i className="fa super-text fa-pencil" aria-hidden="true" onClick={() => { datum = data; props.setView(2); }}></i>
                            </a>
                        </td>
                        :
                        <td className="text-end">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#restoreModal">
                                <i className="fa super-text fa-undo" aria-hidden="true" onClick={() => { props.setDataToDelete(data) }}></i>
                            </a>
                        </td>

                }
            </tr >
        )
    );
}

const Parents = (props) => {
    return (
        <div className="table-responsive" tabIndex="1" >
            <table className="table table-custom table-lg mb-0 shadow" id="products">
                <thead className='super-color text-white shadow'>
                    <tr>
                        <th className='d-none d-md-table-cell'>Photo</th>
                        <th>Name</th>
                        <th className='d-none d-md-table-cell'>Email</th>
                        <th className='d-none d-md-table-cell'>Gender</th>
                        <th className='d-none d-md-table-cell'>IP Address</th>
                        <th className='d-none d-md-table-cell'>Job Title</th>
                        <th>Phone</th>
                        <th className='d-none d-md-table-cell'>Created</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <TableDataItems parents={props.parents} setView={props.setView} setDataToDelete={props.setDataToDelete} />
                </tbody>
            </table>
        </div>
    )
}

const AddParent = (props) => {
    const [inputs, setInputs] = useState(datum ?? {});
    const [passport, setPassport] = useState(null);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newValues = { id: props.parents.length + 1, ip_address: '216.25.20.22', created_at: '8/5/2022', photo: passport };
        let newData = { ...inputs, ...newValues };
        const updatedArr = props.parents.map(obj => {
            if (obj.id === inputs.id) {
                return { ...inputs, photo: passport ?? inputs.photo };
            }

            return obj;
        });
        console.log(props.parents, updatedArr);
        // console.log(indexToUpdate, inputs, ni);
        const updatedParents = props.view == 1 ? [...props.parents, newData] : updatedArr;
        alert(props.view == 1 ? 'Parent Added succesfully!' : 'Parent Updated Successfuly!');
        props.setParent(updatedParents);
        props.setView(0);
    };

    const onFileChange = event => {
        setPassport(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className='card my-3 p-md-5 p-3 shadow bg-body'>
            <form className="row g-3 needs-validation dropzone" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="first_name" value={inputs.first_name || ""} onChange={handleChange} required />
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
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Job Title</label>
                    <input type="text" className="form-control" name="job_title" value={inputs.job_title || ""} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={inputs.phone || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3 col-md-9">
                    <label htmlFor="formFile" className="form-label">Passport</label>
                    <input className="form-control" type="file" id="formFile" name="photo" accept="image/jpeg, image/png, image/jpg" onChange={onFileChange} />
                </div>
                <div className="col-12">
                    <button className="btn staffSubmit super-color text-white" type="submit">{props.view == 1 ? 'Submit' : 'Update'}</button>
                </div>
            </form>
        </div>
    )
}

function Parent() {
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(0);
    const [parents, setParents] = useState(parent);
    const [dataToDelete, setDataToDelete] = useState({});

    const deleteParent = () => {
        // parents.splice(
        //     this.orders.data.findIndex(findId),
        //     1
        // );
        const updatedArr = parents.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: Date.now() };
            }

            return obj;
        });
        setParents(updatedArr);
        document.getElementById('deleteModal').getElementsByClassName('btn-close')[0].click();
        alert('Parent data archived success')
    }
    const restoreParent = () => {
        // parents.splice(
        //     this.orders.data.findIndex(findId),
        //     1
        // );
        const updatedArr = parents.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: null };
            }

            return obj;
        });
        setParents(updatedArr);
        document.getElementById('restoreModal').getElementsByClassName('btn-close')[0].click();
        alert('Parent data restored success')
    }

    // const view = {'parent': 0, 'add': 1, 'edit': 2, 'delete': 'modal'}
    return (
        <div className='my-5'>
            <Navbar />
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body px-md-5 p-3 shadow">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="d-md-flex">{view == 0 ? 'All ' : view == 1 ? 'Add ' : 'Update '}Parent</div>
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
                                            <button className="date btn-back customBtn ms-auto super-color text-white" onClick={() => setView(0)}>
                                                Back
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            view == 1 || view == 2
                                ?
                                <AddParent setView={setView} view={view} setParent={setParents} parents={parents} />
                                :
                                <Parents parents={parents} setView={setView} setDataToDelete={setDataToDelete} />
                        }

                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default Parent;

// if (document.getElementById('parent')) {
//     ReactDOM.render(<Parent />, document.getElementById('parent'));
// }
