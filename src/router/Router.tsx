import { Navigate, Route, Routes } from "react-router-dom";
import { useGetConfigQuery } from "../graphql/generated";

import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/Home";
import { Single } from "../pages/Single";
import { Loading } from "../components/Loading";

export function Router() {
    const { loading, data } = useGetConfigQuery({
        variables: {
            id: "clfeumojb34480blymig07aef",
        }
    })

    return (
        <ScrollToTop>
            {loading ?
                <Loading />
                :
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />
                    <Route path="/" element={<Home config={data?.config} />} />
                    <Route path="/portfolio/:slug" element={<Single />} />
                </Routes>
            }
        </ScrollToTop>
    );
}