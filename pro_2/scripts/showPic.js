/**
 * Created by unnKoel on 2016/7/17.
 */
function showPic(whichpic) {
  if (!document.getElementById) return false;
  if (!document.getElementById('placeholder')) return false;
  var placeholder = document.getElementById('placeholder');
  if (placeholder) {
    var href = whichpic.getAttribute('href');
    placeholder.setAttribute('src', href);
  }

  var description = document.getElementById('description');
  if (description) {
    var text = whichpic.getAttribute('title');
    description.firstChild.nodeValue = text;
  }
  return true;
}