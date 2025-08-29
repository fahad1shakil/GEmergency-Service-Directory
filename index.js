// Select navbar counters
const heartCounter = document.querySelector(".love-nav span");
const coinCounter = document.querySelector(".coin-nav span");
const copyCounter = document.querySelector(".copy-nav span");

// Select all cards
const cards = document.querySelectorAll(".card");

// Select Call History container
const historyContainer = document.querySelector("aside .time-list"); // Adjust if multiple

// Clear History button
const clearHistoryBtn = document.querySelector(".aside-button-text button");

// Function to get current local time in hh:mm AM/PM format
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 to 12
  return `${hours}:${minutes} ${ampm}`;
}

// Loop through each card
cards.forEach(card => {
  const heartBtn = card.querySelector(".fa-heart");
  const callBtn = card.querySelector(".fa-phone").parentNode;
  const copyBtn = card.querySelector(".fa-copy").parentNode;

  // Heart click
  heartBtn.addEventListener("click", () => {
    heartCounter.textContent = Number(heartCounter.textContent) + 1;
  });

  // Call click
  callBtn.addEventListener("click", () => {
    let coins = Number(coinCounter.textContent);
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinCounter.textContent = coins;

    // Get service name & number
    const serviceName = card.querySelector(".card-text h1").textContent;
    const serviceNumber = card.querySelector(".card-text h1:nth-of-type(2)").textContent;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to Call History
    const time = getCurrentTime();
    const newHistory = document.createElement("div");
    newHistory.classList.add("time-list", "bg-[#FAFAFA]", "w-[352px]", "h-[83px]", "mt-7", "rounded-xl", "flex", "justify-between", "items-center", "p-4");

    newHistory.innerHTML = `
      <div class="nam-num">
        <h1>${serviceName}</h1>
        <p>${serviceNumber}</p>
      </div>
      <div class="time-aside">
        <p>${time}</p>
      </div>
    `;

    document.querySelector("aside").appendChild(newHistory);
  });

  // Copy click
  copyBtn.addEventListener("click", () => {
    const serviceNumber = card.querySelector(".card-text h1:nth-of-type(2)").textContent;
    navigator.clipboard.writeText(serviceNumber)
      .then(() => {
        alert(`Copied: ${serviceNumber}`);
        copyCounter.textContent = Number(copyCounter.textContent) + 1;
      })
      .catch(err => alert("Failed to copy!"));
  });
});

// Clear history
clearHistoryBtn.addEventListener("click", () => {
  const histories = document.querySelectorAll("aside .time-list");
  histories.forEach(h => h.remove());
});

