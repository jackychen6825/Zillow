export const fetchProperties = data => {
    return $.ajax({
        method: "GET",
        url: "/api/properties",
        data: data, //passing in all filters as params: { bounds: {}, minPrice: 1, maxPrice: 10000000, minBeds: 0, minBaths: 0 }
        error: (err) => console.log(err)
    })
}

export const fetchProperty = id => (
    $.ajax({
        method: 'GET',
        url: `/api/properties/${id}`
    })
)

export const createProperty = formData => (
    $.ajax({
        method: 'POST',
        url: '/api/properties',
        data: formData,
        contentType: false,
        processData: false
    })
)




