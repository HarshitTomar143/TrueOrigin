// Team member data shared between team page and dynamic member pages
export interface TeamMember {
    id: number;
    memberId: string;
    name: string;
    role: string;
    branch: string;
    year: string;
    field: string;
    image: string;
    discImage: string;
    description: string;
    skills: string[];
    experience: string;
    linkedin: string;
    github: string | null;
    email: string;
    location: string;
    education: string;
    achievements: string[];
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        memberId: "harshit-singh-tomar",
        name: "Harshit Singh Tomar",
        role: "Full stack developer",
        branch: "Information Technology",
        year: "2028",
        field: "Web Development & Software Engineering",
        image: "/harshit.jpg",
        discImage: "/musicLogo1.png",
        description: "Experienced full-stack developer with expertise in React, Node.js, and Next js. Led the development of TrueOrigin's core app system.",
        skills: ["React", "Node.js", "Next-js", "Python"],
        experience: "5+ years",
        linkedin: "https://www.linkedin.com/in/harshit-tomar-5b4889308/",
        github: "https://github.com/HarshitTomar143",
        email: "tomarharshit2024@gmail.com",
        location: "Gwalior, India",
        education: "B.Tech in Information Technology",
        achievements: [
            "Led development of TrueOrigin's core application",
            "Expertise in modern web technologies",
            
        ]
    },
    {
        id: 2,
        memberId: "ikshank-shukla",
        name: "Ikshank Shukla",
        role: "Front-end Developer",
        branch: "Information Technology",
        year: "2028",
        field: "UI/UX Design & Frontend Development",
        image: "/ikshank.jpg",
        discImage: "/musicLogo2.png",
        description: "Creative designer passionate about user experience and visual storytelling. Designed the intuitive interface for TrueOrigin's product verification system.",
        skills: ["UI/UX Design", "React", "Node js", "User Research"],
        experience: "4+ years",
        linkedin: "https://www.linkedin.com/in/ikshant-shukla-097771327/",
        github: "https://github.com/ikshank-shukla",
        email: "ikshank.shukla@example.com",
        location: "Chattarpur, India",
        education: "B.Tech in Information Technology",
        achievements: [
            "Designed TrueOrigin's product verification interface",
            "Specialized in user experience design",
           
        ]
    },
    {
        id: 3,
        memberId: "somya-mishra",
        name: "Somya Mishra",
        role: "AI/ML Developer",
        branch: "Computer Science & Artificial Intelligence",
        year: "2028",
        field: "Artificial Intelligence & Machine Learning",
        image: "/somya.jpg",
        discImage: "/musicLogo3.png",
        description: "Expertise in AI and ML, with good knowledge in Deep learning. Built the robust scanner and chatbot for TrueOrigin.",
        skills: ["Python", "Deep learning", "Data Science", "Tensorflow"],
        experience: "6+ years",
        linkedin: "https://www.linkedin.com/in/somya-mishra-9b8a17328/",
        github: "https://github.com/somya-mishra",
        email: "somya.mishra@example.com",
        location: "Prayagraj, India",
        education: "B.Tech in Computer Science",
        achievements: [
            "Built TrueOrigin's AI-powered scanner system",
            "Developed intelligent chatbot solutions",
            
        ]
    },
    {
        id: 4,
        memberId: "abhinav-malik",
        name: "Abhinav Malik",
        role: "AR/VR Developer",
        branch: "Electronics and Communication",
        year: "2028",
        field: "Augmented Reality & Virtual Reality",
        image: "/abhinav.jpg",
        discImage: "/musicLogo4.png",
        description: "AR/VR with expertise in 3D world tech, good knowledge in generating the 3D models of the projects. Contributed in developing the 3-D model of products for True Origin",
        skills: ["Unity", "Python", "3D Modeling", "AR/VR Development"],
        experience: "3+ years",
        linkedin: "https://www.linkedin.com/in/abhinav-devo/",
        github: null, // Optional GitHub link
        email: "abhinav.malik@example.com",
        location: "Shamli, India",
        education: "B.Tech in Computer Science",
        achievements: [
            "Developed 3D models for TrueOrigin products",
            "Expertise in Unity and AR/VR technologies",
      
        ]
    }
];

// Helper function to get team member by memberId
export function getTeamMember(memberId: string): TeamMember | undefined {
    return teamMembers.find(member => member.memberId === memberId);
} 