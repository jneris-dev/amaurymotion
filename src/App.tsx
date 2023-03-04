import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from './service/apollo';

import { Header } from "./components/Header"
import { Router } from "./router/Router"

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
