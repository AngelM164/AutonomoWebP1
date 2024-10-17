// Manejar la navegación al hacer clic en los botones de la barra lateral
document.querySelector("#leftSidebar ul").addEventListener("click", function(event) {
  if (event.target.tagName === "A") {
    const section = event.target.getAttribute("data-section");
    showSection(section);
  }
});

// Función para mostrar una sección específica y ocultar las demás
function showSection(section) {
  const sections = ["inicio", "perfil", "recetas", "favoritos"];
  sections.forEach(s => {
    document.getElementById(s).style.display = s === section ? "block" : "none";
  });
}

// Inicializar la sección que se muestra al cargar la página
window.onload = function() {
  displayRecipes();
  displayComments();
  showSection("inicio");
};

// Manejar el envío del formulario y guardar la receta en Local Storage
document.getElementById("recipeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value;
  const steps = document.getElementById("steps").value;

  if (title && ingredients && steps) {
    const recipe = { title, ingredients, steps };
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    alert("¡Receta compartida exitosamente!");
    displayRecipes();
    // Limpiar el formulario después de enviar
    document.getElementById("recipeForm").reset();
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Mostrar las recetas guardadas
function displayRecipes() {
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "<h2>Recetas Compartidas:</h2>";

  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.innerHTML = `<h3>${recipe.title}</h3><p><strong>Ingredientes:</strong> ${recipe.ingredients}</p><p><strong>Pasos:</strong> ${recipe.steps}</p>`;
    recipeList.appendChild(recipeElement);
  });
}

// Manejar el envío de comentarios y guardarlos en Local Storage
document.getElementById("postComment").addEventListener("click", function() {
  const commentText = document.getElementById("commentText").value;

  if (commentText) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));

    alert("¡Comentario publicado!");
    displayComments();
    // Limpiar el campo de comentario después de publicar
    document.getElementById("commentText").value = "";
  } else {
    alert("Por favor, escribe un comentario.");
  }
});

// Mostrar los comentarios guardados
function displayComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = "<h3>Comentarios:</h3>";

  comments.forEach(comment => {
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentsList.appendChild(commentElement);
  });
}
