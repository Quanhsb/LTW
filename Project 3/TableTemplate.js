'use strict';
class TableTemplate {
  static fillIn(id, dict, columnName) {
    const table = document.getElementById(id);
    table.style.visibility = "visible";
    if (!columnName) {
      const fill = new TemplateProcessor(table.innerHTML);
      table.innerHTML = fill.fillIn(dict);
    }
    else if (columnName === "Part Number") {
      let row = table.firstElementChild.firstElementChild;
      while (row) {
        const c = row.firstElementChild;
        const fill = new TemplateProcessor(c.textContent);
        c.textContent = fill.fillIn(dict);
        row = row.nextElementSibling;
      }
    }
    else if (columnName === "Length") {
      let row = table.firstElementChild.firstElementChild;
      while (row) {
        const c = row.lastElementChild;
        const fill = new TemplateProcessor(c.textContent);
        c.textContent = fill.fillIn(dict);
        row = row.nextElementSibling;
      }
    }
  }
}
