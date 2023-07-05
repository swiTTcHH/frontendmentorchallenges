const menuOpen = document.querySelector(".toggle");
      const menuClose = document.querySelector(".close");
      const mainMenu = document.querySelector(".navlinks");

      menuOpen.addEventListener("click", () => {
        mainMenu.classList.add("active");
      });

      menuClose.addEventListener("click", () => {
        mainMenu.classList.remove("active");
        
      });

      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          mainMenu.classList.remove("active");
        }
      });
