import React, { lazy, Suspense } from "react";
import { history } from "./history";
import Sidebar from "./components/Sidebar";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { Auth } from "./pages/Cooker/auth";
import RightSideContent from "./components/Right-side-content";

const AppRouter = () => {
  const FindOrder = lazy(() => import("./pages/Cooker/FindOrders/FindOrder"));
  const Profile = lazy(() => import("./pages/Cooker/Profile/Profile"));
  const Orders = lazy(() => import("./pages/Cooker/Orders/Orders"));
  const Chat = lazy(() => import("./pages/Cooker/Orders/Chat/Chat"));
  const TodoList = lazy(() => import("./pages/Cooker/TodoList/TodoList.js"));

  return (
    <Router history={history}>
      <div className="d-flex flex-column flex-grow-1 align-items-end text-white-opacity">
        <Sidebar />
      </div>
      <div className="d-flex align-items-start flex-grow-1 flex-shrink-1 overflow-scroll">
        <div className="minw-990px d-flex">
          <div className="d-flex align-items-stretch flex-grow-1 justify-content-between">
            <Suspense fallback={""}>
              <Switch>
                <Route exact path={"/"}>
                  <Redirect to={"/orders"} />
                </Route>
                <Route path={"/find-order"}>
                  <FindOrder />
                </Route>
                <Route path={"/profile"}>
                  <Profile />
                </Route>
                <Route path={"/orders/:userID"}>
                  <Chat />
                </Route>
                <Route exact path={"/orders"}>
                  <Orders />
                </Route>
                <Route path={"/auth"}>
                  <Auth />
                </Route>
                <Route path={"/todo-list"}>
                  <TodoList />
                </Route>
              </Switch>
            </Suspense>
          </div>
          <div className="w-350px h-100">
            <RightSideContent />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
