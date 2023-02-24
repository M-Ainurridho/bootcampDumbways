const form = document.querySelector("form");
const projects = [];

// Kondisi bila form di submit
form.addEventListener("submit", function (event) {
   // mengentikan event submit
   event.preventDefault();

   const inputProjectName = document.getElementById("inputProjectName").value;
   const inputStartDate = document.getElementById("inputStartDate").value;
   const inputEndDate = document.getElementById("inputEndDate").value;
   const inputDescription = document.getElementById("inputDescription").value;
   const skills = Array.from(document.querySelectorAll('input[type="checkbox"]'));
   let uploadImg = document.getElementById("uploadImg").files;

   // Ubah lokasi url pada gambar
   uploadImg = URL.createObjectURL(uploadImg[0]);

   let project = {
      name: inputProjectName,
      start: inputStartDate,
      end: inputEndDate,
      description: inputDescription,
      skills,
      image: uploadImg,
   };

   projects.push(project);
   updateUI();
});

// Data yang akan ditampilkan
const updateUI = () => {
   let card = "";
   projects.forEach((project) => {
      card += `
      <div class="card">
         <div class="card-heading">
            <img src="${project.image}" alt="" />
         </div>
         <div class="card-body">
            <h5>${project.name}</h5>
            <p class="deadline">${setDuration(project.start, project.end)}</p>
            <p class="description">${project.description}</p>

            <div class="icon-skills">${getIcons(project.skills)}</div>

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

// Set waktu durasi / deadline project
const setDuration = (start, end) => {
   const dateStart = new Date(start).getTime();
   const dateEnd = new Date(end).getTime();
   const selisih = dateEnd - dateStart;

   let day = selisih / (1000 * 60 * 60 * 24);
   const month = Math.floor(selisih / (1000 * 60 * 60 * 24 * 30));

   const result = day < 30 ? (day === 1 ? `Duration : ${day} day` : `Duration : ${day} days`) 
   : month === 1 ? `Duration : ${month} month` : `Duration : ${month} months`;

   return result;
};

// Mengubah checkbox skill menjadi icon
const getIcons = (skills) => {
   skills[0].dataset.icon = "fa-brands fa-node";
   skills[1].dataset.icon = "fa-brands fa-react";
   skills[2].dataset.icon = "fa-brands fa-vuejs";
   skills[3].dataset.icon = "fa-brands fa-laravel";

   let iconSkills = "";
   skills.forEach((s) => {
      iconSkills += s.checked ? `<i class='${s.dataset.icon}'></i>` : "";
   });

   return iconSkills;
};
