const teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "img/walter-gordon-office-manager.jpg"
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "img/angela-lopez-social-media-manager.jpg"
    },
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "img/scott-estrada-developer.jpg"
    },
    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "img/barbara-ramos-graphic-designer.jpg"
    }
  ];
  

  const teamContainer = document.getElementById("team-container");

  for (const member of teamMembers) {
    const memberInfo = document.createElement("div");
  
    // Nome
    const nameElement = document.createElement("p");
    nameElement.textContent = `Nome: ${member.nome}`;
    memberInfo.appendChild(nameElement);
  
    // Ruolo
    const roleElement = document.createElement("p");
    roleElement.textContent = `Ruolo: ${member.ruolo}`;
    memberInfo.appendChild(roleElement);
  
    // Foto
    const imgElement = document.createElement("img");
    imgElement.src = member.foto;
    memberInfo.appendChild(imgElement);
  
    teamContainer.appendChild(memberInfo);
  }
  