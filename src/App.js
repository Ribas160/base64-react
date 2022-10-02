import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './views/main/Main';
import Encode from './views/encode/Encode';
import Decode from './views/decode/Decode';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/encode" element={<Encode />} />
				<Route path="/decode" element={<Decode />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
