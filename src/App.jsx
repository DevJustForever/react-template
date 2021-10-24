import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Loading from "./components/loading/loading";
import FourOhFourPage from "./components/404/404";
import Meta from "./components/helmet/meta";

const IndexPage = lazy(() => import("./pages/index/index"));

export default function App() {


    useEffect(() => { }, []);


        return (<>
            <Router>
                <HelmetProvider>
                    <Suspense fallback={<Loading />}>
                        <Meta />
                        <Switch>
                            <Route
                                path='/'
                                exact
                                component={IndexPage}
                            />
                            <Route component={FourOhFourPage} />
                        </Switch>
                    </Suspense>
                </HelmetProvider>
            </Router>
        </>);
   
};