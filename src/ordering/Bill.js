import React from 'react';
import {Table, Button} from 'reactstrap';
import 'ordering/Bill.css'
export default class Bill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"overflow-auto"} id={"BillJs"}>
                <Table>
                    <thead>
                    <tr>
                        <th>Ten</th>

                        <th className={"text-center"}>SL</th>
                        <th className={"text-center"}>Don Gia</th>
                        <th className={"text-center"}>Thanh Tien</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.order.map((row) => {
                        return (
                            <tr>
                                <td>
                                    <div>
                                        {row['name']}
                                    </div>
                                    <div className={"font-italic font-weight-light"}>
                                        Ghi chu:
                                        {(function () {
                                        if (row['note'] == null) {
                                            return " "+"None";
                                        } else {
                                            return " "+row['note'];
                                        }
                                        })()}

                                    </div>
                                </td>
                                <td className={"text-center"}>{row['quantity']}</td>
                                <td className={"text-center"}>{row['price']}</td>
                                <td className={"text-center"}>
                                    <span>
                                    {row['total']}
                                    </span>
                                    <Button className={"ml-1"} size={"sm"} color={"link"}>
                                        <i className={"fa fa-trash"}></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}