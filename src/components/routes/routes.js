import { Routes as RoutesReactRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/home/home";
import SectionLists from "../pages/lists/sectionLists";
import List from '../pages/lists/list';
import SectionForm from "../pages/forms/sectionForm";
import Form from "../pages/forms/form";
import NotFound from "../shared/notFound";
import SectionCard from "../pages/cards/sectionCard";
import Card from "../pages/cards/card";

export default function Routes() {

    const routes = [
        {
            'path': '/',
            'element': <Home />
        },
        {
            'path': '/lists',
            'element': <SectionLists />
        },
        {
            'path': '/lists/:list',
            'element': <List />
        },
        {
            'path': '/forms',
            'element': <SectionForm />
        },
        {
            'path': '/forms/:form',
            'element': <Form />
        },
        {
            'path': '/loaders',
            'element': <Form />
        },
        {
            'path': '/loaders/:loader',
            'element': <Form />
        },
        {
            'path': '/cards',
            'element': <SectionCard />
        },
        {
            'path': '/cards/:card',
            'element': <Card />
        },
        {
            'path': '*',
            'element': <NotFound />
        },
    ]

    return (
        <RoutesReactRouter>
            {routes.map((e,i) => (
                <Route path={e.path} element={e.element} key={i}></Route>
            ))}
        </RoutesReactRouter>
    )
}