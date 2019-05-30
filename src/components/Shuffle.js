import React from 'react'
import TourneyList from './TourneyList'
//import TournamentStart from './TournamentStart'
import Bracket from './Bracket'
import Pools from './Pools'
import PoolSchedule from './PoolSchedule'
import { Container, Col, Row } from 'reactstrap'
import ItemData from './ItemData'
import ShuffleGames from './ShuffleGames';

class Shuffle extends React.Component {
  state = {
		players: {},
		teams: {},
		items: {},
		pools: {
			amount: 0,
			field: {}
			}
		
	}

	addItem = item => {
		const items = {...this.state.items}

		items[item] = {
			ranks: {
				poolrank: 0,
				overall: 0
			},
			games: {
				pool: {},
				bracket: {}
			}
		}

		this.setState({ items })

	}

	updateNumberPools = x => {
		const pools = {...this.state.pools}
		console.log(pools)
		pools.amount = x
		this.setState({ pools })
	}

	loadItemList = () => {
		const items = {}
		ItemData.map(item => {
			items[item.name] = {}
			console.log(item.name)
		})
		this.setState({ items })
	}

	// createPools = (num) => {
	// 	const pools = {}
	// 	const items = {...this.state.items}
	// 	pools.amount = num
	// 	pools.field = {}
	// 	for (let i=0; i<num; i++) {
	// 		let newItems = {}
	// 		pools.field[`Pool${String.fromCharCode(65+i)}`] = {}
		
	// 		let itemKeys = Object.keys(this.state.items).filter((_, index, Arr) => (index +i) % num == 0)
	// 		itemKeys.map(key => (
	// 			newItems[key] = this.state.items[key]
	// 		))
	// 		pools.field[`Pool${String.fromCharCode(65+i)}`].items = newItems
			
			
			
	// 		//pools.field[`Pool${String.fromCharCode(65+i)}`].items = newItems
			
	// 	}
	// 	//const newItems = Object.keys(this.state.items).filter((_, index, Arr) => index % 2 == 0)
	// 	//const newItems2 = Object.keys(this.state.items).filter((_, index, Arr) => (index + 1) % 2 == 0)
	// 	//console.log(newItems.map(key => this.state.items[key].name))
	// 	//console.log(newItems2.map(key => this.state.items[key].name))

	// 	this.setState({ pools })
  // }
  
  createShuffleGames = (rounds) => {
    const items = {...this.state.items}
    const playerCount = Object.keys(items).length
    const subs = 8 - (playerCount % 8);
    console.log('subs: ', subs);
    for (let i = 0; i < subs; i++) {
      items[`sub${i + 1}`] = {}
    }
    console.log(items)
    this.setState({ items })
  }
  
  render() {
    return (
      <Container fluid className="main-app">
				<Row>
					<Col xl="3">
						<TourneyList 
							addItem={this.addItem}
							loadItemList={this.loadItemList}
							title="Player List" 
							items={this.state.items} 
							/>
					</Col>
					<Col xl="9">
            <ShuffleGames
              title="Shuffle Games"
              field={this.state.players}
              createShuffleGames={this.createShuffleGames}
              />
						{/* <Pools 
							pools={this.state.pools}
							field={this.state.pools.field}
							title="Pools"
							updateNumberPools={this.updateNumberPools}
							createPools={this.createPools}
							/>
						<PoolSchedule title="Pool Schedule" />
						<Bracket title="Bracket" /> */}
					</Col>
					<Col xl="6">

					</Col>
				</Row>
			</Container>
		)	
	}
}

export default Shuffle;