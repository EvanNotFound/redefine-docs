---
sidebar_position: 13
---


# comment

```yaml
comment:
  enable: false
  use: waline # values: waline | gitalk | twikoo

  # Waline
  # See: https://waline.js.org/guide/get-started.html
  waline:
    serverUrl:  # Waline server url(vercel) example: https://example.example.com
    lang: zh-CN # Waline language, default: zh-CN. See: https://waline.js.org/guide/client/i18n.html

  # Gitalk
  # See: https://github.com/gitalk/gitalk
  gitalk:
    github_id: # GitHub repo owner
    repository: # Repository name to store issues
    client_id: # GitHub Application Client ID
    client_secret: # GitHub Application Client Secret

  # Twikoo
  # See: https://github.com/imaegoo/twikoo
  twikoo:
    visitor: true
    env_id: # Vercel or Tencent Cloud Function environment ID
    region: # environment region. If select Guangzhou, fill in "ap-guangzhou". (optional)
```

该配置项用于开启和设置主题的评论系统。

## use

```yaml
use: waline  # values: waline | gitalk | twikoo
```
配置使用哪款评论系统。目前主题内置 Waline、Gitalk 和 Twikoo，你可以使用其他一款。

## Waline

一款从 [Valine](https://valine.js.org/) 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine. 相对于 valine 更加安全，快速，简洁，开源。

详情查看：

- https://github.com/walinejs/waline
- https://waline.js.org/

在 Redefine主题中如何使用：

### LeanCloud 设置 (数据库)

1. [登录](https://console.leancloud.app/login) 或 [注册](https://console.leancloud.app/register) `LeanCloud 国际版` 并进入 [控制台](https://console.leancloud.app/apps)
2. 点击左上角 [创建应用](https://console.leancloud.app/apps) 并起一个你喜欢的名字 (请选择免费的开发版):

![创建应用](https://evan.beee.top/img/leancloud-1.f7a36b20.png)

3. 进入应用，选择左下角的 `设置` > `应用 Key`。你可以看到你的 `APP ID`, `APP Key` 和 `Master Key`。请记录它们，以便后续使用。

![](https://evan.beee.top/img/leancloud-2.4cc69975.png)

:::caution 国内版需要完成备案接入

如果你正在使用 Leancloud 国内版 ([leancloud.cnopen in new window](https://leancloud.cn/))，我们推荐你切换到国际版 ([leancloud.appopen in new window](https://leancloud.app/))。否则，你需要为应用额外绑定**已备案**的域名，同时购买独立 IP 并完成备案接入:

- 登录国内版并进入需要使用的应用
- 选择 `设置` > `域名绑定` > `API 访问域名` > `绑定新域名` > 输入域名 > `确定`。
- 按照页面上的提示按要求在 DNS 上完成 CNAME 解析。
- 购买独立 IP 并提交工单完成备案接入。(独立 IP 目前价格为 ￥ 50/个/月)

![域名设置](https://evan.beee.top/img/leancloud-3.3ae5fb8d.png)

:::

### Vercel 部署 (服务端)

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)

1. 点击上方按钮，跳转至 Vercel 进行 Server 端部署。

   :::tip

   注：如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。

   :::

2. 输入一个你喜欢的 Vercel 项目名称并点击 `Create` 继续:

   ![创建项目](https://evan.beee.top/img/vercel-1.4e9dd7aa.png)

3. 此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。

   ![deploy](https://evan.beee.top/img/vercel-3.0918fcee.png)

   一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 `Go to Dashboard` 可以跳转到应用的控制台。

   ![deploy](https://evan.beee.top/img/vercel-4.f7f4c12b.png)

4. 点击顶部的 `Settings` - `Environment Variables` 进入环境变量配置页，并配置三个环境变量 `LEAN_ID`, `LEAN_KEY` 和 `LEAN_MASTER_KEY` 。它们的值分别对应上一步在 LeanCloud 中获得的 `APP ID`, `APP KEY`, `Master Key`。

   ![设置环境变量](https://evan.beee.top/img/vercel-5.3a5de7f0.png)

   注

   如果你使用 LeanCloud 国内版，请额外配置 `LEAN_SERVER` 环境变量，值为你绑定好的域名。

5. 环境变量配置完成之后点击顶部的 `Deployments` 点击顶部最新的一次部署右侧的 `Redeploy` 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。

   ![redeploy](https://evan.beee.top/img/vercel-6.c1af01b1.png)

6. 此时会跳转到 `Overview` 界面开始部署，等待片刻后 `STATUS` 会变成 `Ready`。此时请点击 `Visit` ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。

   ![redeploy success](https://evan.beee.top/img/vercel-7.2478902b.png)

   #### 绑定域名 (可选)

   如果你不想用 vercel 自带域名，可以绑定自己域名

   1. 点击顶部的 `Settings` - `Domains` 进入域名配置页

   2. 输入需要绑定的域名并点击 `Add`

      ![Add domain](https://evan.beee.top/img/vercel-8.49378bd3.png)

   3. 在域名服务器商处添加新的 `CNAME` 解析记录

      | Type  | Name    | Value                |
      | ----- | ------- | -------------------- |
      | CNAME | example | cname.vercel-dns.com |

   4. 等待生效，你可以通过自己的域名来访问了🎉

      - 评论系统：example.yourdomain.com
      - 评论管理：example.yourdomain.com/ui

      ![success](https://evan.beee.top/img/vercel-9.a29236ac.png)

### Redefine 主题设置

在 Redefine 主题配置文件填写必要参数信息（APP ID、APP Key 等），示例如下。

```yaml
waline:
  serverUrl:  # Waline server url(vercel) example: https://example.example.com
  lang: zh-CN # Waline language, default: zh-CN
```

- `serverUrl` 必填。就是你的 Vercel 域名（也可以是你绑定的自定义域名）
- `lang` 必填。评论语言，详见[Waline 官方文档#lang](https://waline.js.org/reference/component.html#lang)

Waline 评论插件效果图。

![Screen Shot 2022-10-03 at 10.17.15 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-03%20at%2010.17.15%20PM.png)

## Gitalk

Gitalk，一个基于 Github Issue 和 Preact 开发的评论插件。

详情查看：

- https://github.com/gitalk/gitalk
- https://gitalk.github.io/

在 Redefine 中如何使用：

1. 新建 GitHub OAuth App  
   注册或登录 [GitHub](https://github.com/)，[创建新的 OAuth App](https://github.com/settings/applications/new)，其中 `Homepage URL` 和 `Authorization callback URL` 均填写自己的域名即可。

   OAuth App 创建成功后，把 `Client ID` 和 `Client Secret` 保存起来，下面要用到。

   ![Screen Shot 2022-10-02 at 10.24.53 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.24.53%20AM.png)

2. 新建 GitHub 仓库
   注册或登录 [GitHub](https://github.com/)，[创建一个新的仓库（repository）](https://github.com/new)，并打开 Issues（自己手动增加一个 Issue，内容随便填写，即可打开），用于存储评论内容。

3. 把自己的 `GitHub 用户名`、`仓库名` 、OAuth App 的 `Client ID` 、`Client Secret` 分别填写在主题配置文件里，如下示例。

   ```yaml
   gitalk:
     github_id: EvanNotFound
     repository: hexo-site-comments
     client_id: cdfffffffffffffffffffff
     client_secret: f4b55555555555555555555555555555
   ```

4. Gitalk 评论插件效果图。
   ![image](https://evan.beee.top/img/image.4bv32zei1580.png)


## Twikoo

Twikoo，一个简洁、安全、免费的静态网站评论系统，基于腾讯云开发。

详情查看：

- https://github.com/imaegoo/twikoo
- https://twikoo.js.org/

**Ex. 腾讯云 CloudBase 使用教程，其它方式请查看 Twikoo 文档**

:::tip 

* 推荐创建上海环境。如选择广州环境，需配置 `region: ap-guangzhou`
* 环境名称自由填写
* 推荐选择计费方式`包年包月`，套餐版本`基础班 1`，超出免费额度不会收费
* 如果提示选择“应用模板”，请选择“空模板”

:::

如果您打算部署到一个现有的云开发环境，请直接从第 3 步开始。

1. 进入[云开发CloudBase](https://curl.qcloud.com/KnnJtUom)活动页面，滚动到“新用户专享”部分，选择适合的套餐（一般 0 元套餐即可），点击“立即购买”，按提示创建好环境。
2. 进入[云开发控制台](https://console.cloud.tencent.com/tcb/)
3. 进入[环境-登录授权](https://console.cloud.tencent.com/tcb/env/login)，启用“匿名登录”
4. 进入[环境-安全配置](https://console.cloud.tencent.com/tcb/env/safety)，将网站域名添加到“WEB安全域名”
5. 进入[环境-云函数](https://console.cloud.tencent.com/tcb/scf/index)，点击“新建云函数”
6. 函数名称请填写：`twikoo`，创建方式请选择：`空白函数`，运行环境请选择：`Nodejs 10.15`，函数内存请选择：`128MB`，点击“下一步”
7. 清空输入框中的示例代码，复制以下代码、粘贴到“函数代码”输入框中，点击“确定”
``` js
exports.main = require('twikoo-func').main
```
8. 创建完成后，点击“twikoo"进入云函数详情页，进入“函数代码”标签，点击“文件 - 新建文件”，输入 `package.json`，回车
9. 复制以下代码、粘贴到代码框中，点击“保存并安装依赖”
``` json
{ "dependencies": { "twikoo-func": "1.2.0" } }
```
10. 在Redefine 主题配置文件里填写环境 ID `env_id`
    ```yaml
    twikoo:
      env_id: xxxx-xxxx..........
      region:  
    ```

    如果选择了广州环境，需把 `region` 的值填写为 `ap-guangzhou`，如果使用 `Vercel `，`region` 为空即可。
    ```yaml
    twikoo:
      region: ap-guangzhou
    ```

11. Twikoo 评论插件效果图。

    ![Screen Shot 2022-10-22 at 11.54.39 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-22%20at%2011.54.39%20AM.png)

