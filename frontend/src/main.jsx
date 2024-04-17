import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/store.js';
import { fetchItineraries, fetchItinerary } from './store/itinerary.js';
import { createTransportation, deleteTransportation, updateTransportation } from './store/transportation.js';

const store = configureStore();


if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.fetchItinerary = fetchItinerary;
  window.fetchItineraries = fetchItineraries;
  window.createTransportation = createTransportation
  window.updateTransportation = updateTransportation
  window.deleteTransportation = deleteTransportation
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
