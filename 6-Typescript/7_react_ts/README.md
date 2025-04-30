# Typescript ile React Yazarken

## Dosya Uzantısı

- Javascript dosyalarında `js/jsx` yerine `ts/tsx`

## Önemli

- Tipi tanımlanabilen her değişkenin / fonksiyonun... mutlaka tipi tanımlanmalı.
- Otomatik tip algılamaya güvenip bir değişkenin bile tipi boş bırakılmamalı
- Otomatik tip algılama özelliği mümkünse hiç kullanılmamalı

## Hooks

- React hook'larını kullanırken bir veri tutuyorsak tipi tanımlanmalı
- useState ile state'ini tuttuğumuz verinin tipini generic yardımıyla ifade etmeliyiz

## Component Tipi

- Component'lar bir fonksiyon olduğu için component'ların parametre ve return tiplerini tanımlarız

## Event - Olay Tipleri
