const catItem = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${catItem.length}`);

catItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
