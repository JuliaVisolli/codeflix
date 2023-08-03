
import {Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Typography } from '@mui/material';
import { Route, Router, Routes } from 'react-router-dom';
import { CategoryList } from './features/counter/categories/ListCategory';
import { CategoryCreate } from './features/counter/categories/CreateCategory';
import { CategoryEdit } from './features/counter/categories/EditCategory';



 function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main"
        sx= {{
          height:"100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}      
      >
        <Header />
        <Layout> 
         <h1> Welcome to Rest Router</h1>
         <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id/" element={<CategoryEdit />} />
            
            <Route path='*' element={
              <Box sx = {{ color: "white"}}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h1">Page not found</Typography>

              </Box>


            }></Route>

          </Routes>
        </Layout>

      </Box>
    </ThemeProvider>

  
  )
}


 export default App;
