import React from 'react';
import {createRoot} from 'react-dom/client';
import BannerContainer from './components/BannerContainer';

const container = document.getElementById('camp-banners');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BannerContainer />
    </React.StrictMode>
);
