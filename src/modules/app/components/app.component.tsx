import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../app.module';

export class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Switch>
                    {routes.map((route: any, index) => {
                        if (route.redirectTo) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props) => <Redirect to={route.redirectTo} />}
                                />
                            );
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
                </Switch>
            </React.Fragment>
        );
    }
}
