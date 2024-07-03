import { useState, useEffect } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Typography, Grid, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const Roster = () => {
    const [characters, setCharacters] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/characters');
            const data = await response.json();
            setCharacters(data);
        };
        fetchData();
    }, []);

    const handleFilterValueChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleSort = (column) => {
        if (column === sortColumn) {  
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const tableHeaders = ["Character Name", "Class", "Race", "Specialisation", "Professions"]; // add level

    const sortedCharacters = characters.slice().sort((a, b) => {
        if (!sortColumn) return 0; 

        const columnA = a[tableHeaders[sortColumn]].toLowerCase();
        const columnB = b[tableHeaders[sortColumn]].toLowerCase();

        if (columnA < columnB) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        if (columnA > columnB) {
            return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const Hui = () =>  {
        return (
            console.log('hello')
        )
    }

    return (
        <Paper>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={6}>
                <Typography variant="h2" alignItems="center" padding={2}sx={{ color: 'purple' }}>Roster</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ color: 'purple', '.MuiOutlinedInput-notchedOutline': { borderColor: 'purple' }, '& .MuiInputLabel-root': { color: 'purple' } }}
                        label="Search"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={filterValue}
                        onChange={handleFilterValueChange}
                    />
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {tableHeaders.map((header, index) => (
                                <TableCell key={index}>
                                    {header}
                                    {index < 5 && ( 
                                        sortColumn === index && (
                                            sortDirection === 'asc' ? <ArrowUpward /> : <ArrowDownward />
                                        )
                                    )}
                                    {index < 5 && (
                                        <IconButton size="small" onClick={() => handleSort(index)}>
                                            {sortColumn === index && (
                                                sortDirection === 'asc' ? <ArrowUpward /> : <ArrowDownward />
                                            )}
                                        </IconButton>
                                    )}
                                </TableCell>
                            ))}
                            <TableCell>
                                Sort by:
                                <Select
                                    value={sortColumn}
                                    onChange={(event) => handleSort(event.target.value)}
                                    sx={{ marginLeft: '8px', minWidth: '120px' }}
                                >
                                    <MenuItem value={null}>None</MenuItem>
                                    {tableHeaders.map((header, index) => (
                                        <MenuItem key={index} value={index}>{header}</MenuItem>
                                    ))}
                                </Select>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedCharacters.map((character, index) => (
                            <TableRow sx={{ color: 'purple' }} key={index}>
                                <TableCell sx={{ color: 'purple' }}>{character.name}</TableCell>
                                <TableCell sx={{ color: 'purple' }}>{character.class}</TableCell>
                                <TableCell sx={{ color: 'purple' }}>{character.race}</TableCell>
                                <TableCell sx={{ color: 'purple' }}>{character.specialisation}</TableCell>
                                <TableCell sx={{ color: 'purple' }}>{character.professions.join(', ')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default Roster;








