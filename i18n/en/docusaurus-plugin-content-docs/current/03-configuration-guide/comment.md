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

This configuration item is used to enable and set up the theme's comment system.

## use

```yaml
use: waline  # values: waline | gitalk | twikoo
```
To configure which comment system to use, the theme currently comes with Waline, Gitalk, and Twikoo built-in. You can also use another one.

## Waline

Waline is a comment system with a backend, derived from Valine. You can consider Waline to be Valine with a backend. It is more secure, fast, concise, and open source compared to Valine. You can find more information at the following websites: https://github.com/walinejs/waline and https://waline.js.org/. If you want to use Waline in the Redefine theme, please see the following information.

To use in Redefine Theme:


### LeanCloud Setup (Database)

1. [Login](https://console.leancloud.app/login) or [register](https://console.leancloud.app/register) for LeanCloud International Edition and enter the [Control Panel](https://console.leancloud.app/apps).
2. Click on the top left corner to create an app and name it something you like (choose the free development version):

![Create App](https://evan.beee.top/img/leancloud-1.f7a36b20.png)

3. Enter the app and select `Settings` > `App Key` from the bottom left corner. You will see your `APP ID`, `APP Key`, and `Master Key`. Please record them for later use.

![](https://evan.beee.top/img/leancloud-2.4cc69975.png)

:::caution Domestic version(china mainland version) requires recordal access

If you are using the domestic version of Leancloud ([leancloud.cn](https://leancloud.cn/)) we recommend switching to the international version ([leancloud.app](https://leancloud.app/)). Otherwise, you will need to bind an additional **recordal** domain name to the app, and purchase a standalone IP and complete recordal access:

- Log in to the domestic version and enter the app you want to use.
- Select Settings > Domain Binding > API Access Domain > Bind New Domain > Enter Domain > Confirm.
- Follow the instructions on the page to complete the CNAME resolution on DNS.
- Purchase a standalone IP and submit a work order to complete recordal access. (The current price of a standalone IP is ￥ 50/each/month)

![域名设置](https://evan.beee.top/img/leancloud-3.3ae5fb8d.png)

:::

### Vercel Deployment (Server-side)


[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)

1. Click the button above to go to Vercel for server-side deployment.

:::tip

Note: If you are not logged in, Vercel will ask you to register or log in. Please use your GitHub account for quick login.

:::

2. Enter a Vercel project name that you like and click 'Create' to continue:

![Create Project](https://evan.beee.top/img/vercel-1.4e9dd7aa.png)

3. Vercel will then help you create and initialize a new repository based on the Waline template, with the repository name being the project name you entered earlier.

![deploy](https://evan.beee.top/img/vercel-3.0918fcee.png)

A few minutes later, a full screen of fireworks will celebrate your successful deployment. At this point, you can click 'Go to Dashboard' to jump to the app's control panel.

![deploy](https://evan.beee.top/img/vercel-4.f7f4c12b.png)

4. Click on the top 'Settings' - 'Environment Variables' to enter the environment variable configuration page, and configure three environment variables 'LEAN_ID', 'LEAN_KEY', and 'LEAN_MASTER_KEY'. Their values correspond to the 'APP ID', 'APP KEY', and 'Master Key' obtained in the previous step in LeanCloud.

   ![Set Environment Variables](https://evan.beee.top/img/vercel-5.3a5de7f0.png)

   Note:

   If you are using the domestic version of LeanCloud, please also configure the 'LEAN_SERVER' environment variable with the value of the bound domain name.

5. After the environment variables are configured, click on the top 'Deployments' and click the 'Redeploy' button on the right side of the topmost deployment. This step is to make the set environment variables effective.

![redeploy](https://evan.beee.top/img/vercel-6.c1af01b1.png)

6. This will take you to the 'Overview' screen to start deployment. After a while, the 'STATUS' will change to 'Ready'. At this point, please click 'Visit' to jump to the deployed website address, which is the 'Vercel URL' on the 'Overview' page.

7. Now you can use your website and enjoy Waline. If you have any questions or suggestions, please feel free to [submit an issue](https://github.com/walinejs/waline/issues/new) or [email us](mailto:i@evanliu2968.com).

      #### Bind Domain (Optional)

      If you do not want to use the domain name provided by vercel, you can bind your own domain name.

      1. Click 'Settings' - 'Domains' at the top to enter the domain name configuration page.

      2. Enter the domain name you want to bind and click 'Add'.

      ![Add domain](https://evan.beee.top/img/vercel-8.49378bd3.png)

      3. Add a new 'CNAME' record in the domain server provider.

      | Type  | Name    | Value                |
      | ----- | ------- | -------------------- |
      | CNAME | example | cname.vercel-dns.com |

      4. Wait for it to take effect, and you can access it through your domain name 🎉

      - Comment system: example.yourdomain.com
      - Comment management: example.yourdomain.com/ui

      ![success](https://evan.beee.top/img/vercel-9.a29236ac.png)

### Redefine Theme Settings

In the Redefine theme configuration file, fill in the necessary parameter information (APP ID, APP Key, etc.), as shown in the example below.


```yaml
waline:
  serverUrl:  # Waline server url(vercel) example: https://example.example.com
  lang: zh-CN # Waline language, default: zh-CN
```

- 'serverUrl' is required. It is your Vercel domain name (or a custom domain name you have bound).
- 'lang' is required. Comment language, see [Waline official documentation #lang](https://waline.js.org/reference/component.html#lang)

Screenshot of the Waline comment plugin.

![Screen Shot 2022-10-03 at 10.17.15 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-03%20at%2010.17.15%20PM.png)


## Gitalk


Gitalk is a comment plugin based on Github Issue and Preact.

For more information, see:

- https://github.com/gitalk/gitalk
- https://gitalk.github.io/

How to use Gitalk in Redefine:

1. Create a new GitHub OAuth App
   Register or log in to [GitHub](https://github.com/) and create a new [OAuth App](https://github.com/settings/applications/new). Fill in the `Homepage URL` and `Authorization callback URL` with your own domain.
   
   After creating the OAuth App, save the `Client ID` and `Client Secret` for later use.

   ![Screen Shot 2022-10-02 at 10.24.53 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.24.53%20AM.png)

2. Create a new GitHub repository
   Register or log in to [GitHub](https://github.com/), create a new [repository](https://github.com/new) and open the Issues. Add a new Issue manually with any content to open it. This repository will be used to store the comments.

3. Fill in your `GitHub username`, `repository name`, and the `Client ID` and `Client Secret` from the OAuth App in the theme configuration file, as shown in the following example.

   ```yaml
   gitalk:
     github_id: EvanNotFound
     repository: hexo-site-comments
     client_id: cdfffffffffffffffffffff
     client_secret: f4b55555555555555555555555555555
   ```

4. Gitalk comment plugin screenshot:
   ![image](https://evan.beee.top/img/image.4bv32zei1580.png)


Twikoo is a simple, secure, and free static website comment system developed by Tencent Cloud.

For more information:

- https://github.com/imaegoo/twikoo
- https://twikoo.js.org/

**Ex. Tencent Cloud CloudBase tutorial. For other methods, see the Twikoo documentation.**

:::tip 

* Recommend creating a Shanghai environment. If you choose the Guangzhou environment, you need to configure `region: ap-guangzhou`
* Environment name can be freely filled in
* Recommend selecting the billing method `package year and month`, package version `basic class 1`, exceeding the free quota will not be charged
* If prompted to select an "Application Template", please select "Empty Template"

:::

If you plan to deploy to an existing cloud development environment, please start with step 3.

1. Go to the [Cloud Development CloudBase](https://curl.qcloud.com/KnnJtUom) event page, scroll down to the "New User Exclusive" section, select the suitable package (generally the 0 yuan package), click "Buy Now", and create the environment as prompted.
2. Go to the [Cloud Development Console](https://console.cloud.tencent.com/tcb/)
3. Go to [Environment - Login Authorization](https://console.cloud.tencent.com/tcb/env/login) and enable "Anonymous Login"
4. Go to [Environment - Security Configuration](https://console.cloud.tencent.com/tcb/env/safety) and add the website domain to the "WEB Security Domain"
5. Go to [Environment - Cloud Function](https://console.cloud.tencent.com/tcb/scf/index) and click "New Cloud Function"
6. Please fill in the function name: `twikoo`, create method: `blank function`, runtime environment: `Nodejs 10.15`, function memory: `128MB`, click "Next"
7. Clear the default code in the function editor and copy and paste the code here
``` js
exports.main = require('twikoo-func').main
```
8. After creating, click "twikoo" to enter the function details page, then click the "Function Code" tab. Click "File - New File" and enter `package.json`, then press Enter.
9. Copy the following code and paste it into the code box, then click "Save and Install Dependencies".

``` json
{ "dependencies": { "twikoo-func": "1.2.0" } }
```
10. In the Redefine theme configuration file, fill in the environment ID `env_id`
    ```yaml
    twikoo:
      env_id: xxxx-xxxx..........
      region:  
    ```

    If the Guangzhou environment was selected, the value of `region` must be filled in as `ap-guangzhou`. If `Vercel` is used, `region` can be left empty.
    ```yaml
    twikoo:
      region: ap-guangzhou
    ```

11. Twikoo Example

    ![Screen Shot 2022-10-22 at 11.54.39 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-22%20at%2011.54.39%20AM.png)

