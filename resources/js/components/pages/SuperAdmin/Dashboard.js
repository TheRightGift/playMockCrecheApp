import Navbar from "../../Navbar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import React from 'react';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: "#01120c",
            backgroundColor: "#01120c",
        },
    ],
};
export default function SuperDashboard() {
    return (
        <main className="my-3">
            <Navbar />
            <div className="row my-5">
                <div className="col-xl-5 col-lg-6">
                    <div className="row">
                        <div className="col-sm-6 ">
                            <div class="card shadow">
                                <div class="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="rounded-circle bg-grey d-flex justify-content-center align-items-center">
                                            <i class="fas fa-chalkboard-teacher text-center"></i>
                                        </p>
                                        <p className="rounded-circle bg-grey d-flex justify-content-center align-items-center">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </p>
                                    </div>
                                    <p className="text-dark opacity-50">Staff</p>
                                    <p className="fs-2 text-end m-1">20</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 my-3">
                            <div class="card shadow">
                                <div class="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="rounded-circle bg-grey d-flex justify-content-center align-items-center">
                                            <img src="/assets/family.png" width="20px" />
                                        </p>
                                        <p className="rounded-circle bg-grey d-flex justify-content-center align-items-center">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </p>
                                    </div>
                                    <p className="text-dark opacity-50">Parent</p>
                                    <p className="fs-2 text-end m-1">50</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" my-3">
                            <div class="card shadow">
                                <div class="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="rounded-circle bg-grey d-flex justify-content-center align-items-center">
                                            <img src="/assets/baby-boy.png" width="20px" />
                                        </p>
                                        <p className="rounded-circle bg-grey d-flex justify-content-center align-items-center">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </p>
                                    </div>
                                    <p className="text-dark opacity-50">Childrens</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="text-success">
                                            <i class="fa-solid fa-arrow-up text-success px-2"></i>
                                            20.0% from June
                                        </p>
                                        <p className="fs-2 text-end m-1">50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                    <div className="card shadow">
                        <div class="card-body">
                            <p className="opacity-50 fs-5">Overall Kids</p>
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}