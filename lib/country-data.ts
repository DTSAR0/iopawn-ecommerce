export interface CountryData {
  code: string
  name: string
  phoneCode: string
  phoneFormat: string
  addressFormat: {
    hasState: boolean
    stateLabel: string
    zipLabel: string
    zipFormat: string
  }
  names: {
    firstNames: string[]
    lastNames: string[]
  }
  cities: string[]
  states?: string[]
}

export const countryData: Record<string, CountryData> = {
  US: {
    code: 'US',
    name: 'United States',
    phoneCode: '+1',
    phoneFormat: '(###) ###-####',
    addressFormat: {
      hasState: true,
      stateLabel: 'State',
      zipLabel: 'ZIP Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Christopher', 'Karen'],
      lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin']
    },
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
    states: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    phoneCode: '+1',
    phoneFormat: '(###) ###-####',
    addressFormat: {
      hasState: true,
      stateLabel: 'Province',
      zipLabel: 'Postal Code',
      zipFormat: 'A#A #A#'
    },
    names: {
      firstNames: ['Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Oliver', 'Sophia', 'Benjamin', 'Charlotte', 'Elijah', 'Mia', 'Lucas', 'Amelia', 'Mason', 'Harper', 'Logan', 'Evelyn'],
      lastNames: ['Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Gagnon', 'Lee', 'Wilson', 'Johnson', 'MacDonald', 'White', 'Taylor', 'Clark', 'Anderson', 'Hall', 'Wright', 'Lepine', 'Robinson', 'Wood', 'Lewis']
    },
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'],
    states: ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT']
  },
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    phoneCode: '+44',
    phoneFormat: '#### ######',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postcode',
      zipFormat: 'A#A #AA'
    },
    names: {
      firstNames: ['Oliver', 'Olivia', 'Harry', 'Amelia', 'Jack', 'Isla', 'George', 'Ava', 'Noah', 'Emily', 'Charlie', 'Sophia', 'Muhammad', 'Grace', 'Leo', 'Lily', 'Arthur', 'Freya', 'Oscar', 'Chloe'],
      lastNames: ['Smith', 'Jones', 'Williams', 'Taylor', 'Davies', 'Brown', 'Wilson', 'Evans', 'Thomas', 'Roberts', 'Johnson', 'Lewis', 'Walker', 'Robinson', 'Wood', 'Thompson', 'White', 'Watson', 'Jackson', 'Wright']
    },
    cities: ['London', 'Birmingham', 'Leeds', 'Glasgow', 'Sheffield', 'Bradford', 'Edinburgh', 'Liverpool', 'Manchester', 'Bristol']
  },
  DE: {
    code: 'DE',
    name: 'Germany',
    phoneCode: '+49',
    phoneFormat: '### #######',
    addressFormat: {
      hasState: false,
      stateLabel: 'State',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Liam', 'Emma', 'Noah', 'Mia', 'Elias', 'Hannah', 'Felix', 'Emilia', 'Paul', 'Sophia', 'Leon', 'Lina', 'Lukas', 'Lea', 'Jonas', 'Anna', 'Julian', 'Lena', 'Maximilian', 'Leonie'],
      lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann']
    },
    cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen']
  },
  FR: {
    code: 'FR',
    name: 'France',
    phoneCode: '+33',
    phoneFormat: '# ## ## ## ##',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Léo', 'Emma', 'Gabriel', 'Jade', 'Raphaël', 'Louise', 'Arthur', 'Alice', 'Louis', 'Chloé', 'Jules', 'Inès', 'Adam', 'Léa', 'Paul', 'Eva', 'Antoine', 'Jasmine', 'Victor', 'Agathe'],
      lastNames: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier']
    },
    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille']
  },
  AU: {
    code: 'AU',
    name: 'Australia',
    phoneCode: '+61',
    phoneFormat: '# #### ####',
    addressFormat: {
      hasState: true,
      stateLabel: 'State',
      zipLabel: 'Postcode',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Oliver', 'Olivia', 'Noah', 'Charlotte', 'William', 'Ava', 'Jack', 'Amelia', 'Leo', 'Isla', 'Lucas', 'Grace', 'Mason', 'Chloe', 'Ethan', 'Mia', 'Alexander', 'Sophia', 'Henry', 'Lily'],
      lastNames: ['Smith', 'Jones', 'Williams', 'Brown', 'Taylor', 'Davies', 'Wilson', 'Evans', 'Thomas', 'Roberts', 'Johnson', 'Lewis', 'Walker', 'Robinson', 'Wood', 'Thompson', 'White', 'Watson', 'Jackson', 'Wright']
    },
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong'],
    states: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT']
  },
  JP: {
    code: 'JP',
    name: 'Japan',
    phoneCode: '+81',
    phoneFormat: '##-####-####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Prefecture',
      zipLabel: 'Postal Code',
      zipFormat: '###-####'
    },
    names: {
      firstNames: ['Hiroto', 'Yui', 'Haruto', 'Aoi', 'Yuto', 'Sakura', 'Sota', 'Yuka', 'Yuki', 'Mio', 'Kento', 'Hina', 'Riku', 'Rin', 'Takumi', 'Aki', 'Kazuki', 'Mai', 'Daiki', 'Ema'],
      lastNames: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Saito', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu']
    },
    cities: ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto', 'Kawasaki', 'Saitama']
  },
  PL: {
    code: 'PL',
    name: 'Poland',
    phoneCode: '+48',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Voivodeship',
      zipLabel: 'Postal Code',
      zipFormat: '##-###'
    },
    names: {
      firstNames: ['Jakub', 'Zuzanna', 'Jan', 'Lena', 'Szymon', 'Julia', 'Antoni', 'Maja', 'Filip', 'Hanna', 'Mikołaj', 'Aleksandra', 'Wojciech', 'Natalia', 'Kacper', 'Wiktoria', 'Adam', 'Karolina', 'Michał', 'Martyna'],
      lastNames: ['Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak', 'Dąbrowski', 'Kozłowski', 'Mazur', 'Jankowski', 'Wojciechowski', 'Kwiatkowski', 'Krawczyk', 'Kaczmarek', 'Piotrowski', 'Grabowski']
    },
    cities: ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice']
  }
}

export const getRandomName = (countryCode: string, type: 'first' | 'last'): string => {
  const country = countryData[countryCode]
  if (!country) return ''
  
  const names = type === 'first' ? country.names.firstNames : country.names.lastNames
  return names[Math.floor(Math.random() * names.length)]
}

export const getRandomCity = (countryCode: string): string => {
  const country = countryData[countryCode]
  if (!country) return ''
  
  return country.cities[Math.floor(Math.random() * country.cities.length)]
}

export const getRandomState = (countryCode: string): string => {
  const country = countryData[countryCode]
  if (!country?.states) return ''
  
  return country.states[Math.floor(Math.random() * country.states.length)]
}

export const formatPhoneNumber = (phoneCode: string, phoneFormat: string): string => {
  // Generate a random phone number based on the format
  let formatted = phoneFormat
  while (formatted.includes('#')) {
    formatted = formatted.replace('#', Math.floor(Math.random() * 10).toString())
  }
  return phoneCode + ' ' + formatted
}

export const generateZipCode = (zipFormat: string): string => {
  let zip = zipFormat
  while (zip.includes('#')) {
    zip = zip.replace('#', Math.floor(Math.random() * 10).toString())
  }
  while (zip.includes('A')) {
    zip = zip.replace('A', String.fromCharCode(65 + Math.floor(Math.random() * 26)))
  }
  return zip
} 