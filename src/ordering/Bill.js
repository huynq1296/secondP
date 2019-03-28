import React from 'react';
import {connect} from 'react-redux';
import {Table, Button} from 'reactstrap';
import {removeDrink, increaseQuantity, decreaseQuantity} from 'actions/orderActions';
import 'ordering/Bill.css';

class Bill extends React.Component {
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
                    {this.props.bill.map((drink) => {
                        return (
                            <tr key={drink['name']}>
                                <td>
                                    <div>
                                        {drink['name']}
                                    </div>
                                    <div className={"font-italic font-weight-light"}>
                                        Ghi chu:
                                        {(function () {
                                            if (drink['note'] == null) {
                                                return " " + "None";
                                            } else {
                                                return " " + drink['note'];
                                            }
                                        })()}

                                    </div>
                                </td>
                                <td className={"text-center"}>
                                    <Button color={"link"} onClick={() => this.props.inc(drink)}><i
                                        className={"fa fa-plus"}/></Button>
                                    {drink['quantity']}
                                    <Button color={"link"} onClick={() => this.props.dec(drink)}><i
                                        className={"fa fa-minus"}/></Button>
                                </td>
                                <td className={"text-center"}>{drink['price']}</td>
                                <td className={"text-center"}>
                                    <span>
                                    {drink['total']}
                                    </span>
                                    <Button className={"ml-1"} size={"sm"} color={"link"}
                                            onClick={() => this.props.remove(drink)}>
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

const mapStateToProps = (state) => {
    return {
        bill: state.order.bill
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (drink) => {
            dispatch(removeDrink(drink));
        },
        inc: (drink) => {
            dispatch(increaseQuantity(drink));
        },
        dec: (drink) => {
            dispatch(decreaseQuantity(drink));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bill);