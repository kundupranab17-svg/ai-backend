const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({inputs: q})
});
