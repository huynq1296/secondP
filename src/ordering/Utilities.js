import React from 'react';
import 'ordering/Utilities.css'
import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from 'reactstrap';
import {connect} from 'react-redux';


class Utilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VAT: 0,
            isLeftToggled: false,
            isRightTggled: false
        }
        this.handleLeftToggle = this.handleLeftToggle.bind(this);
        this.handleRemoveGuest = this.handleRemoveGuest.bind(this);
        this.handleRightToggle = this.handleRightToggle.bind(this);
        this.handle0VAT = this.handle0VAT.bind(this);
        this.handle10VAT = this.handle10VAT.bind(this);
    }
    handle0VAT(){
        this.setState({
           ...this.state,
           VAT: 0
        });
    }
    handle10VAT(){
        this.setState({
            ...this.state,
            VAT: 10
        });
    }
    handleRemoveGuest() {
        let button = document.getElementById("UtilitiesJs-guestButton");
        button.style.display = "none";
    }

    handleLeftToggle() {
        this.setState({
            ...this.state,
            isLeftToggled: !this.state.isLeftToggled
        })
    }

    handleRightToggle() {
        this.setState({
            ...this.state,
            isRightToggled: !this.state.isRightToggled
        })
    }

    render() {
        return (
            <div className={"border-top border-color-dark"}>
                <Row>
                    <Col xs={5}>
                        <div className={"d-flex mb-1 mt-1"}>
                            <Input type={"text"} name={"customerName"} placeholder={"Ten Khach Hang"}/>
                            <Button color={"success"}><i className={"fa fa-plus"}/></Button>
                        </div>
                        <Button className={"text-primary mb-1 text-left p-0"} color={"light"}
                                onClick={this.handleRemoveGuest}
                                id={"UtilitiesJs-guestButton"}>
                            <i className={"fa fa-times"}/> Khách lẻ
                        </Button>
                    </Col>
                    <Col xs={5} className={"ml-auto d-flex align-items-center"}>

                        <div className={"mr-auto"}>Tổng thành tiền</div>
                        <div className={"ml-auto"}>120000</div>

                    </Col>
                </Row>
                <Row className={"mb-1"}>
                    <Col xs={5}>
                        <Input type={"number"}/>
                    </Col>
                    <Col xs={5} className={"ml-auto d-flex"}>
                        <div className={"mr-auto p-0"} xs={6}>Chiết khấu</div>
                        <div className={"ml-auto p-0"} xs={6}>
                            <Input type={"number"} name={"discount"} className={"p-0"}/>
                        </div>
                    </Col>
                </Row>
                <Row className={"mb-1"}>
                    <Col xs={5} className={"d-flex"}>
                        <Col xs={6} className={"pr-1 pl-0"}>
                            <Dropdown isOpen={this.state.isLeftToggled} toggle={this.handleLeftToggle}>
                                <DropdownToggle caret className={"w-100 bg-white text-dark border-info"}>
                                    SomeThing
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>Item 2</DropdownItem>
                                    <DropdownItem>Item 3</DropdownItem>
                                    <DropdownItem>Item 4</DropdownItem>
                                    <DropdownItem>Item 5</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col xs={6} className={"pr-0 pl-1"}>
                            <Dropdown isOpen={this.state.isRightToggled} toggle={this.handleRightToggle}>
                                <DropdownToggle caret className={"w-100 bg-white text-dark border-info"}>
                                    SomeThing
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>Item 2</DropdownItem>
                                    <DropdownItem>Item 3</DropdownItem>
                                    <DropdownItem>Item 4</DropdownItem>
                                    <DropdownItem>Item 5</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Col>
                    <Col xs={5} className={"d-flex ml-auto"}>
                        <p>VAT</p>
                        <Button id={"UtilitiesJs-VATButton-0"} className={"p-0 ml-1"} color={"primary"}
                                onClick={this.handle0VAT}>0%</Button>
                        <Button id={"UtilitiesJs-VATButton-10"} className={"p-0 ml-1"} color={"primary"}
                                onClick={this.handle10VAT}>10%</Button>
                        <p className={"ml-auto"}>{this.state.VAT}%</p>
                    </Col>
                </Row>
                <Row className={"mb-1"}>
                    <Col xs={5}>
                        <Input type={"text"} placeholder={"Tu dong tao ma"} className={"mb-1"}/>

                    </Col>
                    <Col xs={5} className={"ml-auto d-flex"}>
                        <p>Tổng cộng</p>
                        <div className={"ml-auto"}>120000</div>
                    </Col>
                </Row>
                <Row className={"mb-1"}>
                    <Col xs={5}>
                        <Input type={"textarea"} className={"mb-1"}/>
                    </Col>
                    <Col xs={5} className={"ml-auto"}>
                        <p>Tiền khách trả</p>
                        <p>Tiền thừa</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} className={"pr-1"}>
                        <Button color={"primary"} className={"d-block"} block>Chuyển bàn</Button>
                        <Button color={"primary"} className={"d-block"} block>Tách bàn</Button>
                    </Col>
                    <Col xs={4} className={"pl-1 pr-1"}>
                        <Button color={"primary"} className={"d-block"} block>Báo chế biến</Button>
                        <Button color={"warning"} className={"d-block"} block>Tạm tính</Button>
                    </Col>
                    <Col xs={4} className={"pl-1"}>
                        <Button color={"danger"} className={"h-100"} block>Thanh Toán</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Utilities);

