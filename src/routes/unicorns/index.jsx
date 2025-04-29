import { Routes, Route } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext.jsx';
import UnicornTableView from './UnicornTableView.jsx';
import UnicornFormView from './UnicornFormView.jsx';

const UnicornsRoutes = () => {
    return (
        <UnicornProvider>
            <Routes>
                <Route path="/" element={<UnicornTableView />} />
                <Route path="/create" element={<UnicornFormView />} />
                <Route path="/edit/:id" element={<UnicornFormView />} />
            </Routes>
        </UnicornProvider>
    );
}

export default UnicornsRoutes;