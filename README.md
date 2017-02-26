# ScrollPrevent
纯原生JS，移动端阻止页面元素滚动插件

# 介绍
在移动端开发的时候，未免会遇到这样的情况：
有一个弹出的浮动层，这个层有滚动条，可以上下滚动。
此时就会发现，当用户在操作这个浮层的时候，整个页面也可能会随之滚动。

`ScrollPrevent.js`就是为了解决这种情况的！

# 使用方式
将git仓库内的scrollPrevent.js保存到本地。
在HTML的任何位置使用一句话引入
```html
<script src="scrollPrevent.js"></script>
```
之后，在页面尾部为浮层元素添加
```javascript
ScrollPrevent().init(dom)
```
其中，dom为使用选择器选中的HTML原生DOM元素。比如
```javascript
ScrollPrevent().init(document.querySelector("#show"))
```
之后我们可以发现，在移动端，浮层的滚动和整个页面的滚动彻底无关了！

# 测试页面
可以使用移动设备访问[测试页面](http://139.129.132.196/scrollprevent/)
如果您正巧是用PC在访问本页面，可以拿起手机扫描下方的二维码，进行访问
<br>
![二维码](https://image.hduzplus.xyz/image/1488113445465.png)


感谢使用。
