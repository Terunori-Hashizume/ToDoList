//var list = document.getElementById("list");

function show() {
  document.getElementById("firstOne").textContent = document.getElementById("list").children[0].innerHTML;
}

function appear() {
  var input = document.getElementById("input");
  var disp = document.getElementById("disp");
  var one = document.getElementById("one");
  var others = document.getElementById("others");

  if (input.value == "リストを表示") {
    disp.hidden = false;
    one.style.width = "400px";
    others.style.width = "400px";
    others.style.height = "600px";
    others.style.margin = "10px";
    input.value = "リストを隠す";
  } else {
    disp.hidden = true;
    one.style.width = "820px";
    others.style.width = "0";
    others.style.height = "0";
    others.style.margin = "0";
    input.value = "リストを表示";
  }
}

function create() {
  var todo = prompt("やることを入力してください");
  if (todo) {
    var elemLi = document.createElement("li");
    elemLi.textContent = todo;
    document.getElementById("list").appendChild(elemLi);
    show();
  }
}

function shift() {
  var li = document.getElementById("list");
  if (li.children.length > 0) {
    li.removeChild(li.children[0]);
    if (li.children.length > 0) {
      show();
    } else {
      document.getElementById("firstOne").textContent = "";
    }
  }
}

function remove() {
  var num = prompt("削除したいリストの番号を入力してください");
  var li = document.getElementById("list");
  if (num > 0 && num <= li.children.length) {
    li.removeChild(li.children[num - 1]);
    if (li.children.length > 0) {
      show();
    } else {
      document.getElementById("firstOne").textContent = "";
    }
  } else if (num > li.children.length) {
    window.alert("その番号のリストは存在しません");
  } else if (num != null){
    window.alert("1以上の半角整数を入力してください");
  }
}

function edit() {
  var num = prompt("編集したいリストの番号を入力してください");
  var li = document.getElementById("list");
  if (num > 0 && num <= li.children.length) {
    var text = prompt("編集後の内容を入力してください");
    li.children[num - 1].textContent = text;
    if (num == 1) {
      show();
    }
  } else if (num > li.children.length) {
    window.alert("その番号のリストは存在しません");
  } else if (num != null){
    window.alert("1以上の半角整数を入力してください");
  }
}
