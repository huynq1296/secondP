import React from 'react';
import Bill from 'ordering/Bill';
import Menu from 'ordering/Menu';
import Utilities from 'ordering/Utilities';
import {Container, Col, Row} from 'reactstrap';

export default class Content extends React.Component {
    render() {
        return (
            <Container fluid className={"mt-1 bg-light"}>
                <Row>
                    <Col xs={7}>
                        <Bill/>
                        <Utilities/>
                    </Col>
                    <Col xs={5}>
                        <Menu menu={
                            {
                                coffee: [
                                    {
                                        name: "ca phe den",
                                        price: 20000,
                                    },
                                    {
                                        name: "ca phe nau",
                                        price: 25000
                                    }
                                ],
                                tea: [
                                    {
                                        name: "trà ô long",
                                        price: 35000
                                    },
                                    {
                                        name: "trà râu xồm",
                                        price: -30000
                                    }
                                ],
                                milk: [
                                    {
                                        name: "sữa tươi mộc châu",
                                        price: 40000
                                    },
                                    {
                                        name: "sữa thanh trùng",
                                        price: 50000
                                    }
                                ],
                                other: [
                                    {
                                        name: "kẹo cao su",
                                        price: 10000
                                    },
                                    {
                                        name: "lạc rang",
                                        price: 15000
                                    }
                                ],
                            }
                        }/>
                    </Col>
                </Row>
            </Container>
        );
    }
}