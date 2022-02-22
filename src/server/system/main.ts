import express, { RequestHandler } from 'express';
// import { rootHandler, helloHandler } from './handlers';
import { rootHandler, helloHandler } from '@/server/system/handlers';

// import { createServer  } from 'vite';

console.log("start...");

const app = express();
const port = process.env.PORT || '8000';

// // ミドルウェアモードで Vite サーバを作成します。
// const vite = createServer({
//   server: { middlewareMode: 'ssr' }
// }).
// // vite の接続インスタンスをミドルウェアとして使用
// app.use(vite.middlewares)

// app.use('*', async (req, res) => {
//   // `middlewareMode` が `'ssr'` の場合、ここで `index.html` を配信する必要があります。
//   // `middlewareMode` が `'html'` の場合、Vite が配信するので
//   // `index.html` を配信する必要はありません。
// })

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});