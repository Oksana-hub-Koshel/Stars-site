import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import {BookstoreServiceProvider} from "./components/bookservice-contex/bookstoreservice-contex";

import BookstoreService from "./services/bookstore-service";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
            <ErrorBoundary>
                <BookstoreServiceProvider value={BookstoreService}>
                    <BrowserRouter>
                    <App/>
                    </BrowserRouter>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>




);

