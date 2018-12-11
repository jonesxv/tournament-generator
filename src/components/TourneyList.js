import React from 'react'
import Item from './Item'
import ItemData from './ItemData'
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


class TourneyList extends React.Component {

	state = {
		items: ['Player 1'],
		test: [],
	}

	constructor(props) {
		super(props)

		this.state = {
			items: ['']
		}

		this.addItem = this.addItem.bind(this)
		this.onSortEnd = this.onSortEnd.bind(this)
	}

	addItem(event) {
		event.preventDefault()

		console.log(this.inputItem.value)

		const newItem = {
			name: this.inputItem.value
		}
		this.props.addItem(newItem)
		event.currentTarget.reset()
	}

	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState({
			items: arrayMove(this.state.items, oldIndex, newIndex)
		})
	}


	render() {
		return (			
			<ListGroup className="participant-list">
				<h2>{this.props.title}</h2>
				{Object.keys(this.props.items).map(key => (
              		<Item
              			key={key}
              			name={this.props.items[key].name}
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
					<Button onClick={this.props.loadItemList}>Add Items</Button>
				</ListGroupItem>
			</ListGroup>

		)	
	}
}


export default TourneyList