export const navItems = [
  { name: "</Home>", link: "#" },
  { name: "</About>", link: "#about" },
  { name: "</Projects>", link: "#projects" },
  { name: "</Testimonials>", link: "#testimonials" },
  { name: "</Contact>", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    title: "Riders Point",
    des: "Riders Point is a platform for group travel designed to facilitate communication and shared experiences among bike riders. I utilized ReactJS for the frontend, Spring Boot for the backend, and MySQL for the database. The application enables users to plan, share, and join group rides. It includes functionalities such as route planning, ride sharing via phone numbers, and user profiles. Key features involve route setting, ride sharing, user communication, and profile management through unique login credentials",
    link: "https://riderspoint.vercel.app/",
    thumbnail: "/riderspoint.jpg",
    iconLists: [
      "/re.svg",
      "/java.svg",
      "/springboot.svg",

      "/tail.svg",
      "/js.svg",
    ],
  },
  {
    title: "EduTechForge-LMS System",
    des: "EduTechForge is an innovative Learning Management System (LMS) built using modern technology. It's designed to make learning personalized for students and easy for instructors to manage their courses. With features like course ratings and wishlists, EduTechForge makes learning enjoyable. It's reliable and scalable, thanks to its secure technology and cloud-based infrastructure. As a leader in educational technology, EduTechForge is always improving, with plans to add fun features like gamification and personalized learning paths.",
    link: "https://github.com/manthanmk66/EduTechForge",
    thumbnail: "/edutechforge.jpg",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/tail.svg",
      "/js.svg",
      "/nodejs.svg",

      "/mongodb.svg",
    ],
  },
  {
    title: " NextAuth ",
    des: "NextAuth is a Next.js web app with MongoDB integration, featuring advanced authentication functionalities. Users can register, log in, and enjoy features like email verification, password recovery, and route protection. Leveraging Appwrite for backend services, NextAuth ensures seamless integration with email delivery and more. Deployed on Vercel for scalability and reliability, NextAuth offers a streamlined authentication experience for modern web applications.",
    link: "https://github.com/manthanmk66/NextAuth",
    thumbnail: "/nextauth.png",
    iconLists: ["/nextjs.svg", "/tail.svg", "/mongodb.svg"],
  },
  {
    title: " SnippetSnap ",
    des: "SnippetSnap is a powerful web app that makes it easy to transform your code into stunning, shareable images. Experience the magic and create beautiful visuals from your code snippets with ease.",
    link: "https://snippet-snap.vercel.app/",
    thumbnail: "/snippetsnap.png",
    iconLists: ["/re.svg", "/tail.svg", "shadcnui.png"],
  },

  {
    title: " TemporalInsightHub",
    des: "Developed a dynamic web application merging MongoDB, React, and the power of Chart.js for compelling data visualization. Users can explore sample data with timestamps, gaining insights into trends. Concurrently, the integration of real-time weather APIs enriches the experience. Robust error handling ensures smooth navigation, while a handy sample generation simulator aids in testing. Leveraging MongoDB for storage, React for frontend, and Node.js Express.js for backend, alongside Chart.js for mesmerizing data presentation, the app offers a seamless user journey. Tailwind CSS adds finesse to the interface, while Vercel and Render streamline deployment. With these features, users engage effectively with data, enhancing comprehension and engagement.",
    link: "https://machine-wise-hosting.vercel.app/",
    thumbnail: "/machinewise.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/chartjs.svg"],
  },
  {
    title: "UserNex",
    des: "UserNex enhances security in user management. With OTP-based login and email verification, authentication is robust. Users can manage profiles securely, ensuring a safe and efficient experience",
    link: "https://github.com/manthanmk66/UserNex",
    thumbnail: "/usernex.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/mongodb.svg"],
  },
  {
    title: "ChatApp",
    des: " ChatApp is a minimalist web application built with React.js, Socket.io, and Tailwind CSS. It facilitates real-time communication among users with features like instant messaging. Enjoy a seamless chatting experience with responsive design and customizable options.",
    link: "https://manthan-chatapp.netlify.app/",
    thumbnail: "/chatapp.png",
    iconLists: ["/re.svg", "/tail.svg", "/socket.svg"],
  },

  {
    title: "Password Generator- Chrome Extention ",
    des: "This project is a simple random password generator tool and also made it for the Chrome Extention that allows users to generate strong and secure passwords based on their preferences. It provides various options to customize the generated passwords, such as length and character types.",
    link: "https://manthanrandompasswordgenerator.netlify.app/",
    thumbnail: "/password.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
  },
  {
    title: "MotiveMe- Chrome Extention ",
    des: "MotivateMe is a Chrome extension that displays a countdown of your increasing age directly in your browser. Stay aware of the passage of time and let it motivate you to make the most of every moment.",
    link: "https://github.com/manthanmk66/MotivateMe-Chrome-Extention",
    thumbnail: "/motiveme.png",
    iconLists: ["/re.svg", "/tail.svg"],
  },
  {
    title: "Discord Clone",
    des: "The Discord Clone App is a web application designed to replicate the User Interface and animations of the Discord platform using HTML and Tailwind CSS. With its sleek design and user-friendly interface, this project aims to provide users with a familiar and enjoyable experience similar to that of the original Discord application..",
    link: "https://manthandiscordclone.netlify.app/",
    thumbnail: "/discord.png",
    iconLists: ["/html.svg", "/tail.svg"],
  },
  {
    title: "Weather App ",
    des: "The Weather App project is a simple web application allowing users to access real-time weather information for any city globally. It's built using HTML, CSS, and JavaScript, utilizing a free weather API for data retrieval. Users can search for a city and instantly view current temperature, humidity, wind speed, and cloudiness. The app also automatically displays weather details for the user's local city if no specific city is entered. With its user-friendly interface, this project offers a seamless experience for obtaining weather updates.",
    link: "https://manthanweatherapp.netlify.app/",
    thumbnail: "/weather.png",
    iconLists: ["/html.svg", "/tail.svg"],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
