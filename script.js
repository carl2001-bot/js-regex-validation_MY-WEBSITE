/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // Dynamic greeting based on time of day
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }

    // Blog Section - Load blog posts dynamically
    const blogPosts = [
        { title: "My First Blog Post", content: "This is my first blog post!" },
        { title: "Learning JavaScript", content: "JavaScript is awesome for interactivity!" },
        { title: "CSS Tricks", content: "Styling with CSS can be fun and powerful!" }
    ];

    const blogContainer = document.getElementById("blog-posts");
    blogPosts.forEach(post => {
        let article = document.createElement("article");
        article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(article);
    });

    // Form validation
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
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
});
