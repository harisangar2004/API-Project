import userDao from '../modules/persistance/user.dao'

const getUser = (userId) => {
    userDao.get(userId);
};


const updateUser = (userId) => {
    userDao.update(userId);
};


const addUser = (details) => {
    userDao.insert(details);
};

const deleteUser = (userId) => {
    userDao.remove(userId);
};

export default addUser;