import User from "../models/user.js";
import db from "../db/connection.js";
import bcrypt from "bcrypt";
import Story from "../models/story.js";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "Ian Flaherty",
    email: "ianflaherty@yahoo.com",
    password_digest: await bcrypt.hash("password", 11),
    stories: [],
  });
  await user1.save();

  const user2 = new User({
    username: "asdf",
    email: "asfegce",
    password_digest: await bcrypt.hash("password2", 11),
    stories: [],
  });
  await user2.save();

  const user3 = new User({
    username: "asdgdhgf",
    email: "asfegjfhklce",
    password_digest: await bcrypt.hash("password3", 11),
    stories: [],
  });
  await user3.save();

  const user4 = new User({
    username: "Sheeva Shabahang",
    email: "SS@yahoo.com",
    password_digest: await bcrypt.hash("password4", 11),
    stories: [],
  });
  await user4.save();

  const user5 = new User({
    username: "Kian Ameli",
    email: "KA@yahoo.com",
    password_digest: await bcrypt.hash("password5", 11),
    stories: [],
  });
  await user5.save();

  const user6 = new User({
    username: "Joseph McElroy",
    email: "JM@yahoo.com",
    password_digest: await bcrypt.hash("password6", 11),
    stories: [],
  });
  await user6.save();

  const stories = [
    {
      location: "Amsterdam",
      country: "Netherlands",
      continent: "Europe",
      title: "The Origins of the Dutch Windmill",
      author: "Sheeva Shabahang",
      userId: user4,
      story:
        "Some people love Amsterdam for the debauchery, but for me, I love Amsterdam for its ingenious engineering solutions. One example is the quintessential Dutch windmill. The windmills were initially used to grind grain into flour, but eventually all kinds of industrial applications were added. For example, structural beauties pressed oil, made paint, and could even saw tree trunks! Thanks to this tool, cities such as Amsterdam became the first industrial centers in the Netherlands. The things you learn when you leave the coffee shop are pretty neat and I recommend venturing out as much as possible in a city as marvelous as this one. From Wikipedia: A windmill is a structure that converts wind power into rotational energy by means of vanes called sails or blades, specifically to mill grain, but the term is also extended to windpumps, wind turnbines and other applications. The term wind engine is sometimes used to describe such devices. Windmills were used throughout the high medieval and early modern periods; the horizontal or panemone windmill first appeared in Greater Iran during the 9th century, the vertical windmill in northwestern Europe in the 12th century. Regarded as an icon of Dutch culture, there are approximately 1,000 windmills in the Netherlands today.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634517886/Amsterdam_m0ea93.jpg",
    },
    {
      location: "Berlin",
      country: "Germany",
      continent: "Europe",
      title: "The Berlin Wall vs Pink Floyd",
      author: "Ian Flaherty",
      userId: user1,
      story:
        "I thought my time spent in the German capital would have involved a lot more sightseeing. The truth is that I was fully consumed by the nightlife and didn't make it out to the museums much. That being said, it's a phenomenal place to visit regardless of your interests. My favorite nugget blend of history and culture was this painted portion of the East Side Gallery was this rendition of Pink Floyd's The Wall. Can someone say META!? From Wikipedia: The Berlin Wall was a guarded concrete barrier that physically and ideologically divided Berlin from 1961 to 1989. Construction of the wall was commenced by the German Democratic Republic (GDR, East Germany) on 13 August 1961. The Wall cut off West Berlin from surrounding East Germany, including East Berlin. The barrier included guard towers placed along large concrete walls, accompanied by a wide area (later known as the 'death strip') that contained anti-vehicle trenches, beds of nails and other defenses. The Eastern Bloc portrayed the Wall as protecting its population from fascist elements conspiring to prevent the 'will of the people' from building a socialist state in East Germany.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634518248/BerlinWall_lacbmb.jpg",
    },
    {
      location: "Istanbul",
      country: "Turkey",
      continent: "Asia",
      title: "East Meets West",
      author: "Kian Ameli",
      userId: user5,
      story: "Istanbul is a city that always reminds you of its long history. It is one of the most important geographic meeting places for exchanging eastern and wester ideas. This becomes very apparent in the city's archtiecture, just one of the many reasons why you should visit. Architectural gems like the Blue Mosque and the Hagia Sofia are definitely tourist traps worth your time and attention. They are conveniently located within walking distance of each other. My best advice is to venture out early in the morning to beat the crowds. This way, you can take your time admiring the transformation that these beautiful buildings have overgone throughout their ever-changing ownership. From Wikipedia: Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb, a madrasah and a hospice. Hand-painted blue tiles adorn the mosque’s interior walls, and at night the mosque is bathed in blue as lights frame the mosque’s five main domes, six minarets and eight secondary domes. It sits next to the Hagia Sophia, the principal mosque of Istanbul until the Blue Mosque's construction and another popular tourist site. The Blue Mosque was included in the UNESCO World Heritage Site list in 1985 under the name of 'Historic Areas of Istanbul'.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634518606/Istanbul_pifquw.jpg",
    },
    {
      location: "Jaipur",
      country: "India",
      continent: "Asia",
      title: "The Red City's Hawa Mahal",
      author: "Joseph McElroy",
      userId: user6,
      story: "Hawa Mahal means roughly translates to the 'palace of wind'. Built from red and pink sandstone, the palace sits on the edge of Jaipur's City Palace. The structure was built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Maharaja Sawai Jai Singh, who was the founder of Jaipur. Its five floor exterior is akin to honeycomb with its 953 small windows called Jharokhas decorated with intricate latticework. The original intent of the lattice design was to allow royal ladies to observe everyday life and festivals celebrated in the street below without being seen, since they had to obey the strict rules of 'purdah' which forbade them from appearing in public without face coverings. This architectural feature also allowed cool air from the Venturi effect to pass through, thus making the whole area more pleasant during the high temperatures in summer. Because of its beauty, many people see the Hawa Mahal from the street view and think it is the front of the palace, but in reality what they are experiencing is the backside of the palace.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964436/Jaipur_kk9hep.jpg",
    },
    {
      location: "Yosemite",
      country: "USA",
      continent: "North America",
      title: "Climbing, Camp 4, and Calls of the Wild",
      author: "Ian Flaherty",
      userId: user1,
      story: "From Wikipedia - Yosemite National Park is located in the central Sierra Nevada of California. Three wilderness areas are adjacent to Yosemite: the Ansel Adams Wilderness to the southeast, the Hoover Wilderness to the northeast, and the Emigrant Wilderness to the north. The 1,189 sq mi (3,080 km2) park is roughly the size of the U.S. state of Rhode Island and contains thousands of lakes and ponds, 1,600 miles (2,600 km) of streams, 800 miles (1,300 km) of hiking trails, and 350 miles (560 km) of roads. Two federally designated Wild and Scenic Rivers, the Merced and the Tuolumne, begin within Yosemite's borders and flow westward through the Sierra foothills, into the Central Valley of California. On average, about 4 million people visit the park each year, with most visitor use concentrated in the seven-square-mile (18 km2) area of Yosemite Valley.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634527375/Yosemite_knsq3i.jpg",
    },
    {
      location: "San Francisco",
      country: "USA",
      continent: "North America",
      title: "The Bay",
      author: "Joseph McElroy",
      userId: user6,
      story: "Wikipedia: San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city in the United States, and the fourth most populous in California, with 873,965 residents as of 2020. It covers an area of about 46.9 square miles (121 square kilometers), mostly at the north end of the San Francisco Peninsula in the San Francisco Bay Area, making it the second most densely populated large U.S. city, and the fifth most densely populated U.S. county, behind only four of the five New York City boroughs. San Francisco is the 12th-largest metropolitan statistical area in the United States with 4.7 million residents, and the fourth-largest by economic output, with a GDP of $592 billion in 2019. With San Jose, California, it forms the San Jose–San Francisco–Oakland, CA Combined Statistical Area, the fifth most populous combined statistical area in the United States, with 9.6 million residents as of 2019. Colloquial nicknames for San Francisco include SF, San Fran, The City, and Frisco. In 2019, San Francisco was the county with the seventh-highest income in the United States, with a per capita income of $139,405. In the same year, San Francisco proper had a GDP of $203.5 billion, and a GDP per capita of $230,829. The San Jose–San Francisco–Oakland, CA Combined Statistical Area, with a GDP of $1.09 trillion as of 2019, is the country's third-largest economy. Of the 105 primary statistical areas in the U.S. with over 500,000 residents, this CSA had the highest GDP per capita in 2019, at $112,348. San Francisco was ranked 12th in the world and second in the United States on the Global Financial Centres Index as of March 2021. San Francisco was founded on June 29, 1776, when colonists from Spain established the Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, both named for Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time. San Francisco became a consolidated city-county in 1856. San Francisco's status as the West Coast's largest city peaked between 1870 and 1900, when around 25% of California's population resided in the city proper. After three-quarters of the city was destroyed by the 1906 earthquake and fire, San Francisco was quickly rebuilt, hosting the Panama-Pacific International Exposition nine years later. In World War II, San Francisco was a major port of embarkation for service members shipping out to the Pacific Theater. It then became the birthplace of the United Nations in 1945. After the war, the confluence of returning servicemen, significant immigration, liberalizing attitudes, along with the rise of the 'beatnik' and 'hippie' countercultures, the Sexual Revolution, the Peace Movement growing from opposition to United States involvement in the Vietnam War, and other factors led to the Summer of Love and the gay rights movement, cementing San Francisco as a center of liberal activism in the United States. Politically, the city votes strongly along liberal Democratic Party lines. A popular tourist destination, San Francisco is known for its cool summers, fog, steep rolling hills, eclectic mix of architecture, and landmarks, including the Golden Gate Bridge, cable cars, the former Alcatraz Federal Penitentiary, Fisherman's Wharf, and its Chinatown district. San Francisco is also the headquarters of companies such as Wells Fargo, Twitter, Square, Airbnb, Levi Strauss & Co., Gap Inc., Salesforce, Dropbox, Pacific Gas and Electric Company, Uber, and Lyft. The city, and the surrounding Bay Area, is a global center of the sciences and arts and is home to a number of educational and cultural institutions, such as the University of California, San Francisco (UCSF), the University of San Francisco (USF), San Francisco State University (SFSU), the de Young Museum, the San Francisco Museum of Modern Art, the SFJAZZ Center, the San Francisco Symphony and the California Academy of Sciences.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634527474/SanFran_ippviy.jpg",
    },
    {
      location: "Cusco",
      country: "Peru",
      continent: "South America",
      title: "Taking a Hike",
      author: "Sheeva Shabahang",
      userId: user4,
      story: "Wikipedia: Cusco, often spelled Cuzco, is a city in southeastern Peru near the Urubamba Valley of the Andes mountain range. It is the capital of the Cusco Region and of the Cusco Province. The city is the seventh most populous in Peru and, in 2017, had a population of 428,450. Its elevation is around 3,400 m (11,200 ft). The city was the capital of the Inca Empire from the 13th century until the 16th-century Spanish conquest. In 1983, Cusco was declared a World Heritage Site by UNESCO with the title 'City of Cuzco'. It has become a major tourist destination, hosting nearly 2 million visitors a year. The Constitution of Peru (1993) designates it as the Historical Capital of Peru.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634527858/CuscoPeru_d7d9dr.jpg",
    },
    {
      location: "Persepolis",
      country: "Iran",
      continent: "Asia",
      title: "An Ancient Palace",
      author: "Kian Ameli",
      userId: user5,
      story: "Wikipedia: Persepolis was the ceremonial capital of the Achaemenid Empire (c. 550–330 BC). It is situated in the plains of Marvdasht, encircled by southern Zagros mountains of Iran. Modern day Shiraz is situated 60 kilometres (37 mi) southwest of the ruins of Persepolis. The earliest remains of Persepolis date back to 515 BC. It exemplifies the Achaemenid style of architecture. UNESCO declared the ruins of Persepolis a World Heritage Site in 1979. The complex is raised high on a walled platform, with five 'palaces' or halls of varying size, and grand entrances. The function of Persepolis remains quite unclear. It was not one of the largest cities in Persia, let alone the rest of the empire, but appears to have been a grand ceremonial complex that was only occupied seasonally; it is still not entirely clear where the king's private quarters actually were. Until recent challenges, most archaeologists held that it was especially used for celebrating Nowruz, the Persian New Year, held at the spring equinox, and still an important annual festivity in modern Iran. The Iranian nobility and the tributary parts of the empire came to present gifts to the king, as represented in the stairway reliefs. It is also unclear what permanent structures there were outside the palace complex; it may be better to think of Persepolis as just that complex rather than a 'city' in the normal sense. The complex was taken by the army of Alexander the Great in 330 BC, and soon after the wooden parts were completely destroyed by fire, very likely deliberately.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634528149/Persepolis_ytinbd.jpg",
    },
    {
      location: "Isle of Skye",
      country: "Scotland",
      continent: "Europe",
      title: "Rain Showers and Sheep",
      author: "Ian Flaherty",
      userId: user1,
      story: "From Wikipedia: The Isle of Skye, or simply Skye, is the largest and northernmost of the major islands in the Inner Hebrides of Scotland. The island's peninsulas radiate from a mountainous hub dominated by the Cuillin, the rocky slopes of which provide some of the most dramatic mountain scenery in the country. Although it has been suggested that Sgitheanach describes a winged shape there is no definitive agreement as to the name's origins. The island has been occupied since the Mesolithic period, and its history includes a time of Pictish, Celtic and Norse rule and a long period of domination by Clan MacLeod and Clan Donald. The island was considered to be under Norwegian suzerainty until the 1266 Treaty of Perth which transferred control over to Scotland. The 18th-century Jacobite risings led to the breaking up of the clan system and later clearances that replaced entire communities with sheep farms, some of which involved forced emigrations to distant lands. Resident numbers declined from over 20,000 in the early 19th century to just under 9,000 by the closing decade of the 20th century. Skye's population increased by 4 per cent between 1991 and 2001. About a third of the residents were Gaelic speakers in 2001, and although their numbers are in decline, this aspect of island culture remains important. The main industries are tourism, agriculture, fishing and forestry. Skye is part of the Highland Council local government area. The island's largest settlement is Portree, which is also its capital, known for its picturesque harbour. There are links to various nearby islands by ferry and, since 1995, to the mainland by a road bridge. The climate is mild, wet and windy. The abundant wildlife includes the golden eagle, red deer and Atlantic salmon. The local flora are dominated by heather moor, and there are nationally important invertebrate populations on the surrounding sea bed. Skye has provided the locations for various novels and feature films and is celebrated in poetry and song.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634528404/IsleOfSkye_weflo7.jpg",
    },
  ];

  await Story.insertMany(stories);
  console.log("Created users & stories!");

  const user1stories = await Story.find({ userId: user1 });
  user1.stories = user1stories;
  await user1.save();
  const user4stories = await Story.find({ userId: user4 });
  user4.stories = user4stories;
  await user4.save();
  const user5stories = await Story.find({ userId: user5 });
  user5.stories = user5stories;
  await user5.save();
  const user6stories = await Story.find({ userId: user6 });
  user6.stories = user6stories;
  await user6.save();

  db.close();
};

insertData();
