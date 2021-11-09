import React from 'react';
import {WidgetComponentProps} from '../dashboard.model';
// import { Container } from './styles';

export const BlockTemplate = ({content}: WidgetComponentProps) => {
	const {title, current, prev, value} = content.data;

	const handleInfo = () => (prev ? `${prev} - ${current}` : current);
	return (
		<>
			<h2 className="widget__title">{title}</h2>
			<p className="widget__value">{value}</p>
			<p className="widget__info">{handleInfo()}</p>
		</>
	);
};
