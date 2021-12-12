export const signup = user => (
    $.ajax({
        url: "/api/users", 
        method: "POST",
        data: { user } //ES6 for { user: user }
    })
)

export const login = user => (
    $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user }
    })
)

export const logout = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
)

export const show = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
)