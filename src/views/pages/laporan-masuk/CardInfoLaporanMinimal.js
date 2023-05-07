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
import { Button } from '@mui/material'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

const CardInfoLaporanMinimal = () => {
  const router = useRouter()

  return (
    <Card>
      <CardContent sx={{ pt: theme => `${theme.spacing(5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Typography variant='body2'>Triwulan</Typography>
            <Typography variant='h6'>1 Tahun 2023</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Typography variant='body2' sx={{ mb: 1 }}>
              Status
            </Typography>
            <CustomChip
              size='small'
              skin='light'
              color='secondary'
              label='Draft'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 600 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Button
              variant='contained'
              startIcon={<Icon icon='mdi:send' />}
              onClick={() => {
                toast.success('Laporan berhasil dikirim.')
                router.push('/pelaporan')
              }}
            >
              Kirim Laporan
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardInfoLaporanMinimal
