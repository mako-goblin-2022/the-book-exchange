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
            'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
          user_id: 2,
          status: 'active',
          rating: '',
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
          rating: '',
        },

        {
          id: 3,
          title: 'Lord of the Flies',
          author: 'William Golding',
          genre: 'Novel, Allegory, Young adult fiction, Psychological Fiction',
          publishing_details: 'Faber and Faber 1954',
          edition: 'First',
          isbn: '0-571-05686-5',
          summary:
            "William Golding’s 1954 novel 'Lord of the Flies' tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a civilizing impulse, the children eventually become violent and brutal. In the context of the novel, the tale of the boys' descent into chaos suggests that human nature is fundamentally savage.",
          condition: 'Seen better',
          image:
            'days	https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg',
          user_id: 1,
          status: 'active',
          rating: '',
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
          rating: '',
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
          rating: '',
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
          rating: '',
        },
      ])
    })
}
