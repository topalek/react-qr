# React QR

Приложение для генерации и сканирования QR-кодов на React.

## Возможности

- **Генератор QR-кодов** — вводите текст и получаете QR-код (SVG)
- **Сканер QR-кодов** — сканирование через камеру устройства
- **История** — страницы истории сканирований и генераций (в разработке)

## Стек

- React 19 + Vite 8
- React Router 8
- Bootstrap 5
- [qrcode.react](https://github.com/zpao/qrcode.react) — генерация QR
- [@yudiel/react-qr-scanner](https://github.com/yudiel/react-qr-scanner) — сканирование QR

## Запуск

```bash
npm install
npm run dev
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка для продакшена |
| `npm run preview` | Предпросмотр сборки |
| `npm run lint` | Проверка ESLint |
