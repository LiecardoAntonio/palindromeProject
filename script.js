const git_link = document.getElementById('github-link');
const inputField = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultField = document.getElementById('result');

git_link.innerText = `< -- Check out my Github -- >`;
git_link.style.color = `var(--color1)`;

checkButton.addEventListener('click', () => {
  const val = inputField.value;
  checkPalindrome(val);
});

function checkPalindrome(val) {
  if (!val) {
    console.log("kosong");
    alert('Please input a value');
    return;
  }

  // Normalize the input by removing non-alphanumeric characters and converting to lowercase
  const cleanedVal = val.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Check if the cleaned string is equal to its reverse
  const isPalindrome = cleanedVal === cleanedVal.split('').reverse().join('');

  if (isPalindrome) {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold; color: black;">${val}</span> is a palindrome
    `;
  } else {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold; color: black;">${val}</span> is not a palindrome
    `;
  }

  resultField.style.display = 'block';
  resultField.style.color = 'black';
}
