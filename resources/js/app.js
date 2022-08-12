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

// require('./pages/Parent');
// require('./pages/Children');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './components/App';
import Parent from "./components/pages/Parent";
import Children from "./components/pages/Children";
import Dashboard from './components/pages/Staff/Dashboard';
import Pupil from './components/pages/Staff/NumPupils';
import Schedule from './components/pages/Staff/Scheduler';
import Report from './components/pages/Staff/Reports';
import Chat from './components/pages/Staff/Chats';
import Landing from './components/Home';
import About from './components/pages/About';
import Activity from './components/pages/Activity';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Homepage from './components/pages/Homepage';
import Login from "./components/Login";
import Superadmin from "./components/Superadmin";

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
            <Route path="/" element={<Landing />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Route>

            <Route path="/" element={<App />}>
                <Route index path="/dashboard" element={<Dashboard />} />
                <Route path="/no-of-pupils" element={<Pupil />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/reports" element={<Report />} />
                <Route path="/chats" element={<Chat />} />
            </Route>
            <Route path="*" element={<NoMatch />} />

            <Route path="/login" element={<Login />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/superadmin" element={<Superadmin />} />
        </Routes>
    </Router>,
    rootElement
);

