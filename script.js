function showContent(component) {
  var contentDiv = document.getElementById("content");
  var componentContent = "";

  switch (component) {
    case "home":
      componentContent =
        "<h1>Home</h1><p>Welcome to our website! We are dedicated to providing you with the best experience. Explore our products and services to find what suits your needs. We strive to deliver excellence and value to our customers.</p>";
      break;
    case "contact":
      componentContent =
        "<h1>Contact</h1><ul><li>Email: contact@example.com</li><li>Phone: 123-456-7890</li><li>Address: 123 Street, City, Country</li></ul>";
      break;
    case "information":
      componentContent =
        "<h1>Information</h1><p>Learn more about our company and what we stand for. We are a team of passionate individuals committed to delivering high-quality products and exceptional customer service. Discover our mission, vision, and values that drive us forward.</p>";
      break;
    case "guide":
      componentContent =
        "<h1>Guide</h1><ol><li>Getting Started: Familiarize yourself with our platform and get started in a few easy steps.</li><li>Features Overview: Explore the various features and functionalities available to enhance your experience.</li><li>Troubleshooting: Find solutions to common issues and troubleshoot problems you may encounter.</li><li>Tips and Tricks: Discover useful tips and tricks to maximize the benefits of our platform.</li></ol>";
      break;
    default:
      componentContent = "<h1>Welcome to the Beautiful Website</h1>";
  }

  contentDiv.innerHTML = componentContent;

  var leftPanelItems = document.querySelectorAll("#left-panel li");
  leftPanelItems.forEach(function (item) {
    item.classList.remove("active");
  });

  var selectedComponent = document.querySelector(
    "#left-panel li:nth-child(" +
      (["home", "contact", "information", "guide"].indexOf(component) + 1) +
      ")"
  );
  selectedComponent.classList.add("active");
}
