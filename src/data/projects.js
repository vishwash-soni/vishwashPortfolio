// ---------------------------------------------------------------
// Projects data. Add a new object to this array to add a new
// project card to the Projects section — no other file needs to change.
// ---------------------------------------------------------------
const projects = [
  {
    id: 1,
    title: "ReachAI",
    description:
      "An AI-powered cold email generator that helps job seekers create personalized, high-converting outreach emails in seconds using Gemini AI.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "Tailwind CSS", "Supabase", "Gemini AI"],
    githubUrl: "https://github.com/your-username/reachai", // TODO
    liveUrl: "https://your-reachai-demo.netlify.app", // TODO
  },
  {
    id: 2,
    title: "Contact Manager App",
    description:
      "A full-featured contact management application with real-time data sync, search, and CRUD operations powered by Firebase Firestore.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "Firebase Firestore", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/contact-manager", // TODO
    liveUrl: "https://your-contact-manager-demo.netlify.app", // TODO
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A dynamic personal portfolio that pulls project and content data live from a Google Sheet, making updates instant without redeploying.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "Google Sheets API", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/portfolio", // TODO
    liveUrl: "https://your-portfolio-demo.netlify.app", // TODO
  },
];

export default projects;
