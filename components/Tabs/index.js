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

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(tabs => {
    // if successful
    console.log("Tab topics: ", tabs);
    tabs.forEach(topic => {
      const newTab = createTab(topic);
      topics.appendChild(newTab);
    });
  })
  .catch(error => {
    // if failed
    console.log(error);
  });
