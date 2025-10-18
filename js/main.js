// 1. Chọn các phần tử cần thiết
const themeToggleButton = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

// 2. Lắng nghe sự kiện CLICK trên nút công tắc
themeToggleButton.addEventListener('click', () => {
    
    // 3. HÀNH ĐỘNG: Bật/tắt class 'dark-mode' trên thẻ <body>
    body.classList.toggle('dark-mode');

    console.log("Đã chuyển chế độ!");
});
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#full-name');

contactForm.addEventListener('submit', (event) => {
    
    // Kiểm tra xem ô tên có rỗng không
    if (nameInput.value.trim() === '') {
        
        // Nếu rỗng, ngăn form gửi đi
        event.preventDefault();
        
        // Và thông báo cho người dùng
        alert('Vui lòng nhập họ và tên của bạn!');
    }
});   