## Ajax
#### 获取ajax对象
微软最早在IE5中以ActiveX对象的形式实现了一个名叫XMLHTTP的对象。
IE中创建ajax对象要使用下面的代码
```
var request=new ActiveXObject("Msxml2.XMLHTTP.3.0");
```

其他浏览器基于XMLHTTPRequest来创建对象:
```
var request=new XMLHttpRequest();
```

#### 一个兼容所有浏览器的ajax对象创建
```
function getHTTPObject() {
    if (typeof XMLHTTPRequest == 'undefined')
        XMLHTTPRequest = function ()　{
            try { return new ActiveObject("Msxml2.XMLHTTP.6.0")}
                catch(e){}
            try { return new ActiveObject("Msxml2.XMLHTTP.3.0")}
                catch(e){}
            try { return new ActiveObject("Msxml2.XMLHTTP");}
                catch(e){}
            return false;
        }
        return new XMLHttpRequest();
}
```

#### XMLHttpRequest进行网络请求的一个例子
XMLHttpRequest对象有许多的方法。其中最有用的是open方法，它用来指定服务器上将要访问的文件，指定
请求类型:GET、POST或SEND。
```
    function getNewContent(){
        var request = getHTTPObject();
        if (request){
            request.open("GET","example.txt",true);
            request.onreadystatechange = function() {
                if(request.readyState == 4){
                    var para = document.createElement("p");
                    var txt = document.createTextNode(request.responseText);
                    para.appendChild(txt);
                    document.getElementById('new').appendChild(para);
                }
            };
            request.send(null);
        }else{
            alert("Sorry, your browser doesn't support XMLHttpRequest");
        }
    }
```
- onreadystatechange是一个事件处理函数，它会在服务器给XMLHttpRequeset对象送回响应的时候被触发执行；
- 服务器在向XMLHttpRequest对象发回响应时，该对象有多个属性可用，浏览器会在不同阶段更新readyState属性值。
  - 0 表示未初始化
  - 1 表示正在加载
  - 2 表示加载完毕
  - 3 表示正在交互
  - 4 表示完成
- 访问服务器发送回来的数据要通过两个属性完成。一个是responseText属性，这个属性用于保存文本字符串形式的数据。
  另一个属性是responseXML属性，用于保存Content-Type头部中指定为"text/xml"的数据，其实是一个DocumentFragment对象。

## 小蜜蜂
#### what is the DocumentFragment?
DocumentFragment是一个很类似document,但与文档上下文无关的对象；它也拥有document的方法，比如appendChild,insertBefore等；
你创建的DocumentFragment对象可以被插入到文档对象树中(通过appendChild或insertBefore)；
- DocumentFragment的创建

  通过document.createDocumentFragment方法来创建documentfragment对象
  ```
  var newDocFrag = document.createDocumentFragment ();
  ```
  通过Range.createContextualFragment方法创建

> 参考 http://help.dottoro.com/ljedicfj.php