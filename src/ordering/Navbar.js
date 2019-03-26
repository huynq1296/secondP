import React from 'react';
import 'ordering/Navbar.css';
import {
    Navbar,
    NavItem,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Nav,
    Button,
    ButtonGroup,
    Label,
    Col,
    InputGroupText,
} from 'reactstrap';


export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar id={"Navbar"} className={"pt-0 pb-0 overflow-hidden"}>
                <Nav className={"h-100 w-100 d-flex"}>
                    <ButtonGroup id={"Navbar-buttonGroup-2"} className={""}>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>F</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>G</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>H</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>I</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>K</Button>
                        </NavItem>
                    </ButtonGroup>
                    <NavItem className={"NavItem d-flex align-items-center ml-auto"}>
                        <Form className={""}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText> <i className={"fa fa-search"}/></InputGroupText>
                                </InputGroupAddon>
                                <Input type={"text"} name={"searchBar"} id={"searchBar"}
                                       className={"p-0"}/>
                            </InputGroup>
                        </Form>
                    </NavItem>
                    <ButtonGroup id={"Navbar-buttonGroup-1"} className={""}>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded"}>A</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>B</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>C</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>D</Button>
                        </NavItem>
                        <NavItem className={"NavItem d-flex align-items-center"}>
                            <Button color={"primary"} className={"Navbar-button rounded-circle"}>E</Button>
                        </NavItem>
                    </ButtonGroup>
                </Nav>

            </Navbar>
        )
            ;
    }
}