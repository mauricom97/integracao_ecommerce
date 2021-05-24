exports.response = (data_name, data = {}) => {
    let response = {
        ok: true
    }
    
    response[data_name] = data

    return response
}

exports.error = (message) => {
    return {
        ok: false,
        message: message
    }
}