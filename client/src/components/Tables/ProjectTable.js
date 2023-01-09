import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Avatar from "@mui/material/Avatar";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { tableData } from "../../dummyData/tableData";
import { Typography } from "@mui/material";
import ReactPaginate from "react-paginate";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(224, 224, 224, 1)",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "sans-serif",
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function ProjectTable() {
  const [datas, setdatas] = React.useState(tableData.slice(0, 5));
  const [pageNumber, setPageNumber] = React.useState(0);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);

  const pageCount = Math.ceil(datas.length / perPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const offset1 = pageNumber * perPage;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 22 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Sale Person</StyledTableCell>
              <StyledTableCell align="right">jan</StyledTableCell>
              <StyledTableCell align="right">feb</StyledTableCell>
              <StyledTableCell align="right">mar</StyledTableCell>
              <StyledTableCell align="right">apr</StyledTableCell>
              <StyledTableCell align="right">may</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#fff" }}>
            {datas.slice(offset1, offset1 + perPage).map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={row.imgUrl}
                    sx={{ width: 44, height: 44 }}
                  />

                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "gray",
                    }}
                  >
                    {row.name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "gray",
                    }}
                  >
                    {row.jan}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "gray",
                    }}
                  >
                    {row.feb}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "gray",
                    }}
                  >
                    {row.mar}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "gray",
                    }}
                  >
                    {row.apr}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "gray",
                    }}
                  >
                    {row.may}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography
                    style={{
                      marginLeft: 12,
                      fontFamily: "Poppins",
                      fontWeight: "normal",
                      color: "blue",
                    }}
                  >
                    {"Detail"}
                  </Typography>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginLeft: "auto" }}>
        <ReactPaginate
          previousLabel={
            <ArrowLeftIcon
              style={{ color: offset === 0 && "#000", fontSize: 26 }}
            />
          }
          nextLabel={
            <ArrowRightIcon
              style={{
                color: pageCount === tableData.length && "#000",
                fontSize: 26,
              }}
            />
          }
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={pageCount}
          onPageChange={pageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default ProjectTable;
