import React from 'react';
import {Dashboard} from 'src/components/Dashboard/Dashboard';
import {widgets} from './mocks/dashboard.data';

import './styles/main.scss';

const App = () => {
	return (
		<div className="App">
			<Dashboard title="My awesome SOLID dashboard" widgets={widgets} />
		</div>
	);
};

export default App;
