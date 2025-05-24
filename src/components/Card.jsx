
// function Card() {
//   return (
//     <div>Card</div>
//   //  <Button variant="contained">hhh</Button>

//   )
// }

// export default Card

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function Card({fullName, title,family, imageUrl, deleteCharacter, id}) {
  return (
    <Box>
      <ImageList variant="masonry" cols={2} gap={2}>
       
          <ImageListItem>
            <img src={imageUrl} loading="lazy"/>
            <ImageListItemBar position="below" title={fullName} />
            <p>{title}</p>
            <p>{family}</p>
          </ImageListItem>
      
      </ImageList>
<button className="w-full" onClick={() => deleteCharacter(id)}>delete</button>
    </Box>
  );
}

export default Card