import React, { FC } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter: FC = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

export { renderWithRouter };
