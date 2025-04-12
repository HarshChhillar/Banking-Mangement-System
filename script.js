function showSection(id) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("createForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const [name, email, phone, accNum] = [...this.querySelectorAll("input")].map(input => input.value);
  
      const user = { name, email, phone, accNum, balance: 0 };
  
      localStorage.setItem(accNum, JSON.stringify(user)); // store in localStorage
  
      // update Home section
      document.getElementById("uName").textContent = name;
      document.getElementById("uEmail").textContent = email;
      document.getElementById("uPhone").textContent = phone;
      document.getElementById("uAcc").textContent = accNum;
      document.getElementById("uBal").textContent = user.balance;
      document.getElementById("userDetails").style.display = "block";
  
      this.reset();
      showSection("home"); // switch to Home
    });
  });
  
  
    // Deposit
    document.getElementById("depositForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const accNum = this.querySelectorAll("input")[0].value;
      const amount = parseFloat(this.querySelectorAll("input")[1].value);
      const data = JSON.parse(localStorage.getItem(accNum));
      if (data) {
        data.balance += amount;
        localStorage.setItem(accNum, JSON.stringify(data));
        alert(`Deposited ₹${amount}. New balance: ₹${data.balance}`);
      } else {
        alert("Account not found.");
      }
      this.reset();
    });
  
    // Withdraw
    document.getElementById("withdrawForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const accNum = this.querySelectorAll("input")[0].value;
      const amount = parseFloat(this.querySelectorAll("input")[1].value);
      const data = JSON.parse(localStorage.getItem(accNum));
      if (data) {
        if (amount > data.balance) {
          alert("Insufficient balance.");
        } else {
          data.balance -= amount;
          localStorage.setItem(accNum, JSON.stringify(data));
          alert(`Withdrawn ₹${amount}. Remaining balance: ₹${data.balance}`);
        }
      } else {
        alert("Account not found.");
      }
      this.reset();
    });
  
    // Check Balance
    document.getElementById("balanceForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const accNum = this.querySelector("input").value;
      const data = JSON.parse(localStorage.getItem(accNum));
      if (data) {
        alert(`Account Balance: ₹${data.balance}`);
      } else {
        alert("Account not found.");
      }
      this.reset();
    });

  
