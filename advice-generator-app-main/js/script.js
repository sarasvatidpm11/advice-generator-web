const adviceIdElement = document.querySelector('.advice-id');
const adviceTextElement = document.querySelector('.advice-text');
const btnRequestAdvice = document.querySelector('.btn-req-advice');

async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const { id, advice } = data.slip;
  
      adviceIdElement.textContent = `ADVICE #${id}`;
      adviceTextElement.textContent = `"${advice}"`;
    } catch (error) {
      console.error('There was a problem while fetching advice data:', error);
      adviceIdElement.textContent = 'Error';
      adviceTextElement.textContent = 'Could not fetch advice.';
    }
  }
  
  // Fetch advice when the page loads
  //fetchAdvice();
  
  // Fetch advice when the button is clicked
  btnRequestAdvice.addEventListener('click', fetchAdvice);