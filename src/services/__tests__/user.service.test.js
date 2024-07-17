import test from "ava";

import userService from "../user.service"

let sampleUser;

test.beforeEach(()=>{
    sampleUser = {
        name: 'Harisangar',
        email:'harisangar@gmail.com',
        city:'Namakkal',
        country : 'India'
    }
});

test('must add a user', (t)=>{
    const expectedId = 3;

    const user = userService.addUser(sampleUser);
    t.is(user.id, expectedId);
    t.deepEqual(user, {id:expectedId, ...sampleUser} )
});

test('must retrieve a user', (t)=>{
    const expectedId = 3;

    const user = userService.getUser(expectedId);
    t.is(user.id, expectedId);
    t.deepEqual(user, {id:expectedId, ...sampleUser} )
});

test('must get all users', (t)=>{
    const expectedId = 3;
    const user = userService.getAllUser();
    t.deepEqual(user[2], {id:expectedId, ...sampleUser })
})


test('must update a user', (t)=>{
    const userId = 3;

    const updatedDetails = {
        name:'Harisangar A P',
        email:'harisangar@gmail.com',
        city:'Namakkal',
        country : 'India'
    }

    const user = userService.updateUser(userId, updatedDetails);
    t.is(user.id, userId);
    t.deepEqual(user, {id:userId, ...updatedDetails} )
});

test('must delete a user', (t)=>{
    const userId = 3;
    const expected = userService.removeUser(userId);
    t.is(expected, undefined);

    // trying to retrieve a removed user and expect to be undefined
    const user = userService.getUser(userId);
    t.is(user, undefined)
});

