db.produtos.find(
    {$or: [{curtidas: { $eq: 36}},
          {vendidos: { $eq: 85}} ]}, 
    {vendidos: 1, nome: 1, curtidas:1, _id: 0}
    );