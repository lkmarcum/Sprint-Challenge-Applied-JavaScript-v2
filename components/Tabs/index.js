// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

const allTab = document.createElement("div");
allTab.classList.add("tab");
allTab.textContent = "ALL";
allTab.setAttribute("data-tab", "all");
allTab.addEventListener("click", event => {
  selectTab(allTab.dataset.tab);
});
topics.appendChild(allTab);

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(tabs => {
    // if successful
    console.log("Tab topics: ", tabs);
    tabs.data.topics.forEach(topic => {
      const newTab = createTab(topic);
      topics.appendChild(newTab);
    });
  })
  .catch(error => {
    // if failed
    console.log(error);
  });

function selectTab(data) {
  const cards = document.querySelectorAll(".card");
  if (data === "all") {
    cards.forEach(card => {
      card.style.display = "flex";
    });
  } else {
    cards.forEach(card => {
      card.style.display = "none";
      if (card.dataset.tab === data) {
        card.style.display = "flex";
      }
    });
  }
}

function createTab(topic) {
  // create element
  const madeTab = document.createElement("div");

  // set class
  madeTab.classList.add("tab");

  // set content
  madeTab.textContent = topic;
  madeTab.setAttribute("data-tab", topic);

  madeTab.addEventListener("click", event => {
    selectTab(event.target.dataset.tab);
  });

  return madeTab;
}
