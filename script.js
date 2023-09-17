const btn = document.querySelector("#btn"),
  input = document.querySelector("#input"),
  outputText = document.getElementById("output");

var r;
const a = ["a", "á", "à", "â", "ä", "å", "ã", "ă", "ā", "ą", "æ", "ӓ"];
const ee = ["e", "é", "è", "ê", "ë", "ē", "ė", "ę", "ɛ", "э"];
const i = ["i", "í", "ì", "î", "ï", "ī", "į"];
const o = ["o", "ó", "ò", "ô", "ö", "õ", "ō", "ø", "ɵ"];
const u = ["u", "ú", "ù", "û", "ü", "ũ", "ū", "ų"];
const c = ["c", "ç"];
const g = ["g", "ğ"];
const j = ["j", "ǰ"];
const k = ["k", "κ"];
const l = ["l", "ł"];
const n = ["n", "ñ"];
const rr = ["r", "ř"];
const s = ["s", "ş"];
const t = ["t", "ţ"];
// function that treats every character from the input string using helper functions

function transformText(str) {
  let transformedStr = "";
  for (const e of str) {
    if ("aeiouAEIOU".includes(e)) {
      transformedStr += transformVowel(e);
    } else if ("cCgGjJkKlLnNrRsStT".includes(e)) {
      transformedStr += transformConsonant(e);
    } else {
      transformedStr += e;
    }
  }
  return transformedStr;
}

//function that chooses between a lowercase or uppercase
function chooseCase(ltr) {
  if (typeof ltr !== 'string') {
    console.log('Error: Input is not a string.');
    return ltr;
  }
  const cas = Math.random() * 1 < 0.5 ? "lower" : "upper";
  return cas === "lower" ? ltr.toLowerCase() : ltr.toUpperCase();
}



//function that generates "meryoul"y vowels:
function transformVowel(e) {
  let r;
  switch (e) {
    case "a":
      r = Math.floor(Math.random() * a.length);
      return chooseCase(a[r]);
    case "e":
      r = Math.floor(Math.random() * ee.length);
      return chooseCase(ee[r]);
    case "u":
      r = Math.floor(Math.random() * u.length);
      return chooseCase(u[r]);
    case "i":
      r = Math.floor(Math.random() * i.length);
      return chooseCase(i[r]);
    case "o":
      r = Math.floor(Math.random() * o.length);
      return chooseCase(o[r]);
    default:
      // Handle the case when e is not "a", "e", "u", "i", or "o"
      return e;
  }
}


//function that generates "meryoul"y consonants:
function transformConsonant(e) {
  switch (e) {
    case "c":
      r = Math.floor(Math.random() * 1);
      return chooseCase(c[r]);
    case "g":
      r = Math.floor(Math.random() * 1);
      return chooseCase(g[r]);
    case "j":
      r = Math.floor(Math.random() * 1);
      return chooseCase(j[r]);
    case "k":
      r = Math.floor(Math.random() * 1);
      return chooseCase(k[r]);
    case "l":
      r = Math.floor(Math.random() * 1);
      return chooseCase(l[r]);
    case "n":
      r = Math.floor(Math.random() * 1);
      return chooseCase(n[r]);
    case "r":
      r = Math.floor(Math.random() * 1);
      return chooseCase(rr[r]);
    case "s":
      r = Math.floor(Math.random() * 1);
      return chooseCase(s[r]);
    case "t":
      r = Math.floor(Math.random() * 1);
      return chooseCase(t[r]);
    default:
      return e;
  }
}

//getting the input string from user:
function transform() {
  const str = input.value;
  const transformedStr = transformText(str);
    outputText.innerText = transformedStr;
}

input.addEventListener("keydown", function (event) {
  // Check if the key pressed is the "Enter" key (key code 13)
  if (event.keyCode === 13) {
    // Call the transform function
    transform();
  }
});

outputText.addEventListener("click", function () {
  // Select the text in the output text element
  const textToCopy = outputText.innerText;

  // Create a temporary text area element to copy the text to the clipboard
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  // Show a message to indicate that the text has been copied
  alert("Text copied to clipboard");
});