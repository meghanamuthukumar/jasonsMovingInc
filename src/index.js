import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage.jsx'
import reportWebVitals from './reportWebVitals';
import HomeScreen  from './pages/home-screen/HomeScreen';
import SchedulePickUp from './pages/schedule-pick-up/SchedulePickUp';
import PastOrders from './pages/past-order/PastOrder';
import ProfilePage from './pages/profile-page/ProfilePage';
import PickupLocation from './pages/pickup-location/PickupLocation';
import PickupDetails from './pages/pickup-details/PickupDetails';
import ScheduleDropoff from './pages/schedule-dropoff/ScheduleDropoff';
import DropoffLocation from './pages/dropoff-location/DropoffLocation';
import DropoffDetails from './pages/dropoff-details/DropoffDetails';
import TermsPage from './pages/terms-page/TermsPage';
import PaymentPage from './pages/payment-page/PaymentPage';
import CategoryPage from './pages/category-page/CategoryPage';
import ListCategory from './pages/list-category/ListCategory';
import ItemsList from './pages/items-list/ItemsList';
import AddItems from './pages/add-items/AddItems';
import ReviewItems from './pages/review-items/ReviewItems';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/" element={<App />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/schedule-pickup" element={<SchedulePickUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/past-orders" element={<PastOrders />} />
          <Route path="/pickup-location" element={<PickupLocation />} />
          <Route path="/pickup-details" element={<PickupDetails />} />
          <Route path="/schedule-dropoff" element={<ScheduleDropoff />} />
          <Route path="/dropoff-location" element={<DropoffLocation />} />
          <Route path="/dropoff-details" element={<DropoffDetails />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/list-category" element={<ListCategory />} />
          <Route path="/items-list" element={<ItemsList />} />
          <Route path="/add-items" element={<AddItems />} />
          <Route path="/review-items" element={<ReviewItems />} />

        </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
