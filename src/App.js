import './App.css';
import ReactCV from "react-cv";
import profile from "./parts/profile";
import education from "./parts/education";
import career from "./parts/career";
import projects from "./parts/projects";
import skills from "./parts/skills";

function App() {
    return (
        <ReactCV
            personalData={{
                name: "Shaun Smith",
                image: "/shaun-256.png",
                title: "Tech Lead & Senior Software Engineer",
                contacts: [
                    {type: "email", value: "shaundsmith3@gmail.com"},
                    {type: "location", value: " Mansfield, UK"},
                    {type: "website", value: "https://shaundsmith.dev/"},
                    {type: "github", value: "https://github.com/shaundsmith/"},
                ]
            }}
            sections={[
                profile,
                education,
                career,
                skills,
                // projects,
            ]}
            branding={false}
        />
    );
}

export default App;
