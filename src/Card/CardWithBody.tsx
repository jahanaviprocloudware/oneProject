import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { FormWithUser } from '../Form/Form';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function CardWithBody (props) {
  const {uniqueKey,email, img, body, cardBody, name } = props;
  const [expanded, setExpanded] = React.useState(false);
   const [formvalues,setFormvalues] = React.useState({name: '', email:'',isEdit:'',userId:''})

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

if(formvalues.isEdit === 'card'){
    return (
      <FormWithUser formValues={formvalues} setFormvalues={setFormvalues}/>
    )
  }else {
  return (
    <Card sx={{ maxWidth: 345 }} key={uniqueKey}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="card header">
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt= {name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {body}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
         <span onClick={() => setFormvalues({name:name,email:email,isEdit:'card',userId:uniqueKey})}><EditIcon/></span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>About :</Typography>
          <Typography sx={{ marginBottom: 2 }}>
           {cardBody}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
}
