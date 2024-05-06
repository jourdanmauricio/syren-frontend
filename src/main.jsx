import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import NotificationProvider from '@/components/Notifications/NotificationProvider';

import App from './App.jsx';
import './index.css';

import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <NotificationProvider>
      {/* <BrowserRouter> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </BrowserRouter> */}
    </NotificationProvider>
  </Provider>
  // </React.StrictMode>
);
