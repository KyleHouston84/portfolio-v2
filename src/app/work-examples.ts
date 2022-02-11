const WORKS = [
  {
    key: "unison",
    title: "Unison",
    screen: "/assets/images/screens/unison.png",
    description: "An enterprise single page application that gives it's users tools to clean, merge/match, and profile their data either from uploaded files or via connection to external databases.",
    technologies: [
      {
        name: "Angular",
        icon: "/images/icons/react.png"
      },
      {
        name: "NodeJS",
        icon: "/images/icons/nodejs.png"
      },
      {
        name: "MongoDB",
        icon: "/images/icons/mongo.png"
      },
      {
        name: "Typescript",
        icon: "/images/icons/typescript.png"
      },
      {
        name: "Sass",
        icon: "/images/icons/sass.png"
      },
    ]
  },
  {
    key: "supportDesk",
    title: "Support Desk",
    screen: "/assets/images/screens/support-desk.png",
    description: "A React single page application support ticket application for a IT support team. Allows users to create and login to accounts, make support tickets and send messages to the IT staff. /n Staff can login and modify the ticket, add notes, and close the ticket.",
    url : "https://houstonwebdev-supportdesk-app.herokuapp.com/",
    repo: "https://github.com/KyleHouston84/support-desk",
    technologies: [
      {
        name: "React",
        icon: "/images/icons/react.png"
      },
      {
        name: "NodeJS",
        icon: "/images/icons/nodejs.png"
      },
      {
        name: "MongoDB",
        icon: "/images/icons/mongo.png"
      },
      {
        name: "Redux Toolkit",
        icon: "/images/icons/redux.png"
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
        icon: "/images/icons/react.png"
      },
      {
        name: "Google OAuth",
        icon: "/images/icons/google.svg"
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
        icon: "/images/icons/react.png"
      },
      {
        name: "GitHub API",
        icon: "/images/icons/github.png"
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
        icon: "/images/icons/sass.png"
      },
      {
        name: "Saffire SPARK CMS",
        icon: "/images/icons/spark.png"
      },
      {
        name: "YouTube API",
        icon: "/images/icons/youtube.png"
      },
      {
        name: "Angular",
        icon: "/images/icons/angular.png"
      },
    ]
  },
  {
    key: "skout",
    title: "SKOUT Backcountry",
    screen: "/assets/images/screens/skout.png",
    description: "Ecom site for a local organic trail foods company. Built using nodejs, MongoDB, Angular, SASS, bootstrap and integration Moltin API for inventory management.",
    url : "http://skout-store.herokuapp.com",
    technologies: [
      {
        name: "Angular",
        icon: "/images/icons/angular.png"
      },
      {
        name: "MongoDB",
        icon: "/images/icons/mongo.png"
      },
      {
        name: "express",
        icon: "/images/icons/express.png"
      },
      {
        name: "Node.js",
        icon: "/images/icons/node.png"
      },
      {
        name: "SASS",
        icon: "/images/icons/sass.png"
      },
      {
        name: "gulp",
        icon: "/images/icons/gulp.png"
      }
    ]
  },
  {
    key: "canby",
    title: "Canby Rodeo",
    screen: "/assets/images/screens/canby.png",
    description: "An fair and event center website built on Saffire's SPARK CMS using ASP.net, Angular, JQuery, and SASS.",
    url : "https://www.canbyrodeo.com/",
    technologies: [
      {
        name: "SASS",
        icon: "/images/icons/sass.png"
      },
      {
        name: "Saffire SPARK CMS",
        icon: "/images/icons/spark.png"
      },
      {
        name: "JQuery",
        icon: "/images/icons/jquery.png"
      },
      {
        name: "Angular",
        icon: "/images/icons/angular.png"
      }
    ]
  },
  {
    key: "pendletonRoundUp",
    title: "Pendleton Round Up",
    screen: "/assets/images/screens/pendleton.png",
    description: "An event center in Kent WA, built on Saffire's SPARK CMS using ASP.net, Angular, JQuery, and SASS.",
    url : "pendleton.png",
    technologies: [
      {
        name: "SASS",
        icon: "/images/icons/sass.png"
      },
      {
        name: "bourbon",
        icon: "/images/icons/bourbon.png"
      },
      {
        name: "Saffire SPARK CMS",
        icon: "/images/icons/spark.png"
      },
      {
        name: "Google Maps API",
        icon: "/images/icons/google-maps.png"
      },
      {
        name: "JQuery",
        icon: "/images/icons/jquery.png"
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