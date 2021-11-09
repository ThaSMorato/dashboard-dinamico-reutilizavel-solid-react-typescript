import {Widgets} from 'src/components/Dashboard/dashboard.model';
import {templateComponent} from './dashboard.config';

export interface WidgetProps {
	content: Widgets;
	className?: string;
}

export const Widget = ({content, className}: WidgetProps) => {
	const customClass = className && ` ${className} `;
	const position = content.config.position.toLowerCase();
	const WidgetComponent = templateComponent[content.config.template];
	return (
		<div className={`${customClass}widget widget--${position}`}>
			<WidgetComponent content={content} />
		</div>
	);
};
