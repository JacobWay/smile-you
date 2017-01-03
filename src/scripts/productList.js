import React, {Component} from "react";
import {render} from "react-dom";
import _ from "lodash";

class SearchBar extends Component{
    constructor(){
        super();
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e){
        let value = this.filterTextInput.value;
        let inStock = this.inStockInput.checked;
        this.props.onUserInput(value, inStock);
    }

    componentWillUpdate(){
        console.log("refs in componentWillUpdate... ", this.refs);
    }

    componentWillMount(){
        console.log("refs in componentWillMount... ", this.refs);
    }

    componentDidMount(){
        console.log("refs in componentDidMount... ", this.refs);
        let input_ = document.querySelector("input");
        input_.focus();
    }

    render(){
        console.log("render in SearchBar...");
        return(
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={this.changeHandler}
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                />
                <p>
                    <input 
                        type="checkbox"
                        ref={(input) => this.inStockInput = input}
                        checked={this.props.inStock}
                        onChange={this.changeHandler}
                    />
                    {' '}
                    Only show products in stock.
                </p>
            </form>
        );
    }
}

class ProductList extends Component{

    render(){
        const nameHead = "Name";
        const priceHead = "Price";
        const products = this.props.products;
        let lastCategory = null;
        let rows = [];
        let keyNum = 0;
        let {filterText, inStock} = this.props;
        products.forEach( (item) => {
            if( (item.name.toLowerCase().indexOf(filterText.toLowerCase().trim()) === -1) || 
                (inStock && (!item.stock)) )    return;
            if(item.category !== lastCategory){
                rows.push(<ProductCategoryRow key={_.uniqueId("key-id-")} category={item.category} />);
            }
            lastCategory = item.category;
            rows.push(<ProductRow stock={item.stock} name={item.name} price={item.price} key={_.uniqueId("key-id-")}/>);
            keyNum++;
        } );
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>{nameHead}</th>
                            <th>{priceHead}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class ProductCategoryRow extends Component{
    render(){
        let {category} = this.props;
        return(
            <tr><td colSpan={2}>{category}</td></tr>
        );
    }
}

class ProductRow extends Component{
    render(){
        let {name, price, stock} = this.props;
        let color;
        if(!stock) color = "red";
        return(
            <tr style={{color: color}}><td>{name}</td><td>{price}</td></tr>
        );
    }
}


const products = [
    {category: "Sporting Goods", name: "Football", price: "$55", stock: true},
    {category: "Sporting Goods", name: "Football", price: "$55", stock: true},
    {category: "Sporting Goods", name: "Basketball", price: "$66", stock: false},
    {category: "Electronics", name: "Macbook Pro", price: "$0", stock: true},
    {category: "Electronics", name: "Air Cleaner", price: "$555", stock: false},
];

class FilterableProductList extends Component{
    constructor(){
        super();
        this.state = {
            filterText: '',
            products: products,
            inStock: false
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(filterText, inStock){
        this.setState({
            filterText,
            inStock
        });
    }

    componentWillUpdate(){
        console.log("state in componentWillUpdate... ", this.state);
    }

    componentDidMount(){
        console.log("state in componentDidMount... ", this.state);
    }

    render(){
        console.log("render in FilterableProductList...");
        return(
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    onUserInput={this.changeHandler}
                    inStock={this.state.inStock}
                />
                <ProductList 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStock={this.state.inStock}
                />
            </div>
        );
    }
}


let mountNode = document.getElementById("app");
render(<FilterableProductList />, mountNode);
