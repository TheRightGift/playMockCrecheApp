import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import kiddies from '../../data/kids';
import parents from '../../data/parents';

let datum;
const TableDataItems = (props) => {
    return (
        props.kids.map((data) =>
            <tr key={data.id}>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#{data.id}</a>
                </td>
                <td>
                    <a href="#">
                        <img src={data.photo} className="rounded" width="40" alt={data.first_name} />
                    </a>
                </td>
                <td>{data.first_name + ' ' + data.last_name}</td>
                <td>{data.gender}</td>
                <td>{data.username}</td>
                <td>{data.address}</td>
                <td>{data.created_at}</td>
                {
                    data.deleted_at == null
                        ?
                        <td className="text-end d-flex">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => { props.setDataToDelete(data) }} >
                                <i className="fa fa-trash-o delete pe-3" aria-hidden="true"></i>
                            </a>
                            <a href='#'>
                                <i className="fa fa-pencil edit pe-3" aria-hidden="true" onClick={() => { datum = data; props.setView(2); }}></i>
                            </a>
                            <a href='#' data-bs-toggle="modal" data-bs-target="#parentModal" onClick={() => { props.setDataToDelete(data) }}>
                                <i className="fa fa-link link" aria-hidden="true"></i>
                            </a>
                        </td>
                        :
                        <td className="text-end d-flex justify-content-start">
                            <a href='#' data-bs-toggle="modal" data-bs-target="#restoreModal">
                                <i className="fa fa-undo edit" aria-hidden="true" onClick={() => { props.setDataToDelete(data) }}></i>
                            </a>
                        </td>

                }
            </tr >
        )
    );
}

const Kids = (props) => {
    return (
        <div className="table-responsive" tabIndex="1" >
            <table className="table table-custom table-lg mb-0" id="products">
                <thead>
                    <tr>
                        <th>
                            <input className="form-check-input select-all" type="checkbox" data-select-all-target="#products" id="defaultCheck1" />
                        </th>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Pet Name</th>
                        <th>Address</th>
                        <th>Created At</th>
                        <th className="text-end d-flex">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TableDataItems kids={props.kids} setView={props.setView} setDataToDelete={props.setDataToDelete} />
                </tbody>
            </table>
        </div>
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

function Children() {
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(0);
    const [kids, setKids] = useState(kiddies);
    const [dataToDelete, setDataToDelete] = useState({});

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

    // const view = {'parent': 0, 'add': 1, 'edit': 2, 'delete': 'modal'}
    return (
        <div>
            {/* <Nav /> */}
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body px-5">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="d-md-flex">{view == 0 ? 'All Kids' : view == 1 ? 'Add Kid' : 'Update Kid'}</div>
                                    {
                                        view == 0 ?
                                            <button className="date customBtn ms-auto btn-dark text-white" onClick={() => setView(1)}>
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
                                <AddKid setView={setView} view={view} setKid={setKids} kids={kids} />
                                :
                                <Kids kids={kids} setView={setView} setDataToDelete={setDataToDelete} />
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
        </div>
    );
}

export default Children;

