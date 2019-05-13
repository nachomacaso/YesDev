import React from 'react';
import { formatCurrency } from './util/FormatUtil.js';
export const Row = ({ item, id }) => (
	<div id={id} className="row">
		<div id="participant" className="column" title={item.PARTICIPANTFULLNAME}>
			{item.PARTICIPANTFULLNAME}
		</div>
		<div id="tradetype" className="column">
			{item.TRADETYPE}
		</div>
		<div id="peaktype" className="column">
			{item.PEAKTYPE}
		</div>
		<div id="hedgetype" className="column">
			{item.HEDGETYPE}
		</div>
		<div id="source" className="column">
			{item.SOURCENAME}
		</div>
		<div id="sink" className="column">
			{item.SINKNAME}
		</div>
		<div id="size" className="column">
			{item.CONTRACTSIZE}
		</div>
		<div id="cost" className="column">
			{formatCurrency(item.COST)}
		</div>
		<div id="revenue" className="column">
			{formatCurrency(item.REVENUE)}
		</div>
		<div id="profit" className="column">
			{formatCurrency(item.PROFIT)}
		</div>
	</div>
);

export const Header = ({ item, id }) => (
	<div id={id} className="row">
		<div id="participant" className="column">
			Name
		</div>
		<div id="tradetype" className="column">
			Trade Type
		</div>
		<div id="peaktype" className="column">
			Peak Type
		</div>
		<div id="hedgetype" className="column">
			Hedge Type
		</div>
		<div id="source" className="column">
			Source
		</div>
		<div id="sink" className="column">
			Sink
		</div>
		<div id="size" className="column">
			MW
		</div>
		<div id="cost" className="column">
			Cost
		</div>
		<div id="revenue" className="column">
			Revenue
		</div>
		<div id="profit" className="column">
			Profit
		</div>
	</div>
);
