import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    t18, 
    carpediem,
    ltp,
    dapp,
    dbms,
    stock,
    tcp,
    kumrao, 
    sunil, 
    vineeth,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Expert",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "T18 Innovations Pvt Ltd",
      icon: t18,
      iconBg: "#383E56",
      date: "August 2020 - November 2022",
      points: [
        "Using React Native, and EpressJs built a secure authentication module following industry-standard encryption techniques for a dynamic login and signup system, ensuring user credential safety",
        "Developed a real-time feedback system that reduced average response timeand increased user-initiated support interactions. Integrated the test module with the Maps API to facilitate immersive geography practice",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Employed AWS cloud infrastructure for hosting the app and established CI/CD pipelines to automate the deployment of the application to AWS environments within Docker containers.",
        "Uilized  MongoDB, a NoSQL database for effective data management"
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Carpediem Technology Systems Pvt Ltd",
      icon: carpediem,
      iconBg: "#E6DEDD",
      date: "May 2019 - Aug 2020",
      points: [
        "Developed Ultimate Binder Connector in Express JS and Node JS for client’s Printing workflow microservices.",
        "Designed and implemented REST APIs to handle FrontEnd-UB Server interactions, processing user JSON requests into XML requests. Translated UB Server’s XML responses into the required JSON format per third-party API specifications, ensuring precise adherence to documentation",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Prathap is highly attentive and sincere while possessing a positive approach to learning and academics.",
      name: "K Uma Maheshwar Rao ",
      designation: "Director",
      company: "NIT Rourkela",
      image: kumrao,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Prathap does.",
      name: "Sunil Tatipelly",
      designation: "Ex-CEO",
      company: "Carpediem",
      image: sunil,
    },
    {
      testimonial:
        "Prathap offers a unique combination of skills, work ethic, and a positive attitude, making him an invaluable asset on any team.",
      name: "Vineeth Avvaru",
      designation: "SDE",
      company: "Amazon",
      image: vineeth,
    },
  ];
  
  const projects = [
    {
      name: "Look The Part",
      description:
        "Led front-end interface development for an iOS app, enabling cross-platform compatibility with Android using ReactNative. Facilitated deployment on both Play Store and App Store through collaborative efforts",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "postman",
          color: "green-text-gradient",
        },
        {
          name: "android studio",
          color: "pink-text-gradient",
        },
      ],
      image: ltp,
      source_code_link: "https://apps.apple.com/us/app/look-the-part/id1508417933",
    },
    {
      name: "ChainFund Decentralized App ",
      description:
       "Created Chain Fund, a DApp based on Blockchain for cryptocurrency investments and NFT trading, harnessing Node.js for backend agility, Solidity for smart contracts, Truffle for deployment and testing, and Ganache for local simulation",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Web3",
          color: "green-text-gradient",
        },
        {
          name: "Infura",
          color: "pink-text-gradient",
        },
      ],
      image: dapp,
      source_code_link: "https://chain-fund-pn1d.vercel.app/",
    },
    {
      name: "Restaurant Database Management System",
      description:
        "Designed and implemented a restaurant DB system in MySQL using SQL for optimized operations, employee management, and data-driven decision-making. (BCNF & Indexing). Deployed a web app (Angular & MySQL) for seamless DB interaction on Apache web server.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
      ],
      image: dbms,
      source_code_link: "https://github.com/",
    },
    {
      name: "Stock Market Real Time Data Analysis",
      description:
        "Implemented a data pipeline to ingest 100k stock market events/second from Kafka to AWS S3 using Spark. Automated processing with Python, cleaned data in 95% cases, created catalog in AWS Glue with metadata entries.",
      tags: [
        {
          name: "Python & SQL",
          color: "blue-text-gradient",
        },
        {
          name: "kafka",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/",
    },
    {
      name: "Text Chat App with Reliable Data Transport",
      description:
        "mplemented a multi-client chat app demonstrating reliable data transfer protocols (ABT, GBN, SR) over TCP and UDP, simulating secure messaging like real-world chat apps.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "socket Programming",
          color: "pink-text-gradient",
        },
      ],
      image: tcp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
