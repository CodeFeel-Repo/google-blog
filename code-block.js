function copyCode(button) {
  const container = button.closest('.code-container');
  const codeElement = container.querySelector('.code-content code');
  const textToCopy = codeElement.innerText;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = button.innerText;
    button.innerText = 'Copied !!!';
    button.style.backgroundColor = '#388E3C';

    setTimeout(() => {
      button.innerText = originalText;
      button.style.backgroundColor = '#4CAF50';
    }, 2000);
  }).catch(err => {
    console.error('Copy Failed:', err);
    alert('Sorry ~ Copy Failed.');
  });
}