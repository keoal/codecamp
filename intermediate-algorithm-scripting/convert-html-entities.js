function convertHTML(str) {
  console.log(str);
//split the string up into individual characters
var changed = str.split("");
console.log(changed);

//loop through individual characters and change if the case matches  
for (var i = 0; i < changed.length; i++) {
    switch (changed[i]) {
      case "&":
        changed[i] = "&amp;";
        break;
        case "<":
        changed[i] = "&lt;";
        break;
      case ">":
        changed[i] = "&gt;";
        break;
      case '"':
        changed[i] = "&quot;";
        break;
      case "'":
        changed[i] = "&apos;";
        break;
    }

  
  }
  //join the string back together
   changed = changed.join("");
  console.log(changed);
  return changed;
}
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
