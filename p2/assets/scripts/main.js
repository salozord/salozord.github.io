let links = document.querySelectorAll(".info");
let botonesX = document.querySelectorAll(".close");

links.forEach((link)=>{
  link.addEventListener('click', (ev)=>{
    ev.preventDefault();
    let content = document.querySelector(".content");
    content.classList.remove("zoomIn");
    content.classList.remove("animated");

    content.classList.add("zoomOut");
    content.classList.add("animated");

    setTimeout(()=>{
      location.href = link.href;
    }, 550);
  });
});

botonesX.forEach((x)=>{
  x.addEventListener('click', (ev)=>{
    ev.preventDefault();
    let content = document.querySelector(".content");
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(()=>{
      location.href = "../index.html";
    }, 700);
  });
});
