import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions/actions";
import User from "../../components/user/User";

function UsersPage() {
    const dispatch= useDispatch()

    const {users} = useSelector(state => state.UsersReducer)
    const {user}= useSelector(state=>state.OneUserReducer)


    const getUsers =()=>{
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <ul>
                <li>name:{user.name}</li>
                <li>street:{user.address?.street}</li>
                <li>username:{user.username}</li>
                <li>email:{user.email}</li>
            </ul>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user}/>)}



        </div>
    );
}

export default UsersPage;