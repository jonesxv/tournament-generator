import React from 'react'
import { Button } from 'reactstrap'

class Game extends React.Component {
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

class Round extends React.Component {
  render() {
    const gameComponents = Object.keys(this.props.games).map(key => {
      <Game
        key={key}
        team1={this.props.games.team1}
        team2={this.props.games.team2}
      />
    })
    return (
      <div>
        {gameComponents}
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class ShuffleGames extends React.Component {
  
	render() {
    const roundComponents = Object.keys(this.props.games).map(key => {
			<Round
				key={key}
				title={key}
				games={this.props.games[key]}
      />
    })
    console.log('round id ' + roundComponents);
		return (
      <div>
				<h2>{this.props.title}</h2>
				<form className="pool-num-form" onSubmit={this.updatePoolNum}>
					Number of Rounds

					<input 
						type="text"
						ref={a => this.numberOfRounds = a}
					/>
					<Button onClick={() => this.props.createShuffleGames(this.numberOfRounds.value)}>Submit</Button>
				</form>
				{ roundComponents }
			</div>
		)
	}
}      

export default ShuffleGames