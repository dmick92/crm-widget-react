# ZOHO CRM WIDGET

## W/ React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules in order to build a Zoho CRM sigma widget.

### Instructions

To get started, install the node package and then run `npm run dev` to start the app. Alternatively you can use `pnpm`.

```bash
  npm i
  npm run dev
```

Once ready for production use the build command to generate the zip. The zip will be created in the `zoho` directory in the root of the project.

```bash
  npm build
```

### Vite Config

The vite config was updated to enfore running on `127.0.0.1` using port `5000` in order for running the dev environment in Zoho. Additionally the server must be secured, this is done by using the `@vitejs/plugin-basic-ssl` plugin provided by vite. Finally the base path must be suffixed with `/app` in order for Zoho to properly navigate to the file.

##### Fast Reloading Plugin:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

##### Vite SSL Plugin:

- [@vitejs/plugin-basic-ssl](https://github.com/vitejs/vite-plugin-basic-ssl/blob/main/README.md)

Enforcing HTTPS

```js
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [basicSsl()],
  server: {
    https: true,
  },
});
```

Enforcing 127.0.0.1:5000

```js
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5000,
  },
});
```

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
