/**
 * Created by unnKoel on 2016/7/15.
 */
function showPic(whichpic) {
  var source = whichpic.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
  var text = whichpic.getAttribute('title');
  var description = document.getElementById('description');
  description.firstChild.nodeValue = text;
}