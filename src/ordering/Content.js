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
                        <Bill order={
                            [
                                {
                                    name: "abc",
                                    quantity: 4,
                                    price: 5,
                                    total: 7,
                                    note: "Khong duong"
                                },
                                {
                                    name: "abc",
                                    quantity: 4,
                                    price: 5,
                                    total: 7
                                },
                                {
                                    name: "abc",
                                    quantity: 4,
                                    price: 5,
                                    total: 7
                                },
                            ]
                        }/>
                        <Utilities/>
                    </Col>
                    <Col xs={5}>
                        <Menu menu={
                            {
                                coffee: [
                                    {
                                        name: "ca phe den",
                                        price: "20k",
                                    },
                                    {
                                        name: "ca phe nau",
                                        price: "25k"
                                    }
                                ],
                                tea: [
                                    {
                                        name: "trà ô long",
                                        price: "30k"
                                    },
                                    {
                                        name: "trà râu xồm",
                                        price: "-30k"
                                    }
                                ],
                                milk: [
                                    {
                                        name: "sữa tươi mộc châu",
                                        price: "40k"
                                    },
                                    {
                                        name: "sữa thanh trùng",
                                        price: "50k"
                                    }
                                ],
                                other: [
                                    {
                                        name: "kẹo cao su",
                                        price: "10k"
                                    },
                                    {
                                        name: "lạc rang",
                                        price: "15k"
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