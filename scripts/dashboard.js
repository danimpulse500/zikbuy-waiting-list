  function copyLink() {
    const link = document.getElementById("refLink").value;
    navigator.clipboard.writeText(link);
    alert("Referral link copied!");
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

const token = localStorage.getItem('token');

fetch('http://127.0.0.1:8000/auth/users/me/', {
  method: 'GET',
  headers: {
    'Authorization': `Token ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    return res.json();
  })
  .then(user => {
    // store user data
    localStorage.setItem('user', JSON.stringify(user));

    // update the UI
    document.getElementById('userFullName').innerText = user.full_name || 'N/A';
    document.getElementById('refCode').innerText = user.referral_code || 'N/A';
    document.getElementById('refLink').value = user.referral_link || '';
    document.getElementById('referralPoints').innerText = (user.referral_points || 0) + ' Points';
    document.getElementById('referredCount').innerText = user.number_of_people_referred || 0;
    document.getElementById('totalPoints').innerText = (user.referral_points || 0) + '';

    const avatarName = user.full_name ? user.full_name.replace(' ', '+') : 'User';
    document.getElementById('avatar').src = `https://ui-avatars.com/api/?name=${avatarName}&background=28a745&color=fff`;
  })
  .catch(err => {
    console.error(err);
    alert("Please log in again.");
    // window.location.href = "/index.html";
  });

