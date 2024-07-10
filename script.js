document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');

    container.addEventListener('click', function(event) {
        var text = document.createElement('div');
        text.className = 'click-text';
        text.textContent = '( ๏ 人 ๏ )';
        text.style.left = (event.pageX - container.offsetLeft - 20) + 'px'; // Position text relative to click
        text.style.top = (event.pageY - container.offsetTop - 10) + 'px';  // Adjusting for text position
        container.appendChild(text);

        // Remove text after a delay (e.g., 3 seconds)
        setTimeout(function() {
            container.removeChild(text);
        }, 3000); // 3000 milliseconds = 3 seconds
    });
});
