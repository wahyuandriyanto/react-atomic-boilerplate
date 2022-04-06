import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const ToDoList  = lazy(() => import('components/pages/to-do-list/ToDoList'))


export function Routes() {
    return (
        <Suspense fallback="">
            <Switch>
                <Route exact path="/" component={ToDoList} />
            </Switch>
        </Suspense>
    );
}

