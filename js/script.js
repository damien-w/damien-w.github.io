document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();

    const emailAddress = "emaildamien@gmail.com";
    const obfuscatedEmail = emailAddress
      .split("")
      .map(char => `&#${char.charCodeAt(0)};`)
      .join("");
    document.getElementById("ob-liam").innerHTML = `
      <a class="text-xl" target="_blank" href="mailto:${obfuscatedEmail}"
         rel="nofollow noopener noreferrer">${obfuscatedEmail}</a>`;
  });