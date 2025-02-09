export function homecontent() {
  const el = document.getElementById("mainContent");

  // Update class
  el.className = "position-absolute d-flex align-items-center justify-content-center profile-section w-100";

  // Fetch and load content
  fetch("home.html")
      .then((response) => {
          if (!response.ok) {
              throw new Error("Failed to load home.html");
          }
          return response.text();
      })
      .then((htmlContent) => {
          el.innerHTML = htmlContent; // Inject HTML content

          // Initialize GhostTyper only after content is loaded
          $("#plugin1").ghosttyper({
              messages: ['INNOVATE TODAY!', 'EXPLORING TOMORROW!', 'ADVANCING HUMANITY FOREVER!'],
              timeWrite: 100,
              timeDelete: 50,
              timePause: 1000
          });
      })
      .catch((error) => {
          console.error(error);
          el.innerHTML = "<h1>Error loading content</h1>";
      });
}

    