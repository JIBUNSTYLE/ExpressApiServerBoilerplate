ExpressApiServer
================


# TypeScriptでプロジェクト作成

```shell
$ mkdir expressApiServer
$ cd expressApiServer
```

```shell
$ yarn init -y
$ yarn add -D typescript
$ yarn tsc --init --rootDir src --outDir dist
```

```tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "es5",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["src/**/*"]
}
```

# Express導入

```shell
$ yarn add express
$ yarn add -D @types/node @types/express nodemon ts-node
```

# 実装

```shell
$ mkdir src
```

```index.ts
import express from 'express';
import { rootHandler, helloHandler } from './handlers';

const app = express();
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
```


```handlers.ts
import { Request, Response } from 'express';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  return res.send('Hello, Your API is working!!');
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
};
```