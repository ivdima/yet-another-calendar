import React from 'react';

import ErrorBoundary from './components/error-boundary';
import Container from './components/container';
import Content from './components/content';
import Header from './view/header';
import Main from './view/main';
import Sidebar from './view/sidebar';

import CalendarController from './controller/provider';

import './style/style.less';

const App = () => {
	return (
		<ErrorBoundary>
			<CalendarController>
				<Container>
					<Header />
					<Content>
						<Sidebar />
						<Main />
					</Content>
				</Container>
			</CalendarController>
		</ErrorBoundary>
	);
}

export default App;
