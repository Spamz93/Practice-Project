import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material'

function AdminTemplate() {
  return (
    <div className="AdminTemplate">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem button>
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Threads" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </Drawer>
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default AdminTemplate;