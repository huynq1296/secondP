import React from "react";
import "ordering/Menu.css";
import {
    Col,
    Row,
    Button,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from "reactstrap";
import {connect} from "react-redux";
import {addProduct, getProducts} from "actions/orderActions";

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className={"text-center"}>
                        <Button color={"secondary"} className={"MenuJs-headButton"}>
                            <div>Phong/Ban [0/30]</div>
                            <div>B.1</div>
                        </Button>
                    </Col>
                    <Col className={"text-center"}>
                        <Button color={"secondary"} className={"MenuJs-headButton"}>
                            <div>Thuc Don</div>
                            <div>Tat ca</div>
                        </Button>
                    </Col>
                </Row>
                <Row className={"pt-3"}>
                    <ListGroup className={"w-100"}>
                        {
                            this.props.productType.map(type => {
                                return (
                                    <div>
                                        <ListGroupItemHeading className={"mt-2"} key={1}>
                                            {type}
                                        </ListGroupItemHeading>
                                        {
                                            this.props.products.filter(product => product.type.type == type).map((product) => {
                                            return (
                                                <ListGroupItem
                                                    key={product["name"]}
                                                    className={"d-flex w-100 align-items-center p-0 pl-2"}
                                                >
                                                    <div>{product["name"]}</div>
                                                    <div className={"MenuJs-price"}>{product["price"] / 1000}k
                                                    </div>
                                                    <Button
                                                        color={"link"}
                                                        className={"ml-auto"}
                                                        onClick={() => this.props.addProduct(product)}
                                                    >
                                                        Add
                                                    </Button>
                                                </ListGroupItem>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </ListGroup>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.order.products,
        productType: state.order.productType,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => {
            dispatch(addProduct(product));
        },

        getProducts: () => {
            dispatch(getProducts());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
