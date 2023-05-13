'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let brewerieIds = await queryInterface.bulkInsert('Breweries', [{
      name: "Brasserie Chimay",
      address: "Rue de Poteaupré 5, B-6464 Bourlerse",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Brasserie d'Achouffe",
      address: "Achouffe n°32 - 6666 Wibrin - Achouffe",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Brasserie Vanuxeem",
      address: "Rue d’Armentières, 150, 7782 Ploegsteert",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Brasserie St.Bernardus",
      address: "Trappistenweg 23 8978 Watou",
      createdAt: new Date(),
      updatedAt: new Date()
    },



    ],
      { returning: ["id"] })


    await queryInterface.bulkInsert('Beers', [{
      name: "CHIMAY BLEUE 33CL",
      description: "La Chimay Bleue fait partie du cercle fermé des bières trappistes. Elle est brassée par la communauté monastique de Chimay. Cette brune dévoile d'agréables arômes d'épices et de caramel.",
      breweryId: brewerieIds[0]["id"],
      price: 2.4,
      type: 'Brune',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/df3cffc93781be1dff5c979613e891e6f55fbc19_BBO030447_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "CHIMAY ROUGE 33CL",
      description: "La Chimay Rouge est aussi appelée -première- car elle fût la première bière brassée par les moines.",
      breweryId: brewerieIds[0]["id"],
      price: 2.0,
      type: 'Rousse',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/762a596116022f468b3b81be6eedd06834328909_BBO030460_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "CHIMAY DOREE 33CL",
      description: "La Chimay dorée existe depuis plus de 150 ans. Jusqu''en 2013, elle était réservée à la communauté monastique de l’abbaye de Notre-Dame de Scourmont.",
      breweryId: brewerieIds[0]["id"],
      price: 2.4,
      type: 'Blonde',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/5c2184526f2996562f938411e96e10e3075361e5_BBO030456_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "CHOUFFE BLANCHE 33CL",
      description: "Partez à l''aventure avec cette bière blanche des plus étonnantes. Ses caractéristiques font d''elle un ovni parmi le style Witbier. Sans aucun doute, vous succomberez à son charme.",
      breweryId: brewerieIds[1]["id"],
      price: 2.8,
      type: 'Blanche',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/dde3bcfe938152cc27536809d389d80adbed4bd2_BBO037016_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "LA CHOUFFE 33CL",
      description: "La Chouffe a choisi de créer un univers autour des lutins, mais savez-vous pourquoi ? Tout simplement parce que dans le patois des Ardennes belges, un chouffe est un lutin.",
      breweryId: brewerieIds[1]["id"],
      price: 2.6,
      type: 'Blonde',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/c37951080e47237284ca7e72fc2f85b2a9ccf5ee_BBO032022_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "MC CHOUFFE 33CL",
      description: "Un kilt ? Une Cornemuse ? Un bonnet rouge ? Cela ne peut-être que la pépite du lutin écossais Malcolm : la Mc ChouffeUn kilt ? Une Cornemuse ? Un bonnet rouge ? Cela ne peut-être que la pépite du lutin écossais Malcolm : la Mc Chouffe",
      breweryId: brewerieIds[1]["id"],
      price: 3.1,
      type: 'Brune',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/ebf6d46115468b082dff0248f9651e8ea911ff68_BBO032043_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "KASTEEL DONKER 33CL",
      description: "Cette Dark Ale vous comblera avec sa symphonie aromatique des plus riches.",
      breweryId: brewerieIds[2]["id"],
      price: 3.8,
      type: 'Brune',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/6be823bd6109a30f39cc81871a65b1df3ac90ca5_BBO031995_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "KASTEEL TRIPLE 33CL",
      description: "Cette Triple belge offre un bel équilibre entre puissance, rondeur et notes aromatiques du houblon.",
      breweryId: brewerieIds[2]["id"],
      price: 2.8,
      type: 'Blonde',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/8590171267ac82fd0c23bb5d85a2f31bc4429509_BBO031997_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "KASTEEL BLONDE 33CL",
      description: "Dans la famille Kasteel, je voudrais... la blonde aux arômes houblonnés et maltés.",
      breweryId: brewerieIds[2]["id"],
      price: 2.2,
      type: 'Blonde',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/b4e6d2e64d11d76baa7386a568660b82889382e0_BBO031994_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "SAINT BERNARDUS BLANCHE 33CL",
      description: "La Saint Bernardus Blanche est une bière blanche d’abbaye. Elle saura vous faire chavirer grâce à ses délicats arômes de fruits, d’agrumes et de malt.",
      breweryId: brewerieIds[3]["id"],
      price: 2.2,
      type: 'Blanche',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/ffa527111006c79b2e7b191ab8f7bd95de1d1854_BBO033907_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "SAINT BERNARDUS TRIPLE 33CL",
      description: "St Bernadus, mais pourquoi ? Tout simplement parce que la bière est brassée au sein du Refuge de Notre-Dame de Saint-Bernard à Watou.",
      breweryId: brewerieIds[3]["id"],
      price: 2.6,
      type: 'Blonde',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/e40ae0ce19ea7693a2f663bbc728112680f8f933_BBO032102_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "SAINT BERNARDUS ABT 12 33CL",
      description: "La St Bernardus Abt 12 est l''une des meilleures bières du monde ainsi que l''une des plus rares",
      breweryId: brewerieIds[3]["id"],
      price: 2.9,
      type: 'Brune',
      imageUrl: 'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/69e7aad6f1f0fcdc5ab1917a8fe2a2b88104ba85_BBO032100_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }


    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Breweries', null, {});
    await queryInterface.bulkDelete('Beers', null, {});
  }
};
