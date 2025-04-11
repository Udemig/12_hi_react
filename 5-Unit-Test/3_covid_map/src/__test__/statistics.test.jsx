/*
 * Yazıcağımız testler kesinlikle api isteklerine bağımlı olmamamlı, yani api'dan gelicek cevap testin geçip geçmeme durumunu etkilememeli

 * api isteği atan fonksiyonu "mock'layıp" api'dan gelicek cevapları kendimiz belirleyeceğiz. Bu sayede component api isteklerinden gelen cevabı düzgün bir şekilde ele alıyo mu test etmiş olucaz hemde gerçek api'la olan bağı tamamen koparıcaz
 */

import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
import { totalApi } from "../utils/api";
import { totalData } from "../utils/constants";
import millify from "millify";

// api isteğini atan fonksiyonu mock'la
// bu ifade syaesinde test ortamında her totalApi.get() fonksiyonu çağrıldığı zaman api isteği atılması yerine aşağıda oluşturuğumuz sahte fonksiyon çalışıcak
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("statistics component testleri", () => {
  // her testin sonrasında mockları temzile
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen renderlandığında ekrana loader gelir", () => {
    console.log("test 1 çalıştı");
    // sahte get fonksiyonu çalıştığında promise döndürsün
    totalApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    render(<Statistics />);

    // ekranda loader component'ı vardır
    screen.getByTestId("loader");
  });

  test("api'dan hata gelirse ekranda hata mesajı yazar", async () => {
    console.log("test 2 çalıştı");
    // sahte get fonksiyonu çalıştığında hata döndürdün
    totalApi.get.mockRejectedValue(new Error("404 hatası"));

    // bileşeni renderla
    render(<Statistics />);

    // belirli bir sürenin ardından ekranda hata mesajı vardır
    await waitFor(() => screen.getByText("Üzgünüz bir sorun oluştu"));
  });

  test("api'dan veri gelirse ekrana veriler basılır", async () => {
    console.log("test 3 çalıştı");
    // sahte get fonksiyonu çalıştığında total veriyi döndürsün
    totalApi.get.mockResolvedValue({ data: { data: totalData } });

    // bileşeni renderla
    render(<Statistics />);

    // api isteğinin atılmasını bekle
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // topla vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.confirmed));

    // topla vefat sayısı ekrana basılır
    screen.getByText(millify(totalData.deaths));

    // aktif vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.active));
  });
});
