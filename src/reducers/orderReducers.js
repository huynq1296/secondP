const orderReducer = (state = {

}, action)=>{
        switch(action.type){
            case "TOGGLE_LEFT_BUTTON":
                return {
                    ...state,
                    isLeftDropDownOpen: state.isLeftDropDownOpen,
                }
            case "TOGGLE_RIGHT_BUTTON":
                return {
                    ...state,
                    isRightDropDownOpen: state.isRightDropDownOpen,
                }
            case "REMOVE_GUEST":
                var button = document.getElementById("UtilitiesJs-guestButton");
                button.style.display = "none";
                return {
                    ...state,
                    isGuestDisplayed: "none",
                }
        }
        return state;
}
export default orderReducer;