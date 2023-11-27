for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    document.body.appendChild(star);
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = "rgba(255, 255, 255, 0.8)";
    star.style.position = "fixed";
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
}
