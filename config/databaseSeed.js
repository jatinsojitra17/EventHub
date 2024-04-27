import dotenv from 'dotenv'; dotenv.config()
import './database.js';

import { User } from '../models/userModel.js';
import { Event } from '../models/eventModel.js';

/* Users
[
  {
    name: "Barry Dare",
    email: "barry.dare@gmail.com",
  },
  {
    name: "Greta Franecki",
    email: "greta.franecki@gmail.com",
  },
  {
    name: "Bertha Rath",
    email: "bertha.rath@gmail.com",
  },
  {
    name: "Tyreek DuBuque",
    email: "tyreek.dubuque@gmail.com",
  },
  {
    name: "Christophe Stanton",
    email: "christophe.stanton@gmail.com",
  },
  {
    name: "Hattie Graham",
    email: "hattie.graham@gmail.com",
  },
  {
    name: "Adrienne Reinger",
    email: "adrienne.reinger@gmail.com",
  },
  {
    name: "Sonia Watsica",
    email: "sonia.watsica@gmail.com",
  },
  {
    name: "Allan Jones",
    email: "allan.jones@gmail.com",
  },
  {
    name: "Reece Greenfelder",
    email: "reece.greenfelder@gmail.com",
  },
  {
    name: "Ricardo Stokes",
    email: "ricardo.stokes@gmail.com",
  },
  {
    name: "Kelsi Kub",
    email: "kelsi.kub@gmail.com",
  },
  {
    name: "Lydia Beier",
    email: "lydia.beier@gmail.com",
  },
  {
    name: "Javon Blanda",
    email: "javon.blanda@gmail.com",
  },
  {
    name: "Alfonso Daniel",
    email: "alfonso.daniel@gmail.com",
  },
]
*/

