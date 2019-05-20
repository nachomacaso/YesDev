import React from 'react';
import { Input, MenuItem, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';

export const ControlBar = ({ sort, setSort }) => (
	<>
		<InputLabel htmlFor="sort">Sort&nbsp;&nbsp;</InputLabel>
		<Select
			title="Sort Field"
			value={sort}
			onChange={event => setSort(event.target.value)}
			input={<Input name="sort" id="sort" />}
		>
			<MenuItem value={'CONTRACTSIZE,PARTICIPANTFULLNAME'}>MW</MenuItem>
			<MenuItem value={'TRADETYPE,PARTICIPANTFULLNAME'}>Trade Type</MenuItem>
			<MenuItem value={'COST'}>Cost</MenuItem>
			<MenuItem value={'REVENUE'}>Revenue</MenuItem>
			<MenuItem value={'PROFIT'}>Profit</MenuItem>
		</Select>
	</>
);
