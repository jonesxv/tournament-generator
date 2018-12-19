import React from 'react'
import { ListGroupItem } from 'reactstrap';

class Item extends React.Component {
	render() {
		const name = this.props.data
		return (
				<ListGroupItem>{name}</ListGroupItem>
		)
	}
}

export default Item