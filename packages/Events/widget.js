import React from 'react';
import { createRoot } from 'react-dom/client';
import { EventContainer } from './components/EventContainer';

const container = document.getElementById('camp-events');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <EventContainer />
    </React.StrictMode>
);
