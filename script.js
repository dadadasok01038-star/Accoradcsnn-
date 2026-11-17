// Обработка нажатия на кнопку "Пополнить"
document.addEventListener('DOMContentLoaded', () => {
    const topupBtn = document.querySelector('.topup-btn');
    if (topupBtn) {
        topupBtn.addEventListener('click', () => {
            alert('Переход на страницу пополнения баланса ⭐');
        });
    }

    // Обработка кликов по пунктам меню режимов (Бесплатно, Plane, Кейсы и т.д.)
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.item-title').innerText;
            console.log(`Открыт раздел: ${title}`);
            // Здесь можно добавить логику открытия конкретного модального окна
        });
    });

न    // Интерактивность нижней навигации (смена активной вкладки)
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(nav => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            nav.classList.add('active');
        });
    });

    // Кнопка закрытия
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (confirm('Закрыть приложение?')) {
                window.close();
            }
        });
    }
});
