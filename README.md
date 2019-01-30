# create-react-app + typescript-eslint + prettier

## 構築手順メモ

依存関係をインストール

```
npm i -S \
    @emotion/{core,styled} \
    history \
    react-redux \
    react-router-dom \
    redux \
    redux-thunk
```

```
npm i -D \
    @types/{jest,react-redux,react-router-dom} \
    @typescript-eslint/{eslint-plugin,parser,typescript-estree} \
    eslint-config-airbnb \
    eslint-config-prettier \
    eslint-import-resolver-node \
    eslint-plugin-jest \
    eslint-plugin-prettier \
    prettier
```

.eslintrc.json を作成

```json
{
  "root": true,
  "plugins": ["@typescript-eslint", "jest"],
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true,
    "browser": true,
    "jest/globals": true
  },
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/jsx-indent": 4,
    "react/button-has-type": "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "es5",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "parser": "typescript"
      }
    ],
    "no-use-before-define": "off",
    "import/prefer-default-export": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "overrides": [
    {
      "files": ["**/*.d.ts"],
      "rules": {
        "spaced-comment": "off"
      }
    },
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "no-unused-vars": "off"
      }
    }
  ]
}
```

package.json に lint タスクを追加

```json
"scripts": {
    ...
    "lint": "eslint -c ./.eslintrc.json --fix 'src/**/*.{ts,tsx}'"
}
```

### 以下推奨

VSCode の拡張機能を追加して、ファイル保存時に lint、コードフォーマットを実行する。（ユーザー設定でもワークスペース設定でも可）

#### ESLint

- VSCode 拡張をインストール
- 設定画面で[拡張機能]>[ESLint]を開き、Validate を以下のとおり設定（設定ファイルが開くので直接追記）

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```

#### Prettier

- Prettier 拡張をインストール
- 設定画面で[テキストエディター]>[フォーマット]を開き次を設定
  - 「Format On Save」を有効化
  - 「Javascript > Format」を有効化
- [拡張機能]>[Prettier]を開き、「Prettier: Eslint Integration」を有効化
