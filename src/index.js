import _ from 'lodash';




function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  //- Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = "111";

    btn.innerHTML = 'Click me and check the console!';

    element.appendChild(btn);

  return element;
}

document.body.appendChild(component());