##最佳实践

- 平稳退化

  javascript被禁用，网站的基本操作还可以使用;

  "javascript:"伪协议在较老的浏览器中会尝试打开并链接但失败；

  在HTML中通过"javascript:"伪协议来调用javascript代码的做法非常不好；

- 渐进增强

  \<script\>标签位于文档底部\</body\>之前，不能保证哪个文件最先结束加载；
- 向后兼容

  浏览器嗅探技术正在被更简单也更健壮的对象检测技术所取代；
- 性能考虑
  位于\<head\>块中的脚本会导致浏览器无法并行加载其他文件；

  推荐的做法是在\<body\>标记之前，结合window.onload事件来加载script;


相关的项目实践：pro_2

## 小蜜蜂

- return false; 对ie7,8不支持；

  在ie7,8下阻止链接，另外需要设置window.event.returnValue=false;