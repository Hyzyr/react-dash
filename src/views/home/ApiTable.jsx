import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { CrossSVG } from "../../components/SVG";
import { useTranslation } from "react-i18next";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 16, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const columns = [
  {
    field: "firstName",
    headerName: "магазин",
    width: 200,
    // editable: true,
  },
  {
    field: "lastName",
    headerName: "Коментарий",
    width: 200,
    // editable: true,
  },
  {
    field: "age",
    cellClassName: "mutedData",
    headerName: "Ключ API",
    width: 380,
    // editable: true,
  },
];

const ApiTable = () => {
  const { t, i18n } = useTranslation();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const columnsData = React.useMemo(() => {
    const tableTitles = t("home.tableHeaders", { returnObjects: true });

    return columns.map((item, index) => ({
      ...item,
      headerName: tableTitles[index] ?? item.headerName,
    }));
  }, [t, i18n]);

  return (
    <div className="basicTable__outer">
      <DataGrid
        className="basicTable"
        rows={rows}
        columns={[
          ...columnsData,
          {
            field: "action",
            headerName: " ",
            sortable: false,
            filterable: false,
            cellClassName: "actions",
            width: 200,
            renderCell: ({ row }) => (
              <Button
                variant="text"
                color="error"
                onClick={() => console.log(row)}
                startIcon={CrossSVG}
                sx={{
                  textTransform: "lowercase",
                }}
              >
                удалить
              </Button>
            ),
          },
        ]}
        pageSizeOptions={[5, 10]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
};

export default ApiTable;
