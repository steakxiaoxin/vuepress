---
title: html 和 css 相关
date: 2019-11-06
sidebar: "auto"
categories:
  - front-end
tags:
  - html&css
# keys:
#   - "bixin"
# publish: false
---

# html 和 css 相关

## 一、bfc 三问

1. BFC 是什么？
2. BFC 触发的条件有哪些？
3. BFC 可以干什么？

### 什么是 BFC

BFC 全称为块级格式化上下文 (Block Formatting Context) 。它决定了元素如何对其内容进行定位 and 与其他元素的关系和相互作用，当涉及到可视化布局的时候，BFC 提供了一个环境，HTML 元素在这个环境中按照一定规则进行布局。<br/>
可以理解为一个独立的容器，并且这个容器里 box 的布局与这个容器外的 box 毫不相干。

#### BFC 的特性

- 内部的盒会在垂直方向一个接一个排列（可以看作 BFC 中有一个的常规流）垂直方向外边距重叠
- BFC 就是页面上的一个独立容器，容器里面的子元素不会影响到外面的元素
- 计算 BFC 的高度时，浮动元素也参与计算
- [BFC 区域不会与浮动元素重叠](https://zhidao.baidu.com/question/1050642522648545939.html)

### 触发 BFC 的条件

- 根元素
- `float` 不为 `none`
- `position` 为 `absolute` 或 `fixed`
- `display` 为 `inline-block`、`table-cell`、`table-caption`
- `overflow` 不为 `visible`
- `flex` 弹性盒

### BFC 可以解决的问题

- 清除浮动
- margin 塌陷 (子元素 margin-top 溢出)
- margin 合并 (重叠盒子外再套一层 bfc)
- 自适用两列布局（`float` + `overflow`）原理：BFC 区域不会与浮动元素重叠

<br/>
<Valine></Valine>
