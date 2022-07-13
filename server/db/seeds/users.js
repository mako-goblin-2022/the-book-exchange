exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          name: 'Anette',
          genre: 'Animation|Drama',
          trading_tokens: 1,
          email: 'aswancott0@blogtalkradio.com',
          image:
            'https://addthis.com/morbi/vel/lectus/in/quam/fringilla.html?imperdiet=aenean&et=lectus&commodo=pellentesque&vulputate=eget&justo=nunc&in=donec&blandit=quis&ultrices=orci&enim=eget&lorem=orci&ipsum=vehicula&dolor=condimentum&sit=curabitur&amet=in&consectetuer=libero&adipiscing=ut&elit=massa&proin=volutpat&interdum=convallis&mauris=morbi&non=odio&ligula=odio&pellentesque=elementum&ultrices=eu&phasellus=interdum&id=eu&sapien=tincidunt&in=in&sapien=leo&iaculis=maecenas&congue=pulvinar&vivamus=lobortis&metus=est&arcu=phasellus&adipiscing=sit&molestie=amet&hendrerit=erat&at=nulla&vulputate=tempus&vitae=vivamus&nisl=in&aenean=felis&lectus=eu&pellentesque=sapien&eget=cursus&nunc=vestibulum&donec=proin}',
        },
        {
          id: 2,
          name: 'Brice',
          genre: 'Drama|Thriller',
          trading_tokens: 2,
          email: 'bblei1@unesco.org',
          image:
            'https://java.com/in.js?leo=ut&odio=tellus&porttitor=nulla&id=ut&consequat=erat&in=id&consequat=mauris&ut=vulputate&nulla=elementum&sed=nullam&accumsan=varius&felis=nulla&ut=facilisi&at=cras',
        },
        {
          id: 3,
          name: 'Cameron',
          genre: 'Drama',
          trading_tokens: 3,
          email: 'cbauchop2@netlog.com',
          image:
            'http://feedburner.com/tortor/risus/dapibus/augue/vel/accumsan.js?imperdiet=magna&et=at&commodo=nunc&vulputate=commodo&justo=placerat&in=praesent&blandit=blandit&ultrices=nam&enim=nulla&lorem=integer&ipsum=pede&dolor=justo&sit=lacinia&amet=eget',
        },
        {
          id: 4,
          name: 'Forster',
          genre: 'Adventure',
          trading_tokens: 4,
          email: 'fdarrach3@state.gov',
          image:
            'https://blogspot.com/risus.jsp?ante=in&vel=felis&ipsum=donec&praesent=semper&blandit=sapien&lacinia=a&erat=libero&vestibulum=nam&sed=dui&magna=proin&at=leo&nunc=odio&commodo=porttitor&placerat=id&praesent=consequat&blandit=in&nam=consequat&nulla=ut&integer=nulla&pede=sed&justo=accumsan&lacinia=felis&eget=ut&tincidunt=at&eget=dolor&tempus=quis&vel=odio&pede=consequat&morbi=varius',
        },
        {
          id: 5,
          name: 'Berty',
          genre: 'Documentary|Musical',
          trading_tokens: 5,
          email: 'blangfield4@slate.com',
          image:
            'https://guardian.co.uk/turpis/nec/euismod/scelerisque.xml?in=posuere&leo=cubilia&maecenas=curae&pulvinar=duis&lobortis=faucibus&est=accumsan&phasellus=odio&sit=curabitur&amet=convallis&erat=duis&nulla=consequat&tempus=dui&vivamus=nec&in=nisi&felis=volutpat&eu=eleifend&sapien=donec&cursus=ut&vestibulum=dolor&proin=morbi&eu=vel&mi=lectus&nulla=in&ac=quam&enim=fringilla&in=rhoncus&tempor=mauris&turpis=enim&nec=leo&euismod=rhoncus&scelerisque=sed&quam=vestibulum&turpis=sit&adipiscing=amet&lorem=cursus&vitae=id&mattis=turpis&nibh=integer&ligula=aliquet&nec=massa&sem=id&duis=lobortis',
        },
        {
          id: 6,
          name: 'Tim',
          location: 'Dirand',
          favourite_genre: 'Sci-Fi',
          trading_tokens: 0,
          email: 'cdirand0@163.com',
          image:
            'https://guardian.co.uk/turpis/nec/euismod/scelerisque.xml?in=posuere&leo=cubilia&maecenas=curae&pulvinar=duis&lobortis=faucibus&est=accumsan&phasellus=odio&sit=curabitur&amet=convallis&erat=duis&nulla=consequat&tempus=dui&vivamus=nec&in=nisi&felis=volutpat&eu=eleifend&sapien=donec&cursus=ut&vestibulum=dolor&proin=morbi&eu=vel&mi=lectus&nulla=in&ac=quam&enim=fringilla&in=rhoncus&tempor=mauris&turpis=enim&nec=leo&euismod=rhoncus&scelerisque=sed&quam=vestibulum&turpis=sit&adipiscing=amet&lorem=cursus&vitae=id&mattis=turpis&nibh=integer&ligula=aliquet&nec=massa&sem=id&duis=lobortis',
        },
      ])
    })
}
