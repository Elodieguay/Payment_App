import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import {BsFillHeartFill} from "react-icons/bs"
import addToCart from '../../functions/addToCart';


const Cards = ({datas}) => {


  return ( 
      <Card 
        sx={{ width: 300, height:150 }}
        >
        <div>
          <Typography level="title-lg">{datas.name}</Typography>
          <Typography level="body-sm">{datas.price}</Typography>
        </div>
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
            color='#F28585' 
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
            Mettre au panier
          </Button>
        </CardContent>
      </Card>
   
  )
}
export default Cards