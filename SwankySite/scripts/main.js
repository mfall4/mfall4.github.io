// let myImage = document.querySelector('img');
// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/TDBank-Logo.png') {
//       myImage.setAttribute ('src','https://dummyimage.com/354x148/000/fff.png');
//     } else {
//       myImage.setAttribute ('src','images/TDBank-Logo.png');
//     }
// }
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName || myName === null) {
//       setUserName();
//     } else {
//       localStorage.setItem('name', myName);
//       myHeading.innerHTML = 'Mozilla is cool, ' + myName;
//     }
//   }
//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
//   }
//   myButton.onclick = function() {
//     setUserName();
//   }


function getNews() {
  var ul = document.getElementsByTagName('ul')[0];

    function readTextfile() {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                  var lines = xhr.responseText.split('\n');
                  for (var i = 0; i < lines.length; i++) {
                      showContents(lines[i]);
                  }
                }
            }
        }

        xhr.open('GET', "Others/News.txt", true);
        xhr.send();
    }

    function showContents(responseText) {
        var li = document.createElement('li');
        let listImage = document.createElement('li');
        //var date = new Date();
        li.className = "ticker-item";
        listImage.className = "ticker-item";
        listImage.innerHTML = "<img width='22px' height='22px' src='images/tdlogo-ticker.png'/>";
        li.textContent = responseText;
        ul.appendChild(listImage);
        ul.appendChild(li);
    }

    readTextfile();
  }
