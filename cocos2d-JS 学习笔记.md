# Cocos2d-JS游戏开发

## 第一节 引擎简介及环境搭建 
### 游戏引擎
* 游戏引擎是指一些已编写好的可编辑电脑游戏系统或者一些交互实时图像应用的核心组件系统。这些系统为游戏设计者提供编写游戏所需的各种工具，其目的在于让游戏设计者能容易和快速地做出游戏程序而不用从0开始。
### cocos2d-JS引擎特点
* cocos2d-JS是开源跨平台的游戏引擎
* 采用原生JavaScript语言
* 可发布到包括web平台、iOS、android等多平台
* 融合了cocos2d-HTML和cocos2d-x JavaScript Bindings（jsb）
####实验一
* 下载并安装
* 使用终端进入工程文件夹，运行命令 **cocos new -l js --no-native LS01**
### 工程结构概述
* Frameworks (引擎框架)
    >cocos2d-html5 cocos2d-x runtime-src
* res （资源目录）
* src （源代码）
* inde.html main.js （程序入口）
* project.json （配置文件）
    >**debugMode** showFPS frameRate rendMode engineDir **modules jsList**
    
 ![工程启动及加载流程图](http://m.qpic.cn/psb?/V12SqnDn3ERdXU/Xtdy.lDmDWggwHUpyslOY3GS6oqh3JAjQQ5qRdCjys4!/b/dAgBAAAAAAAA&bo=3wERAQAAAAARB*4!&rf=viewer_4)
