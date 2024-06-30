import users from '../data/users.data';

const get = (userId) => {
    const findUser = users.find( (user)=>{
        if(user.id == userId){
            return user;
        }
    } );
    return findUser;
}

const getAll = ()=>{
    return users;
}
/**
 * Update a user from its ID
 * @param {integer} userId 
 * @param {object} newDetails 
 * @returns 
 */
const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;

    users.map((user,index) => {
        if(user.id === userId ){
            existingUser=user;
            userIndex=index;
        }
    });

    if(!existingUser){
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    };
    users.splice(userIndex,1,updatedUser);

    return updatedUser;
}
 /**
  * insert a user
  * @param {object} details 
  * @returns 
  */
const insert = (details) => {
    const newUser = { 
        id: users.length + 1,
        ...details
     };
    users.push(newUser);
 
    return newUser;
}
/**
 * remove a user from its ID
 * @param {integer} userId 
 * @returns 
 */
const remove = (userId) => {
    const deleteUser = (user, index) => {
        if(user?.id === userId){ //? means optional chaining
            // parameters: index-place to remove, count- no of items to be removed
            users.splice(index,1);
        }
    };
    return users.find(deleteUser);
}

export default{
    get,
    getAll,
    update,
    insert,
    remove
}

