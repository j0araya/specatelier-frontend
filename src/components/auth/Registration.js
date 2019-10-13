/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import getEnpoint from 'Configuration/config';

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [registrationErrors, setRegistrationErrors] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email,
			password,
		};

		fetch(getEnpoint('registrations'), {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Access-Controll-Allow-Origin': '*',
			},
		})
			.then(data => data.json())
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
				setRegistrationErrors(error);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit} autoComplete="off">
				{registrationErrors}
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default Registration;