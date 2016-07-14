/**
 * Created by unnKoel on 2016/7/15.
 */
function countBodyChildren() {
  var body_element = document.getElementsByTagName('body')[0];
  console.log(body_element.childNodes);
  console.log(body_element.childNodes.length);
}

window.onload = countBodyChildren;