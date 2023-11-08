import Link from "next/link";
import Head from "next/head";
import MainController from "../components/MainController";

const Index = () => {
    return (
        <MainController keywords={'Main page'}>
            <h1>Главная страница</h1>
        </MainController>

    );
};

export default Index;