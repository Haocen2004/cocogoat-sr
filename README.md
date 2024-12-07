<div align="center">

# 椰羊·星穹铁道分羊
[![https://cocogoat.hellocraft.xyz](https://img.shields.io/website?down_message=APP%20DOWN&label=APP&style=for-the-badge&up_color=%2300adff&up_message=https%3A%2F%2Fcocogoat.hellocraft.xyz&url=https%3A%2F%2Fcocogoat.hellocraft.xyz)](https://cocogoat.hellocraft.xyz/)

适配崩坏:星穹铁道的成就管理网页

![BSD-3 License](https://img.shields.io/github/license/HonkaiScanner/cocogoat-sr?style=for-the-badge)

</div>

## 原始项目
[椰羊·Cocogoat](https://github.com/YuehaiTeam/cocogoat/)  
[黑塔·Herta](https://herta.space/)  
本项目是在原始项目的基础上进行的二次修改，适配崩坏:星穹铁道的成就管理。  
因为原项目星铁部分迟迟没有更新 所以有了此项目进行适配

## 功能区别
 - 仅支持成就管理
 - 暂未适配成就识别
 - 移除云同步功能

### 成就管理
 - 支持按分类、任务、委托筛选成就
 - 支持查看成就的触发条件，如是任务触发可以显示任务名

## 遇到问题？
如您的问题未在此处列出或遇到不明卡死等情况，您可以[搜索或提交 issue](issues)。

## 更新
 - 如果您发现有些新功能没有出现，请直接按 <kbd>Ctrl</kbd> + <kbd>F5</kbd> 刷新。  

## 参与开发 
本项目基于 `TypeScript` 和 `Vue.js` 开发，我们欢迎一切有关的讨论、帮助和 Pull Requests。  
推荐的开发环境：  
 - 本地运行: `pnpm serve`（Vite）
 - 本地打包: `pnpm build`（webpack）
 - 单文件打包: `pnpm build:singlefile`（Vite）
 - 以上命令都可以手动通过 `:vite` 或 `:webpack` 切换工具链。我们推荐使用 `Vite` 进行开发，在 `webpack` 下测试后部署。
