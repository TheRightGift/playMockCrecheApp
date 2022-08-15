/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './components/App';
import Login from "./components/pages/Login";
import Dashboard from './components/pages/Staff/Dashboard';
import Pupil from './components/pages/Staff/NumPupils';
import Schedule from './components/pages/Staff/Scheduler';
import Chat from './components/pages/Staff/Chats';
import Landing from './components/Home';
import Homepage from './components/pages/Homepage';
import ReportView from './components/pages/ReportView';
import SuperDashboard from './components/pages/SuperAdmin/Dashboard';
import Admin from './components/pages/SuperAdmin/Admin';
import Staff from './components/pages/SuperAdmin/Staff';
import Parent from './components/pages/SuperAdmin/Parent';
import Children from './components/pages/SuperAdmin/Children';
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} >
        <Route path="/" element={<Homepage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      {/* <Route path="/parent" element={<Parent />} /> */}
      {/* <Route path="/admin" element={<Admin />} /> */}

      <Route path="/" element={<App />}>
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path='/no-of-pupils' element={<Pupil />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/reports' element={<ReportView /> } />
        <Route path='/chats' element={<Chat />} />
      </Route>
      <Route path="/" element={<Admin />}>
        <Route index path="/admin" element={<SuperDashboard />} />
        <Route path='/pupils' element={<Children />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/staffs' element={<Staff /> } />
        <Route path='/parents' element={<Parent />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router >,
  rootElement
);

