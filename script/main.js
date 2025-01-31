document.addEventListener("DOMContentLoaded", () => {
    const images = [
        '../imgs/Smartphone/screenshot1.png',
        '../imgs/Smartphone/screenshot2.png',
        '../imgs/Smartphone/screenshot3.png',
        '../imgs/Smartphone/screenshot4.png'
    ];

    const mockupDiv = document.querySelector("section:first-child div");
    let currentIndex = 0;

    if (mockupDiv) {
        mockupDiv.style.transition = "filter 1s ease, opacity 1s ease"; // Transição para desfoque e opacidade
        mockupDiv.style.backgroundImage = `url('${images[currentIndex]}')`;

        setInterval(() => {
            // Aplica o desfoque e diminui a opacidade
            mockupDiv.style.filter = "blur(10px)";
            mockupDiv.style.opacity = "0";

            // Após a transição (1 segundo), troca a imagem
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                mockupDiv.style.backgroundImage = `url('${images[currentIndex]}')`;

                // Remove o desfoque e restaura a opacidade
                mockupDiv.style.filter = "blur(0px)";
                mockupDiv.style.opacity = "1";
            }, 600); // Tempo de transição (1s)
        }, 6000); // Troca a cada 4 segundos
    } else {
        console.error("Elemento não encontrado. Verifique se o seletor está correto.");
    }
});

const placeholderDiv = document.querySelector('.placeholder_hiden');
const inputField = document.querySelector('input');

function placeholder_hider() {
    placeholderDiv.style.display = 'flex';
    inputField.placeholder = '';
}

function limpar() {
    placeholderDiv.style.display = 'none';
    inputField.placeholder = 'Telefone, nome de usuário ou email';
}