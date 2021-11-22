import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
// import './index.css';
import 'antd/dist/antd.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate persistor={persistor}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
