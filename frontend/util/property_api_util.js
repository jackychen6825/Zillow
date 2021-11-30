export const fetchProperties = data => {
    return $.ajax({
        method: "GET",
        url: "/api/properties",
        data: data, 
        error: (err) => console.log(err)
    })
}

export const fetchProperty = id => (
    $.ajax({
        method: 'GET',
        url: `/api/properties/${id}`
    })
)

export const createProperty = property => (
    $.ajax({
        method: 'POST',
        url: '/api/properties',
        data: { property }
    })
)




