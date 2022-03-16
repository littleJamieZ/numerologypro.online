import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import LifePath from './LifePath';

function App() {
	return (
		<div className="App">
			<header className="App-header">Numerologypro</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="life-path" element={<LifePath />} />
			</Routes>
		</div>
	);
}

export default App;
