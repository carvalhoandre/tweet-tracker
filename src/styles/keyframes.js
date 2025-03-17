export const keyframesHeader = () => {
  const style = document.createElement('style');

  style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
    `;

  document.head.appendChild(style);
};
