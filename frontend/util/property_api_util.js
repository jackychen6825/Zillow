
//how am i supposed to use the filters?
export const fetchProperties = () => {
    return $.ajax({
        method: "GET",
        url: "/api/properties",
        // bounds: bounds, //is this the right way to include it?
        error: (err) => console.log(err)
    })
}



