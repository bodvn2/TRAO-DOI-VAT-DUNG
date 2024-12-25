// Hàm để tải HTML và chèn vào phần tử
async function loadHTML(elementId, filePath) {
  const response = await fetch(filePath);
  const html = await response.text();
  document.getElementById(elementId).innerHTML = html;
}

// Tải Navbar và Footer
loadHTML("navbar", "navbar.html");
loadHTML("footer", "footer.html");
loadHTML("danhmucsp", "danhmucsp.html");
loadHTML("product", "product.html");
loadHTML("product-1", "product-1.html");
