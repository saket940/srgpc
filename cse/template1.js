import main from "./template.js";
import {top_up} from "./template.js";
import {left} from "./template.js";
import {right} from "./template.js";
main()
let ag = "https://via.placeholder.com/150"; // Example image URL
top_up(ag, "Computer Science", "A diverse field focused on programming, algorithms, and system design, essential for creating and managing software and technology.", 1);
right(ag, "Computer Lab", "State-of-the-art facilities equipped with modern hardware and software to support coding, research, and technical skills development.", 1);
left(ag, "Internat Canaction", "Seamless internet connectivity across the campus, enabling students to access online resources and collaborate effectively.", 1);
right(ag, "Practical learning", "Hands-on experience through labs, projects, and workshops designed to bridge the gap between theory and real-world application.",);

document.getElementById("main").innerHTML +=`<h2 class="had">Faculties-</h2>`
left(ag, "Dr. Mayank Kumar Rusia", "", 1);
right(ag, "Er. Rakha Ahirwaer", "", 1);
left(ag, "Er. Rajbhan Shingh", "", 1);
right(ag, "Er. Nirmala Sen", "", 1);
left(ag, "Er. Akancha Rusia", "", );



