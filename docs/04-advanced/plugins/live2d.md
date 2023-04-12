---
sidebar_position: 7
---


# 添加Live2D看板娘

你可以在 Hexo 根目录下运行以下命令来安装：

```
npm install --save hexo-helper-live2d
```

下载模型文件：
模型文件可直接用npm安装：如下
```
npm install live2d-widget-model-shizuku
```
model名字可在[live2d-widget-models](https://github.com/Dickkk/live2d-widget-models)中找到.
安装完成可以在node_modules/下看到live2d-widget-model-shizuku文件夹
安装完成后，在主题的 _config.yml 中最底部添加以下配置：
```
live2d:
  enable: true
  pluginModelPath: assets/
  model:
    #模板目录，在node_modules里
    use: live2d-widget-model-shizuku  
  display:
    position: right
    width: 300 
    height: 600
  mobile:
    # 在手机端显示
    show: false   
  rect:
    opacity:0.7
```
