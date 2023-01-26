import React, { useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetailsAction } from './userDetailSlice';

import UserApp from './components/UserApp';
import PageNotFound from './components/PageNotFound';
import Myfooter from './components/footer';
import Landing from './components/Landing';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Signup from './components/signup';
import Shop from './components/shop';
import Login from './components/Login';
import Post from './components/Post';
import Dashboard from './components/Users/Dashboard';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/Dashboard';
import Header from './components/header';
import AdminDash from './components/Admin/component/adminDashboard';
import Allusers from './components/Admin/component/allUsers';
import ShopList from './components/Admin/component/shopList';
import Newshop from './components/Admin/component/newshop';
import Contactpm from './components/Admin/component/contactpm';
import User from './components/Admin/component/User';
import UserDashboard from './components/Users/component/userDashboard';
import AppSaz from './components/Users/component/appsaz';
import Allapps from './components/Admin/component/allApps';
import AppSetting from './components/Users/component/AppSetting';
import Cart from './components/cart';
import Payment from './components/payment';

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.userDetail)

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
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/login' element={<Login />}></Route>

            <Route path='/app/:appname' element={<UserApp />}></Route>

            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/prices' element={<Prices />}></Route>
            <Route path='/shop/:id' element={<Post />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/payment' element={<Payment />}></Route>

            <Route path='/dashboard' element={<Dashboard component={<UserDashboard />} />}></Route>
            <Route path='/appsaz' element={<Dashboard component={<AppSaz user={user} />} />}></Route>

            <Route path='/setting/app/:appname' element={<AppSetting user={user} />}></Route>

            <Route path='/admin/login' element={<AdminLogin />}></Route>
            <Route path='/admin/dashboard' element={<AdminDashboard component={<AdminDash />} />}></Route>
            <Route path='/admin/newshop' element={<AdminDashboard component={<Newshop />} />}></Route>
            <Route path='/admin/shoplist' element={<AdminDashboard component={<ShopList user={user} />} />}></Route>
            <Route path='/admin/allusers' element={<AdminDashboard component={<Allusers />} />}></Route>
            <Route path='/admin/user/:id' element={<AdminDashboard component={<User />} />}></Route>
            <Route path='/admin/contactpm' element={<AdminDashboard component={<Contactpm />} />}></Route>
            <Route path='/admin/allapps' element={<AdminDashboard component={<Allapps />} />}></Route>

            <Route path="*" element={<PageNotFound />} />

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
