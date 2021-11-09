import React from 'react';
import {WidgetComponentProps} from '../dashboard.model';

// import { Container } from './styles';

export const ListTemplate = ({content}: WidgetComponentProps) => {
	const {items, title} = content.data;
	return (
		<div className="widget__list">
			<h2 className="widget__title">{title}</h2>
			<ul className="widget__ul">
				{items?.map((item: any) => (
					<li className="widget__li">
						<span>{item.title}</span>
						<span>{item.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
