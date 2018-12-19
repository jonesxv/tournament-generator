import React from 'react'
import _ from "lodash";
import { Button } from 'reactstrap'
// import Item from './Item'



class Pool extends React.Component {

	render() {

		return (
			<table className="pool">
				<thead>
					
					<tr>
						<th>{this.props.title}</th>
						<th className="point-diff" />
					</tr>
					<tr>
						<th>Name</th>
						<th className="point-diff">Point Diff</th>
					</tr>
				</thead>
				<tbody>
					{Object.values(this.props.items).map(e => (
						<tr>
							<td>{e}</td>
							<td></td>
						</tr>
					))}
				</tbody>
			</table>

		)
	}
}


class Pools extends React.Component {
	updatePoolNum = e => {
		e.preventDefault()
		this.props.updateNumberPools(this.inputPoolNumber.value)
	}

	addItemsToPools = e => {

	}
	
	render() {
		const poolComponents = Object.keys(this.props.field).map(key => (
			<Pool
				key={key}
				title={key}
				items={Object.keys(this.props.field[key].items)}
			/>
		))
		console.log("pool IDs: " + poolComponents)


		


		return (
			<div>
				<h2>Pools</h2>
				<form className="pool-num-form" onSubmit={this.updatePoolNum}>
					Enter Number of Pools

					<input 
						type="text"
						ref={a => this.inputPoolNumber = a}
					/>
					<Button onClick={() => this.props.createPools(this.inputPoolNumber.value)}>Create Pools</Button>
				</form>
				{poolComponents}
			</div>
		)
	}
}

export default Pools