# Digital House (ЛР №7, Next.js SSR/SSG)

Перенос интернет-магазина Digital House на Next.js (Pages Router). Вариант 3.

- `/products` — SSR через `getServerSideProps`: актуальные цены и наличие.
- `/products/[id]` — SSG через `getStaticProps` и `getStaticPaths`: страницы товаров собираются на этапе `npm run build`.

## Запуск

```bash
npm install
npm run dev
```

Открой http://localhost:3000/

## Production-сборка

```bash
npm run build
npm run start
```

Чтобы проверить SSR/SSG, открой «Просмотр кода страницы»:

- `/products` — время генерации меняется при обновлении (SSR)
- `/products/[id]` — время генерации после `build` не меняется (SSG)
