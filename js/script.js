// 1. 获取按钮元素
const loveBtn = document.getElementById('loveBtn');

// 2. 点击按钮时触发的函数
loveBtn.addEventListener('click', function () {
    // 生成10个爱心（可修改数量）
    for (let i = 0; i < 10; i++) {
        createLove();
    }
});

// 3. 生成单个爱心的函数
function createLove() {
    // 创建爱心元素（用文字“❤️”作为爱心，无需图片）
    const love = document.createElement('div');
    love.className = 'love';
    love.textContent = '❤️';

    // 随机爱心大小（12px ~ 36px）
    const size = Math.random() * 24 + 12;
    love.style.fontSize = `${size}px`;

    // 随机爱心位置（按钮周围）
    const btnRect = loveBtn.getBoundingClientRect(); // 获取按钮位置
    const x = btnRect.left + btnRect.width / 2 - size / 2; // 水平居中
    const y = btnRect.top - size; // 按钮上方
    love.style.left = `${x}px`;
    love.style.top = `${y}px`;

    // 随机爱心颜色（粉色系）
    const hue = 350 + Math.random() * 20; // 色相（350~370，对应粉色/红色）
    const saturation = 80 + Math.random() * 20; // 饱和度
    const lightness = 60 + Math.random() * 10; // 亮度
    love.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // 随机动画时长（2~4秒）
    love.style.animationDuration = `${Math.random() * 2 + 2}s`;

    // 添加到页面
    document.body.appendChild(love);

    // 动画结束后移除爱心（避免占用内存）
    setTimeout(() => {
        love.remove();
    }, 3000); // 3秒后移除（与动画时长一致）
}