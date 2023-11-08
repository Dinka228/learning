import React from 'react';
import Link from "next/link";
import Head from "next/head";

const MainController = ({children,keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={`dinka228`+keywords}></meta>
                <title>
                    {keywords}
                </title>

            </Head>
            <div>
                <Link href='/'>
                    Главная
                </Link>
                <Link href='/users'>
                    Пользователи
                </Link>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainController;