function switchTab(tab) {
  const tabFreelancer = document.getElementById("tabFreelancer");
  const tabClient = document.getElementById("tabClient");
  const panelFreelancer = document.getElementById("panelFreelancer");
  const panelClient = document.getElementById("panelClient");

  if (tab === "Freelancer") {
    tabFreelancer.classList.add("bg-gray-200");
    tabFreelancer.classList.remove("border");
    tabFreelancer.classList.remove("border-black");

    tabClient.classList.remove("bg-gray-200");
    tabClient.classList.add("border", "border-black");

    panelFreelancer.classList.remove("hidden");
    panelClient.classList.add("hidden");
  } else {
    tabClient.classList.add("bg-gray-200");
    tabClient.classList.remove("border");
    tabClient.classList.remove("border-black");

    tabFreelancer.classList.remove("bg-gray-200");
    tabFreelancer.classList.add("border", "border-black");

    panelClient.classList.remove("hidden");
    panelFreelancer.classList.add("hidden");
  }
}

