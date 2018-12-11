import React from 'react'
import { ListGroupItem } from 'reactstrap';

class Item extends React.Component {
	render() {
		return (
				<ListGroupItem>{this.props.name}</ListGroupItem>
		)
	}
}

export default Item