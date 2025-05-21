import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { MainScene } from "@/scenes/main-scene";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<MainScene scene="List" />} />
        <Route path={switchRoutes.list} element={<MainScene scene="List" />} />
        <Route
          path={switchRoutes.order}
          element={<MainScene scene="Order" />}
        />
      </Routes>
    </Router>
  );
};
