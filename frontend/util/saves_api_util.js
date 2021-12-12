export const createSave = data => (
    $.ajax({
        method: 'POST',
        url: "/api/saves",
        data: { property_id: data }
    })
)

export const deleteSave = property_id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/saves/${property_id}`
    })
)