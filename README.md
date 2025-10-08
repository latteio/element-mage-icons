# 基于Vu3+ElementPlus+TSX组件封装
目标: 精致, 精炼, 贴近原生; 封装不变, 扩展易变的, 尽量不改变用户习惯.
使用纯tsx模式封装组件.
尽量不用或少用第三方插件, 而只使用vue3+ElementPlus的特性完成组件编制.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### 组件打包命令(npm pack将组件打包成tgz格式)
```sh
npm run build
npm pack
```

### 组件打包配置

package.json中配置：
```json
"main": "dist/index.umd.js",
"module": "dist/index.es.js",
"style": "dist/index.css",
"types": "dist/types/index.d.ts",
"files": [
  "dist"
],
"exports": {
    ".": {
    "style": "./dist/index.css",
    "import": "./dist/index.es.js",
    "require": "./dist/index.umd.js"
    }
}
```

vite.config.ts中配置:
```javascript
build: {
    outDir: 'dist',
    lib: {
        entry: path.resolve(__dirname, 'src/element-mage-icons.ts'),
        name: 'element-mage',
        formats: ['es', 'umd'],
        fileName: (format) => `dist/index.${format}.js`
    },
    rollupOptions: {
          external: ['vue'], 
          output: {
              globals: {
                vue: 'Vue',
              },
          entryFileNames: 'dist/index.es.js', 
          assetFileNames: 'dist/index.css'
    }
  },
  sourcemap: false,
  emptyOutDir: true
}
```
