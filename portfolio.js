document.getElementById("download-btn").addEventListener("click", function() {
    this.classList.add("clicked");
    setTimeout(() => {
        this.classList.remove("clicked");
    }, 300); // Tempo para a animação durar
});


// Typing Text Effect
   const linha1 = "Olá, eu sou a";
    const linha2 = "Sarah Elise";
    const linha3 = "Desenvolvedora Front End";

    const el1 = document.getElementById("linha1");
    const el2 = document.getElementById("linha2");
    const el3 = document.getElementById("linha3");

    let i = 0, j = 0, k = 0;

    function digitarLinha1() {
      if (i < linha1.length) {
        el1.textContent += linha1.charAt(i);
        i++;
        setTimeout(digitarLinha1, 100);
      } else {
        setTimeout(digitarLinha2, 600);
      }
    }

    function digitarLinha2() {
      if (j < linha2.length) {
        el2.textContent += linha2.charAt(j);
        j++;
        setTimeout(digitarLinha2, 150);
      } else {
        setTimeout(digitarLinha3, 700);
      }
    }

    function digitarLinha3() {
      if (k < linha3.length) {
        el3.textContent += linha3.charAt(k);
        k++;
        setTimeout(digitarLinha3, 120);
      }
    }

    window.onload = digitarLinha1;


// Animações de Hover
document.querySelectorAll('.skill-item, .projects-grid img, .contact button').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)'; // Aumento sutil de escala
        item.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        item.style.opacity = '0.9'; // Opacidade leve
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)'; // Retorna ao normal
        item.style.opacity = '1';
    });
});

// Animações de Scroll 
const observerOptions = {
    threshold: 0.1, // Ativa quando 10% do elemento está visível
    rootMargin: '0px 0px -50px 0px' // Margem para antecipar
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)'; // Animação de entrada
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)'; // Animação de saída
        }
    });
}, observerOptions);

// Aplica animações a seções principais
document.querySelectorAll('#sobre-mim, #minhas-skills, #projects, #contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Animação de transição de cores no hover do botão de currículo
const curriculoBtn = document.querySelector('.botaoCurriculo');
if (curriculoBtn) {
    curriculoBtn.addEventListener('mouseenter', () => {
        curriculoBtn.style.backgroundColor = 'var(--roxo)'; // Transição para roxo
        curriculoBtn.style.color = 'var(--branco)';
        curriculoBtn.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
    curriculoBtn.addEventListener('mouseleave', () => {
        curriculoBtn.style.backgroundColor = 'var(--verdeEscuro)'; // Retorna ao verde
        curriculoBtn.style.color = 'var(--preto)';
    });
}

// Modo Escuro/Claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Carrega o tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Modo Claro';
} else {
    themeToggle.textContent = 'Modo Escuro';
}

// Alterna o tema ao clicar
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
});

document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
  });
});
