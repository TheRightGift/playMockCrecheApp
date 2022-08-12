import { useState } from "react";
import FullCalendarTodoView from "../../Calendar";
import Navbar from "../../Navbar";

export default function Schedule() {
    const [inputs, setInputs] = useState({});
    const [dataToDelete, setDataToDelete] = useState({});
    const [data, setData] = useState({});
    const [cancelForm, setCancelForm] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newValues = { created_at: '8/5/2022', };
        let newData = { ...inputs, ...newValues };
        setCancelForm(false);
        setData(newData);
        document.getElementById('addTaskModal').getElementsByClassName('cancelAddTaskBtn')[0].click();
        setInputs({});
        console.log('submit');
    };

    const deleteParent = () => {
        const updatedArr = kids.map(obj => {
            if (obj.id === dataToDelete.id) {
                return { ...dataToDelete, deleted_at: Date.now() };
            }

            return obj;
        });
        setKids(updatedArr);
        alert('Kids data archived success')
    }

    return (
        <main>
            <section className="dashboard">
                <div className="row">
                    <div className="col-lg-12 py-4 justify-content-center">
                        <Navbar />
                        <section id="numPupil">
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="date customBtn ms-auto px-4 mb-4 shadow bg-primary text-white" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                                    Add Task
                                    <i
                                        className="fa fa-plus px-2 text-white"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                            <div className="shadow bg-white">
                                <FullCalendarTodoView newEvent={data} cancelled={cancelForm} />
                            </div>
                            {/* Modal for adding tasks */}
                            <div className="modal fade" id="addTaskModal" tabIndex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body d-flex">
                                            <div className="bg-primary text-white luckyFont d-flex align-items-center">
                                                <h4>Keep track of your schedule</h4>
                                            </div>
                                            <div className="p-4 d-flex justify-content-center flex-column flex-grow-1 bd-highlight">
                                                <h4 className="text-center text-system">Schedule a task</h4>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group d-flex align-items-center">
                                                        <div htmlFor="name" className="control-label text-system">Task:</div>
                                                        <input type="text" name="title" className="form-control task" value={inputs.title || ""} onChange={handleChange} required />
                                                    </div>
                                                    <div className="form-group d-flex align-items-center mt-4">
                                                        <div htmlFor="name" className="control-label text-system">Date:</div>
                                                        <input type="date" name="date" className="form-control task" value={inputs.date || ""} onChange={handleChange} required />
                                                    </div>
                                                    <div className="d-flex justify-content-center flex-column">
                                                        <button className="addTaskBtn text-white mt-5" type="submit">Add Task</button>
                                                        <button className="cancelAddTaskBtn text-white mt-4" type="button" data-bs-dismiss="modal">Cancel</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* View Task Modal */}
                            <div className="modal fade" id="viewTaskModal" tabIndex="-1" aria-labelledby="viewTaskModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="viewTaskModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
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