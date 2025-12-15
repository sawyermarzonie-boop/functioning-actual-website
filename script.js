const list = document.getElementById("list");

function addAssignment() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const priority = document.getElementById("priority").value;

  if (!title || !date) return;

  const li = document.createElement("li");

  li.innerHTML = `
    <div>
      <strong>${title}</strong><br>
      <small>Due: ${date}</small>
    </div>
    <span class="tag ${priority}">${priority}</span>
  `;

  li.onclick = () => li.classList.toggle("done");

  list.appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
}
