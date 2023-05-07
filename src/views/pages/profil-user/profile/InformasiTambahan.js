// ** MUI Import
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box, IconButton, Tooltip } from '@mui/material'

const InformasiTambahan = () => {
  return (
    <Card>
      <CardHeader
        title='Informasi Tambahan'
        sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
        avatar={<Icon icon='mdi:information-variant-circle' />}
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
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Tahun Beroperasi</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          2009
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Luas Area</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          50.000
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Jumlah Karyawan</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          27.000
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Jenis Dokumen</Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Lorem Ipsum Dolor Sit Amet
        </Typography>
        <Typography sx={{ mr: 2, fontWeight: 600 }}>Dokumen Persetujuan Lingkungan</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img width={24} height={24} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
          <Typography variant='subtitle2' sx={{ ml: 2, fontWeight: 600 }}>
            invoice.pdf
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default InformasiTambahan
