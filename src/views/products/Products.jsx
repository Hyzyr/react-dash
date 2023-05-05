import React, { useState } from "react";
import CenterBox from "../../components/layouts/CenterBox";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {
  ArrowDownSvg,
  ErrorSvg,
  FilterSvg,
  ExportSvg,
  ColumnSvg,
  DensitySvg,
  MarketSvg,
} from "../../components/SVG";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { GridToolbarDensitySelector } from "@mui/x-data-grid";

const columns = [
  {
    field: "wb",
    headerName: "ЛК WB",
    // editable: true,
  },
  {
    field: "status",
    headerName: "Активен",
    // editable: true,
    renderCell: ({ row }) => <StatusCell {...row} />,
  },
  {
    field: "brand",
    headerName: "Бренд",
    // editable: true,
  },
  {
    field: "item",
    cellClassName: "mutedData",
    headerName: "Предмет API",
    // editable: true,
  },
  {
    field: "chrt_id",
    headerName: "Код размера (chrt_id)",
    // editable: true,
    width: 170,
  },
  {
    field: "supplier_SKU",
    headerName: "Артикул поставщика",
    // editable: true,
    width: 150,
  },
  {
    field: "wb_SKU",
    cellClassName: "mutedData",
    headerName: "Артикул WB API",
    // editable: true,
    width: 120,
  },
  {
    field: "amount",
    headerName: "Размер",
    // editable: true,
  },
  {
    field: "barcode",
    headerName: "Баркод",
    // editable: true,
    width: 160,
  },
  {
    field: "price",
    cellClassName: "mutedData",
    headerName: "Розничная цена",
    width: 120,
    // editable: true,
  },
];
const rows = [
  {
    id: "1",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "error",
  },
  {
    id: "2",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "3",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "4",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "5",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "6",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "7",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "8",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "9",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "10",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "11",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "12",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "13",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "14",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "15",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "16",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "17",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
  {
    id: "18",
    wb: "Бла-бла-бла-бла",
    brand: "5oklock",
    item: "Лапомойки",
    chrt_id: "63295474",
    supplier_SKU: "АКСУ555",
    wb_SKU: "27815333",
    amount: 0,
    barcode: 2002610525001,
    price: 428,
    status: "active",
  },
];
const Products = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  return (
    <CenterBox>
      <div className="productTable__outer">
        <div className="productTable__header">
          <Select value={""} displayEmpty className="smallSelect">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Button
            children="загузить товары"
            variant="contained"
            size="extraSmall"
            color="success"
            startIcon={
              <Typography className="inlineIcon" component="span">
                {MarketSvg}
              </Typography>
            }
          />
          <Button
            children="шаблон товары"
            variant="contained"
            size="extraSmall"
            color="successLight"
            startIcon={
              <Typography className="inlineIcon" component="span">
                {MarketSvg}
              </Typography>
            }
          />
          <Button
            children="загрузить доп. Инфо."
            variant="contained"
            size="extraSmall"
            color="pink"
            startIcon={
              <Typography className="inlineIcon" component="span">
                {MarketSvg}
              </Typography>
            }
          />
          <Button
            children="шаблон доп. инфо."
            variant="contained"
            size="extraSmall"
            color="pinkLight"
            startIcon={
              <Typography className="inlineIcon" component="span">
                {MarketSvg}
              </Typography>
            }
          />
        </div>
        <DataGrid
          localeText={{
            toolbarFilters: "Фильтры",
            toolbarExport: "Экспорт",
            toolbarColumns: "Столбцы",
            toolbarDensity: "Вид",
          }}
          className="productTable"
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          slots={{
            toolbar: CustomToolbar,
          }}
          checkboxSelection
          disableRowSelectionOnClicks
        />
      </div>
    </CenterBox>
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
                {FilterSvg}
              </Typography>
            ),
          },
        }}
      />
      <GridToolbarExport
        startIcon={
          <Typography className="inlineIcon" component="span">
            {ExportSvg}
          </Typography>
        }
      />
      <GridToolbarColumnsButton
        startIcon={
          <Typography className="inlineIcon" component="span">
            {ColumnSvg}
          </Typography>
        }
      />
      <GridToolbarDensitySelector
        startIcon={
          <Typography className="inlineIcon" component="span">
            {DensitySvg}
          </Typography>
        }
      />
    </GridToolbarContainer>
  );
};
const StatusCell = ({ status }) => {
  if (status === "active")
    return (
      <Typography color="success.main" component="span" className="inlineIcon">
        {ArrowDownSvg}
      </Typography>
    );
  if (status === "error") return <span>{ErrorSvg}</span>;
  return "----";
};

export default Products;
