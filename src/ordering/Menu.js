import React from 'react';
import 'ordering/Menu.css'
import {Col, Row, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import {connect} from 'react-redux';
import {addDrink} from 'actions/orderActions';

class Menu extends React.Component {
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
                        <ListGroupItemHeading className={"mt-2"}>Coffee</ListGroupItemHeading>
                        {this.props.menu["coffee"].map((drink) => {
                            return (
                                <ListGroupItem key={drink['name']}
                                               className={"d-flex w-100 align-items-center p-0 pl-2"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']/1000}k
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}
                                            onClick={() => this.props.addDrink(drink)}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                        <ListGroupItemHeading className={"mt-2"}>Tea</ListGroupItemHeading>
                        {this.props.menu["tea"].map((drink) => {
                            return (
                                <ListGroupItem key={drink['name']}
                                               className={"d-flex w-100 align-items-center p-0 pl-2"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']/1000}k
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}
                                            onClick={() => this.props.addDrink(drink)}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                        <ListGroupItemHeading className={"mt-2"}>Milk</ListGroupItemHeading>
                        {this.props.menu["milk"].map((drink) => {
                            return (
                                <ListGroupItem key={drink['name']}
                                               className={"d-flex w-100 align-items-center p-0 pl-2"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']/1000}k
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}
                                            onClick={() => this.props.addDrink(drink)}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                        <ListGroupItemHeading className={"mt-2"}>Other</ListGroupItemHeading>
                        {this.props.menu["other"].map((drink) => {
                            return (
                                <ListGroupItem key={drink['name']}
                                               className={"d-flex w-100 align-items-center p-0 pl-2"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']/1000}k
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}
                                            onClick={() => this.props.addDrink(drink)}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return {
        addDrink: (drink) => {
            dispatch(addDrink(drink))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);