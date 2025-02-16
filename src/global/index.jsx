import React from 'react';
import { createRoot } from "react-dom/client";

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <h1>Root Rendered...</h1>
    </React.StrictMode>
);
