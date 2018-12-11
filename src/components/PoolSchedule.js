import React from 'react'

class Pool extends React.Component {
	render() {
		return (
			<div className="fds">
				<h2>{this.props.name}</h2>
			</div>
		)
	}
}

class PoolSchedule extends React.Component {
	render() {
		return (
			<div className="">
				<h2>{this.props.title}</h2>
				<Pool name="Pool A" />
				<Pool name="Pool B" />
				<Pool name="Pool C" />
				<Pool name="Pool D" />
			</div>
		)
	}
}

export default PoolSchedule