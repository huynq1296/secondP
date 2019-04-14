import axios from 'axios';

export default function orderReducer(state = {
    products: {},
    bill: [],
    cost: 0,
    vat: 0,
    discount: 0,
    total: 0,
}, action) {
    let products = state.products;
    let bill = state.bill.slice();
    let temp_vat = 0;
    let temp_discount = 0;
    switch (action.type) {
        case "REMOVE_DRINK":
            bill = state.bill.filter((elem) => {
                if (elem['name'] != action.payload['name']) {
                    return true;
                } else {
                    return false;
                }
            });
            break;
        case "INCREASE_QUANTITY": {
            let found = state['bill'].findIndex((elem) => {
                return elem["name"] == action.payload["name"];
            });
            bill = state['bill'].slice();
            bill[found]['quantity']++;
            break;
        }
        case "DECREASE_QUANTITY": {
            let found = state['bill'].findIndex((elem) => {
                return elem["name"] == action.payload["name"];
            });
            bill = state['bill'].slice();
            bill[found]['quantity']--;
            break;
        }
        case "CHANGE_VAT":{
            if(action.payload == 0.1){
                temp_vat = 0.1;
            }
            if(action.payload == 0){
                temp_vat = 0;
            }
            break;
        }
        case "CHANGE_DISCOUNT":{
            temp_discount = action.payload;
            break;
        }
        case "ADD_DRINK":{
            let found = state['bill'].findIndex((elem) => {
                return elem["name"] == action.payload["name"];
            });
            if(found == -1){
                bill = state['bill'].slice();
                bill.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                    total: 0,
                });
            }
            else{
                bill = state['bill'].slice();
                bill[found]['quantity']++;
            }
            break;
        }
        case "GET_PRODUCTS":{
            products = action.payload;
            break;
        }

    }
    bill.forEach((elem)=>{
        elem.total = elem.price * elem.quantity;
    });
    let temp_cost = bill.reduce(function (total, elem) {
        total = total + elem['price'] * elem['quantity'];
        return total;
    }, 0);

    return {
        ...state,
        products: products,
        bill: bill,
        cost: temp_cost,
        total: temp_cost + temp_cost * temp_vat  - temp_discount * temp_cost * 0.01,
        vat: temp_vat,
        discount: temp_discount,
    };
}