import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserOneAction} from "../../redux/actions/actions";


function User({userInfo}) {
    const dispatch= useDispatch()



    const getOneUser=(event)=>{
        dispatch(fetchUserOneAction(event.target.value))
    }

    return (
        <div>

            <ul>
                <li>name: {userInfo.name}</li>
                <li>email: {userInfo.email}</li>
                <li><button value={userInfo.id} onClick={getOneUser}>get more info(</button></li>

                <li>===========================</li>
            </ul>
        </div>
    );
}

export default User;