var path = require('path');
var sqlite3 = require('sqlite3');

let db = new sqlite3.Database(path.join(__dirname, '/public/data.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the stock database.');
});

db.serialize(()=>{
  const sql_create_table = `CREATE TABLE IF NOT EXISTS 'stock' (
    'id'	INTEGER PRIMARY KEY AUTOINCREMENT,
    'title'	TEXT,
    'description'	TEXT,
    'price'	INTEGER,
    'status'	TEXT
  )`;

  const sql_insert_table = `INSERT INTO stock(title, description, price, status)
  VALUES('Arduino',
        'xxxxxx',
        2500,
        'available')`

  db.run(sql_create_table)
  //.run(sql_insert_table)
  .each("select * from stock", (err, row)=>{
    if (err) throw err

    console.log("each query result: " + `id: ${row.id}, tite: ${row.title}, description: ${row.description}, price: ${row.price}, status: ${row.status}`, );
    
  });


  db.get("select * from stock", (err, row)=>{
    console.log("get query result: " + `id: ${row.id}, tite: ${row.title}, description: ${row.description}, price: ${row.price}, status: ${row.status}`, );
  })

  db.all("select * from stock", (err, rows)=>{

    rows.forEach(function(row){
      console.log("all query result: " + `id: ${row.id}, tite: ${row.title}, description: ${row.description}, price: ${row.price}, status: ${row.status}`, );
    })
    
  })


});

db.close((err)=>{
  if (err) {
    return console.error(err.message);
  }
});