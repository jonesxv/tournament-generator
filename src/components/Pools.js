import React from 'react'
import _ from "lodash";
// import Item from './Item'

class PoolHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>POOL A</th>
					<th className="point-diff" />
				</tr>
				<tr>
					<th>Name</th>
					<th className="point-diff">Point Diff</th>
				</tr>
			</thead>
		)
	}
}

class PoolRow extends React.Component {
	render() {
		return (
			<tbody>
				<tr>
					<td>First Middle Last</td>
					<td className="point-diff">23</td>
				</tr>
			</tbody>
		)
	}
}

class Pool extends React.Component {
	render() {
		return (
			<table className="pool">
				<PoolHeader />
				<PoolRow />
				<PoolRow />
				<PoolRow />
				<PoolRow />
				<PoolRow />
			</table>

		)
	}
}


class Pools extends React.Component {
	updatePoolNum = e => {
		e.preventDefault()
		this.props.updateNumberPools(this.inputPoolNumber.value)
	}

	
	render() {
		const numberOfPools = this.props.pools.amount
		const poolComponents = []
		_.times(numberOfPools, (i) => {
					poolComponents.push(<Pool key={i}/>)
				})
		
		return (
			<div>
				<h2>Pools</h2>
				<form onSubmit={this.updatePoolNum}>
					<input 
						type="text"
						ref={a => this.inputPoolNumber = a}
					/>
				</form>
			
				{poolComponents}
				<p>{numberOfPools}</p>
			</div>
		)
	}
}

export default Pools