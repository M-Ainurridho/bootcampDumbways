const form = document.querySelector("form");
const projects = [];

form.addEventListener("submit", function (event) {
   event.preventDefault();

   const inputProjectName = document.getElementById("inputProjectName").value;
   const inputStartDate = document.getElementById("inputStartDate").value;
   const inputEndDate = document.getElementById("inputEndDate").value;
   const inputDescription = document.getElementById("inputDescription").value;
   const skills = document.querySelectorAll('input[type="checkbox"]');
   let uploadImg = document.getElementById("uploadImg").files;

   uploadImg = URL.createObjectURL(uploadImg[0]);

   let project = {
      name: inputProjectName,
      duration: setDuration(inputStartDate, inputEndDate),
      description: inputDescription,
      skills,
      image: uploadImg,
   };

   projects.push(project);
   updateUI();
});

const setDuration = (start, end) => {
   const dateStart = new Date(start).getTime();
   const dateEnd = new Date(end).getTime();

   const durasi = dateEnd - dateStart;
   const hari = durasi / (1000 * 60 * 60 * 24);
   return hari;
};

const updateUI = () => {
   let card = "";
   projects.forEach((project) => {
      card += `
      <div class="card">
         <div class="card-heading">
            <img src="${project.image}" alt="" />
            <h4>${project.name}</h4>
            <p class="deadline">Durasi : ${project.duration} Hari</p>
         </div>
         <div class="card-body">
            <p class="description">${project.description}</p>

            <div class="icon-skills">
               <i class="fa-brands fa-node"></i>
               <i class="fa-brands fa-react"></i>
               <i class="fa-brands fa-vuejs"></i>
               <i class="fa-brands fa-laravel"></i>
            </div>

            <div class="btn-change">
               <a href="#" class="edit">edit</a>
               <a href="#" class="edit">delete</a>
            </div>
         </div>
      </div>
      `;
      const container = document.querySelector(".container");
      container.innerHTML = card;
   });
};

let iconNodejs;
const skills = Array.from(document.querySelectorAll('input[type="checkbox"]'));
