import React, {useEffect, useState} from 'react';
import Link from "next/link";
import MainController from "../components/MainController";

const Users = ({users}) => {
    return (
        <MainController keywords={"Users"}>
            <h1>Список пользователей</h1>
                <ul>
                    {
                        users.map(user=>
                            <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                            </li>
                        )
                    }
                </ul>
        </MainController>
    );
};

export default Users;

export async function getStaticProps(context){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
        props:{users}
    }
}