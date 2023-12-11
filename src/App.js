import './App.css';
import NavBar from './components/NavBar';
import ImageHolder from './components/ImageHolder';
import { Grid, Paper,Button } from '@mui/material';


function App() {
  return (
    <div >
     <NavBar/>
     <Grid container spacing={1}>
     <Grid item xs={3}>
      <img src={require("./images/image1.png")} alt={"school session"} style={{marginTop:20}} />
     </Grid>
     <Grid item xs={5}>
      <p style={{fontSize:26, marginTop:220}}>Welcome to <span style={{color:"#B59351"}} >School Home Students Collaborate</span>,
        Empowering Your School Community Through Seamless Collaboration</p>
        <br></br>
        <Paper sx={{backgroundColor:"#D9D9D9",width:"90%" ,padding:1,marginTop:1}} elevation={7}>
         <p style={{fontSize:24 , textAlign:"center"}}> Join Us!</p>
         <Grid container>
          <Grid item xs={6}>
           <Button variant='contained'  sx={{color:"#ffffff", borderRadius:8,backgroundColor:"#B59351",width:"50%",fontSize:16,margin: '0 auto',display:"flex"}}> Login</Button>
          </Grid>
          <Grid item xs={6}>
          <Button variant='contained'  sx={{color:"#ffffff", borderRadius:8,backgroundColor:"#B59351",width:"50%",fontSize:16,margin: '0 auto',display:"flex"}}> Sign up</Button>
          </Grid>
         </Grid>
        </Paper>
     </Grid>
     <Grid item xs={3}>
      <img src={require("./images/image2.png")} alt={"school session"} style={{marginTop:250}} />
     </Grid>
     </Grid>
     
    </div>
  );
}

export default App;
