import React, { useEffect, useState } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { interpolateHsl, quantize } from 'd3-interpolate';
import { multiSort } from './util/SortUtil';
import { Row, Header } from './Row';
import { ControlBar } from './ControlBar';
import { Spinner } from './Spinner';

const List = ({ data, background, sort }) => data.map((item, index) => <Row key={index} item={item} color={background[index]} sort={sort.toLowerCase()} />);

function App() {
	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
	const [sort, setSort] = useState('CONTRACTSIZE,PARTICIPANTFULLNAME');
	const sortFunc = multiSort(sort.split(','));
  const pageData = data.sort(sortFunc);
  const colors = quantize(interpolateHsl('red', 'green'), pageData.length);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const trans = await fetch('transactions.json');
			const json = await trans.json();
			setData(json);
			setLoading(false);
		}
		fetchData();
	}, []);
	return (
		<>
			<Card id="table">
				<CardActions id="controls">
					<ControlBar
						sort={sort}
						setSort={setSort}
					/>
				</CardActions>
				<CardContent>
					<>
						<Header id="header" />
						<List data={pageData} background={colors} sort={sort} />
					</>
				</CardContent>
			</Card>
			<Spinner spinning={loading} />
		</>
	);
}

export default App;
