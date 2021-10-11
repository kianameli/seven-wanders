import User from "../models/user.js"
import db from '../db/connection.js'
import bcrypt from 'bcrypt'
import Story from '../models/story.js'

const insertData = async () => {
  await db.dropDatabase()

  const user1 = new User({
    username: 'Ian',
    email: 'ianflaherty@yahoo.com',
    password_digest: await bcrypt.hash('password',11)
  })
  await user1.save()

  const user2 = new User({
    username: 'asdf',
    email: 'asfegce',
    password_digest: await bcrypt.hash('password2',11)
  })
  await user2.save()

  const user3 = new User({
    username: 'asdgdhgf',
    email: 'asfegjfhklce',
    password_digest: await bcrypt.hash('password3',11)
  })
  await user3.save()
  
  const user4 = new User({
    username: 'Sheeva Shabahang',
    email: 'SS@yahoo.com',
    password_digest: await bcrypt.hash('password4',11)
  })
  await user4.save()

  const user5 = new User({
    username: 'Kian Ameli',
    email: 'KA@yahoo.com',
    password_digest: await bcrypt.hash('password5',11)
  })
  await user5.save()

  const user6 = new User({
    username: "Joseph Mcelroy",
    email: 'JM@yahoo.com',
    password_digest: await bcrypt.hash('password6', 11)
  })
  await user6.save()

  const stories = [
    {
      location: 'Amsterdam',
      country: 'Netherlands',
      continent: 'Europe',
      title: 'The origins of the windmill',
      author: 'Sheeva Shabahang',
      userID: '1',
      story: ' this one time i was in Amsterdam... There were so many pretty red lights on the streets and the water was crystal brown. ',
      imageURL: 'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964005/Amsterdam_vq1kht.jpg'
    },
    {
      location: 'Berlin',
      country: 'Germany',
      continent: 'Europe',
      title: 'The Berlin wall vs Pink Floyd',
      author: 'Ian Flaherty',
      userID: '2',
      story: 'Went to the Berlin Wall and saw the Pink Floyd Album painted on it.',
      imageURL:'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964196/BerlinWall_xxxtof.jpg'
    },
    {
      location: 'Istanbul',
      country: 'Turkey',
      continent: 'Asia',
      title: 'Istanbul architecture',
      author: 'Kian Ameli',
      userID: '3',
      story: 'The Blue Mosque!',
      imageURL: 'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964321/Istanbul_oovlxu.jpg'
    },
    {
      location: 'Jaipur',
      country: 'India',
      continent: 'Asia',
      title: 'Beautiful building',
      author: 'Joesph Mcelroy',
      userID: '4',
      story: 'Hawa mahal in Jaipur India, the sites were so amazing!',
      imageURL: 'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1633964436/Jaipur_kk9hep.jpg'
    },
  ]

  await Story.insertMany(stories)
  console.log('Created users & stories!')


  db.close()
}

insertData()

