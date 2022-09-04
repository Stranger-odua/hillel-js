import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    // <StrictMode>
    <Provider store={ store }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    // </StrictMode>,
);
