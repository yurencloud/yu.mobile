## 移动端点击元素有阴影块解决方案
消除阴影
~~~
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
~~~
添加点击效果
~~~
&:active{
  background: $dark-border;
}
~~~
兼容iphone(iphone的:active效果要添加事件才有用)
~~~
 document.body.addEventListener('touchstart', () => {
    });
~~~

