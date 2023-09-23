import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from '@mui/material';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', textAlign: '' }}>
        <CardMedia 
          image={channelDetail?.snippet?.thumnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180', width: '180', mb: 2, border: '1px solid #e3e3e3' }}
        />
      <Typography variant="h6">
        {channelDetail?.snippet?.title}
        <CheckCircle xs={{ fontSize: 14, color: 'gray', ml: '5px' }} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </Typography>
      )}
      </CardContent>
    </Link>

  </Box>
}
  
export default ChannelCard