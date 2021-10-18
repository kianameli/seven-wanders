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
        "Some people love Amsterdam for the debauchery, but for me, I love Amsterdam for its ingenious engineering solutions. One example is the quintessential Dutch windmill. The windmills were initially used to grind grain into flour, but eventually all kinds of industrial applications were added. For example, structural beauties pressed oil, made paint, and could even saw tree trunks! Thanks to this tool, cities such as Amsterdam became the first industrial centers in the Netherlands. The things you learn when you leave the coffee shop are pretty neat and I recommend venturing out as much as possible in a city as marvelous as this one.",
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
        "I thought my time spent in the German capital would have involved a lot more sightseeing. The truth is that I was fully consumed by the nightlife and didn't make it out to the museums much. That being said, it's a phenomenal place to visit regardless of your interests. My favorite nugget blend of history and culture was this painted portion of the East Side Gallery was this rendition of Pink Floyd's The Wall. Can someone say META!?",
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
      story: "Istanbul is a city that always reminds you of its long history. It is one of the most important geographic meeting places for exchanging eastern and wester ideas. This becomes very apparent in the city's archtiecture, just one of the many reasons why you should visit. Architectural gems like the Blue Mosque and the Hagia Sofia are definitely tourist traps worth your time and attention. They are conveniently located within walking distance of each other. My best advice is to venture out early in the morning to beat the crowds. This way, you can take your time admiring the transformation that these beautiful buildings have overgone throughout their ever-changing ownership.",
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
      title: "",
      author: "Ian Flaherty",
      userId: user1,
      story: "",
      imageURL:
        "",
    },
    {
      location: "",
      country: "",
      continent: "",
      title: "",
      author: "Joseph McElroy",
      userId: user6,
      story: "",
      imageURL:
        "",
    },
    {
      location: "",
      country: "",
      continent: "",
      title: "",
      author: "Sheeva Shabahang",
      userId: user4,
      story: "",
      imageURL:
        "",
    },
    {
      location: "",
      country: "",
      continent: "",
      title: "",
      author: "Kian Ameli",
      userId: user5,
      story: "",
      imageURL:
        "",
    },
    {
      location: "",
      country: "",
      continent: "",
      title: "",
      author: "Ian Flaherty",
      userId: user1,
      story: "",
      imageURL:
        "",
    },
    {
      location: "",
      country: "",
      continent: "",
      title: "",
      author: "Kian Ameli",
      userId: user5,
      story: "",
      imageURL:
        "",
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
