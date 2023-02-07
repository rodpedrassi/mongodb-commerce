db.produtos.updateMany(
    {}, 
    { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);
db.produtos.updateMany(
    { nome: { $eq: "Big Mac" } }, 
    { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
    { tags: { $eq: "bovino" } }, 
    { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find({}, { nome: 1, _id: 0, vendasPorDia: 1 });