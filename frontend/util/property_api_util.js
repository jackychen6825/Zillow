export const fetchProperties = () => {
    return $.ajax({
        method: "GET",
        url: "/api/properties",
        error: (err) => console.log(err)
    })
}



