const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',() => {
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




