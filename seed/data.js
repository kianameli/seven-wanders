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
      title: "The Berlin wall vs Pink Floyd",
      author: "Ian Flaherty",
      userId: user1,
      story:
        "Went to the Berlin Wall and saw the Pink Floyd Album painted on it.",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964196/BerlinWall_xxxtof.jpg",
    },
    {
      location: "Istanbul",
      country: "Turkey",
      continent: "Asia",
      title: "Istanbul architecture",
      author: "Kian Ameli",
      userId: user5,
      story: "The Blue Mosque!",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964321/Istanbul_oovlxu.jpg",
    },
    {
      location: "Jaipur",
      country: "India",
      continent: "Asia",
      title: "Beautiful building",
      author: "Joseph McElroy",
      userId: user6,
      story: "Hawa mahal in Jaipur India, the sites were so amazing!",
      imageURL:
        "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964436/Jaipur_kk9hep.jpg",
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
