async function AnimateText(element) {
  return new Promise((resolve) => {
    newTextBox = document.createElement("p");
    newTextBox.className = "introText";
    document.body.appendChild(newTextBox);
    delay = 0;
    for (const letter of element) {
      setTimeout(() => {
        newTextBox.textContent += letter;
        if (letter == element.charAt(element.length - 1)) {
          resolve();
        }
      }, delay);

      delay += 20;
    }
  });
}

async function timer(time)
{
  return new Promise((resolve) => {
    setTimeout(resolve, time)
    
  });
}

async function executeIntro() {
  launchingText = ["Launching introvert.html...", "Launching socialAnxiety.html..."]

  await AnimateText("Initializing main thread...");
  await timer(1500);
  await AnimateText("Checking bios settings...");
  await timer(500);
  await AnimateText("Unlocking sealed archives...");
  await timer(100);
  await AnimateText("Bypassing firewalls...");
  await timer(3000);
  await AnimateText(launchingText[Math.floor(Math.random() * launchingText.length)]);
  await timer(1000);
  window.location.href = "main.html"
}

executeIntro();
