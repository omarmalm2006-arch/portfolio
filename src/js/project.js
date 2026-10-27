
const projects = [
  {
    id: 1,
    name: "Music Explorer",
    image: "/src/assets/img/music.png",
    description:
      "A music discovery web app with search, playlists and a clean modern interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://omarmalm2006-arch.github.io/Music-Explorer/",
    github: "https://github.com/omarmalm2006-arch/Music-Explorer",
  },
  {
    id: 2,
    name: "Mood Adjustment",
    image: "src/assets/img/mood-adjustment.png",
    description:
      "A web project designed to provide an interactive user experience.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    demo: "https://omarmalm2006-arch.github.io/Mood-adjustment/",
    github: "https://github.com/omarmalm2006-arch/Mood-adjustment",
  },
  
{
  id: 3,
  name: "Imposter",
  image: "src/assets/img/imposter.png",
  description:
    "Built an interactive multiplayer party game while practicing DOM manipulation, event handling, arrays and objects, game logic, and dynamic UI updates using JavaScript. Also improved my skills in responsive design and organizing code into reusable functions.",
  technologies: ["HTML", "CSS", "JavaScript"],
  demo: "https://imposter-ecru-psi.vercel.app/",
  github: "https://github.com/omarmalm2006-arch/imposter",
},

];

// Get the container
const projectsContainer = document.getElementById("projects-container");

// Render all projects
function displayProjects() {
  projectsContainer.innerHTML = projects
    .map((project) => {
      const technologies = project.technologies
        .map(
          (tech) => `
            <span class="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
              ${tech}
            </span>
          `
        )
        .join("");

      return `
        <article class="grid grid-cols-1 gap-5 rounded-xl border border-slate-700 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/50 hover:shadow-lg hover:shadow-orange-300/10 sm:grid-cols-2">

          <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
             class="block overflow-hidden rounded-lg">
            <img
              src="${project.image}"
              alt="${project.name} preview"
              loading="lazy"
              class="h-48 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105 sm:h-full"
            >
          </a>

          <div class="flex flex-col items-start">
            <h3 class="text-xl font-bold text-white">
              ${project.name}
            </h3>

            <div class="mt-3 flex flex-wrap gap-2">
              ${technologies}
            </div>

            <p class="mt-4 text-sm leading-6 text-slate-400">
              ${project.description}
            </p>

            <div class="mt-auto flex flex-wrap gap-3 pt-5">
              <a
                href="${project.demo}"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg bg-orange-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-orange-300"
              >
                Live Demo ↗
              </a>

              <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-orange-300"
              >
                GitHub ↗
              </a>
            </div>
          </div>

        </article>
      `;
    })
    .join("");
}

// Display projects on page load
displayProjects();
