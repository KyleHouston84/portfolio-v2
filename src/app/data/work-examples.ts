const WORKS = [
  {
    key: "unison",
    title: "Unison",
    screen: "/assets/images/screens/unison.png",
    description: "Unison is an enterprise, large scale, single page application that gives it's users tools to clean, merge/match, and profile their data. Users can either from upload flat files or connect to external database to process their data.",
    technologies: [
      {
        name: "Angular",
        icon: "/assets/images/icons/react.png"
      },
      {
        name: "NodeJS",
        icon: "/assets/images/icons/nodejs.png"
      },
      {
        name: "MongoDB",
        icon: "/assets/images/icons/mongo.png"
      },
      {
        name: "Typescript",
        icon: "/assets/images/icons/typescript.png"
      },
      {
        name: "Sass",
        icon: "/assets/images/icons/sass.png"
      },
    ]
  },
  {
    key: "supportDesk",
    title: "Support Desk App",
    screen: "/assets/images/screens/support-desk.png",
    description: "Support Desk is a React single page application support ticket application for a IT support team. Allows users to create and login to accounts, make support tickets and send messages to the IT staff. <br /> <br />Staff can login and modify the ticket, add notes, and close the ticket.",
    url : "https://houstonwebdev-supportdesk-app.herokuapp.com/",
    repo: "https://github.com/KyleHouston84/support-desk",
    technologies: [
      {
        name: "React",
        icon: "/assets/images/icons/react.png"
      },
      {
        name: "NodeJS",
        icon: "/assets/images/icons/nodejs.png"
      },
      {
        name: "express",
        icon: "/assets/images/icons/express.svg"
      },
      {
        name: "MongoDB",
        icon: "/assets/images/icons/mongo.png"
      },
      {
        name: "Redux Toolkit",
        icon: "/assets/images/icons/redux.png"
      },

    ]
  },
  {
    key: "houseMarketplace",
    title: "House Marketplace",
    screen: "/assets/images/screens/marketplace.png",
    description: "A React single page application that interfaces with Firebase to enable registered users to post homes for rent or sale.",
    url : "https://house-marketplace-roan.vercel.app/",
    repo: "https://github.com/KyleHouston84/house-marketplace",
    technologies: [
      {
        name: "React",
        icon: "/assets/images/icons/react.png"
      },
      {
        name: "Firebase",
        icon: "/assets/images/icons/firebase.png"
      },
      {
        name: "Google OAuth",
        icon: "/assets/images/icons/google.svg"
      },
    ]
  },
  {
    key: "githubFinder",
    title: "Github Finder",
    screen: "/assets/images/screens/github-finder.png",
    description: "A React single page application that uses the github API to search for github accounts.",
    url : "https://github-finder-app-six.vercel.app/",
    repo: "https://github.com/KyleHouston84/github-finder",
    technologies: [
      {
        name: "React",
        icon: "/assets/images/icons/react.png"
      },
      {
        name: "GitHub API",
        icon: "/assets/images/icons/github.png"
      },
    ]
  },
  {
    key: "charles",
    title: "Charles F. Dodge City Center",
    screen: "/assets/images/screens/pembroke.png",
    description: "A city center for Pembroke Pines, Florida. This site is built on Saffire's SPARK CMS using ASP.net, Angular, JQuery, and SASS.",
    url : "https://www.charlesfdodgecitycenter.com/",
    technologies: [
      {
        name: "SASS",
        icon: "/assets/images/icons/sass.png"
      },
      {
        name: "Saffire SPARK CMS",
        icon: "/assets/images/icons/spark.png"
      },
      {
        name: "YouTube API",
        icon: "/assets/images/icons/youtube.png"
      },
      {
        name: "Angular",
        icon: "/assets/images/icons/angular.png"
      },
    ]
  },
  {
    key: "skout",
    title: "SKOUT Backcountry",
    screen: "/assets/images/screens/skout.png",
    description: "Ecom site for a local organic trail foods company. Built using Nodejs, MongoDB, Angular, SASS, bootstrap and integration Moltin API for cart, checkout, and inventory management.",
    url : "http://skout-store.herokuapp.com",
    technologies: [
      {
        name: "Angular",
        icon: "/assets/images/icons/angular.png"
      },
      {
        name: "MongoDB",
        icon: "/assets/images/icons/mongo.png"
      },
      {
        name: "express",
        icon: "/assets/images/icons/express.svg"
      },
      {
        name: "Node.js",
        icon: "/assets/images/icons/nodejs.png"
      },
      {
        name: "SASS",
        icon: "/assets/images/icons/sass.png"
      },
      {
        name: "gulp",
        icon: "/assets/images/icons/gulp.webp"
      }
    ]
  },
  {
    key: "canby",
    title: "Canby Rodeo",
    screen: "/assets/images/screens/canby.png",
    description: "The Clackamas Country Fair and Rodeo is a week-long event held at the Clackamas County Fairgrounds in the city of Canby in Clackamas County, Oregon.",
    url : "https://www.canbyrodeo.com/",
    technologies: [
      {
        name: "Angular",
        icon: "/assets/images/icons/angular.png"
      },
      {
        name: "SASS",
        icon: "/assets/images/icons/sass.png"
      },
      {
        name: "Saffire SPARK CMS",
        icon: "/assets/images/icons/spark.png"
      },
      {
        name: "JQuery",
        icon: "/assets/images/icons/jquery.png"
      }
    ]
  },
  {
    key: "pendletonRoundUp",
    title: "Pendleton Round Up",
    screen: "/assets/images/screens/pendleton.png",
    description: "The Pendleton Round-Up is a major annual rodeo in the northwestern United States, at Pendleton in northeastern Oregon, built on Saffire's SPARK CMS.",
    url : "https://www.pendletonroundup.com/",
    technologies: [
      {
        name: "Angular",
        icon: "/assets/images/icons/angular.png"
      },
      {
        name: "SASS",
        icon: "/assets/images/icons/sass.png"
      },
      {
        name: "Saffire SPARK CMS",
        icon: "/assets/images/icons/spark.png"
      },
      {
        name: "Google Maps API",
        icon: "/assets/images/icons/google-maps.png"
      },
      {
        name: "JQuery",
        icon: "/assets/images/icons/jquery.png"
      }
    ]
  }
];

export default WORKS;

export interface Work {
  key: string;
  title: string;
  screen: string;
  description: string;
  url?: string;
  repo?: string;
  technologies: TechUsed[]
};

interface TechUsed {
  name: string;
  icon: string;
};