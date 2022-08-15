import Navbar from "../../Navbar";
import kiddies from "../../../data/kids";
import { reports, disposition } from "../../../data/reports.data";
import { useState } from "react";
import moment from 'moment';
import { useLocation } from "react-router-dom";


let datum;
const TableDataItems = (props) => {

    return (
        props.kids.map((data) =>
            <tr key={data.id} className="shadow bg-white fw-normal">
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td className="bg-primary text-white"><span className={data.reports ? data.reports[0].feeding ? 'btnTime text-system' : null : ""}>{data.reports ? data.reports[0].feeding : null}</span></td>
                <td className="bg-primary text-white"><span className={data.reports ? data.reports[0].feeding ? 'btnTime text-system' : null : ""}>{data.reports ? data.reports[0].diaper : null}</span></td>
                <td className="bg-primary text-white"><span className={data.reports ? data.reports[0].feeding ? 'btnTime text-system' : null : ""}>{data.reports ? data.reports[0].nap : null}</span>{data.reports ? data.reports[0].nap ? ' to ' : null : ''} <span className={data.reports ? data.reports[0].feeding ? 'btnTime text-system' : null : ""}> {data.reports ? data.reports[0].nap_to : null}</span></td>
                <td className="bg-primary text-white"><span className={data.reports ? data.reports[0].feeding ? 'btnTime text-system' : null : ""}>{data.reports ? data.reports[0].arrival : null}</span></td>
                <td className="bg-primary text-white"><span className={data.reports ? data.reports[0].feeding ? 'btnTime text-system' : null : ""}>{data.reports ? data.reports[0].departure : null}</span></td>
                <td className="text-end">
                    {
                        moment(data.reports ? data.reports[0].created_at : null).isSame(moment(), 'day') ?
                            <button className="submitReport text-system" data-bs-toggle="modal" data-bs-target="#reports" onClick={() => { props.setInputs(data); props.setDataToDelete(data); props.setView(1); }}>View</button>
                            :
                            <button className="submitReport text-system" data-bs-toggle="modal" data-bs-target="#reports" onClick={() => { props.setDataToDelete(data); props.setView(0) }}>Take</button>

                    }
                </td>
            </tr >
        )
    );
}

export default function Report() {
    let localKids = localStorage.getItem('kids');
    localKids = JSON.parse(localKids);
    const [kids, setKids] = useState(localKids ?? reports);
    const [report, setReports] = useState(reports);
    const [dataToDelete, setDataToDelete] = useState({});
    const [inputs, setInputs] = useState(datum ?? {});
    const [dipsose, setDisposal] = useState(false)
    const [view, setView] = useState(0)

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newValues = { id: kids.length + 1, created_at: moment() };
        let newData = { ...inputs, ...newValues };
        console.log(newData);
        // const report = [...reports, newData];
        const updatedArr = kids.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, ...{ reports: [newData] }
            };
        }

            return obj;
    });
    const updatedKids = updatedArr;
    document.getElementById('reports').getElementsByClassName('btn-close')[0].click();
    alert(view == 0 ? `${dataToDelete.first_name} report for ${moment()} succesfully saved!` : `${dataToDelete.first_name} report for ${moment()} succesfully updated!`);
    setKids(updatedKids);
    // This is Kids report
    localStorage.setItem('kids', JSON.stringify(updatedKids));
    setInputs({});
};

return (
    <main>
        <section className="reports">
            <div className="row">
                <div className="col-lg-12 py-4 justify-content-center">
                    <Navbar />
                    <section id="report">
                        <div className="table-responsive" tabIndex="1" >
                            <table className="table table-custom table-lg mb-0" id="products">
                                <thead className="bg-primary text-white shadow">
                                    <tr>
                                        <th className="bg-white text-muted">Last Name</th>
                                        <th className="bg-white text-muted">First Name</th>
                                        <th>Feeding Time</th>
                                        <th>Diaper Time</th>
                                        <th>Napping Time</th>
                                        <th>Arrival</th>
                                        <th>Departure</th>
                                        <th className="text-end"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-system">
                                    <TableDataItems kids={kids} setDataToDelete={setDataToDelete} setView={setView} setInputs={setInputs} />
                                </tbody>
                            </table>
                        </div>

                        <div className="modal fade" id="reports" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="reportsLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="reportsLabel">{view == 1 ? 'Update' : 'Take'} Report for {dataToDelete.first_name}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setInputs({})}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className='card my-1 p-2'>
                                            <form className="row g-3 needs-validation dropzone" onSubmit={handleSubmit}>
                                                <p>Kid Info</p>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom03" className="form-label">Arrival</label>
                                                    <input type="time" className="form-control" name="arrival" value={inputs.arrival || ""} onChange={handleChange} required />

                                                </div>

                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom01" className="form-label">Feeding Time</label>
                                                    <input type="time" className="form-control" name="feeding" value={inputs.feeding || ""} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom02" className="form-label">Diaper Time</label>
                                                    <input type="time" className="form-control" name="diaper" value={inputs.diaper || ""} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustomUsername" className="form-label">Nap Time</label>
                                                    <div className="input-group has-validation">
                                                        <input type="time" className="form-control" name="nap" value={inputs.nap || ""} onChange={handleChange} required />
                                                    </div>
                                                    <p className="text-center">to</p>
                                                    <div className="input-group has-validation">
                                                        <input type="time" className="form-control" name="nap_to" value={inputs.nap_to || ""} onChange={handleChange} required />
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom05" className="form-label">Toileting</label>
                                                    <input type="time" className="form-control" name="toileting" value={inputs.toileting || ""} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom05" className="form-label">Departure</label>
                                                    <input type="time" className="form-control" name="departure" value={inputs.departure || ""} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-12">

                                                    {/* {
                                                            disposition.map(data =>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="disposition" value={data} onChange={handleChange} />
                                                                    <label className="form-check-label" for="flexCheckDefault">
                                                                        {data}
                                                                    </label>
                                                                </div>

                                                            )
                                                        } */}

                                                    <label htmlFor="validationCustom05" className="form-label">Disposition</label>
                                                    <input type="text" className="form-control" name="disposition" value={inputs.disposition || ""} onChange={handleChange} required />
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary" type="submit">{view == 0 ? 'Submit' : 'Update'}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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