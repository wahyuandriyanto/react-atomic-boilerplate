import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Homepage  = lazy(() => import('components/pages/homepage/Homepage'))


export function Routes() {
    return (
        <Suspense fallback="">
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        </Suspense>
    );
}

