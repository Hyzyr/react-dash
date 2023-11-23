import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import IconSVG from "components/items/iconSVG/IconSVG";

const ApiTable = ({ rows, columns }) => {
  const { t, i18n } = useTranslation();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const length = rows.length;
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
                startIcon={<IconSVG iconName={"close2"} />}
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
        hideFooterPagination={length === 0}
      />
    </div>
  );
};

export default ApiTable;
