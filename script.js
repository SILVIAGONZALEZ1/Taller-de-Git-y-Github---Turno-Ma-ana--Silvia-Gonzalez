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

    const textarea = document.getElementById("mensaje");
    const contador = document.getElementById("caracteresRestantes");
    const maxCaracteres = 200;
    
    textarea.addEventListener("input", function() {
    
      // 🔢 Calcular caracteres restantes
    const longitudActual = this.value.length;
    const restantes = maxCaracteres - longitudActual;

    contador.textContent = restantes;
    
      // 📈 Auto expandir hacia abajo
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    
      // 📜 Activar scroll si supera altura máxima
    if (this.scrollHeight > 250) {
        this.style.overflowY = "scroll";
    } else {
        this.style.overflowY = "hidden";
    }
    });
    