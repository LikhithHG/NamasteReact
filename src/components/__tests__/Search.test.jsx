import { fireEvent, render } from "@testing-library/react";
import Body from "../Body"
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { expect } from "vitest";



// global.fetch = vi.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(Mock_Data);
//         }
//     })
// })

// it("Should search burger input", async () => {
//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         )
//     });
//     const searchBtn = screen.getByRole("button", {name: "search"});

//     //console.log(searchBtn);
//     const searchInput = screen.getByTestId("searchInput");

//     fireEvent.change(searchInput, {target : { value : "burger"}});

//     fireEvent.click(searchBtn);

//     //screen should 4 load cards if we assume

//     const cards = screen.getAllByTestId("resCard");

//     expect(cards.length).toBe(5);
// })

// it("Should test top rated restaurant button", async () => {
//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         )
//     });
//     const cardsBeforeFilter = screen.getAllByTestId("resCard");

//     expect(cardsBeforeFilter.length).toBe(length_you_might_get_int_value);

//     const topRatedBtn = screen.getByRole("button", {name : "Name of the Button for top rated"});

//     fireEvent.click(topRatedBtn);

//     const cardsAfterFilter = screen.getAllByTestId("resCard");

//     expect(cardsAfterFilter.length).toBe(length_you_might_get_int_value);
// })
