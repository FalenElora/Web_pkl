document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    scrollLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer1');
    const scrollLeft = document.getElementById('scrollLeft1');
    const scrollRight = document.getElementById('scrollRight1');

    scrollLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });

function switchTab(tab) {
        const tabTop = document.getElementById("tabTop");
        const tabTrend = document.getElementById("tabTrend");
        const panelTop = document.getElementById("panelTop");
        const panelTrend = document.getElementById("panelTrend");

        if (tab === "top") {
          tabTop.classList.add("text-black");
          tabTop.classList.remove("text-gray-500");
          tabTrend.classList.add("text-gray-500");
          tabTrend.classList.remove("text-black");

          panelTop.classList.remove("hidden");
          panelTrend.classList.add("hidden");
        } else {
          tabTrend.classList.add("text-black");
          tabTrend.classList.remove("text-gray-500");
          tabTop.classList.add("text-gray-500");
          tabTop.classList.remove("text-black");

          panelTrend.classList.remove("hidden");
          panelTop.classList.add("hidden");
        }
      }

   