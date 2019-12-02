import React, { Component } from "react";

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

class ProductForm extends Component {

	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.state = {
			product: Object.assign({}, RESET_VALUES), errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
	}

	handleSave(e) {
		e.preventDefault();
		this.props.onSave(this.state.product)
		this.setState({
			product: Object.assign({}, RESET_VALUES), errors: {}
		})
	}

	handleChange(e) {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState((prevState) => {
			prevState.product[name] = value
			return { product: prevState.product }
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSave}>
				<h2>Add a new product</h2>
                
				Name <br />
				<input type="text" className="form-control col-sm-5 col-lg-6" name="name" id="name"  onChange={this.handleChange} value={this.state.product.name} required /> <br />

				Category <br />
				<input type="text" className="form-control col-sm-5 col-lg-6" name="category" id="category" onChange={this.handleChange} value={this.state.product.category} required /> <br />

				Price <br />
				<input type="text" className="form-control col-sm-5 col-lg-6" name="price" id="price"  onChange={this.handleChange} value={this.state.product.price} required /> <br />

				<input type="submit"  className="btn btn-primary" value="Save" />
			</form>
		)
	}

}

export default ProductForm;