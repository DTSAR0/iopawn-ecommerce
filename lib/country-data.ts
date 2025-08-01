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
  },
  AL: {
    code: 'AL',
    name: 'Albania',
    phoneCode: '+355',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Enea', 'Alesia', 'Mateo', 'Eva', 'Leo', 'Aria', 'Noah', 'Mia', 'Liam', 'Sofia', 'Aron', 'Emma', 'Dario', 'Greta', 'Niko', 'Luna', 'Erik', 'Aida', 'Kleo', 'Ela'],
      lastNames: ['Hoxha', 'Shehu', 'Meksi', 'Basha', 'Dervishi', 'Kola', 'Leka', 'Mema', 'Ndoja', 'Papa', 'Rama', 'Sali', 'Tola', 'Vata', 'Xhafa', 'Ylli', 'Zeka', 'Bardhi', 'Cela', 'Doda']
    },
    cities: ['Tirana', 'Durrës', 'Vlorë', 'Elbasan', 'Shkodër', 'Fier', 'Korçë', 'Berat', 'Lushnjë', 'Pogradec']
  },
  AT: {
    code: 'AT',
    name: 'Austria',
    phoneCode: '+43',
    phoneFormat: '### ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'State',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Lukas', 'Hannah', 'Felix', 'Emma', 'Maximilian', 'Sophia', 'Paul', 'Anna', 'Leon', 'Lena', 'Jonas', 'Lea', 'Julian', 'Mia', 'Elias', 'Lina', 'David', 'Leonie', 'Simon', 'Clara'],
      lastNames: ['Gruber', 'Huber', 'Bauer', 'Wagner', 'Müller', 'Pichler', 'Steiner', 'Moser', 'Mayer', 'Hofer', 'Leitner', 'Berger', 'Fuchs', 'Eder', 'Fischer', 'Schmid', 'Winkler', 'Weber', 'Schwarz', 'Maier']
    },
    cities: ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels', 'Sankt Pölten', 'Dornbirn']
  },
  BE: {
    code: 'BE',
    name: 'Belgium',
    phoneCode: '+32',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Province',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Liam', 'Emma', 'Noah', 'Olivia', 'Arthur', 'Louise', 'Adam', 'Alice', 'Louis', 'Eva', 'Jules', 'Mila', 'Victor', 'Nora', 'Lucas', 'Lina', 'Hugo', 'Ella', 'Felix', 'Clara'],
      lastNames: ['Peeters', 'Janssens', 'Maes', 'Jacobs', 'Mertens', 'Willems', 'Claes', 'Goossens', 'Wouters', 'De Smet', 'Bosmans', 'Vermeulen', 'Pauwels', 'Lambert', 'Dupont', 'Martin', 'Dubois', 'Simon', 'Laurent', 'Leroy']
    },
    cities: ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Bruges', 'Namur', 'Leuven', 'Mons', 'Aalst']
  },
  BG: {
    code: 'BG',
    name: 'Bulgaria',
    phoneCode: '+359',
    phoneFormat: '## ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Province',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Georgi', 'Maria', 'Ivan', 'Elena', 'Stefan', 'Nina', 'Nikolay', 'Sofia', 'Dimitar', 'Viktoria', 'Petar', 'Anna', 'Vasil', 'Irina', 'Hristo', 'Tanya', 'Angel', 'Nadia', 'Boris', 'Eva'],
      lastNames: ['Georgiev', 'Ivanov', 'Dimitrov', 'Petrov', 'Nikolov', 'Hristov', 'Stoyanov', 'Todorov', 'Angelov', 'Vasilev', 'Stefanov', 'Popov', 'Kolev', 'Mihaylov', 'Marinov', 'Pavlov', 'Kostov', 'Tsvetkov', 'Atanasov', 'Borisov']
    },
    cities: ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven', 'Sliven', 'Dobrich', 'Shumen']
  },
  HR: {
    code: 'HR',
    name: 'Croatia',
    phoneCode: '+385',
    phoneFormat: '## ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Luka', 'Eva', 'Marko', 'Sara', 'Ivan', 'Ana', 'Petar', 'Mia', 'Ante', 'Lara', 'Josip', 'Ema', 'Mateo', 'Nina', 'Filip', 'Lea', 'Domagoj', 'Tara', 'Karlo', 'Iva'],
      lastNames: ['Horvat', 'Kovačević', 'Novak', 'Jurić', 'Kovačić', 'Babić', 'Marić', 'Knežević', 'Vuković', 'Katić', 'Marković', 'Petrović', 'Pavlović', 'Božić', 'Vlahović', 'Grgić', 'Šimić', 'Vidović', 'Tomić', 'Kralj']
    },
    cities: ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Pula', 'Slavonski Brod', 'Karlovac', 'Varaždin', 'Šibenik']
  },
  CZ: {
    code: 'CZ',
    name: 'Czech Republic',
    phoneCode: '+420',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '### ##'
    },
    names: {
      firstNames: ['Jakub', 'Eliška', 'Jan', 'Tereza', 'Tomáš', 'Adéla', 'Adam', 'Karolína', 'Matyáš', 'Lucie', 'Vojtěch', 'Aneta', 'Filip', 'Veronika', 'David', 'Kateřina', 'Ondřej', 'Nikola', 'Daniel', 'Michaela'],
      lastNames: ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Němec', 'Marek', 'Pospíšil', 'Hájek', 'Jelínek', 'Král', 'Růžička', 'Beneš', 'Fiala', 'Sedláček', 'Doležal']
    },
    cities: ['Prague', 'Brno', 'Ostrava', 'Plzeň', 'Liberec', 'Olomouc', 'Ústí nad Labem', 'České Budějovice', 'Hradec Králové', 'Pardubice']
  },
  DK: {
    code: 'DK',
    name: 'Denmark',
    phoneCode: '+45',
    phoneFormat: '## ## ## ##',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Noah', 'Emma', 'William', 'Sofia', 'Lucas', 'Ida', 'Emil', 'Freja', 'Oliver', 'Clara', 'Victor', 'Ella', 'Mads', 'Alma', 'Magnus', 'Agnes', 'Elias', 'Luna', 'Alexander', 'Sara'],
      lastNames: ['Nielsen', 'Jensen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen', 'Larsen', 'Sørensen', 'Rasmussen', 'Jørgensen', 'Petersen', 'Madsen', 'Kristensen', 'Olsen', 'Thomsen', 'Poulsen', 'Johansen', 'Møller', 'Mortensen', 'Knudsen']
    },
    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Horsens', 'Vejle', 'Roskilde']
  },
  EE: {
    code: 'EE',
    name: 'Estonia',
    phoneCode: '+372',
    phoneFormat: '#### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Robin', 'Mia', 'Rasmus', 'Emma', 'Marten', 'Sandra', 'Kevin', 'Laura', 'Markus', 'Anna', 'Joonas', 'Kertu', 'Kristjan', 'Liisa', 'Andreas', 'Marta', 'Karl', 'Kadri', 'Oliver', 'Maria'],
      lastNames: ['Tamm', 'Sepp', 'Saar', 'Mägi', 'Kask', 'Kukk', 'Tavik', 'Rebane', 'Ilves', 'Põder', 'Koppel', 'Saks', 'Karu', 'Kangur', 'Kask', 'Kukk', 'Tavik', 'Rebane', 'Ilves', 'Põder']
    },
    cities: ['Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve', 'Viljandi', 'Rakvere', 'Maardu', 'Kuressaare', 'Sillamäe']
  },
  FI: {
    code: 'FI',
    name: 'Finland',
    phoneCode: '+358',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Eino', 'Aino', 'Väinö', 'Helmi', 'Matti', 'Sofia', 'Juhani', 'Maria', 'Kalevi', 'Emilia', 'Antti', 'Venla', 'Timo', 'Aurora', 'Mikko', 'Ella', 'Juha', 'Iida', 'Pekka', 'Lotta'],
      lastNames: ['Korhonen', 'Virtanen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen', 'Laine', 'Heikkinen', 'Koskinen', 'Järvinen', 'Lehtonen', 'Lehtinen', 'Saarinen', 'Salminen', 'Heinonen', 'Niemi', 'Heikkilä', 'Kinnunen', 'Salonen', 'Turunen']
    },
    cities: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti', 'Kuopio', 'Pori']
  },
  GR: {
    code: 'GR',
    name: 'Greece',
    phoneCode: '+30',
    phoneFormat: '### ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '### ##'
    },
    names: {
      firstNames: ['Giorgos', 'Maria', 'Kostas', 'Eleni', 'Dimitris', 'Sofia', 'Nikos', 'Anna', 'Panagiotis', 'Katerina', 'Vasilis', 'Georgia', 'Stavros', 'Dimitra', 'Michalis', 'Paraskevi', 'Yannis', 'Ioanna', 'Petros', 'Eva'],
      lastNames: ['Papadopoulos', 'Georgiou', 'Dimitriou', 'Papadakis', 'Nikolaou', 'Panagiotopoulos', 'Vasileiou', 'Antoniou', 'Papathanasiou', 'Konstantinou', 'Papastavrou', 'Papandreou', 'Papazoglou', 'Papakonstantinou', 'Papadimitriou', 'Papaspyrou', 'Papadakis', 'Papathanasiou', 'Papastavrou', 'Papandreou']
    },
    cities: ['Athens', 'Thessaloniki', 'Patras', 'Piraeus', 'Larissa', 'Heraklion', 'Peristeri', 'Kallithea', 'Acharnes', 'Kalamaria']
  },
  HU: {
    code: 'HU',
    name: 'Hungary',
    phoneCode: '+36',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Bence', 'Hanna', 'Máté', 'Anna', 'Levente', 'Zsófia', 'Dániel', 'Emma', 'Ádám', 'Lili', 'Tamás', 'Luca', 'Péter', 'Nóra', 'András', 'Eszter', 'Gergő', 'Réka', 'Balázs', 'Kata'],
      lastNames: ['Nagy', 'Kovács', 'Tóth', 'Szabó', 'Horváth', 'Varga', 'Kiss', 'Molnár', 'Németh', 'Balogh', 'Fekete', 'Papp', 'Takács', 'Juhász', 'Lakatos', 'Mészáros', 'Oláh', 'Simon', 'Rácz', 'Fekete']
    },
    cities: ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza', 'Kecskemét', 'Székesfehérvár', 'Szombathely']
  },
  IE: {
    code: 'IE',
    name: 'Ireland',
    phoneCode: '+353',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Eircode',
      zipFormat: 'A65 F4E2'
    },
    names: {
      firstNames: ['Jack', 'Emily', 'James', 'Sophie', 'Noah', 'Emma', 'Conor', 'Grace', 'Daniel', 'Lucy', 'Sean', 'Chloe', 'Adam', 'Mia', 'Harry', 'Saoirse', 'Charlie', 'Hannah', 'Oscar', 'Eva'],
      lastNames: ['Murphy', 'Kelly', 'O\'Sullivan', 'Walsh', 'O\'Connor', 'Byrne', 'Ryan', 'O\'Neill', 'McCarthy', 'O\'Brien', 'Flynn', 'Dunne', 'O\'Reilly', 'Brennan', 'Doyle', 'McLoughlin', 'Kennedy', 'Quinn', 'Moore', 'Reilly']
    },
    cities: ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Drogheda', 'Dundalk', 'Swords', 'Bray', 'Navan']
  },
  IT: {
    code: 'IT',
    name: 'Italy',
    phoneCode: '+39',
    phoneFormat: '### ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Province',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Lorenzo', 'Sofia', 'Alessandro', 'Giulia', 'Andrea', 'Aurora', 'Matteo', 'Giorgia', 'Gabriele', 'Alice', 'Leonardo', 'Vittoria', 'Riccardo', 'Emma', 'Tommaso', 'Greta', 'Davide', 'Chiara', 'Edoardo', 'Beatrice'],
      lastNames: ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti', 'Fontana']
    },
    cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania']
  },
  LV: {
    code: 'LV',
    name: 'Latvia',
    phoneCode: '+371',
    phoneFormat: '#### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: 'LV-####'
    },
    names: {
      firstNames: ['Jānis', 'Anna', 'Pēteris', 'Marta', 'Andris', 'Elīna', 'Kārlis', 'Līga', 'Māris', 'Dace', 'Rihards', 'Ieva', 'Kristaps', 'Sanita', 'Edgars', 'Zane', 'Roberts', 'Liene', 'Artis', 'Dana'],
      lastNames: ['Bērziņš', 'Kalniņš', 'Ozols', 'Krūmiņš', 'Liepiņš', 'Kļaviņš', 'Priede', 'Saulītis', 'Ozoliņš', 'Jansons', 'Riekstiņš', 'Kļaviņš', 'Priede', 'Saulītis', 'Ozoliņš', 'Jansons', 'Riekstiņš', 'Kļaviņš', 'Priede', 'Saulītis']
    },
    cities: ['Riga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala', 'Ventspils', 'Rēzekne', 'Valmiera', 'Jēkabpils', 'Ogre']
  },
  LT: {
    code: 'LT',
    name: 'Lithuania',
    phoneCode: '+370',
    phoneFormat: '### #####',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: 'LT-#####'
    },
    names: {
      firstNames: ['Lukas', 'Emilija', 'Matas', 'Gabija', 'Nojus', 'Ieva', 'Kajus', 'Sofija', 'Dominykas', 'Liepa', 'Adomas', 'Amelija', 'Rokas', 'Greta', 'Tomas', 'Miglė', 'Jonas', 'Ugnė', 'Karolis', 'Ema'],
      lastNames: ['Kazlauskas', 'Jankauskas', 'Petrauskas', 'Stankevičius', 'Vasiliauskas', 'Žukauskas', 'Butkus', 'Kavaliauskas', 'Ramanauskas', 'Urbonas', 'Navickas', 'Rimkus', 'Paulauskas', 'Mickevičius', 'Sinkevičius', 'Balčiūnas', 'Vaitkus', 'Ramanauskas', 'Urbonas', 'Navickas']
    },
    cities: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena']
  },
  LU: {
    code: 'LU',
    name: 'Luxembourg',
    phoneCode: '+352',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Canton',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Liam', 'Emma', 'Noah', 'Léa', 'Hugo', 'Chloé', 'Louis', 'Eva', 'Arthur', 'Mia', 'Jules', 'Sara', 'Victor', 'Nora', 'Felix', 'Clara', 'Adam', 'Alice', 'Lucas', 'Ella'],
      lastNames: ['Muller', 'Weber', 'Wagner', 'Schmit', 'Meyer', 'Thill', 'Klein', 'Hoffmann', 'Schmitz', 'Kremer', 'Hansen', 'Schneider', 'Faber', 'Berger', 'Koch', 'Stein', 'Schwartz', 'Roth', 'Werner', 'Schäfer']
    },
    cities: ['Luxembourg City', 'Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Pétange', 'Sanem', 'Hesperange', 'Bettembourg', 'Strassen', 'Bertrange']
  },
  MT: {
    code: 'MT',
    name: 'Malta',
    phoneCode: '+356',
    phoneFormat: '#### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'District',
      zipLabel: 'Postal Code',
      zipFormat: 'ABC 1234'
    },
    names: {
      firstNames: ['Luca', 'Emma', 'Jake', 'Mia', 'Ethan', 'Sofia', 'Noah', 'Leah', 'Aiden', 'Eva', 'Liam', 'Aria', 'Kai', 'Luna', 'Zach', 'Nora', 'Leo', 'Clara', 'Max', 'Ella'],
      lastNames: ['Borg', 'Camilleri', 'Vella', 'Farrugia', 'Zammit', 'Galea', 'Micallef', 'Grech', 'Attard', 'Spiteri', 'Said', 'Muscat', 'Mizzi', 'Bonnici', 'Cassar', 'Dingli', 'Fenech', 'Formosa', 'Gauci', 'Mallia']
    },
    cities: ['Valletta', 'Birkirkara', 'Mosta', 'Qormi', 'Żabbar', 'San Pawl il-Baħar', 'Sliema', 'Żebbuġ', 'Fgura', 'Żejtun']
  },
  NL: {
    code: 'NL',
    name: 'Netherlands',
    phoneCode: '+31',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Province',
      zipLabel: 'Postal Code',
      zipFormat: '#### AA'
    },
    names: {
      firstNames: ['Liam', 'Emma', 'Noah', 'Sophie', 'Lucas', 'Julia', 'Levi', 'Mila', 'Daan', 'Tess', 'Finn', 'Sara', 'Jesse', 'Anna', 'Milan', 'Eva', 'Luuk', 'Lisa', 'Bram', 'Fleur'],
      lastNames: ['de Jong', 'Jansen', 'de Vries', 'van de Berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos', 'Peters', 'Hendriks', 'van Leeuwen', 'Dekker', 'Brouwer']
    },
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nijmegen']
  },
  NO: {
    code: 'NO',
    name: 'Norway',
    phoneCode: '+47',
    phoneFormat: '### ## ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Lucas', 'Nora', 'Emil', 'Emma', 'Oliver', 'Sofia', 'Noah', 'Ella', 'William', 'Leah', 'Jakob', 'Aria', 'Filip', 'Mia', 'Elias', 'Sara', 'Alexander', 'Ida', 'Magnus', 'Amalie'],
      lastNames: ['Hansen', 'Johansen', 'Olsen', 'Larsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen', 'Jensen', 'Karlsen', 'Johnsen', 'Pettersen', 'Eriksen', 'Berg', 'Haugen', 'Hagen', 'Johannessen', 'Andreassen', 'Jacobsen', 'Dahl']
    },
    cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen', 'Fredrikstad', 'Kristiansand', 'Sandnes', 'Tromsø', 'Sarpsborg']
  },
  PT: {
    code: 'PT',
    name: 'Portugal',
    phoneCode: '+351',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'District',
      zipLabel: 'Postal Code',
      zipFormat: '####-###'
    },
    names: {
      firstNames: ['João', 'Maria', 'Tiago', 'Ana', 'Diogo', 'Sofia', 'Martim', 'Beatriz', 'Gonçalo', 'Matilde', 'Francisco', 'Carolina', 'Afonso', 'Leonor', 'Duarte', 'Mariana', 'Tomás', 'Alice', 'Gabriel', 'Inês'],
      lastNames: ['Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Jesus', 'Sousa', 'Fernandes', 'Lopes', 'Marques', 'Gomes', 'Ribeiro', 'Carvalho', 'Almeida', 'Pinto', 'Alves', 'Dias']
    },
    cities: ['Lisbon', 'Porto', 'Vila Nova de Gaia', 'Amadora', 'Braga', 'Funchal', 'Coimbra', 'Setúbal', 'Almada', 'Agualva-Cacém']
  },
  RO: {
    code: 'RO',
    name: 'Romania',
    phoneCode: '+40',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '######'
    },
    names: {
      firstNames: ['Andrei', 'Maria', 'Alexandru', 'Elena', 'Mihai', 'Ana', 'Ionut', 'Ioana', 'Stefan', 'Diana', 'Cristian', 'Andreea', 'Bogdan', 'Raluca', 'Adrian', 'Cristina', 'Florin', 'Gabriela', 'Razvan', 'Laura'],
      lastNames: ['Popa', 'Popescu', 'Pop', 'Ionescu', 'Nica', 'Dumitrescu', 'Stan', 'Stoica', 'Gheorghiu', 'Munteanu', 'Dobre', 'Dima', 'Stanciu', 'Diaconu', 'Stoian', 'Florea', 'Ene', 'Tudor', 'Dinu', 'Cristea']
    },
    cities: ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 'Galați', 'Ploiești', 'Brașov', 'Brăila']
  },
  SK: {
    code: 'SK',
    name: 'Slovakia',
    phoneCode: '+421',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '### ##'
    },
    names: {
      firstNames: ['Jakub', 'Sofia', 'Adam', 'Ema', 'Samuel', 'Nina', 'Matúš', 'Tereza', 'Tomáš', 'Viktória', 'Martin', 'Sára', 'Filip', 'Lucia', 'Michal', 'Eva', 'Peter', 'Mia', 'Jozef', 'Nora'],
      lastNames: ['Horváth', 'Kováč', 'Varga', 'Tóth', 'Nagy', 'Baláž', 'Szabó', 'Kováčová', 'Hudák', 'Molnár', 'Balog', 'Kováč', 'Varga', 'Tóth', 'Nagy', 'Baláž', 'Szabó', 'Kováčová', 'Hudák', 'Molnár']
    },
    cities: ['Bratislava', 'Košice', 'Prešov', 'Žilina', 'Nitra', 'Banská Bystrica', 'Trnava', 'Martin', 'Trenčín', 'Poprad']
  },
  SI: {
    code: 'SI',
    name: 'Slovenia',
    phoneCode: '+386',
    phoneFormat: '## ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Region',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Luka', 'Eva', 'Jaka', 'Sara', 'Jan', 'Ana', 'Nejc', 'Mia', 'Žan', 'Lara', 'Matic', 'Ema', 'Tine', 'Nina', 'Rok', 'Lea', 'Tilen', 'Tara', 'Miha', 'Iva'],
      lastNames: ['Novak', 'Horvat', 'Kovačič', 'Krajnc', 'Zupančič', 'Potočnik', 'Kovač', 'Mlakar', 'Kos', 'Vidmar', 'Golob', 'Turk', 'Kralj', 'Zajc', 'Korošec', 'Bizjak', 'Kotnik', 'Hočevar', 'Zupan', 'Jerman']
    },
    cities: ['Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Velenje', 'Koper', 'Novo Mesto', 'Ptuj', 'Trbovlje', 'Kamnik']
  },
  ES: {
    code: 'ES',
    name: 'Spain',
    phoneCode: '+34',
    phoneFormat: '### ### ###',
    addressFormat: {
      hasState: false,
      stateLabel: 'Province',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Antonio', 'María', 'Manuel', 'Carmen', 'José', 'Ana', 'Francisco', 'Isabel', 'David', 'Laura', 'Carlos', 'Cristina', 'Jesús', 'Elena', 'Alejandro', 'Sara', 'Miguel', 'Paula', 'Javier', 'Andrea'],
      lastNames: ['García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Martin', 'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Muñoz', 'Álvarez', 'Romero', 'Alonso', 'Gutiérrez']
    },
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao']
  },
  SE: {
    code: 'SE',
    name: 'Sweden',
    phoneCode: '+46',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'County',
      zipLabel: 'Postal Code',
      zipFormat: '### ##'
    },
    names: {
      firstNames: ['Lucas', 'Alice', 'William', 'Maja', 'Hugo', 'Ella', 'Elias', 'Alma', 'Alexander', 'Saga', 'Oscar', 'Nova', 'Viktor', 'Lilly', 'Leo', 'Ebba', 'Adrian', 'Saga', 'Gustav', 'Nora'],
      lastNames: ['Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Lindberg', 'Lindström', 'Lindgren', 'Berg', 'Bergström', 'Jakobsson', 'Bergman', 'Gustafsson', 'Jönsson', 'Hansson', 'Svensson', 'Pettersson', 'Gustafsson']
    },
    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping']
  },
  CH: {
    code: 'CH',
    name: 'Switzerland',
    phoneCode: '+41',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Canton',
      zipLabel: 'Postal Code',
      zipFormat: '####'
    },
    names: {
      firstNames: ['Liam', 'Emma', 'Noah', 'Mia', 'Luca', 'Sofia', 'Leon', 'Lea', 'Julian', 'Lina', 'David', 'Anna', 'Felix', 'Lara', 'Jonas', 'Eva', 'Simon', 'Clara', 'Maximilian', 'Nora'],
      lastNames: ['Müller', 'Meier', 'Schmid', 'Keller', 'Weber', 'Schneider', 'Huber', 'Meyer', 'Widmer', 'Frei', 'Fischer', 'Steiner', 'Brunner', 'Graf', 'Walser', 'Kaufmann', 'Berger', 'Zimmermann', 'Roth', 'Baumann']
    },
    cities: ['Zurich', 'Geneva', 'Basel', 'Bern', 'Lausanne', 'Winterthur', 'Lucerne', 'St. Gallen', 'Lugano', 'Biel']
  },
  UA: {
    code: 'UA',
    name: 'Ukraine',
    phoneCode: '+380',
    phoneFormat: '## ### ####',
    addressFormat: {
      hasState: false,
      stateLabel: 'Oblast',
      zipLabel: 'Postal Code',
      zipFormat: '#####'
    },
    names: {
      firstNames: ['Dmytro', 'Anna', 'Andriy', 'Maria', 'Oleksandr', 'Yulia', 'Vitaliy', 'Olena', 'Serhiy', 'Tetiana', 'Ivan', 'Natalia', 'Viktor', 'Iryna', 'Mykhailo', 'Svitlana', 'Volodymyr', 'Ludmyla', 'Bohdan', 'Halyna'],
      lastNames: ['Melnyk', 'Shevchenko', 'Bondarenko', 'Kovalenko', 'Boyko', 'Tkachenko', 'Kravchenko', 'Kovalchuk', 'Korniienko', 'Shevchuk', 'Polishchuk', 'Panchenko', 'Marchenko', 'Lysenko', 'Romanenko', 'Vasylenko', 'Kharchenko', 'Savchenko', 'Petrenko', 'Moroz']
    },
    cities: ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk', 'Zaporizhzhia', 'Lviv', 'Kryvyi Rih', 'Mykolaiv', 'Mariupol']
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