
// function Card() {
//   return (
//     <div>Card</div>
//   //  <Button variant="contained">hhh</Button>

//   )
// }

// export default Card



 import { Box, Card as MaterialCard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';



// function Card({fullName, title,family, imageUrl, deleteCharacter, id}) {
//   return (
//     <Box>
    
       
//           <ImageListItem>
//             <img src={imageUrl} loading="lazy"/>
//             <ImageListItemBar position="below" title={fullName} />
//             <p>{title}</p>
//             <p>{family}</p>
//           </ImageListItem>
      
  
// <button className="w-full" onClick={() => deleteCharacter(id)}>delete</button>
//     </Box>
//   );
// }




function Card({fullName, title,family, imageUrl, deleteCharacter,id}) {
  return (
    <Box sx={{}}>

    <MaterialCard sx={{ maxWidth: 395, backgroundColor:"black",
      color:"whitesmoke"
    }}>
      <CardActionArea sx={{}}>
        <CardMedia 
          component="img"
          image={imageUrl}
          alt="character image"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">{fullName}</Typography>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" sx={{ color:"whitesmoke", fontSize:"1.3em" }}>{family}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={() => deleteCharacter(id)} >
          delete
        </Button>
      </CardActions>
    </MaterialCard>
          </Box>
  );
}
export default Card