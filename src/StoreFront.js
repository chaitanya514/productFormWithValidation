
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Product from "./Product";
import "./index.css";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [name,setName] = useState("");
  const [details,setDetails] = useState("");
  const [products,setProducts] = useState([]);
  const [validation,setValidation] = useState("");

  function handleFormSubmit(event){
    event.preventDefault();
    if(!name){
      return setValidation("Please enter product name");
      
    }
    if(!details){
      return setValidation("Please enter Product details"); 
      
    }
    setProducts([...products,{
      id:products.length+1,
      name:name,
      details,details
    }])
    setName("")
    setDetails("")
    setValidation("")
  }
 function handleDelete(id){
   setProducts(products.filter(product=>product.id !== id))
 }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        Product Cart
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            label="Product Name:"
            name="name"
            value={name}
            onChange={(event)=>setName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Prdoduct Details"
            value={details}
            onChange={(event)=>setDetails(event.target.value)}
          />
         <div> <p style={{color:"red"}}>{validation}</p>
            </div>
      
          <input
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="btn btn-primary"
            value = "ADD PRODUCT"
          />
        </form>
      
        <div>{products.length===0?<p>Add your first product</p>:""} </div>
        <ul className="store-front">
          {products.map(product=><div>
            <li key={product.id}>
             <Product details={product} /> 
            <button className="btn-outline btn-delete" onClick={()=>handleDelete(product.id)}>Delete</button>
            </li>
            
          </div>)}
        
       
            
        </ul>

      </div>
     
    </Container>
  );
}


