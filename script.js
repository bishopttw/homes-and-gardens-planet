document.addEventListener("DOMContentLoaded", () => {
  console.log("js loaded");

  // ================== WhatsApp Form ==================
  const submitBtn = document.getElementById("submit");
  if (submitBtn) {
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault(); // STOP FORM FROM REFRESHING

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      let phone = "2349072573966";
      let url = `https://wa.me/${phone}?text=Hello, my name is ${name}, my email is ${email}. Message: ${message}`;

      window.open(url, "_blank");
    });
  }

  // ================== Intersection Observer ==================
  const boxes = document.querySelectorAll(".highlight");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  boxes.forEach(box => observer.observe(box));

  // ================== Theme Toggle ==================
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    const icon = toggleBtn.querySelector("i");

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");

      if (document.body.classList.contains("light-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        console.log("switched to light mode");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        console.log("switched to dark mode");
      }
    });
  }

  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon")
  const topList = document.querySelector(".top-list");
  
  menuIcon.addEventListener('click', ()=>{
    topList.classList.add('active');
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener('click',()=>{
    topList.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  })
});
