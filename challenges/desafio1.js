db.movies.aggregate([{
    $match: {
      "ibm.rating": { $gte: 7 },
      genres: { $nin: ["Crime", "Horror"] },
      rated: { $in: ["PG", "G"]},
      languages: { $all: ["English", "Spanish"] },
    },
  },
]);