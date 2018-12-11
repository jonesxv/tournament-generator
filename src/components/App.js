import React from 'react'
import TourneyList from './TourneyList'
//import TournamentStart from './TournamentStart'
import Bracket from './Bracket'
import Pools from './Pools'
import PoolSchedule from './PoolSchedule'
import { Container, Col, Row } from 'reactstrap'
import SortableComponents from './SortableComponents'
import ItemData from './ItemData'


class App extends React.Component {
	state = {
		players: {},
		teams: {},
		items: {},
		pools: {
			amount: 0,
			PoolA: {
				1: "Ryan",
				2: "Brian"
			}
		}
	}

	addItem = item => {
		const items = {...this.state.items}
		console.log(item)

		items[`item${Date.now()}`] = item

		this.setState({
			items: items
		})

	}

	updateNumberPools = x => {
		const pools = {...this.state.pools}
		console.log(pools)
		pools.amount = x
		this.setState({ pools })
		console.log(pools.amount)
	}

	loadItemList = () => {
		this.setState({ items: ItemData})
	}

	render() {
		return (
			
			<Container fluid className="main-app">
			
				<Row>
					<Col xl="3">
						<TourneyList 
							addItem={this.addItem}
							loadItemList={this.loadItemList}
							title="Item List" 
							items={this.state.items} 
							/>
					</Col>
					<Col xl="9">
						<Pools 
							pools={this.state.pools}
							title="Pools"
							updateNumberPools={this.updateNumberPools}
							/>
					</Col>
					<Col xl="6">
						<PoolSchedule title="Pool Schedule" />
						<Bracket title="Bracket" />
					</Col>
				</Row>
			</Container>
		)	
	}
}

export default App;