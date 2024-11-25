function updateTime() {
    const localTime = new Date();
    document.getElementById("local-time").textContent = `Hora Local: ${localTime.toLocaleTimeString()}`;
  
    const timezone = document.getElementById("timezone-selector").value;
    const worldTime = new Date().toLocaleTimeString("en-US", { timeZone: timezone });
    document.getElementById("world-time").textContent = `Hora Mundial: ${worldTime}`;
  }
  
  setInterval(updateTime, 1000);
  document.getElementById("timezone-selector").addEventListener("change", updateTime);
  