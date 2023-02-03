---
sidebar_position: 10
---


# 通过github action实现在线编辑

每次部署 Hexo 都需要运行指令三件套，随着文章越来越多，编译的时间也随之越来越长，通过 Github Action，我们只需要在每次完成博客的编写或修改以后，将改动直接 push 到远程仓库，之后的编译部署的工作统统交给 CI 来完成.

## 1.获取token
访问 Github->头像（右上角）->Settings->Developer Settings->Personal access tokens->generate new token
创建token,勾选 repo 项 和 workflows 项
+务必保证你已经记录下了 Token

## 2.创建存放源码的私有仓库
此处省略

## 3.新建action
在actions中新建action，点击set up a workflow yourself 写入以下内容。
```
name: 自动部署
# 当有改动推送到main分支时，启动Action
on:
  push:
    branches:
      - main
  release:
    types:
      - published

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 检查分支
        uses: actions/checkout@v2
        with:
          ref: master

      - name: 安装 Node
        uses: actions/setup-node@v1
        with:
          node-version: "16.x"

      - name: 安装 Hexo
        run: |
          export TZ='Asia/Shanghai'
          npm install hexo-cli -g

      - name: 缓存 Hexo
        id: cache-npm
        uses: actions/cache@v3
        env:
          cache-name: cache-node-modules
        with:
          path: node_modules
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: 安装依赖
        if: ${{ steps.cache-npm.outputs.cache-hit != 'true' }}
        run: |
          npm install gulp-cli -g #全局安装gulp
          npm install --save

      - name: 生成静态文件
        run: |
          hexo clean
          hexo generate
          gulp

      - name: 部署到Github
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: 此处写你得到的token
          repository-name: 用户名/仓库 例xcx2006/xcx2006.github.io
          branch: main
          folder: public
          commit-message: "${{ github.event.head_commit.message }} Updated By Github Actions"

```
