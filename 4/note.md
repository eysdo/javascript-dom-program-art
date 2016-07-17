## setAttribute的等价使用
在"第1级DOM"出现之前，你可以通过另外一种方法设置大部分元素的属性（有些元素不行，主要是图片，表单；），此方法到现在依然有效；
```
例如，想改变某个input元素的value属性；
element.value = 'the new value'

此方法也可以用来改变图片的src;
element.src = source;
```

## 事件处理函数
处理函数触发的javascript代码返回布尔值true或false。这样一来，当这个链接被点击时，如果那段javascript代码返回的
值是true,onclick事件处理函数就认为"这个链接被点击了"；反之，如果返回值是false,onclick事件处理函数就认为
"这个链接没有被点击"；

## 元素的属性
- childNodes;

  获取任何一个元素的所有子元素;

  文档里几乎每一个东西都是节点，甚至连空格和换行符都会被解释为节点。

- nodeType;

  元素节点 的nodeType属性值是1；

  属性节点 的nodeType属性是2；

  文本节点 的nodeType属性值是3；

- nodeValue;
  如果想改变一个文本节点的值，可使用DOM提供的nodeValue属性；

## 小蜜蜂

window.onload事件：在页面加载时执行；
firstChild， lastChild;

