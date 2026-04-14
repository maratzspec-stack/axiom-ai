async function run() {
  const input = document.getElementById("input").value;
  const loading = document.getElementById("loading");
  const output = document.getElementById("output");

  if (!input) {
    alert("Please enter a task");
    return;
  }

  loading.innerText = "Axiom is thinking...";
  output.innerText = "";

  try {
    const res = await fetch("https://YOUR-BACKEND-URL/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    });

    const data = await res.json();

    loading.innerText = "";

    output.innerText = JSON.stringify(data, null, 2);

  } catch (err) {
    loading.innerText = "";
    output.innerText = "Error: " + err.message;
  }
}