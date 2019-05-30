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

class ShuffleGames extends React.Component {
	render() {
		return (
      <div>
				<h2>{this.props.title}</h2>
				<form className="pool-num-form" onSubmit={this.updatePoolNum}>
					Enter Number of Pools

					<input 
						type="text"
						ref={a => this.numberOfRounds = a}
					/>
					<Button onClick={() => this.props.createShuffleGames(this.numberOfRounds.value)}>Submit</Button>
				</form>
				{/* {poolComponents} */}
			</div>
		)
	}
}      

export default ShuffleGames