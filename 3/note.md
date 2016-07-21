## 树与节点
- 元素节点、属性节点、文本节点；
- css也把文档的内容视为一颗节点树，节点树上的各元素继承其父元素的样式属性；


## 获取元素
获取元素，返回的都是一个元素节点对象；事实上，文档中的每一个元素都是一个对象。
- getElementById
- getElementsByTagName

  note:getElementsByTagName(*);获取文档上所有元素；
- getElementsByClass

  note:getElementsByClass("className1 className2");多个类名匹配；
       不仅类名的实际顺序不重要，就是元素带有更多类名也没关系；

## 获取和设置属性
- getAttribute(attribute)

  如果没有该属性，则返回null;

- setAttribute(attribute,value)