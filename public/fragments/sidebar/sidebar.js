createSidebar();

async function createSidebar() {
    const sidebar = document.getElementById("sidebar");

    const table = document.createElement("table");
    table.setAttribute("class", "table table-dark table-hover table-bordered");
    sidebar.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const trHeader = document.createElement("tr");
    thead.appendChild(trHeader);

    const thHeader = document.createElement("th");
    thHeader.setAttribute("scope", "col");
    trHeader.appendChild(thHeader);

    const header = document.createElement("h3");
    header.setAttribute("class", "text-light ps-2");
    header.textContent = "Subjects";
    thHeader.appendChild(header);
    
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const trVariables = document.createElement("tr");
    tbody.appendChild(trVariables);

    const thVariables = document.createElement("th");
    thVariables.setAttribute("scope", "row")
    trVariables.appendChild(thVariables);

    const variables = document.createElement("a");
    variables.setAttribute("href", "/variables");
    variables.setAttribute("class", "link-light text-decoration-none");
    thVariables.appendChild(variables);

    const liVariables = document.createElement("li");
    liVariables.textContent = "Variables";
    variables.appendChild(liVariables);

    const trFunctions = document.createElement("tr");
    tbody.appendChild(trFunctions);

    const thFunctions = document.createElement("th");
    thFunctions.setAttribute("scope", "row")
    trFunctions.appendChild(thFunctions);

    const functions = document.createElement("a");
    functions.setAttribute("href", "/functions");
    functions.setAttribute("class", "link-light text-decoration-none");
    thFunctions.appendChild(functions);

    const liFunctions = document.createElement("li");
    liFunctions.textContent = "Functions";
    functions.appendChild(liFunctions);

    const trObjects = document.createElement("tr");
    tbody.appendChild(trObjects);

    const thObjects = document.createElement("th");
    thObjects.setAttribute("scope", "row")
    trObjects.appendChild(thObjects);

    const objects = document.createElement("a");
    objects.setAttribute("href", "/objects");
    objects.setAttribute("class", "link-light text-decoration-none");
    thObjects.appendChild(objects);

    const liObjects = document.createElement("li");
    liObjects.textContent = "Objects";
    objects.appendChild(liObjects);
}