export const fetchProperties = bounds => {
    return $.ajax({
        method: "GET",
        url: "/api/properties",
        data: bounds, 
        error: (err) => console.log(err)
    })
}


