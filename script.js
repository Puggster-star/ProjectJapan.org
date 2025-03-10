const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// Reviews functionality
function submitReview() {
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('review-text').value;
    const reviewList = document.querySelector('.review-list');

    if (name && text) {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
        reviewList.appendChild(reviewItem);

        document.getElementById('reviewer-name').value = '';
        document.getElementById('review-text').value = '';
    }
}

// Quiz functionality
function checkAnswer(questionNumber, answer) {
    const correctAnswers = {
        1: 'Tokyo',
        2: 'Cherry Blossom',
        3: 'Emperor Naruhito',
        4: 'Kimono',
        5: 'Yen',
        6: 'Mount Fuji',
        7: 'Arigato',
        8: 'Tokyo',
        9: 'Kabuki',
        10: 'Origami'
    };

    if (answer === correctAnswers[questionNumber]) {
        alert('Correct!');
    } else {
        alert(`Incorrect. The correct answer is ${correctAnswers[questionNumber]}.`);
    }
}

// Newsletter functionality
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    alert(`Thank you for subscribing with ${email}`);
    document.getElementById('newsletter-email').value = '';
});




