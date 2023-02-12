import React from "react";
import { routes, privateRoutes }from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "../Pages";
import { PrivateWrapper } from "../Middleware";

const Router = () => {
	return (
			<BrowserRouter>
				<Routes>
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						);
					})}
					<Route element={<PrivateWrapper />}>
						{privateRoutes.map((route) => {
							return (
								<Route
									key={route.path}
									path={route.path}
									element={route.element}
								/>
							);
						})}
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
	);
};

export default Router;