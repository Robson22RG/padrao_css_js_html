/*
  ============================
        FLOAT PANEL 
  ============================
*/
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollPosition = window.scrollY;

  const body = document.body;
  const header = document.querySelector("header");
  const logo = document.querySelector("#header_logo-img");
  const menuHeader = document.querySelector(".nav_bloco-principal");

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (
      currentScrollPosition < lastScrollPosition &&
      currentScrollPosition > 300 &&
      screen.width > 900
    ) {
      /* Subiu a tela */
      header.classList.add("header_slide-in");
      header.classList.remove("header_slide-out");
      logo.classList.add("logo_header-reduzido");
      menuHeader.classList.add("nav_sem-vidro");
      /*----------*/
    } else if (
      currentScrollPosition > lastScrollPosition &&
      currentScrollPosition > 300 &&
      screen.width > 900 &&
      header.classList.contains("header_slide-in")
    ) {
      /* Animações de transição, descendo a tela */
      header.classList.remove("header_slide-in");
      header.classList.add("header_slide-out");
      logo.classList.add("logo_header-reduzido");
      menuHeader.classList.add("nav_sem-vidro");
      /*----------*/
    } else if (currentScrollPosition > 300) {
      /*situação de ajuste de header para volta */
      logo.classList.add("logo_header-reduzido");
      menuHeader.classList.add("nav_sem-vidro");
      /*------------*/
    } else {
      /* Tela lá em cima */
      header.classList.remove("header_slide-in");
      logo.classList.remove("logo_header-reduzido");
      header.classList.remove("header_slide-in");
      menuHeader.classList.remove("nav_sem-vidro");
      /*----------*/
    }
    /* Passando valor */
    lastScrollPosition = currentScrollPosition;
  });

  /*
  ============================
        Visibilidade
  ============================
*/
  const observer = new IntersectionObserver(
    (objeto) => {
      objeto.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        } else {
          entrada.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  const isVisibleElements = document.querySelectorAll(".isVisible");

  isVisibleElements.forEach((element) => {
    observer.observe(element);
  });

  /*
  ===========================
        Painel Rotativo 
  ============================
*/

  const carousel = document.querySelector(".carousel");
  let currentPanelIndex = 0;
  let intervalId;
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");
  const autoRotateCheckbox = document.getElementById("autoRotateCheckbox");

  function rotatePanels() {
    const comprimentoPainel = carousel.clientWidth;
    const tamanhoParaGirar = -currentPanelIndex * comprimentoPainel;
    carousel.style.transform = `translateX(${tamanhoParaGirar}px)`;
  }

  function nextPanel() {
    currentPanelIndex = (currentPanelIndex + 1) % carousel.children.length;
    rotatePanels();
  }

  function prevPanel() {
    currentPanelIndex =
      (currentPanelIndex - 1 + carousel.children.length) %
      carousel.children.length;
    rotatePanels();
  }

  nextButton.addEventListener("click", function () {
    clearInterval(intervalId);
    nextPanel();
    autoRotateCheckbox.checked = false;
    if (autoRotateCheckbox.checked) {
      intervalId = setInterval(nextPanel, 5000);
    }
  });

  prevButton.addEventListener("click", function () {
    clearInterval(intervalId);
    prevPanel();
    autoRotateCheckbox.checked = false;
  });

  autoRotateCheckbox.addEventListener("change", function () {
    if (this.checked) {
      intervalId = setInterval(nextPanel, 5000);
    } else {
      clearInterval(intervalId);
    }
  });

  // Iniciar a rotação automática inicialmente
  intervalId = setInterval(nextPanel, 5000);
});

/*
  ============================
         BOTAO MENU FECHANDO
  ============================
*/

document.addEventListener("DOMContentLoaded", function () {
  var navButton = document.querySelector(".header_nav-button");

  if (navButton) {
    navButton.addEventListener("click", function () {
      this.classList.toggle("closed");
    });
  }
});
/*
  ============================
         Lightbox
  ============================
*/

function openLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "block";
}

function closeLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const lightboxContainers = document.querySelectorAll(".lightbox-container");

  lightboxContainers.forEach(function (container) {
    const lightboxTrigger = container.querySelector(".lightbox-trigger");
    const lightboxContent = container.querySelector(".lightbox-content");
    const lightboxId = container.getAttribute("data-lightbox");

    lightboxTrigger.addEventListener("click", function () {
      openLightbox(lightboxId);
    });

    document.addEventListener("click", function (event) {
      // fechar quando clicar fora
      if (
        event.target !== lightboxContent &&
        !lightboxTrigger.contains(event.target)
      ) {
        closeLightbox(lightboxId);
      }
    });
  });
});
