import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { errorFetch, success, User } from './userSlice';


async function userHandler(): Promise<User[] | {}>{
    return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then (res=> res.data)
}

function* fetchUsers(): any{
    try{
        const userList = yield call(userHandler)
        yield put(success(userList))
    }
    catch(error: any)
    {
        yield put(errorFetch(error.message))
    }
}


export function* userWatcher(){
    yield takeEvery('user/initUsers', fetchUsers)
}