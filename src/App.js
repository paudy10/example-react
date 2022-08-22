import React, { useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { updateUserDetailsAction } from './userDetailSlice';

import Myfooter from './components/footer';
import Landing from './components/Landing';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Signup from './components/signup';
import Blog from './components/Blog';
import Login from './components/Login';
import Post from './components/Post';
import Dashboard from './components/Users/Dashboard';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/Dashboard';
import Header from './components/header';
import AdminDash from './components/Admin/component/adminDashboard';
import Allusers from './components/Admin/component/allUsers';
import BlogList from './components/Admin/component/blogList';
import NewBlog from './components/Admin/component/newBlog';
import Contactpm from './components/Admin/component/contactpm';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateUserDetailsAction())
  })


  return (

    <div style={{ direction: 'rtl' }}>
      <Header />
      <div className="row">
        <div className='main d-flex flex-column'>

          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/login' element={<Login />}></Route>

            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/prices' element={<Prices />}></Route>
            <Route path='/blog/:id' element={<Post />}></Route>

            <Route path='/dashboard' element={<Dashboard />}></Route>

            <Route path='/admin/login' element={<AdminLogin />}></Route>
            <Route path='/admin/dashboard' element={<AdminDashboard component={<AdminDash />} />}></Route>
            <Route path='/admin/newblog' element={<AdminDashboard component={<NewBlog />} />}></Route>
            <Route path='/admin/bloglist' element={<AdminDashboard component={<BlogList />} />}></Route>
            <Route path='/admin/allusers' element={<AdminDashboard component={<Allusers />} />}></Route>
            <Route path='/admin/contactpm' element={<AdminDashboard component={<Contactpm />} />}></Route>



          </Routes>
        </div>
      </div>

      <Myfooter />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div >
  );
}


export default App;
