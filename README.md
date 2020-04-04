# github-pages-quasar
>Github action for deploying Quasar app to GitHub pages

## The app

Create Quasar app:

```bash
quasar create <app_name>
```

Install the dependencies:

```bash
npm install
```

Start the app in development mode (hot-code reloading, error reporting, etc.):

```bash
quasar dev
```

Build the app for production:

```bash
quasar build
```

Customize the configuration,
see [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Deploy to GitHub pages with GitHub actions

Add build command to `package.json`:

```javascript
"scripts": {
  "build": "quasar build"
}
```

Create `.github/workflows/build.yml`:

```yml
name: Build & Deploy
on:
  push:
    branches:
      - master
jobs:
  build:
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '10.x'
      - name: Cache
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BASE_BRANCH: master
          BRANCH: gh-pages
          FOLDER: dist/spa
```
Push events to master branch will trigger this event.

The action builds the app using `BASE_BRANCH` branch,
deploys the app from  `FOLDER` folder to `BRANCH` branch.

npm packages are cached.

See [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
for more.