products = [
  {
    name: 'Pokémon™ Legends: Arceus',
    description: 'Action meets RPG as the Pokémon series reaches a new frontier. Get ready for a new kind of grand, Pokémon adventure in Pokémon™ Legends: Arceus, a new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series.',
    kind: 'featured',
    image: File.new(File.join(Rails.root, 'db/seed_data_files/arceus.png')),
    youtube_url: 'https://www.youtube.com/watch?v=I4RynqpahT8',
    youtube_id: 'I4RynqpahT8',
    timecode: 10,
    button_text: 'Play Now'
  },
  {
    name: 'God of War Ragnarök',
    description: 'God of War Ragnarök is an upcoming action-adventure game developed by Santa Monica Studio and will be published by Sony Interactive Entertainment (SIE). It is scheduled to be released worldwide on November 9, 2022, for the PlayStation 4 (PS4) and PlayStation 5 (PS5). It will be the ninth installment in the God of War series, the ninth chronologically, and the sequel to 2018 God of War.',
    image: File.new(File.join(Rails.root, 'db/seed_data_files/godofwar.png')),
    youtube_url: 'https://www.youtube.com/watch?v=ZoT4Q56ryos',
    youtube_id: 'ZoT4Q56ryos',
    timecode: 20,
    button_text: 'Buy Now'
  }
]

Product.create(products)