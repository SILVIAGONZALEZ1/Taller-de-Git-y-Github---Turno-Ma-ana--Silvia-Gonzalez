function scrollToContact() {
    document.getElementById("contacto").scrollIntoView({
      behavior: "smooth"
    });
  }

  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
      form.reset();
    }, 2500);
  });