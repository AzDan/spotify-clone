import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import { store } from './redux/store'
import InitApp from './InitApp';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import AlbumPage from './pages/AlbumPage';
import PlaylistPage from './pages/PlaylistPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Grommet>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={<InitApp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<App/>} />
            <Route path='/album' element={<AlbumPage/>} />
            <Route path='/playlist' element={<PlaylistPage/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Grommet>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
