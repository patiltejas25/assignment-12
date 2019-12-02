import React, { Component } from 'react'
import ProductRow from './ProductRow';


class ProductTable extends Component {

	constructor(props) {
		super(props);
		this.handleDestroy = this.handleDestroy.bind(this);
	}

	handleDestroy(id) {
		this.props.destroy(id);
	}

	render() {
        let { filterText } = this.props;
		const products = Object.keys(this.props.products);
		let rows = [];
		
		for (let i = 0; i < products.length; i++) {
			const p = products[i]; 
			const product = this.props.products[p];

			if(filterText && filterText.length > 0 && product.name.toLowerCase().indexOf(filterText) === -1) continue;
			rows.push(<ProductRow key={product.id} product={product} onDestroy={this.handleDestroy} />)
		}
		
		return(
			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th>Name</th>
                        <th>Category</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}

}


export default ProductTable;