export const fetchProperties = bounds => {
    return $.ajax({
        method: "GET",
        url: "/api/properties",
        data: bounds, 
        error: (err) => console.log(err)
    })
}

export const createProperty = property => (
    $.ajax({
        method: 'POST',
        url: '/api/properties',
        data: { property }
    })
)




