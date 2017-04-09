window.onload= init;

function init() {
  var button = document.getElementById("savenote");
  button.onclick = handleButtonClick;
}

function handleButtonClick(e){
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('saveNote');

  db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS note (dateinfo TEXT, contents TEXT)");

    var stmt = db.prepare("INSERT INTO note values(?,?)");

    var da = new Date();
    var pr = da.toLocaleTimeString();

    var con = $("#memoarea").val();

    stmt.run(pr, con);
    }

  stmt.finalize();

  });

  db.close();

  alert("저장되었습니다.");
}
