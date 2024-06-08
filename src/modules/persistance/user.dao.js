import users from '../data/users.data'


const get = (userId) => {
    const newUser = { ...details, id: users.length + 1 };
    users.push(newUser);

    return true;
}

const update = (userId) => {

}

const insert = (details) => {
    const newUser = { ...details, id: users.length + 1 };
    users.push(newUser);
 
    return newUser;
}

const remove = (userId) => {

}

export {
    get,
    update,
    insert,
    remove
}

