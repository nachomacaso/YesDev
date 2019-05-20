import React, { useEffect, useState } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { multiSort } from './util/SortUtil';
import { Row, Header } from './Row';
import { ControlBar } from './ControlBar';
import { Spinner } from './Spinner';
import { getMinMax } from './util/DataUtil.js';

const List = ({ data, minMax }) => data.map((item, index) => <Row key={index} item={item} minMax={minMax}/>);

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [sort, setSort] = useState('CONTRACTSIZE,PARTICIPANTFULLNAME');
	const sortFunc = multiSort(sort.split(','));
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
  
  const minMax = getMinMax(data);
  
	return (
		<>
			<Card id="table">
				<CardActions id="controls">
					<ControlBar sort={sort} setSort={setSort} />
				</CardActions>
				<CardContent id="content">
					<>
						<Header id="header" />
						<div id="list">
							<List data={data.sort(sortFunc)} minMax={minMax}/>
						</div>
					</>
				</CardContent>
			</Card>
			<Spinner spinning={loading} />
		</>
	);
}

export default App;
