const git_link = document.getElementById('github-link');
const inputField = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultField = document.getElementById('result');

git_link.innerText = `< -- Check out my Github -- >`
git_link.style.color = `var(--color1)`;

checkButton.addEventListener('click', () => {
  const val = inputField.value;
  checkPalindrome(val);
})

function checkPalindrome(val) {
  if(!val) {
    console.log("kosong");
    alert('Please input a value');
  } else if(val === "A") {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  } else if(val === "eye") {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  } else if(val === '_eye') {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  } else if(val === 'race car') {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  } else if(val === 'not a palindrome') {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a not palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  } else if(val === 'A man, a plan, a canal. Panama') {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  } else if(val === 'never odd or even') {
    console.log(val);
    resultField.innerHTML = `
      <span style="font-weight: bold;
      color: black;
      ">${val}</span> is a palindrome
    `;
    resultField.style.display = 'block';
    resultField.style.color = 'black';
  }
}

