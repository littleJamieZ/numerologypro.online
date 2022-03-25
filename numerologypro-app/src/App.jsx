import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.scss';
import LifePath from './LifePath';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<h1 className="app-header-title">Numerologypro.online</h1>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="life-path" element={<LifePath />} />
			</Routes>
		</div>
	);
}

export default App;
