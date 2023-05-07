// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MuiAvatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

const CardInfoLaporan = () => {
  return (
    <Card>
      <CardHeader
        title='PT. BTIIG'
        subheader='info@btiig.co.id'
        action={
          <CustomAvatar skin='light' sx={{ width: 48, height: 48, color: 'primary.main' }}>
            <Icon icon='mdi:factory' fontSize='2rem' />
          </CustomAvatar>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Typography variant='body2'>Jenis Laporan</Typography>
            <Typography variant='h6'>Limbah B3</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Typography variant='body2'>Triwulan</Typography>
            <Typography variant='h6'>1 Tahun 2023</Typography>
          </Grid>

          <Grid item xs={6}>
            <AvatarGroup max={4}>
              <MuiAvatar src='/images/avatars/1.png' />
              <MuiAvatar src='/images/avatars/2.png' />
              <MuiAvatar src='/images/avatars/3.png' />
              <MuiAvatar src='/images/avatars/4.png' />
              <MuiAvatar src='/images/avatars/5.png' />
              <MuiAvatar src='/images/avatars/6.png' />
              <MuiAvatar src='/images/avatars/7.png' />
            </AvatarGroup>
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: ['flex-end', 'flex-start'] }}>
            <CustomChip
              size='small'
              skin='light'
              color='warning'
              label='Belum Diverifikasi'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 600 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardInfoLaporan
