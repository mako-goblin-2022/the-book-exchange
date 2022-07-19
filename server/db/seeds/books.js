exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function () {
      return knex('books').insert([
        {
          id: 1,
          title: 'Winnie-the-Pooh',
          author: 'A. A. Milne',
          genre: 'Classic',
          publishing_details: 'Methuen (London), 1926',
          edition: 'First',
          isbn: '4871873005',
          summary:
            'Winnie-the-Pooh follows the many adventures of Winnie and his friends, Piglet, Eeyore, Tigger, Kanga, Christopher Robin, and many more. He calls himself a Bear of Very Little Brain, yet he shows faithfully that he is a wise and loving creature, furthermore a whimsical philosopher who is rather fond of honey. Three cheers for Pooh!',
          condition: 'Well read',
          image:
            'https://upload.wikimedia.org/wikipedia/en/c/c5/Winnie-the-Pooh_%28book%29.png',
          user_id: 2,
          status: 'active',
          rating: '4.34/5 (Goodreads)',
        },

        {
          id: 2,
          title: "Harry Potter and the Philosopher's Stone",
          author: 'J.K. Rowling',
          genre: 'Fantasy',
          publishing_details: 'Bloomsbury (UK) 1997',
          edition: 'First',
          isbn: '0-7475-3269-9',
          summary:
            "It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
          condition: 'Pristine',
          image:
            'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
          user_id: 2,
          status: 'active',
          rating: '4.5/5 (Goodreads)',
        },

        {
          id: 3,
          title: 'Lord of the Flies',
          author: 'William Golding',
          genre: 'Novel, Allegory, Young adult fiction, Psychological Fiction',
          publishing_details: 'Faber and Faber 1954',
          edition: 'First',
          isbn: '0-571-05686-5',
          summary: `William Golding’s 1954 novel 'Lord of the Flies' tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a civilizing impulse, the children eventually become violent and brutal. In the context of the novel, the tale of the boys' descent into chaos suggests that human nature is fundamentally savage.`,
          condition: 'Seen better days',
          image:
            'https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg',
          user_id: 1,
          status: 'active',
          rating: '3.7/5 (Goodreads)',
        },

        {
          id: 4,
          title: 'The Hearts Invisible Furies',
          author: 'John Boyne',
          genre: 'Domestic Fiction',
          publishing_details: 'Hogarth Press 2017',
          edition: 'First',
          isbn: '9781784161002',
          summary:
            'Born out of wedlock to a teenage girl cast out from her rural Irish community and adopted by a well-to-do if eccentric Dublin couple via the intervention of a hunchbacked Redemptorist nun, Cyril is adrift in the world, anchored only tenuously by his heartfelt friendship with the infinitely more glamourous and dangerous Julian Woodbead.',
          condition: 'New',
          image:
            'https://www.whitcoulls.co.nz/content/products/27/48/6314827_MAIN.jpg?width=416&height=620&fit=bounds&enable=upscale&bg-color=ffffff&canvas=416%2C620',
          user_id: 6,
          status: 'active',
          rating: '4.5/5 (Goodreads)',
        },

        {
          id: 5,
          title: "Hairy Maclary from Donaldson's Dairy",
          author: 'Lynley Dodd',
          genre: "Children's Book",
          publishing_details: 'Mallinson Rendel Publishers Limited, 1983',
          edition: 'First',
          isbn: '978-0-14-330615-3',
          summary:
            'Hairy Maclary, a small and scruffy black dog, decides it is time to go for a walk. After he leaves his home and starts exploring down the main street, Hairy Maclary is joined by a variety of other dogs, all of different shapes and sizes.',
          condition: 'Some coffee stains, otherwise like new',
          image:
            'https://cdn.nzedge.com/wp-content/uploads/2021/09/hairy_maclary09sep21.jpg',
          user_id: 3,
          status: 'active',
          rating: '4.3/5 (Goodreads)',
        },

        {
          id: 6,
          title:
            'The Wisdom of Psychopaths: What Saints, Spies, and Serial Killers Can Teach Us About Success',
          author: 'Dr Kevin Dutton',
          genre: 'Self-help',
          publishing_details:
            'Scientific American / Farrar, Straus and Giroux, 2013',
          edition: 'Unknown',
          isbn: '978-0374533984',
          summary:
            "The Wisdom of Psychopaths explores the question of what makes psychopathic people successful. It examines how they differ from other people and why they're so good at certain things. The book also looks at what each of us can learn from them for our own advancement in life.",
          condition: 'Some Wear',
          image: 'https://d3fa68hw0m2vcc.cloudfront.net/54e/120383546.jpeg',
          user_id: 4,
          status: 'active',
          rating: '3.8/5 (Goodreads)',
        },
        {
          id: 7,
          title: 'Lessons in Chemistry',
          author: 'Bonnie Garmus',
          genre: 'Historical Fiction',
          publishing_details: 'Random House,  29/03/2022',
          edition: 'First',
          isbn: '9780857528131',
          summary: `Lessons in Chemistry will make you wonder about all the real-life women born ahead of their time—women who were sidelined, ignored and worse because they weren't as resourceful, determined and lucky as Elizabeth Zott. She's a reminder of how far we've come, but also how far we still have to go."`,
          condition: 'pre-loved',
          image:
            'https://www.whitcoulls.co.nz/content/products/24/08/6720824_MAIN.jpg?width=416&height=620&fit=bounds&enable=upscale&bg-color=ffffff&canvas=416%2C620',
          user_id: 1,
          status: 'active',
          rating: '4.42/5 (Goodreads)',
        },
        {
          id: 8,
          title:
            'We Can Make a Life: A Memoir of Family, Earthquakes & Courage',
          author: 'Chessie Henry',
          genre: 'Aotearoa NZ Biography, General Aotearoa NZ Non Fiction',
          publishing_details: 'Victoria University Press (March 1, 2019)',
          edition: 'First',
          isbn: '9781776561940',
          summary: `Hours after the 2011 Christchuch Earthquake, Kaikoura-based doctor Chris Henry crawled through the burning CTV building to rescue those who were trapped. Six years later, his daughter Chessie interviews him in an attempt to understand the trauma that led her father to burnout, in the process unravelling stories and memories from her own remarkable family history.`,
          condition: 'well read',
          image:
            'https://unitybookswellington.co.nz/wp-content/uploads/9781776561940-3.jpg',
          user_id: 6,
          status: 'active',
          rating: '4.63/5 (Goodreads)',
        },
        {
          id: 9,
          title: 'The Pillars of the Earth (Kingsbridge #1)',
          author: 'Ken Follett',
          genre: 'Historical Fiction',
          publishing_details: 'February 4th 2002 by NAL Trade',
          edition: '',
          isbn: '9780330450133',
          summary: `The building of the cathedral, with the almost eerie artistry of the unschooled stonemasons, is the center of the drama. Around the site of the construction, Follett weaves a story of betrayal, revenge, and love, which begins with the public hanging of an innocent man and ends with the humiliation of a king.`,
          condition: 'good',
          image:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576956100l/5043.jpg',
          user_id: 5,
          status: 'active',
          rating: '4.33/5 (Goodreads)',
        },
        {
          id: 10,
          title: 'World Without End (Kingsbridge #2)',
          author: 'Ken Follett',
          genre: 'Historical Fiction',
          publishing_details: 'October 4th 2007 by Dutton',
          edition: '',
          isbn: '9780330456920',
          summary: `World Without End takes place in the same town of Kingsbridge, two centuries after the townspeople finished building the exquisite Gothic cathedral that was at the heart of The Pillars of the Earth. The cathedral and the priory are again at the center of a web of love and hate, greed and pride, ambition and revenge, but this sequel stands on its own.`,
          condition: 'good',
          image:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1509545511l/5064._SY475_.jpg',
          user_id: 5,
          status: 'active',
          rating: '4.28/5 (Goodreads)',
        },
        {
          id: 11,
          title: 'A Column of Fire (Kingsbridge #3)',
          author: 'Ken Follett',
          genre: 'Historical Fiction',
          publishing_details: 'September 12th 2017 by Viking Penguin',
          edition: '',
          isbn: '9780525954972',
          summary: `In 1558, the ancient stones of Kingsbridge Cathedral look down on a city torn apart by religious conflict. As power in England shifts precariously between Catholics and Protestants, royalty and commoners clash, testing friendship, loyalty, and love.`,
          condition: 'good',
          image:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597750114l/33571713._SY475_.jpg',
          user_id: 5,
          status: 'active',
          rating: '4.22/5 (Goodreads)',
        },
        {
          id: 12,
          title: 'The Evening and the Morning (Kingsbridge #0)',
          author: 'Ken Follett',
          genre: 'Historical Fiction',
          publishing_details: 'September 15th 2020 by Viking',
          edition: '',
          isbn: '9780525954989',
          summary: `It is 997 CE, the end of the Dark Ages. England is facing attacks from the Welsh in the west and the Vikings in the east. Those in power bend justice according to their will, regardless of ordinary people and often in conflict with the king. Without a clear rule of law, chaos reigns.`,
          condition: 'good',
          image:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585140756l/49239093.jpg',
          user_id: 5,
          status: 'active',
          rating: '4.38/5 (Goodreads)',
        },
      ])
    })
}
