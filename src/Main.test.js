import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import store from "./redux/store";
import { router } from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rocket from "./components/Rocket";

describe("Header component", () => {
  test("should have 'Space Travelers Hub' text", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );

    const ele = screen.getByText("Space Travelers Hub");
    expect(ele).toBeInTheDocument();
  });
});

describe("Footer component", () => {
  test("should have 'Footer' text", () => {
    render(<Footer />);

    const ele = screen.getByText("Footer");
    expect(ele).toBeInTheDocument();
  });
});

describe("Rocket component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RouterProvider router={router}>
            <Rocket />
          </RouterProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
