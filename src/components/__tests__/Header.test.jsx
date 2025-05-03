import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";


it("Should load header component with the login button", () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //const loginButton = screen.getByRole("button");

    const loginButton = screen.getByRole("button", { name: "Login"});

    //const loginButton = screen.getByText("Login");
    
    expect(loginButton).toBeInTheDocument();
});

it("Should load header component with the cart item", () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    
    expect(cartItems).toBeInTheDocument();
});

it("Should load change login to logout on click", () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});

    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button", { name: "Logout"});
    
    expect(logoutButton).toBeInTheDocument();
});