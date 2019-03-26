import React from 'react';
import 'ordering/Menu.css'
import {Col, Row, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import {connect} from 'react-redux'


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
                        <ListGroupItemHeading>Coffee</ListGroupItemHeading>
                        {this.props.menu["coffee"].map((drink) => {
                            return (
                                <ListGroupItem className={"d-flex w-100 align-items-center"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']}
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                        <ListGroupItemHeading>Tea</ListGroupItemHeading>
                        {this.props.menu["tea"].map((drink) => {
                            return (
                                <ListGroupItem className={"d-flex w-100 align-items-center"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']}
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                        <ListGroupItemHeading>Milk</ListGroupItemHeading>
                        {this.props.menu["milk"].map((drink) => {
                            return (
                                <ListGroupItem className={"d-flex w-100 align-items-center"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']}
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}>Add</Button>
                                </ListGroupItem>
                            );
                        })}
                        <ListGroupItemHeading>Other</ListGroupItemHeading>
                        {this.props.menu["other"].map((drink) => {
                            return (
                                <ListGroupItem className={"d-flex w-100 align-items-center"}>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"MenuJs-price"}>
                                        {drink['price']}
                                    </div>
                                    <Button color={"link"} className={"ml-auto"}>Add</Button>
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
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);