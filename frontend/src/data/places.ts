export type Place = {
  id: string
  name: string
  city: string
  image: string
  imageSourcePage: string
  author: string
  license: string
  licenseUrl: string
  alt: string
  sentences: readonly [string, string, string]
}

export const places: readonly Place[] = [
  {
    id: 'nesvizh-castle',
    name: 'Nesvizh Castle',
    city: 'Nesvizh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Belarus_Nesvizh_Castle_7259_2050.jpg/1920px-Belarus_Nesvizh_Castle_7259_2050.jpg',
    imageSourcePage:
      'https://commons.wikimedia.org/wiki/File:Belarus_Nesvizh_Castle_7259_2050.jpg',
    author: 'Alexxx1979',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    alt: 'Nesvizh Castle, seen from across the lake',
    sentences: [
      'The Radziwill family built Nesvizh Castle in the late 1500s.',
      'The castle stands in Nesvizh, not far from Minsk.',
      'In 2005, UNESCO put the castle and the church next to it on the World Heritage List.',
    ],
  },
  {
    id: 'lida-castle',
    name: 'Lida Castle',
    city: 'Lida',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/2024.07.17_LIDA_CASTLE_Lidski_zamak.jpg/1920px-2024.07.17_LIDA_CASTLE_Lidski_zamak.jpg',
    imageSourcePage:
      'https://commons.wikimedia.org/wiki/File:2024.07.17_LIDA_CASTLE_Lidski_zamak.jpg',
    author: 'Rabbi Mendl',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    alt: 'Lida Castle, a red brick medieval castle',
    sentences: [
      'German knights built Lida Castle in the 1300s.',
      'Its red brick walls are a fine example of Gothic style.',
      'For many years the castle was a prison, but today it is a museum.',
    ],
  },
  {
    id: 'grodno-old-castle',
    name: 'Old Castle, Grodno',
    city: 'Grodno',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/057-172_%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%2C_%D0%A1%D1%82%D0%B0%D1%80%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA%2C_%D1%81%D0%BD%D1%8F%D1%82%D0%BE_12_%D0%B8%D1%8E%D0%BD%D1%8F_2005.jpg',
    imageSourcePage:
      'https://commons.wikimedia.org/wiki/File:057-172_%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%2C_%D0%A1%D1%82%D0%B0%D1%80%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA%2C_%D1%81%D0%BD%D1%8F%D1%82%D0%BE_12_%D0%B8%D1%8E%D0%BD%D1%8F_2005.jpg',
    author: 'Globustut',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    alt: 'The Old Castle of Grodno above the Neman River',
    sentences: [
      'The Old Castle stands on a high bank of the Neman River.',
      'It is one of the oldest castles in Belarus.',
      'The first wooden castle on this site was built in the 11th century.',
    ],
  },
  {
    id: 'grodno-new-castle',
    name: 'New Castle, Grodno',
    city: 'Grodno',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grodno_Nowy_Zamek_01.jpg/1920px-Grodno_Nowy_Zamek_01.jpg',
    imageSourcePage: 'https://commons.wikimedia.org/wiki/File:Grodno_Nowy_Zamek_01.jpg',
    author: 'Zala',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    alt: 'The New Castle of Grodno, a royal palace',
    sentences: [
      'The New Castle is a royal palace in Grodno.',
      'It was built in the 1700s for the Polish kings.',
      'The last Polish king left his throne in this castle in 1795.',
    ],
  },
  {
    id: 'brest-fortress',
    name: 'Brest Fortress',
    city: 'Brest',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Brest_Fortress_Barracks_Ruin_2023-02-18_2821.jpg/1920px-Brest_Fortress_Barracks_Ruin_2023-02-18_2821.jpg',
    imageSourcePage:
      'https://commons.wikimedia.org/wiki/File:Brest_Fortress_Barracks_Ruin_2023-02-18_2821.jpg',
    author: 'Mike1979 Russia',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    alt: 'Brest Fortress, the ruined brick barracks',
    sentences: [
      'Brest Fortress was built in the 1830s and 1840s.',
      'In 1941, a small group of soldiers defended it for almost one month.',
      'Today it is a memorial, and a fire burns there for the soldiers who died.',
    ],
  },
  {
    id: 'national-library',
    name: 'National Library of Belarus',
    city: 'Minsk',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/5_50_64_2f_-_Belarus_National_Library%2C_Minsk_2009_%283901618837%29.jpg/1920px-5_50_64_2f_-_Belarus_National_Library%2C_Minsk_2009_%283901618837%29.jpg',
    imageSourcePage:
      'https://commons.wikimedia.org/wiki/File:5_50_64_2f_-_Belarus_National_Library,_Minsk_2009_(3901618837).jpg',
    author: 'EuroAsia Vizion from New York',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    alt: 'The National Library of Belarus, a glass building shaped like a diamond',
    sentences: [
      'The National Library of Belarus is in Minsk.',
      'It keeps about ten million books.',
      'The new building opened in 2006 and has the shape of a big diamond.',
    ],
  },
  {
    id: 'kamenets-tower',
    name: 'Kamenets Tower',
    city: 'Kamenets',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Museum_Kamenets_tower-28-07-2007_1.jpg/1920px-Museum_Kamenets_tower-28-07-2007_1.jpg',
    imageSourcePage:
      'https://commons.wikimedia.org/wiki/File:Museum_Kamenets_tower-28-07-2007_1.jpg',
    author: 'Андрей Осташеня',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    alt: 'Kamenets Tower, a round stone tower also called the White Tower',
    sentences: [
      'Kamenets Tower is a round stone tower in the west of Belarus.',
      'It was built in the 1200s, between the years 1276 and 1288.',
      'People also call it the White Tower, and it gave Belovezhskaya Pushcha its name.',
    ],
  },
  {
    id: 'belovezhskaya-pushcha',
    name: 'Belovezhskaya Pushcha',
    city: 'Belovezhskaya Pushcha',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Belovezhskaya_Pushcha_N.P.jpg/1920px-Belovezhskaya_Pushcha_N.P.jpg',
    imageSourcePage: 'https://commons.wikimedia.org/wiki/File:Belovezhskaya_Pushcha_N.P.jpg',
    author: 'Metselaar, J.',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    alt: 'Belovezhskaya Pushcha, an old forest',
    sentences: [
      'Belovezhskaya Pushcha is a very old forest in the west of Belarus.',
      'It has been a UNESCO World Heritage Site since 1979.',
      'The European bison lives there, and three countries signed an important agreement in this forest in 1991.',
    ],
  },
]

function assertPlaces(entries: readonly Place[]): void {
  const ids = new Set<string>()
  for (const entry of entries) {
    if (ids.has(entry.id)) {
      throw new Error(`Duplicate place id: ${entry.id}`)
    }
    ids.add(entry.id)
    if (entry.sentences.length !== 3) {
      throw new Error(`${entry.id} must have exactly 3 sentences`)
    }
    for (const sentence of entry.sentences) {
      if (!sentence.endsWith('.')) {
        throw new Error(`${entry.id} has a sentence without a final period`)
      }
    }
    if (!entry.image) {
      throw new Error(`${entry.id} has no image URL`)
    }
    if (!entry.license) {
      throw new Error(`${entry.id} has no licence`)
    }
    if (!entry.author) {
      throw new Error(`${entry.id} has no author`)
    }
    if (!entry.alt) {
      throw new Error(`${entry.id} has no alt text`)
    }
  }
}

assertPlaces(places)
