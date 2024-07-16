import axios from "axios";

const baseApiUrl = 'http://localhost:4000/v1';
const createUser = async (payload) =>{
    const createUserEndpoint = `${baseApiUrl}/user`;

    const {data: apiResponse} = await axios.post(createUserEndpoint, payload);

    return apiResponse
}

const editUser = async (userId,payload) => {
    const editUserEndpoint = `${baseApiUrl}/user/${userId} `;
    const {data: apiResponse} = await axios.put(editUserEndpoint, payload);
    return apiResponse;
}

const retrieveUser = async (userId) => {
    const retrieveUserEndpoint =`${baseApiUrl}/user/${userId}` ;

    const { data: apiResponse } = await axios.get(retrieveUserEndpoint);

    return apiResponse;
}

const retrieveAllUser = async () => {
    const getAllUsersUrl = `${baseApiUrl}/user/all`;
    const {data: apiResponse} = await axios.get(getAllUsersUrl);
    //put sleep for 4 secs
    //await new Promise(r => setTimeout(r, 4000));
    return apiResponse;
}

const removeUser = async (userId) => {
    const removeUserEndpoint = `${baseApiUrl}/user/${userId}`;

    const {data: apiResponse} = await axios.delete(removeUserEndpoint);
    return apiResponse;
}

export {
    createUser,
    editUser,
    retrieveUser,
    retrieveAllUser,
    removeUser
}
