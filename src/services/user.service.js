import axios from "axios";

const baseApiUrl = 'http://localhost:4000';
const createUser = async (payload) =>{
    const createUserEndpoint = `${baseApiUrl}/v1/user`;

    const {data: apiResponse} = await axios.post(`${createUserEndpoint}`, payload);

    return apiResponse
}

const editUser = async (userId,payload) => {
    const editUserEndpoint = `${baseApiUrl}/v1/user/${userId} `;
    const {data: apiResponse} = await axios.put(editUserEndpoint, payload);
    return apiResponse;
}

const retrieveUser = async (userId) => {
    const retrieveUserEndpoint =`${baseApiUrl}/v1/user/${userId}` ;

    const { data: apiResponse } = await axios.get(`${retrieveUserEndpoint}`);

    return apiResponse;
}

const retrieveAllUser = async () => {
    const getAllUsersUrl = `${baseApiUrl}/v1/user/all`;
    const {data: apiResponse} = await axios.get(`${getAllUsersUrl}`);
    return apiResponse;
}

export {
    createUser,
    editUser,
    retrieveUser,
    retrieveAllUser
}