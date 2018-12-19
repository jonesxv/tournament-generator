import React from 'react'
import Item from './Item'
import { Button, ListGroup, ListGroupItem } from 'reactstrap';


class TourneyList extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			items: [''],
			file: null
		}

		this.addItem = this.addItem.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	addItem(event) {
		event.preventDefault()

		const newItem = this.inputItem.value
		this.props.addItem(newItem)
		event.currentTarget.reset()
	}

	onChange(e) {
    	this.setState({file:e.target.files[0]})
  	}

	render() {
		return (			
			<ListGroup className="participant-list">
				<h2>{this.props.title}</h2>
				{Object.keys(this.props.items).map(key => (
              		<Item
              			key={key}
              			data={key}
              			/>
              		))}
				<ListGroupItem>
					<form onSubmit={this.addItem}>
						<input 
							ref={a => this.inputItem = a}
							type="text"
							required 
							placeholder="add Item" />
					</form>
				</ListGroupItem>

				<Button onClick={this.props.loadItemList}>Load Sample List</Button>
				<input type="file" onChange={this.onChange} />
			</ListGroup>

		)	
	}
}


export default TourneyList