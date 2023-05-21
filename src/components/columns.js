import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer:"Id",
    Filter: ColumnFilter

  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer:"First Name",
    Filter: ColumnFilter
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer:"Last Name",
    Filter: ColumnFilter
  },
  {
    Header: "Email",
    accessor:"email",
    Footer:"Email",
    Filter: ColumnFilter
  },
  {
    Header: "Date of Birth",
    accessor:"date_of_birth",
    Footer:"Date of Birth",
    Cell: ({value}) =>{return format(new Date(value),"dd/MM/yyyy")},
    Filter: ColumnFilter
  },
  {
    Header: "Age",
    accessor:"age",
    Footer:"Age",
    Filter: ColumnFilter
  },
  {
    Header: "Country",
    accessor:"country",
    Footer:"Country",
    Filter: ColumnFilter
  },
  {
    Header: "Phone",
    accessor:"phone",
    Footer:"Phone",
    Filter: ColumnFilter
  },
];

export const GROUPED_COLUMNS=[
  {
    Header: "Id",
    accessor: "id",
    Footer:"Id"

  },
  {
    Header:"Name",
    Footer:"Name",
    columns:[
      {
        Header: "First Name",
        accessor: "first_name",
        Footer:"First Name"
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer:"Last Name"
      }
    ]
  },
  {
    Header:"Info",
    Footer:"Info",
    columns:[
      {
        Header: "Age",
        accessor:"age",
        Footer:"Age"
      },
      {
        Header: "Country",
        accessor:"country",
        Footer:"Country"
      },
      {
        Header: "Phone",
        accessor:"phone",
        Footer:"Phone"
      }
    ]
  }
]