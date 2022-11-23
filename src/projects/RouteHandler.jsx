import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './app/system/pages/IndexPage';

export default function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    );
}
