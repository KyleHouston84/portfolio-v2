const TECHNOLOGIES = [
  {
    key: "angular",
    type: "js",
    title: "Angular",
    logoURL: "/assets/images/icons/angular.png",
    description: "A TypeScript-based structural framework for dynamic web apps.",
    level: 91
  },
  {
    key: "react",
    type: "js",
    title: "React",
    logoURL: "/assets/images/icons/react.png",
    description: "A Javascript library for building user interfaces based on UI components.",
    level: 70
  },
  {
    key: "typescript",
    type: "js",
    title: "Typescript",
    logoURL: "/assets/images/icons/typescript.png",
    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    level: 85
  },
  {
    key: "node",
    type: "js",
    title: "Node",
    logoURL: "/assets/images/icons/nodejs.png",
    description: "Event-driven I/O server-side JavaScript environment based on V8.",
    level: 71
  },
  {
    key: "express",
    type: "js",
    title: "Express",
    logoURL: "/assets/images/icons/express.svg",
    description: "A back end web application framework for Node.js.",
    level: 71
  },
  {
    key: "mongo",
    type: "db",
    title: "MongoDB",
    logoURL: "/assets/images/icons/mongo.png",
    description: "A document-oriented NoSQL database used for high volume data storage.",
    level: 81
  },
  {
    key: "firebase",
    type: "db",
    title: "Firebase",
    logoURL: "/assets/images/icons/firebase.png",
    description: "Firebase is a development platform known originally for its realtime database that’s still at its core a multi-node, key-value database optimized for synchronizing data.",
    level: 88
  },
  {
    key: "mysql",
    type: "db",
    title: "MySQL",
    logoURL: "/assets/images/icons/mysql.png",
    description: "an open-source relational database management system.",
    level: 66
  },
  {
    key: "scss",
    type: "css",
    title: "Sass",
    logoURL: "/assets/images/icons/sass.png",
    description: "Syntactically Awesome Style Sheets is an extension of the syntax of CSS.",
    level: 98
  },
  {
    key: "materialize",
    type: "css",
    title: "Materialize",
    logoURL: "/assets/images/icons/materialize.png",
    description: "A modern responsive front-end framework based on Material Design.",
    level: 86
  },
  {
    key: "bootstrap",
    type: "css",
    title: "Bootstrap",
    logoURL: "/assets/images/icons/bootstrap.png",
    description: "The most popular framework for developing responsive, mobile first projects on the web.",
    level: 68
  },
  {
    key: "karma",
    type: "js",
    title: "Karma",
    logoURL: "/assets/images/icons/karma.png",
    description: "Spectacular Test Runner for JavaScript",
    level: 66
  },
  {
    key: "webpack",
    type: "js",
    title: "Webpack",
    logoURL: "/assets/images/icons/webpack.png",
    description: "Webpack is a module bundler",
    level: 70
  },
  {
    key: "vs",
    type: "other",
    title: "Visual Studio Code",
    logoURL: "/assets/images/icons/vscode.png",
    description: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
    level: 99
  },
  {
    key: "windows",
    type: "other",
    title: "Windows",
    logoURL: "/assets/images/icons/windows.png",
    description: "Windows is a personal computer operating system from Microsoft.",
    level: 99
  },
  {
    key: "asp.net",
    type: "other",
    title: "ASP.NET",
    logoURL: "/assets/images/icons/msnet.png",
    description: "ASP.NET is an open-source server-side web application.",
    level: 31
  },
  {
    key: "xd",
    type: "other",
    title: "Adobe XD",
    logoURL: "/assets/images/icons/xd.png",
    description: "Adobe XD is a fast & powerful UI/UX design solution for websites, apps & more.",
    level: 91
  },
  {
    key: "git",
    type: "other",
    title: "Git",
    logoURL: "/assets/images/icons/git.png",
    description: "A free and open source distributed version control system.",
    level: 91
  },
  {
    key: "photoshop",
    type: "other",
    title: "Photoshop",
    logoURL: "/assets/images/icons/ps.svg",
    description: "The world's best known imaging and photo editing software.",
    level: 87
  },
  {
    key: "mac",
    type: "other",
    title: "Mac",
    logoURL: "/assets/images/icons/mac.png",
    description: "macOS is the current series of Unix-based graphical operating systems developed by Apple Inc.",
    level: 90
  }
];

export default TECHNOLOGIES;

export interface Tech {
  key: string;
  type: string;
  title: string;
  logoURL: string;
  description: string;
  level: number;
}