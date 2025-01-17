export function joinuscontent(){
    const el = document.getElementById("mainContent");
      
    // Update class
    el.className = "col-12 col-md-10 col-lg-8";
  
    // Fetch and load content
    fetch("joinus.html").then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load home.html");
        }
        return response.text();
      }).then((htmlContent) => {
        el.innerHTML = htmlContent; // Inject HTML content
      }).catch((error) => {
        console.error(error);
        el.innerHTML = "<h1>Error loading content</h1>";
      });
  }