// Events
(async function() {
  const users = await User.find({});

  await Event.deleteMany({})
  const events = await Event.insertMany([
    // Barry Dare
    {
      title: 'Software Engineer Bootcamp Graduate Networking Event',
      date: new Date('2023-09-27T18:00:00'),
      location: 'New York, NY',
      description: "Come network with other fellow bootcamp graduates and prospective employers at our Bootcamp Graduate Networking Event!",
      createdBy: users[0]._id,
      attendees: [ users[1]._id, users[3]._id, users[5]._id, users[7]._id, users[9]._id, users[11]._id, users[13]._id ]
    },
    {
      title: 'Virtual Code & Chill',
      date: new Date('2023-11-13T20:00:00'),
      location: 'Remote',
      description: "The biggest and best event on the block for all technologists! Join our virtual Gather Town using the link gets emailed after RSVP. Create your character and hop into any of the activities available. Log on during the date shown and meet other technologists such as yourself!",
      createdBy: users[0]._id,
      attendees: [ users[14]._id, users[12]._id, users[10]._id, users[8]._id, users[6]._id ]
    },
    {
      title: 'Intro to JavaScript',
      date: new Date('2023-12-20T19:00:00'),
      location: 'New York, NY',
      description: "If you're new to programming and want to learn how to code JavaScript, feel free to join us for an Introduction to JavaScript where we'll go over some of the basics for beginners. Come learn, ask questions, and hangout before the New Year!",
      createdBy: users[0]._id,
      attendees: [ users[7]._id, users[2]._id, users[8]._id, users[1]._id ]
    },
    {
      title: 'Software Engineer Bootcamp Graduate Networking Event (v2)',
      date: new Date('2024-01-27T18:00:00'),
      location: 'New York, NY',
      description: "The last one was such a success, we just had to do it again. Come network with other fellow bootcamp graduates and prospective employers at our Bootcamp Graduate Networking Event!",
      createdBy: users[0]._id,
      attendees: [ users[2]._id, users[4]._id, users[6]._id, users[8]._id, users[10]._id, users[12]._id, users[14]._id ]
    },
    {
      title: 'Lessons from a Nike Software Engineer: How to get a Job as a Frontend Engineer',
      date: new Date('2024-02-23T16:00:00'),
      location: 'New York, NY',
      description: "Come join us for a talk with a Software Engineer from Nike where she'll go over her journey from being a coding bootcamp grad all the way to being a Frontend Engineer on one of Nike's engineering teams. Stick around afterwards for an AMA session where attendees can ask her anything they'd like.",
      createdBy: users[0]._id,
      attendees: [ users[14]._id, users[13]._id, users[12]._id, users[11]._id, users[10]._id, users[9]._id, users[8]._id, users[7]._id, users[6]._id, users[5]._id, users[4]._id, users[3]._id ]
    },
    // Greta Franecki
    {
      title: 'Cancer-Fighting + Immune-Boosting Foods: Plant-Based Nutrition and Cooking Class',
      date: new Date('2023-01-25T18:00:00'),
      location: 'Philadelphia, PA',
      description: "Our food choices can help reduce the risk of cancer and enhance survival. Diets rich in vegetables and fruits boost immunity and double the natural killer cell activity to destroy cancer cells. Hope you can join us.",
      createdBy: users[1]._id,
      attendees: [ users[0]._id, users[5]._id, users[10]._id ]
    },
    {
      title: "What's behind Italy's ingredients? with Viola Buitoni",
      date: new Date('2023-01-27T17:30:00'),
      location: 'Remote',
      description: "Come join us as Viola Buitoni shares the history and geography of Italy's most iconic ingredients, and gives tips on how we can incorporate their vibrant flavors and techniques into our kitchens. Presented Via ZOOM. Room link will be emailed after RSVP.",
      createdBy: users[1]._id,
      attendees: [ users[6]._id, users[7]._id, users[8]._id ]
    },
    {
      title: 'GIRLS DINE OUT! French Dinner in Upper East Side!',
      date: new Date('2023-09-26T20:00:00'),
      location: 'New York, NY',
      description: "Indulge in an enchanting evening of French cuisine, where every bite transports you to the romantic streets of Paris 🍷🗼 Savor exquisite dishes, share stories, and celebrate the joys of friendship over a bottle of fine wine 🍽️🥂 Whether you're a foodie, a Francophile, or simply looking for a memorable night out with your favorite ladies, this is your soirée 💃👑",
      createdBy: users[1]._id,
      attendees: [ users[2]._id, users[5]._id, users[6]._id, users[7]._id, users[11]._id, users[12]._id ]
    },
    {
      title: 'Halloween Soup Cooking Class',
      date: new Date('2023-10-28T16:00:00'),
      location: 'Philadelphia, PA',
      description: "Each cooking class will approximately last 60 minutes and LIMITED to 10 guests so please RESERVE your seat! During this class, we will cook together my special HALLOWEEN SOUP! Ideal for all including vegetarians and vegans. This healthy and earthy soup is packed with fall flavors: squash, pumpkin, cinnamon and much more... Spooky but delicious!",
      createdBy: users[1]._id,
      attendees: [ users[2]._id, users[5]._id, users[6]._id, users[7]._id, users[11]._id, users[12]._id, users[10]._id ]
    },
    {
      title: 'Christmas Themed Baking Class',
      date: new Date('2023-12-15T17:30:00'),
      location: 'Philadelphia, PA',
      description: "This class is becoming something of a tradition with us, a truly celebratory day of learning to bake all that is wonderful about Christmas.",
      createdBy: users[1]._id,
      attendees: [ users[14]._id, users[13]._id, users[12]._id, users[11]._id, users[10]._id, users[9]._id, users[8]._id, users[7]._id, users[6]._id, users[5]._id, users[4]._id, users[3]._id ]
    },
    // Bertha Rath
    {
      title: 'Learn to Meditate',
      date: new Date('2023-09-27T23:00:00'),
      location: 'Remote',
      description: "Explore and experience. By tuning into our hearts, we learn to be centered in our highest self. Feel the lightness and joy of your true nature. Heartfulness meditation is simply taking the time every day to tune into that internal presence. Please RSVP to receive the link to Join this event.",
      createdBy: users[2]._id,
      attendees: [ users[0]._id, users[1]._id, users[3]._id, users[4]._id ]
    },
    {
      title: 'Inspirational Meditation',
      date: new Date('2023-10-04T11:30:00'),
      location: 'Remote',
      description: "Awaken and uplift your mind with readings for your daily dose of inspiration, motivation, and fulfillment. Our Inspirational Meditation session starts with a discussion on words of wisdom from great poets, philosophers, writers, scriptures, sages, saints, scientists, and even songwriters. Please RSVP to receive the link to Join this event.",
      createdBy: users[2]._id,
      attendees: [ users[5]._id, users[6]._id, users[7]._id, users[8]._id ]
    },
    {
      title: 'Success Meditation',
      date: new Date('2023-10-11T16:00:00'),
      location: 'Remote',
      description: "Although success looks different for everyone, the tools for achieving it are the same. Why is it so hard for people to make positive, lasting changes in our lives? It's because we're trying to change the outer world, without changing our inner world. Our minds tend to repeat the same thoughts and behavior patterns of the past. When we refresh our minds and break free of those patterns, we find that we have the wisdom and ability to make the necessary changes to succeed. Please RSVP to receive the link to Join this event.",
      createdBy: users[2]._id,
      attendees: [ users[9]._id, users[10]._id, users[11]._id, users[12]._id ]
    },
    {
      title: 'Anxiety Relief Meditation',
      date: new Date('2023-10-18T19:00:00'),
      location: 'Remote',
      description: "Join our Anxiety Relief Meditation program where you'll find a welcoming and supportive group. We will show you how to find the roots of your anxiety with this amazingly effective meditation method. You can become permanently free of that cloud of anxiety and enjoy the things that might have held you back from enjoying life. Please RSVP to receive the link to Join this event.",
      createdBy: users[2]._id,
      attendees: [ users[13]._id, users[14]._id, users[1]._id, users[0]._id ]
    },
    {
      title: 'Personal Development Meditation',
      date: new Date('2023-10-25T20:00:00'),
      location: 'Remote',
      description: "Looking to develop yourself? The first step is to develop your mind. When your mind is cluttered, it is hard to function well. There may be unnecessary stress, anxiety, overthinking, and unhappiness. In this meditation, you will learn how to clear the clutter from your mind. When your mind is clean and clear, your energy, creativity and sociability greatly improve. You will have a more joyful and positive outlook and be much more effective in anything you do. Please RSVP to receive the link to Join this event.",
      createdBy: users[2]._id,
      attendees: [ users[14]._id, users[13]._id, users[10]._id, users[7]._id, users[3]._id ]
    },
    // Tyreek DuBuque
    {
      title: 'Wednesday Volleyball in Riverside Park',
      date: new Date('2023-10-04T17:45:00'),
      location: 'New York, NY',
      description: "This is a low key, just for fun volleyball meetup. All skill levels are welcome! We will meet in riverside park (NYC) weather permitting, at the 105th / 106th st volleyball courts. We will be playing on sand or asphalt courts based on availability and preference.",
      createdBy: users[3]._id,
      attendees: [ users[14]._id, users[13]._id, users[12]._id, users[11]._id, users[10]._id, users[9]._id, users[8]._id, users[7]._id, users[6]._id, users[5]._id ]
    },
    {
      title: 'Soccer 7V7 - Wednesday Night Pickup',
      date: new Date('2023-10-11T22:50:00'),
      location: 'Queens, NY',
      description: "The event is at Socceroof LIC. It is an indoor venue with state of the art turf. We allow indoor and turf shoes, no cleats for this meetup, the player safety is priority. 3 teams of seven rotating every 6 minutes regardless of the score (everyone gets to play!). Water break around the half hour mark if the players would like to take a break. Call your own fouls and respect each others calls.",
      createdBy: users[3]._id,
      attendees: [ users[14]._id, users[13]._id, users[12]._id, users[11]._id, users[10]._id, users[9]._id, users[8]._id, users[7]._id, users[6]._id, users[5]._id, users[4]._id, users[2]._id, users[1]._id ]
    },
    {
      title: 'Queens Tennis at Cunningham Park',
      date: new Date('2023-11-03T17:00:00'),
      location: 'Queens, NY',
      description: "Come early, stay late. Join for a match or practice. Please bring your tennis racquets & balls.",
      createdBy: users[3]._id,
      attendees: [ users[4]._id, users[8]._id, users[12]._id, users[1]._id ]
    },
    {
      title: 'INDOOR 5v5 BASKETBALL @ Financial District',
      date: new Date('2023-11-10T19:00:00'),
      location: 'New York, NY',
      description: "Come play indoor pickup basketball on Friday night! All are welcome! Just Play Basketball helps you play indoor pickup basketball whenever you want! Games are held on various courts all over New York City. Come ball with us and meet some new people. We are open to everyone!",
      createdBy: users[3]._id,
      attendees: [ users[0]._id, users[4]._id, users[8]._id, users[9]._id, users[10]._id, users[13]._id, users[14]._id, users[2]._id, users[6]._id, users[7]._id ]
    },
    {
      title: 'Saturday Morning Handball at Asser Levy Park',
      date: new Date('2023-11-18T09:00:00'),
      location: 'New York, NY',
      description: "Asser Levy is a nice tucked away location with four courts. Let's get some games in while the weather holds. Cancellation Notice: Handball Meetups are only cancelled if there is a drastic change of weather, lack of interest, or last minute emergencies. In the event there is a cancellation I will send out a notice roughly 3 hours before the event. Keep an eye on your emails around that time. Hope to see you guys there!",
      createdBy: users[3]._id,
      attendees: [ users[0]._id, users[7]._id, users[14]._id ]
    },
    // Christophe Stanton
    {
      title: 'September Book Club',
      date: new Date('2023-09-27T19:00:00'),
      location: 'New York, NY',
      description: "A lot of brands like to sound progressive by saying, \“Not your Father's XYZ\”. Not always a winning strategy but this is actually exactly what your own father would want if he were in a book club. Not all of us want to turn into our dad, but they do tend to be sensible beings. All to say, this book club is an elaborate excuse to hang out and meet new people while you can tell your friends and loved ones you're now a part of a serious book club. All are invited but please don't bring a book to be ironic. We will turn you away in shame.",
      createdBy: users[4]._id,
      attendees: [ users[0]._id, users[1]._id, users[2]._id, users[3]._id, users[5]._id, users[6]._id, users[7]._id, users[8]._id, users[9]._id, users[10]._id, users[11]._id, users[12]._id, users[13]._id, users[14]._id ]
    },
    {
      title: 'October Book Club',
      date: new Date('2023-10-25T19:00:00'),
      location: 'Queens, NY',
      description: "Join us for our monthly book club at Judy Z's which, of course, is not a real book club and you will be turned away if you actually bring a book. But at least you can tell people you have a very serious book club to attend and it may help make up for what you did the weekend prior, or maybe even encourage you to join an actual book club. Sounds boring but it's your life.",
      createdBy: users[4]._id,
      attendees: [ users[0]._id, users[1]._id, users[2]._id, users[3]._id, users[5]._id, users[6]._id, users[7]._id, users[8]._id, users[9]._id, users[10]._id, users[11]._id, users[12]._id, users[13]._id, users[14]._id ]
    },
    {
      title: 'New Friends Happy Hour!',
      date: new Date('2023-11-07T18:30:00'),
      location: 'Hoboken, NJ',
      description: "Join us for happy hour if you're looking to meet new people and make new friends! Message me to join our groupchat for access to the official guest list and location!",
      createdBy: users[4]._id,
      attendees: [ users[0]._id, users[1]._id, users[2]._id, users[3]._id, users[5]._id, users[6]._id, users[7]._id ]
    },
    {
      title: 'November Book Club',
      date: new Date('2023-11-25T19:00:00'),
      location: 'Brooklyn, NY',
      description: "It's everybody's favorite time of the month. The time of the month where we attend the not-a-book-club book club. The perfect excuse for us to have drinks and have fun. As always, please don't bring a book.",
      createdBy: users[4]._id,
      attendees: [ users[0]._id, users[1]._id, users[2]._id, users[3]._id, users[5]._id, users[6]._id, users[7]._id, users[8]._id, users[9]._id, users[10]._id, users[11]._id, users[12]._id, users[13]._id, users[14]._id ]
    },
    {
      title: 'Online New Friends Happy Hour',
      date: new Date('2023-12-05T17:30:00'),
      location: 'Remote',
      description: "Join us for happy hour if you're looking to meet new people and make new friends! You will be messaged with the Zoom information after you RSVP.",
      createdBy: users[4]._id,
      attendees: [ users[8]._id, users[9]._id, users[10]._id, users[11]._id, users[12]._id, users[13]._id, users[14]._id ]
    }
  ]);

  console.log(events)
  
  process.exit()
})()