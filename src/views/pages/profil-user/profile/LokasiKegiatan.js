// ** MUI Import
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { IconButton, Tooltip } from '@mui/material'

const LokasiKegiatan = () => {
  return (
    <Card>
      <CardHeader
        title='Lokasi Kegiatan'
        sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
        avatar={<Icon icon='mdi:map-marker' />}
        titleTypographyProps={{ sx: { color: 'text.primary' } }}
        action={
          <Tooltip title='Edit'>
            <IconButton>
              <Icon icon={'mdi:pencil-outline'}></Icon>
            </IconButton>
          </Tooltip>
        }
      />
      <CardContent>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Nama Lokasi Kegiatan</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Lorem Ipsum Dolor Sit Amet
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Alamat Lokasi Kegiatan</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Lorem Ipsum Dolor Sit Amet
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Provinsi</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Sulawesi Tengah
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Kota/Kabupaten</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Morowali
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Titik Koordinat</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Lat: 000000000000, Long: 00000000000000
        </Typography>
      </CardContent>
    </Card>
  )
}

export default LokasiKegiatan
