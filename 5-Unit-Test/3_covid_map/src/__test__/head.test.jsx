import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Head from "../pages/detail/head";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "../utils/constants";

// redux kullanan bileşenler için sahete store'lar oluşturmamızı sağlayacak fonksiyon
const mockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader basılır", () => {
  // yüklenme durumunda sahte bir store oluştur
  const store = mockStore({ isLoading: true, error: null, data: null });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // ekranda loader var mı?
  screen.getByTestId("head-loader");
});

it("store'da yüklenme bilttiğinde loader ekrandan gider", () => {
  // yüklenme durumunda sahte bir store oluştur
  const store = mockStore({ isLoading: false, error: null, data: null });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // ekranda loader yok mu?
  const element = screen.queryByTestId("head-loader");
  expect(element).toBeNull();
});

it("store'a veri geldiğinde ekrana ülke ve bayrak verisi basılır", () => {
  // sahte store oluştur
  const store = mockStore({ isLoading: false, error: null, data: mockData });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // ülke ismi ekrana geliyor mu?
  screen.getByRole("heading", { name: mockData.country });

  // resim ekranda mı
  const img = screen.getByAltText(mockData.flag.alt);
  expect(img).toHaveAttribute("src", mockData.flag.png);
});
