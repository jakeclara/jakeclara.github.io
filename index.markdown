---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Jake Clara
---
# Jake Clara - ePortfolio
---
## Table of Contents
- [Professional Self-Assessment](#professional-self-assessment)
- [Original Artifact](#original-artifact)
- [Code Review Video](#code-review-video)
- [Enhanced Artifact](#enhanced-artifact)
  - [Software Engineering Enhancement](#software-engineering-enhancement)
  - [Algorithms & Data Structures Enhancement](#algorithms--data-structures-enhancement)
  - [Database Enhancement](#database-enhancement)
- [Contact / Footer](#contact--footer)

## Professional Self-Assessment
### My Journey  
I started the Computer Science program to become a software engineer. My previous career in hospitality operations was fulfilling, providing me with hands-on experience leading teams and managing operations. Through the program, I realized I want to build software that streamlines operations, removes obstacles, and automates repetitive tasks, allowing teammates to focus on the work they enjoy most. My capstone project reflects this goal by automating data processing for reporting, mirroring tasks I once performed manually as a General Manager.  

Now, I aim to work in full-stack and back-end development, focusing on internal tools that make operations more manageable and enjoyable for users. While my capstone is built with Python, I am also pursuing Java and front-end certifications to expand my toolkit for professional software development.

### My Philosophy & Skills
**Collaboration:**  
I enjoy working with people and have always valued cross-team collaboration to achieve goals. Through my CS program, I have gained a strong appreciation for the broader ecosystem supporting software development. I have come to realize that even a solo developer interacts with stakeholders, designers, and end users. Agile principles reinforced this concept, highlighting the importance of integrating feedback throughout the development process. I am passionate about contributing to a team and embracing opportunities to be part of something bigger than myself.

**Communication:**  
I have always enjoyed connecting with people. In my hospitality career, I took pride in sharing my team’s story and goals with others. Through the CS program, I honed this skill for technical projects, learning to explain assignments and projects to non-technical stakeholders. My robust communication abilities will be an immediate asset to the team.

**Algorithms & Data Structures:**  
In working with data structures and algorithms, I have learned that evaluating trade-offs is not just theoretical, as it directly affects implementation. A solution might offer performance benefits, but if it is too complex or time-consuming to implement, a simpler approach can often be more effective in practice.  

I have found that returning to foundational concepts can clarify a problem, refresh my understanding, and even lead to elegant solutions, all while keeping simplicity in mind. This mirrors my experience in hospitality, where I balanced ideal operational strategies with what could realistically be executed.

**Software Design & Engineering:**  
Throughout the program, I discovered that I am energized by building systems that are both functional and well-structured. I have a strong interest in software architecture and take pride in designing code that is modular, scalable, and maintainable. One key lesson I have embraced, both in software engineering and in real life, is the value of breaking complex problems into smaller, manageable pieces. This approach lets me focus on one piece at a time and make steady progress toward a complete, well-structured system.

**Databases:**  
Organization is key to my approach. I treat databases like I did mise-en-place as a Chef. Planning and arranging the pieces first makes building and managing the system smoother and more reliable. Thoughtful structure lets me plan how data will be stored, queried, and scaled so I can focus on solving problems efficiently. This has shown me that planning and building are distinct but equally vital parts of a successful project.

**Security:**  
I aim to be a junior developer who contributes strong security awareness from the start. I am committed to continually learning new methods to protect people and systems. Leading operations and teams in hospitality taught me to respond proactively, implement best practices, and monitor outcomes carefully. I bring a detail-oriented mindset, adaptability, and continuous improvement to every project, spotting potential risks and ensuring that security is a foundational part of the systems I develop.

### My Portfolio Work
My ePortfolio demonstrates a range of professional software engineering skills and reflects my growth in full-stack development, software architecture, database management, and security. It shows my ability to analyze existing systems, make thoughtful design decisions, and implement solutions that are scalable, maintainable, and deliver practical value.

I focus on building software that supports real-world operations, turning data into actionable insights while keeping usability and reliability in mind. This includes designing modular systems, organizing data effectively, and applying security best practices from the start.
The ePortfolio also highlights my ability to communicate clearly and collaborate with others. My background leading teams and managing operations shapes how I consider user and stakeholder needs, ensuring the tools I build are functional and user-friendly.

Together, these artifacts illustrate my approach to software development. I plan carefully, build effectively, and deliver systems that improve processes and support teams. They demonstrate my readiness as a junior developer and my commitment to continuous learning and professional growth.

## Original Artifact
**Description:**  
A single-page Dash app from CS-340 that visualized Austin Animal Center dog data for Grazioso Salvare. It served as the starting point for my full-stack enhancements.

**Screenshot:**  
![Original Dash App](screenshots/original-dashboard.png)

**Code Download:**  
[Download Original Artifact (ZIP)](downloads/original-artifact.zip)  

**Quick Reflection:**  
- Connected to a MongoDB collection using custom queries
- Lacked aggregation pipelines and optimized database-layer access, limiting efficiency for complex queries.
- Limited modularity: all callbacks, layouts, and database interactions in one file, making maintenance and extension difficult.
- Only a single collection was used; no multi-collection relationships, restricting realism and flexibility for complex queries.

## Code Review Video
[![Code Review Video](screenshots/code-review-video.png)](https://www.youtube.com/watch?v=Zx2sqcWFq6Y)

This video walks through the **original one-page Dash app**, explains its structure and functionality, and highlights the planned enhancements leading to the full-stack application.

## Enhanced Artifact
**Description:**  
The enhanced artifact is a full-stack Dash application for hospitality analytics that transforms operational and financial data into actionable insights through interactive dashboards.

**Screenshot:**  
![Enhanced Dashboard](screenshots/home-dashboard.png)

### Software Engineering Enhancement
**Focus:**  
- Refactored a nearly single-file Dash application into a modular, production-style architecture using packages and Dash Pages.
- Applied separation of concerns by introducing clear boundaries between data models, business logic, and views.
- Created reusable layout components and structured navigation, improving maintainability and UI consistency.
- Established a scalable foundation for future enhancements, including structured data access, documentation, and secure configuration practices.

<details>
<summary><strong>Click to read the full reflection narrative</strong></summary>

<h3>The Artifact</h3>
<p>The original artifact is my final project from CS-340 Client-Server Development, which was completed at the end of February. It is a Python-based Dash dashboard created for Grazioso Salvare, an international rescue-animal training company. The application retrieved data from the client’s MongoDB database using custom queries and visualized the Austin Animal Center Outcomes dataset to help identify dogs suitable for various search-and-rescue training scenarios.
</p>
<h3>Why I chose the Artifact</h3>
<p>I selected this artifact because it allows me to showcase my full-stack skills and the software engineering abilities I aim to utilize in my career. I enjoyed learning about and using Dash, and coming from a hospitality background, I would have loved having a tool like this when I worked as a General Manager. By enhancing this project, I can demonstrate building internal tools that support business operations, which is a professional role I am interested in.
</p>
<p>The project also highlights my interest and strength in organizing and structuring software. Taking a nearly single-file Dash app and redesigning it into a clean, modular, production-style architecture shows my ability to refactor codebases using best-practice patterns. For this enhancement category, I reorganized the project into packages following an MVC-style structure. I introduced Dash Pages for routing, created reusable layout components, and incorporated Dash Bootstrap Components to create a more responsive UI. I also implemented a clear separation of concerns between data models, business logic, and views by laying the foundation for MongoEngine models and a dedicated data service layer. These improvements highlight my ability to apply software engineering principles, design clean interfaces between parts of the system, and prepare the project for scalable growth.
</p>
<h3>Course Outcomes</h3>
<p>I met the course outcomes I planned for this enhancement. My work in the software engineering and architecture category demonstrates Course Outcome #3 by refactoring the nearly single-file app into a modular, maintainable project that follows best-practice architecture. Through my use of version control, iterative commits, inline comments, and clear documentation, I also demonstrated Course Outcomes #1 and #2. I laid the foundation for Course Outcomes #4 and #5 by introducing MongoEngine models, preparing a data service layer, and planning secure handling of database operations using environment variables.
I do not have updates to my outcome-coverage plans. The architectural foundation is now in place, and the remaining enhancement categories will build on this structure to fully demonstrate the outcomes as planned.
</p>
<h3>Reflection</h3>
<p>Enhancing this artifact taught me about applying separation of concerns in a practical way. One challenge I faced was determining how much structure the project truly needed. I wanted to follow best-practice architecture, while also avoiding unnecessary complexity for a project of this size. Learning to strike the right balance between clean organization and over-engineering, although an ongoing experience, has been an important part of the process.
</p>
<p>I also experienced moments of both excitement and feeling overwhelmed as I started redesigning the application. I addressed this by beginning with simple wireframes and focusing on the layout and user experience first. Starting with the views helped clarify what features were required and what the data and logic would need to support. This reaffirmed an important lesson from my studies. Clear visual planning often leads to clearer technical requirements. Overall, the enhancement strengthened my understanding of modular design and thoughtful architectural planning.
</p>
</details>




