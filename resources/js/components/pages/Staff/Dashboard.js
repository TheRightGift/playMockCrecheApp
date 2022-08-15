let typeO = localStorage.getItem('type');
let borderColor, backgroundColor;
borderColor = typeO == "staff" ? '#1364DC' : "#ff70a6";
backgroundColor = typeO == "staff" ? '#1364DC' : "#ff70a6";
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
import RightCanvas from '../../RightCanvas';
import Navbar from '../../Navbar';
import React from 'react';
import DashboardMobile from '../Parent/Dashboard';
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
const labels = ['Nap Time', 'Feeding Time', 'Diaper Time', 'Attendance',];
export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
			borderColor: borderColor,
			backgroundColor: backgroundColor,
		},
	],
};
export default function Dashboard() {
	const [type, setType] = React.useState(null);

	React.useEffect(() => {
		// Anything in here is fired on component mount.
		let typeO = localStorage.getItem('type');
		setType(typeO)
		document.getElementsByTagName('body')[0].setAttribute('id', typeO);
	}, []);
	return (
		<main>
			<section className="dashboard">
				<div className="row">
					<div className="col-lg-8 py-4 justify-content-center">
						<Navbar />
						<section id="overview">
							<h3>
								Overview
							</h3>
							<div className="bg-white shadow p-3 bg-body">
								<Line options={options} data={data} />
							</div>
						</section>
						{
							type == "staff" ?
								<section id="todos">
									<h3 className='pt-sm-5 pt-md-0'>
										My Todo List
									</h3>
									<div className="bg-white shadow-sm rounded">
										<div class="card">
											<div class="card-body">
												<div className='todoListings'>
													<h6 class="card-subtitle mb-2 text-white py-2 opacity-75">June 20, 2020</h6>
													<div className='d-flex'>
														<p class="card-text mx-1 lh-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<div className='d-flex ms-auto p-2 bd-highlight'>
															<a href="#" class="card-link text-white"><i class="fa fa-trash-o fs-5 " aria-hidden="true"></i></a>
															<a href="#" class="card-link text-white"><i class="fa fa-pencil-square-o fs-5 " aria-hidden="true"></i></a>
														</div>
													</div>
												</div>
												<div className='todoListings'>
													<h6 class="card-subtitle mb-1 text-white py-2 opacity-75">June 20, 2020</h6>
													<div className='d-flex'>
														<p class="card-text mx-1 lh-1">Lorem ipsum dolor sit amet.</p>
														<div className='d-flex ms-auto p-2 bd-highlight'>
															<a href="#" class="card-link text-white"><i class="fa fa-trash-o fs-5 " aria-hidden="true"></i></a>
															<a href="#" class="card-link text-white"><i class="fa fa-pencil-square-o fs-5 " aria-hidden="true"></i></a>
														</div>
													</div>
												</div>
												<div className='todoListings'>
													<h6 class="card-subtitle mb-1 text-white py-2 opacity-75">June 20, 2020</h6>
													<div className='d-flex'>
														<p class="card-text mx-1 lh-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
														<div className='d-flex ms-auto p-2 bd-highlight'>
															<a href="#" class="card-link text-white"><i class="fa fa-trash-o fs-5 " aria-hidden="true"></i></a>
															<a href="#" class="card-link text-white"><i class="fa fa-pencil-square-o fs-5 " aria-hidden="true"></i></a>
														</div>
													</div>
												</div>
												<div className='todoListings'>
													<h6 class="card-subtitle mb-1 text-white py-2 opacity-75">June 20, 2020</h6>
													<div className='d-flex'>
														<p class="card-text mx-1 lh-1">Lorem ipsum dolor sit amet, consectetur</p>
														<div className='d-flex ms-auto p-2 bd-highlight'>
															<a href="#" class="card-link text-white"><i class="fa fa-trash-o fs-5 " aria-hidden="true"></i></a>
															<a href="#" class="card-link text-white"><i class="fa fa-pencil-square-o fs-5 " aria-hidden="true"></i></a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								: null
						}
					</div>
					<aside className="col-lg-4 calendarNotice bg-white min-vh-100 py-5 px-3">
						<RightCanvas type={type} />
					</aside >
				</div >
			</section >
		</main >
	);
}