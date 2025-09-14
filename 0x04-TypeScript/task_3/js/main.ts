/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a row
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and get new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
