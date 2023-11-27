import React, { useState } from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import useProductsColumns, {
  cellClassNameGenerator,
} from "./hooks/useProductsColumns";
import { Checkbox, Typography } from "@mui/material";
import IconSVG from "components/items/iconSVG/IconSVG";

const ProductsTable = ({ data, updateData }) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const { t } = useTranslation();

  const onActivityChange = (data, isCheked) => {
    updateData({
      ...data,
      activity: isCheked ? "active" : "disabled",
    });
  };

  const columnsData = useProductsColumns({
    rewriteColumns: {
      activity: (colData) => ({
        ...colData,
        renderCell: ({ row }) => (
          <ActivityCell
            {...row}
            onChange={({ target }) => onActivityChange(row, target.checked)}
          />
        ),
      }),
      stdDiscount: (colData) => ({
        ...colData,
        renderCell: ({ row }) => (row.stdDiscount ? `${row.stdDiscount}%` : ""),
        cellClassName: cellClassNameGenerator("stdDiscount"),
      }),
      margin: (colData) => ({
        ...colData,
        renderCell: ({ row }) => (row.margin ? `${row.margin}%` : ""),
        cellClassName: cellClassNameGenerator("margin"),
      }),
    },
  });

  return (
    <DataGrid
      loading={!data || data?.length === 0}
      localeText={t("dataGrid.toolbar", {
        returnObjects: true,
      })}
      className="productTable"
      rows={data}
      columns={columnsData}
      pageSizeOptions={[5, 10]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      slots={{
        toolbar: CustomToolbar,
      }}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
};
const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="productTable__toolbar">
      <GridToolbarFilterButton
        componentsProps={{
          button: {
            startIcon: (
              <Typography className="inlineIcon" component="span">
                <IconSVG iconName={"filter"} />
              </Typography>
            ),
          },
        }}
      />
      <GridToolbarExport
        startIcon={
          <Typography className="inlineIcon" component="span">
            <IconSVG iconName={"export"} />
          </Typography>
        }
      />
      <GridToolbarColumnsButton
        startIcon={
          <Typography className="inlineIcon" component="span">
            <IconSVG iconName={"columns"} />
          </Typography>
        }
      />
      <GridToolbarDensitySelector
        startIcon={
          <Typography className="inlineIcon" component="span">
            <IconSVG iconName={"density"} />
          </Typography>
        }
      />
    </GridToolbarContainer>
  );
};
const ActivityCell = ({ activity, onChange }) => {
  return <Checkbox checked={activity === "active"} onChange={onChange} />;
};

export default ProductsTable;
