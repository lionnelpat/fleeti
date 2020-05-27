function countryReducer(state = { country: '', code: 'sn' }, action) {
    switch (action.type) {
        case "Senegal":
            return {
                country: "Senegal",
                code: 'sn'
            };
        case "Maurice":
            return {
                country: "Maurice",
                code: 'mr'
            };
        default:
            return "";
    }
}

export default countryReducer;