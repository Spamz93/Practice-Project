import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
 
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstname',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastname',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'fullname',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];
 
const Roster = () => {
  const [characters, setCharacters] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from /demoJson.json...');
        const response = await fetch('/demoJson.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
 
        setTimeout(() => {
          setCharacters(data);
          console.log('Characters set in state:', data);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, []);
 
  console.log('Rendering DataGrid with rows:', characters);
 
  return (
    <Box sx={{ height: '400px', width: '100%' }}>
      <DataGrid
        rows={characters}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          '& .MuiDataGrid-cell': {
            color: 'white',
          },
          '& .MuiDataGrid-columnHeaders': {
            color: 'purple',
          },
          '& .MuiDataGrid-footerContainer': {
            color: 'limegreen',
            '& .MuiTablePagination-root': {
              color: 'limegreen !important',
            },
          },
          '& .MuiDataGrid-checkboxInput': {
            color: 'limegreen',
          },
          '& .Mui-checked': {
            color: 'limegreen !important',
          },
          '& .MuiPaginationItem-root': {
            color: 'limegreen !important',
          },
        }}
      />
    </Box>
  );
};
 
export default Roster;