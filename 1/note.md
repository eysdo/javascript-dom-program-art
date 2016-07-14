## js Dom的发展
- javascript的早期版本向程序员提供了查询和操控web文档某些实际内容(主要是图像和表单)的手段；
  ```
    document.images[2];
    document.forms['details']
  ```
  现在的人们通常称这种试验性质的初级DOM称为"第0级DOM"

- Netscape和微软公司各自推出第四代浏览器后，DOM遇到麻烦，两者使用的是不兼容的DOM;
  ```
    Netscape公司的DOM使用的专有元素，这些元素称为"层"。层有唯一的ID,javascript代码需要
    像下面这样引用他们：
    document.layers['myelement']

    而微软的DOM中这个元素必须像下面这样引用：
    document.all['myelement']
  ```

- W3C结合大家的优点推出了一个标准化的DOM.浏览器制造商们与W3C携手制定新标准，1998年10月
  完成"第1级DOM"
  ```
    var xpos=document.getElementById('myelement').style.left;
  ```

