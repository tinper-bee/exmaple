# 基于React + Webpack + Babel的项目脚手架

> 这个脚手架工程模板用于快速启动基于React + Webpack为技术栈的前端项目

**Features：**

- 可以解析JSX语法
- 可以解析ES6语法新特性
- 支持LESS预处理器
- 编译完成自动打开浏览器
- 区分开发环境和生产环境
- 实现组件级热更新
- 实现代码的热替换，浏览器实时刷新查看效果
- 分离业务功能代码和公共依赖代码
- 单独分离CSS样式文件
- 支持编译HTML模板
- 支持文件MD5戳，解决文件缓存问题
- 支持图片、图标字体等资源的编译
- 支持浏览器源码调试
- 可以进行代码规则校验
- 支持mocha测试用例运行
- 支持一行命令产出待部署资源

## 1. start

```
$ git clone git@github.com:GuoYongfeng/webpack-dev-boilerplate.git
$ cd webpack-dev-boilerplate
$ npm install
```
## 2. dev
### 2.1 开发调试
```
$ npm run dev
```

查看效果` http://127.0.0.1:8080`

### 2.2 代码检查
```
$ npm run lint
```

### 2.3 测试用例
```
$ npm run test:watch
```

### 2.4 产出资源
```
$ npm run build
```

## 3. 技术栈

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [ES6](http://es6.ruanyifeng.com/)
- [ ] [Redux](https://github.com/rackt/redux)
- [x] [React-router](https://github.com/rackt/react-router-redux)
- [x] [Babel](https://babeljs.io/)
- [ ] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ ] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [Eslint](https://github.com/eslint/eslint)
