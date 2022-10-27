import jwtFetch from "./jwt"

export const updateUser = (user) => async dispatch => {
    const res = await jwtFetch(`api/users/${user._id}`, {
        method: "PATCH",
        body: JSON.stringify(user)
    });
    const data = await res.json();
}

