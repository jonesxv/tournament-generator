import React from 'react'
import TourneyList from './TourneyList'
//import TournamentStart from './TournamentStart'
import Bracket from './Bracket'
import Pools from './Pools'
import PoolSchedule from './PoolSchedule'
import { Container, Col, Row } from 'reactstrap'
import ItemData from './ItemData'
import ShuffleGames from './ShuffleGames';
import { arrayMove } from 'react-sortable-hoc';

class Shuffle extends React.Component {
  state = {
		players: {},
		teams: {},
		items: {},
    games: 
    {
      round1: [
        {
          winners: [],
          losers: [],
          pointdiff: 0,
          players1: [
            "player1",
            "player2",
            "player3",
            "player4"
          ],
          players2: [
            "player1",
            "player2",
            "player3",
            "player4"
          ]
        }
      ]
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

  createShuffleGames = (rounds) => {
    const items = {...this.state.items}
    const playerCount = Object.keys(items).length
    const subs = 8 - (playerCount % 8);
    const games = {};
    console.log('subs: ', subs);
    for (let i = 0; i < subs; i++) {
      items[`sub${i + 1}`] = {}
    }
    console.log(items)
    let playerKeys = Object.keys(items);
    function createGames(num) {
      
      while (playerKeys.length > 4) {
        for (let i = 0; i < 4; i++) {
          var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
          playerKeys.pop();
        }
        console.log(playerKeys);
      }
      
    }
    for (let i = 0; i < rounds; i ++) {
      games[`round${i + 1}`] = [];
      createGames(i);
    }

    this.setState({ items, games })
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