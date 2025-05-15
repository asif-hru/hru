document.querySelectorAll('.customInput').forEach(input => {
  const wrapper = input.closest('.custom-select-wrapper');
  const dropdown = wrapper.querySelector('.dropdown');
  const options = JSON.parse(input.dataset.options || "[]");

  // Populate dropdown initially
  dropdown.innerHTML = options.map(opt => `<div>${opt}</div>`).join('');

  // Show dropdown on focus
  input.addEventListener('focus', () => {
    dropdown.style.display = 'block';
    dropdown.innerHTML = options.map(opt => `<div>${opt}</div>`).join('');
  });

  // Filter dropdown on input
  input.addEventListener('input', () => {
    const val = input.value.toLowerCase();
    const filtered = options.filter(opt => opt.toLowerCase().includes(val));
    dropdown.innerHTML = filtered.map(opt => `<div>${opt}</div>`).join('');
  });

  // Select value
  dropdown.addEventListener('click', e => {
    if (e.target.tagName === 'DIV') {
      input.value = e.target.innerText;
      dropdown.style.display = 'none';
    }
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
});