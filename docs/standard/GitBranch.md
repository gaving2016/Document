# Git branch 规范指南

## 1 分支分类

* 用于合并的分支: `master`  
* 用于新建发布分支的分支: `develop`  
* 功能分支命名: `release-*` 或 `release/*`  
* 发布分支命名: `feature-*` 或 `feature/*`，`*`号为**版本号+期次号**。
* 维护分支命名: `hotfix-*` 或 `hotfix/*`，**bug英文简称+期次号**。

## 2 分支简介

首先，项目存在两个长期分支：主分支（`master`）和 开发分支（`develop`）。前者用于存放对外发布的版本，任何时候在这个分支拿到的，都是稳定的分布版；后者用于日常开发，存放最新的开发版。

其次，项目存在三种短期分支：功能分支（`feature branch`）、补丁分支（`hotfix branch`）和 预发分支（`release branch`）。一旦完成开发，它们就会被合并进`develop`或`master`，然后被删除。

