exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          name: 'Anette',
          location: 'Mars',
          favourite_genre: 'Animation|Drama',
          trading_tokens: 1,
          email: 'aswancott0@blogtalkradio.com',
          image: '/images/avatar.jpg',
        },
        {
          id: 2,
          name: 'Brice',
          location: 'Jupiter',
          favourite_genre: 'Drama|Thriller',
          trading_tokens: 2,
          email: 'bblei1@unesco.org',
          image: 'https://d3fa68hw0m2vcc.cloudfront.net/54e/120383546.jpeg',
        },
        {
          id: 3,
          name: 'Cameron',
          location: 'Ceres',
          favourite_genre: 'Drama',
          trading_tokens: 3,
          email: 'cbauchop2@netlog.com',
          image: '/images/avatar.jpg',
        },
        {
          id: 4,
          name: 'Forster',
          location: 'Pluto',
          favourite_genre: 'Adventure',
          trading_tokens: 4,
          email: 'fdarrach3@state.gov',
          image: '/images/avatar.jpg',
        },
        {
          id: 5,
          name: 'Berty',
          location: 'Ganymede',
          favourite_genre: 'Documentary|Musical',
          trading_tokens: 5,
          email: 'blangfield4@slate.com',
          image: '/images/avatar.jpg',
        },
        {
          id: 6,
          name: 'Tim',
          location: 'Dirand',
          favourite_genre: 'Sci-Fi',
          trading_tokens: 0,
          email: 'cdirand0@163.com',
          image: '/images/avatar.jpg',
        },
      ])
    })
}
