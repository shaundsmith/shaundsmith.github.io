import React from "react";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

export default {
    type: "text",
    title: "Technical Skills",
    icon: faCogs,
    content: (<>
        <span><strong>Languages:</strong> Java, JavaScript, SQL, HTML/CSS, Bash</span><br />
        <span><strong>Frameworks:</strong> Spring/Spring Boot, Hibernate, React, YUI, Cucumber, JUnit</span><br />
        <span><strong>Tools:</strong> Azure, Maven, Git, Ansible, Vagrant, Jira, Continuous Integration</span><br />
        <span><strong>Patterns and Processes:</strong> BDD, TDD, DDD, Hexagonal Architecture, Kanban, IntelliJ</span>
    </>)
}