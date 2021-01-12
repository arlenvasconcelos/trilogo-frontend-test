import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './pages/Home';
import './App.less';
import './styles/global.css';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
