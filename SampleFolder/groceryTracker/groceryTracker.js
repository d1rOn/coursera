    function groceryTracker() {
      const item1 = parseFloat(document.getElementById("grocery1").value) || 0;
      const item2 = parseFloat(document.getElementById("grocery2").value) || 0;
      const item3 = parseFloat(document.getElementById("grocery3").value) || 0;

      const total = item1 + item2 + item3;

      document.getElementById("result").textContent = "The total amount is :$ " + total.toFixed(2);
    }