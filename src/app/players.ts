const Players = [
  {
    name: "Roger Federer",
    age: 39,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed53e8fa40c3d0007ed25b3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D509%26cropX2%3D1693%26cropY1%3D78%26cropY2%3D1262",
    sport: "Tennis",
    salary: 106.3,
  },
  {
    name: "Cristiano Ronaldo",
    age: 35,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093",
    sport: "Soccer",
    salary: 105,
  },
  {
    name: "Lionel Messi",
    age: 33,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564",
    sport: "Soccer",
    salary: 104,
  },
  {
    name: "Neymar",
    age: 28,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec59a8cda48890006292eee%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D845%26cropX2%3D2277%26cropY1%3D97%26cropY2%3D1528",
    sport: "Soccer",
    salary: 95.5,
  },
  {
    name: "LeBron James",
    age: 35,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc5358798e4c00060d2274%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1184%26cropX2%3D3286%26cropY1%3D30%26cropY2%3D2130",
    sport: "Basketball",
    salary: 88.2,
  },
  {
    name: "Stephen Curry",
    age: 32,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece6eed1061240006af3da0%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1271%26cropX2%3D3410%26cropY1%3D153%26cropY2%3D2290",
    sport: "Basketball",
    salary: 74.4,
  },
  {
    name: "Kevin Durant",
    age: 31,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece6f50938ec500060aac25%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D3648%26cropY1%3D133%26cropY2%3D3784",
    sport: "Basketball",
    salary: 63.9,
  },
  {
    name: "Tiger Woods",
    age: 44,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece6ffa89ee2f0006814bfd%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D2074%26cropY1%3D14%26cropY2%3D2087",
    sport: "Golf",
    salary: 62.3,
  },
  {
    name: "Kirk Cousins",
    age: 32,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc5f0a798e4c00060d233c%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D710%26cropX2%3D2526%26cropY1%3D28%26cropY2%3D1842",
    sport: "Football",
    salary: 60.5,
  },
  {
    name: "Carson Wentz",
    age: 27,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc60a1fd6d6700060f84ff%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1058%26cropX2%3D2516%26cropY1%3D31%26cropY2%3D1488",
    sport: "Football",
    salary: 59.1,
  },
  {
    name: "Tyson Fury",
    age: 32,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc644736d6f40008dcde32%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1349%26cropX2%3D3954%26cropY1%3D78%26cropY2%3D2685",
    sport: "Boxing",
    salary: 57,
  },
  {
    name: "Russell Westbrook",
    age: 31,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc655efd6d6700060f8511%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1155%26cropX2%3D4339%26cropY1%3D252%26cropY2%3D3434",
    sport: "Basketball",
    salary: 56,
  },
  {
    name: "Lewis Hamilton",
    age: 35,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece723454886200073da1eb%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D3003%26cropY1%3D199%26cropY2%3D3200",
    sport: "Auto Racing",
    salary: 54,
  },
  {
    name: "Rory McIlroy",
    age: 31,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc696936d6f40008dcdee2%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D8%26cropX2%3D1931%26cropY1%3D139%26cropY2%3D2063",
    sport: "Golf",
    salary: 52,
  },
  {
    name: "Jared Goff",
    age: 25,
    photo:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc696936d6f40008dcdee2%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D8%26cropX2%3D1931%26cropY1%3D139%26cropY2%3D2063",
    sport: "Football",
    salary: 49,
  },
];

export default Players;
