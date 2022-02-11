const TECHNOLOGIES = [
  {
    "key": "angular",
    "type": "js",
    "title": "Angular",
    "logoURL": "/assets/images/tech/angular.png",
    "text1": "A TypeScript-based structural framework for dynamic web apps.",
    "level": 91
  },
  {
    "key": "node",
    "type": "js",
    "title": "Node",
    "logoURL": "/assets/images/tech/nodejs.png",
    "text1": "Event-driven I/O server-side JavaScript environment based on V8.",
    "level": 71
  },
  {
    "key": "react",
    "type": "js",
    "title": "React",
    "logoURL": "/assets/images/tech/react.png",
    "text1": "A Javascript library for building user interfaces based on UI components.",
    "level": 70
  },
  {
    "key": "typescript",
    "type": "js",
    "title": "Typescript",
    "logoURL": "/assets/images/tech/typescript.png",
    "text1": "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    "level": 85
  },
  {
    "key": "scss",
    "type": "css",
    "title": "Sass",
    "logoURL": "/assets/images/tech/sass.png",
    "text1": "Syntactically Awesome Style Sheets is an extension of the syntax of CSS.",
    "level": 98
  },
  {
    "key": "materialize",
    "type": "css",
    "title": "Materialize",
    "logoURL": "/assets/images/tech/materialize.png",
    "text1": "A modern responsive front-end framework based on Material Design.",
    "level": 86
  },
  {
    "key": "bootstrap",
    "type": "css",
    "title": "Bootstrap",
    "logoURL": "/assets/images/tech/bootstrap.png",
    "text1": "The most popular framework for developing responsive, mobile first projects on the web.",
    "level": 68
  },
  {
    "key": "karma",
    "type": "js",
    "title": "Karma",
    "logoURL": "/assets/images/tech/karma.png",
    "text1": "Spectacular Test Runner for JavaScript",
    "level": 66
  },
  {
    "key": "webpack",
    "type": "js",
    "title": "Webpack",
    "logoURL": "/assets/images/tech/webpack.png",
    "text1": "Webpack is a module bundler",
    "level": 70
  },
  {
    "key": "vs",
    "type": "other",
    "title": "Visual Studio Code",
    "logoURL": "/assets/images/tech/vscode.png",
    "text1": "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
    "level": 99
  },
  {
    "key": "windows",
    "type": "other",
    "title": "Windows",
    "logoURL": "/assets/images/tech/windows.png",
    "text1": "Windows is a personal computer operating system from Microsoft.",
    "level": 99
  },
  {
    "key": "asp.net",
    "type": "other",
    "title": "ASP.NET",
    "logoURL": "/assets/images/tech/msnet.png",
    "text1": "ASP.NET is an open-source server-side web application.",
    "level": 31
  },
  {
    "key": "xd",
    "type": "other",
    "title": "Adobe XD",
    "logoURL": "/assets/images/tech/xd.png",
    "text1": "Adobe XD is a fast & powerful UI/UX design solution for websites, apps & more.",
    "level": 91
  },
  {
    "key": "git",
    "type": "other",
    "title": "Git",
    "logoURL": "/assets/images/tech/git.png",
    "text1": "A free and open source distributed version control system.",
    "level": 91
  },
  {
    "key": "photoshop",
    "type": "other",
    "title": "Photoshop",
    "logoURL": "/assets/images/tech/ps.svg",
    "text1": "The world's best known imaging and photo editing software.",
    "level": 87
  },
  {
    "key": "mac",
    "type": "other",
    "title": "Mac",
    "logoURL": "/assets/images/tech/mac.png",
    "text1": "macOS is the current series of Unix-based graphical operating systems developed by Apple Inc.",
    "level": 90
  }
];

export default TECHNOLOGIES;

export interface Tech {
  key: string;
  type: string;
  title: string;
  logoURL: string;
  text1: string;
  level: number;
}