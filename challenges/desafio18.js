db.produtos.updateMany(
    {nome: {$in: ["Big Mac", "Quarteirão com Queijo"]}},
    {$addToSet: {ingredientes: "bacon"}}
  );
  db.produtos.find({},{ nome: 1, _id: 0, ingredientes: 1 });