var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('saveNote');

db.serialize(function(){
  db.run("CREATE TABLE IF NOT EXISTS note (id INT, pr TEXT)");

  var stmt = db.prepare("INSERT INTO note values(?,?)");
  for(var i=0; i<10; i++){

    var d = new Date();
    var n = d.toLocaleTimeString();
    stmt.run(i, n);
  }

  stmt.finalize();

  db.each("SELECT id,pr from note", function(err, row){
    console.log("Note id:"+row.id, row.pr);
  });
});

db.close();
