import { Route, Routes } from 'react-router-dom';
import Homepage from './homepage/Homepage';

const Appview = () => {
    return (
        // Make functionality for routes for both logged in and logged out users
        <Routes>
            <Route index element={<Homepage />} />
        </Routes>
    );
}

export default Appview;
