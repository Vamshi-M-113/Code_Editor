function runCode() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const output = document.getElementById("output");
  const documentContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  output.srcdoc = documentContent;
}

function clearCode() {
  document.getElementById("htmlCode").value = "";
  document.getElementById("cssCode").value = "";
  document.getElementById("jsCode").value = "";
  document.getElementById("output").srcdoc = "";
}
