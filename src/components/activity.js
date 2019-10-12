import React from 'react';
import 'babel-polyfill';
import { ResponsiveCalendar } from '@nivo/calendar';
import { format, subYears } from 'date-fns';

const formatData = (list) => {
	const keys = Object.keys(list);
	const getDay = (timestamp) =>
		format(new Date(timestamp * 1000), 'yyyy-MM-dd');
	const res = keys.map((key) => ({
		day: getDay(key),
		value: list[key],
	}));

	return res;
};

const Activity = ({ submissions }) => {
	const from = format(new Date(2019, 0, 1), 'yyyy-MM-dd');
	const to = format(new Date(2019, 11, 31), 'yyyy-MM-dd');
	const data = formatData(submissions);
	console.log(from, to, data);

	return (
		<div style={{ width: '700px', height: '200px' }}>
			<ResponsiveCalendar
				data={data}
				from={from}
				to={to}
				// domain={[1, 5]}
				emptyColor='#ebedf0'
				colors={['#c6e48b', '#7bc96f', '#239a3b', '#196127']}
				monthBorderColor='#fff'
				monthLegendOffset={10}
				dayBorderWidth={3}
				dayBorderColor='#fff'
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'row',
						translateY: -20,
						itemCount: 4,
						itemWidth: 20,
						itemHeight: 20,
						itemDirection: 'top-to-bottom',
					},
				]}
			/>
		</div>
	);
};

export default Activity;
