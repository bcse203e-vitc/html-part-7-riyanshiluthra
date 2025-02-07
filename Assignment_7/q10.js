<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Table Generator</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid black;
    }
    th, td {
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>

  <h2>Dynamic Table Generator</h2>

  <label for="rows">Number of Rows:</label>
  <input type="number" id="rows" placeholder="Enter rows" required>
  <br><br>
  
  <label for="cols">Number of Columns:</label>
  <input type="number" id="cols" placeholder="Enter columns" required>
  <br><br>
  
  <button onclick="generateTable()">Generate Table</button>
  
  <br><br>
  <div id="tableContainer"></div>

  <script>
    function generateTable() {
     
      const numRows = document.getElementById("rows").value;
      const numCols = document.getElementById("cols").value;
   
      if (numRows <= 0 || numCols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
      }
      
     
      const table = document.createElement("table");

      for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < numCols; j++) {
          const cell = document.createElement("td");
          cell.textContent = `Row ${i+1}, Col ${j+1}`;
          row.appendChild(cell);
        }
        
        table.appendChild(row);
      }
      const tableContainer = document.getElementById("tableContainer");
      tableContainer.innerHTML = ""; 
      tableContainer.appendChild(table);
    }
  </script>

</body>
</html>
