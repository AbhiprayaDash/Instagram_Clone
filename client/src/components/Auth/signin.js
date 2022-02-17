import { Fragment, useState } from "react"
import '../../DOM/auth'
import '../../css/signin.css'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SigninComponent = () =>{
    const [email,setemail] = useState('');
    const [contact,setcontact] = useState(0);
    const [password,setpassword] = useState('')
    const theme = createTheme();
    const handlesubmit = async (event,value) =>{
      event.preventDefault()
      const reqbody = {
        email,
        contact,
        password
      }
      try{
        const response = await axios.post('http://localhost:9000/v1/login/form',reqbody)
        const Accesstoken = response.data
        if(Accesstoken)
        {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log('success')
        setemail('')
        setpassword('')
        setcontact(0)
      }
      catch(error)
      {
        console.log(error)
      }
      console.log(reqbody)
    }
    const handlemail = (event,value) =>{
      setemail(event.target.value)
    }
    const handlecontact =(event,value)=>{
      setcontact(event.target.value)
    }
    const handlepassword=(event,value)=>{
      setpassword(event.target.value)
    }
    return(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handlesubmit}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              label="Email Address"
              name="email"
              onChange={handlemail}
              autoComplete="email"
              autoFocus
              required
            />
            <TextField
              margin="normal"
              fullWidth
              id="contact"
              label="Contact no"
              name="contact"
              type="number"
              value={contact}
              inputProps={{ maxLength: 10,minLength:10 }}
              onChange={handlecontact}
              autoComplete="contact"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlepassword}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}

export default SigninComponent
