/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Greeting based on time of day
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Enter a valid email address!");
            return;
        }
        alert("Message sent successfully!");
    });

    // Theme Toggle
    const toggleTheme = document.createElement("button");
    toggleTheme.textContent = "Toggle Theme";
    document.body.insertBefore(toggleTheme, document.body.firstChild);
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Modal Popups
    document.querySelectorAll(".project").forEach(item => {
        item.addEventListener("click", function() {
            let modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<div class="modal-content"><span class="close">&times;</span><p>${this.dataset.title}</p></div>`;
            document.body.appendChild(modal);
            document.querySelector(".close").addEventListener("click", () => modal.remove());
        });
    });

    // Progress Bars
    document.querySelectorAll(".progress-bar").forEach(bar => {
        let width = 0;
        let max = bar.dataset.max;
        let interval = setInterval(() => {
            if (width >= max) clearInterval(interval);
            else {
                width++;
                bar.style.width = width + "%";
            }
        }, 20);
    });
});

