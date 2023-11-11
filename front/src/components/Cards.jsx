import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { adaptV4Theme } from '@mui/material';
import {BsFillHeartFill} from "react-icons/bs"
// import { useNavigate } from 'react-router';
import addToCart from '../../fonctions/addToCart';


const Cards = ({datas}) => {







  return ( 
      <Card 
        sx={{ width: 300, height:150 }}
        >
        <div>
          <Typography level="title-lg">{datas.name}</Typography>
          <Typography level="body-sm">{datas.price}</Typography>
        </div>
        {/* <AspectRatio  ratio="4/4">
          <img
            src={datas.photo}
            loading="lazy"
            alt="film"
          />
        </AspectRatio>  */}
        <CardContent orientation="horizontal">  
          <IconButton
            aria-label="heart"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.5rem', right: '0.39rem' }}
          >
          <BsFillHeartFill 
            size={18} 
            color='pink' 
          />
            
          </IconButton>
          <Button
            variant="Plain"
            size="md"
            color="Neutral"
            aria-label={datas.Title}
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            onClick={()=> addToCart(datas.id)}
          >
            Acheter au panier
          </Button>
        </CardContent>
      </Card>
   
  )
}
export default Cards