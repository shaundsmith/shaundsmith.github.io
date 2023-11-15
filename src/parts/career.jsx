import Role from "../components/Role";
import RoleDescription from "../components/RoleDescription";

export default {
    type: "common-list",
    title: "Career",
    icon: "cubes",
    items: [
        {
            title: "BJSS | Programme for major UK healthcare provider",
            description: (<>
                <Role from={"2022"} to={"Present"}>Tech Lead</Role>
                <Role from={"2022"} to={"2022"}>Senior Software Engineer</Role>
                <RoleDescription description={""} tags={[
                    "Java", "Spring Boot", "JavaScript", "Azure", "SQL", "GraphQL", "Microservices", "Microfrontends"
                ]} items={[
                    <>Worked on 5 separate teams for a multi-billion pound major UK healthcare provider, including acting as tech lead for four of the teams. There was a lot of overlap between managing the teams, so <strong>time management</strong> was critical to success.</>,
                    <>Led a small team of 4 developers to deliver a batch reporting system for the client using <strong>Spring Boot</strong>, <strong>JPA</strong>, and <strong>GraphQL</strong> on the <strong>Azure</strong> platform. It was a business-critical piece of functionality for the client and we were able to deliver it in eight months, despite a previous consultancy company failing to deliver after two years’ worth of work.</>,
                    <>Led a small team of two developers to produce an asynchronous messaging solution using <strong>Azure event grids</strong>. The team was able to deliver and received an award for the quick and decisive solution.</>,
                    <>Led a team of 6 developers to produce core features in a <strong>microservice</strong> and <strong>microfrontend-based</strong> system using <strong>GraphQL</strong>, <strong>VueJS</strong>, and <strong>Spring Boot</strong>.</>
                ]}/>
                </>)
        },
        {
            title: "OCLC | Worldshare Circulation",
            description: (<>
                <Role from={"2021"} to={"2022"}>Senior Software Engineer</Role>
                <Role from={"2018"} to={"2021"}>Software Engineer</Role>
                <RoleDescription
                    description={<>
                        Part of a business-critical team developing a cloud-based circulation system for managing
                        library books for thousands of academic, federal, and research libraries across the globe.
                    </>}
                    tags={["Java", "Spring Boot", "JavaScript", "React", "MySQL", "REST", "DDD", "Hexagonal Architecture"]}
                    items={[
                        <>Designed and developed a new <strong>Spring Boot</strong> service which utilised patterns such
                            as <strong>REST</strong>, <strong>DDD</strong>, <strong>CQRS</strong>, and <strong>Hexagonal
                                Architecture</strong> to fulfil major contractual deadlines.</>,
                        <>Part of a small, cross-team squad to devise a solution for
                            integrating <strong>React</strong> into the existing
                            legacy YUI <strong>JavaScript</strong> framework and worked alongside one other developer to
                            implement the
                            solution. The solution enabled all Worldshare applications to use React without requiring
                            existing YUI-based code to be rewritten. The successful outcome of this project resulted in
                            the receipt of a company award.</>,
                        <>Spread knowledge of React throughout the team by giving presentations and utilising <strong>Paired
                            Programming</strong></>,
                        <>Participate in a weekly book club to discuss software development-based books.</>
                    ]}
                />
            </>)
        },
        {
            title: "OCLC | Worldshare ILL",
            description: (<>
                <Role from={"2017"} to={"2018"}>Software Engineer</Role>
                <Role from={"2016"} to={"2017"}>Associate Software Developer</Role>
                <RoleDescription
                    description={<>
                        Worked as part of an international team to deliver the Worldshare ILL premium product,
                        Tipasa.<br/>
                        Day-to-day tasks included designing, implementing, and testing new features, supporting the
                        product in production, and participating in the requirement refinement process.
                    </>}
                    tags={["Java", "JavaScript", "Spring", "JPA", "PostgreSQL", "Ansible", "BDD"]}
                    items={[
                        <>Quickly became the <strong>JavaScript</strong> SME on the team and acquired ownership of the
                            UI components.</>,
                        <>Drove the adoption of <strong>Jasmine</strong> to unit test the JavaScript code by developing
                            testing patterns, how-to guides, and best practice guides.</>,
                        <>Produced a <strong>Vagrant</strong> configuration for the legacy business service which
                            automated the creation of a local development and testing environment.
                            This reduced the setup for the development environment from hours of manual VM configuration
                            to a ten-minute automated script.</>,
                        <>Developed a strategy for slowly
                            integrating <strong>React</strong> and <strong>Redux</strong> into the legacy YUI JavaScript
                            framework and produced a working proof-of-concept.</>,
                        <>Became the owner of the <strong>Cucumber</strong>-based user acceptance tests and promoted
                            ways of improving our feature development using <strong>BDD</strong> and <strong>Specification
                                by Example</strong>.</>
                    ]}
                />
            </>),
        },
        {
            title: "CGI",
            authority: "Analyst Programmer",
            rightSide: 2015,
            description: (<>
                <RoleDescription
                    description={
                        [
                            "Worked as part of the project management office for the £15million MOSL project.",
                            "Provided on-site support to the business analysts, and organised project documents.",
                        ].join(" ")
                    }
                    items={[
                        <>Maintained and organised a vast CMDB of project documents for the £15m MOSL project.</>,
                        <>Developed VBA macros in Microsoft Excel to automate management of project documents.</>,
                    ]}
                />
            </>)
        },
        {
            title: "Genesys",
            authority: "Student Developer",
            rightSide: (<>2014 &ndash; 2015</>),
            description: (<>
                <RoleDescription
                    tags={["Ruby on Rails", "JavaScript", "JQuery", "PostgreSQL"]}
                    description={
                        [
                            "Developed a risk assessment management system for the University of Sheffield as part of a student development team. ",
                        ].join(" ")
                    }
                    items={[
                        <>Developed a risk assessment management system for The University of Sheffield using <strong>Ruby on Rails</strong>.</>,
                        <>Acted as lead developer for the team, providing support for other developers and producing detailed designs.</>,
                        <>Regularly met with stakeholders to discuss and capture system requirements.</>,
                        <>Used the agile practices and tools to such as Kanban and burn-down charts to manage the project.</>,
                    ]}
                />
            </>)
        },
    ]
};