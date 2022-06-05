import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
// import Users from './components/users';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
