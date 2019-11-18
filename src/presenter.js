/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoutes, LoginRoutes } from '@Components/routes';
import getPortalView from '@Helpers/portal-view.helper';
import NavBar from '@Components/navbar/navbar-top';
import Footer from '@Components/footer';

const AppView = () => (
	<>
		<NavBar />
		<AppRoutes />
		<Footer />
	</>
);

const LoginView = () => (
	<>
		<LoginRoutes />
	</>
);

const Presenter = props => {
	const { portalToRender } = props;
	let portal = portalToRender;

	if (portal === '') {
		portal = getPortalView();
	}

	const presenter = {
		app: <AppView />,
		login: <LoginView />,
	};

	return presenter[portal];
};

Presenter.propTypes = {
	portalToRender: PropTypes.string.isRequired,
};

export default connect(state => ({
	portalToRender: state.presenter.presenterView,
}))(Presenter);