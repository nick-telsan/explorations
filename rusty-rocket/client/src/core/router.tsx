import { Router as SolidRouter, Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

const Intro = lazy(() => import("../screens/intro"));

export const Router = () => {
  return (
    <SolidRouter>
      <Routes>
        <Route path="/" component={Intro} />
      </Routes>
    </SolidRouter>
  );
};
