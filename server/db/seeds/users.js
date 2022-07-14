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
          image:
            'https://images.unsplash.com/photo-1636374526784-cad2f006e7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80',
        },
        {
          id: 2,
          name: 'Brice',
          location: 'Jupiter',
          favourite_genre: 'Drama|Thriller',
          trading_tokens: 2,
          email: 'bblei1@unesco.org',
          image:
            'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        },
        {
          id: 3,
          name: 'Cameron',
          location: 'Ceres',
          favourite_genre: 'Drama',
          trading_tokens: 3,
          email: 'cbauchop2@netlog.com',
          image:
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        },
        {
          id: 4,
          name: 'Forster',
          location: 'Pluto',
          favourite_genre: 'Adventure',
          trading_tokens: 4,
          email: 'fdarrach3@state.gov',
          image:
            'https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        },
        {
          id: 5,
          name: 'Berty',
          location: 'Ganymede',
          favourite_genre: 'Documentary|Musical',
          trading_tokens: 5,
          email: 'blangfield4@slate.com',
          image:
            'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80',
        },
        {
          id: 6,
          name: 'Tim',
          location: 'Dirand',
          favourite_genre: 'Sci-Fi',
          trading_tokens: 0,
          email: 'cdirand0@163.com',
          image:
            'https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        },
      ])
    })
}
