/**
 * Created by unnKoel on 2016/8/2.
 */
function displayAbbreviations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  var abbrs = document.getElementsByTagName('abbr'),
    abbrTexts = [];

  for (var i = 0; i < abbrs.length; i++) {
    var abbr = abbrs[i],
      abbrText = abbr.lastChild.nodeValue,
      abbrTitle = abbr.getAttribute('title');
    abbrTexts[abbrText] = abbrTitle;
  }

  var dl = document.createElement('dl'),
    key;
  for (key in abbrTexts) {
    var dt = document.createElement('dt');
    dt.appendChild(document.createTextNode(key));

    var dd = document.createElement('dd');
    dd.appendChild(document.createTextNode(abbrTexts[key]));

    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  document.body.appendChild(dl);
}

function displayCitation() {
  if (!document.getElementsByTagName) return false;
  var quotes = document.getElementsByTagName('blockquote');
  for (var i = 0; i < quotes.length; i++) {
    var quote = quotes[i];
    var quoteChildren = quote.getElementsByTagName('*');
    if (quoteChildren.length === 0) continue;
    var quoteLastChild = quoteChildren[quoteChildren.length - 1];
    var url = quote.getAttribute('cite');
    var A = document.createElement('a');
    A.appendChild(document.createTextNode('source'));
    A.setAttribute('href', url);
    var superEle = document.createElement('sup');
    superEle.appendChild(A);
    quoteLastChild.appendChild(superEle);
  }
}

window.onload = function () {
  displayAbbreviations();
  displayCitation();
};