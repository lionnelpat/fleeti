function countryReducer(state = { country: '' }, action) {
    switch (action.type) {
        case "Senegal":
            return {
                country: "Senegal"
            };
        case "Maurice":
            return {
                country: "Maurice"
            };
        default:
            return "";
    }
}

export default countryReducer;