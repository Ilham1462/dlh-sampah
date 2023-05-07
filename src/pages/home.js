// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LaporanMasukCard from 'src/views/pages/dashboard/LaporanMasukCard'
import { Icon } from '@iconify/react'
import { useAuth } from 'src/hooks/useAuth'
import LaporanKeluarCard from 'src/views/pages/dashboard/LaporanKeluarCard'

const HomePage = () => {
  const { user } = useAuth()

  return (
    <>
      {user.role === 'admin' && (
        <Grid container spacing={6}>
          <Grid item sm={6}>
            <LaporanMasukCard
              title={'Limbah B3'}
              totalReport={49}
              data={[
                {
                  stats: '24',
                  title: 'Belum Diverifikasi',
                  color: 'primary',
                  gridSpacing: [5],
                  icon: <Icon icon='mdi:file-document-outline' />
                },
                {
                  stats: '12',
                  title: 'Terverifikasi',
                  color: 'success',
                  gridSpacing: [4],
                  icon: <Icon icon='mdi:check-all' />
                },
                {
                  stats: '13',
                  color: 'error',
                  title: 'Revisi',
                  gridSpacing: [3],
                  icon: <Icon icon='mdi:file-document-alert-outline' />
                }
              ]}
            />
          </Grid>
          <Grid item sm={6}>
            <LaporanMasukCard
              title={'Sampah Spesifik'}
              totalReport={49}
              data={[
                {
                  stats: '24',
                  title: 'Belum Diverifikasi',
                  color: 'primary',
                  gridSpacing: [5],
                  icon: <Icon icon='mdi:file-document-outline' />
                },
                {
                  stats: '12',
                  title: 'Terverifikasi',
                  color: 'success',
                  gridSpacing: [4],
                  icon: <Icon icon='mdi:check-all' />
                },
                {
                  stats: '13',
                  color: 'error',
                  title: 'Revisi',
                  gridSpacing: [3],
                  icon: <Icon icon='mdi:file-document-alert-outline' />
                }
              ]}
            />
          </Grid>
          <Grid item sm={6}>
            <LaporanMasukCard
              title={'Sampah Domestik'}
              totalReport={49}
              data={[
                {
                  stats: '24',
                  title: 'Belum Diverifikasi',
                  color: 'primary',
                  gridSpacing: [5],
                  icon: <Icon icon='mdi:file-document-outline' />
                },
                {
                  stats: '12',
                  title: 'Terverifikasi',
                  color: 'success',
                  gridSpacing: [4],
                  icon: <Icon icon='mdi:check-all' />
                },
                {
                  stats: '13',
                  color: 'error',
                  title: 'Revisi',
                  gridSpacing: [3],
                  icon: <Icon icon='mdi:file-document-alert-outline' />
                }
              ]}
            />
          </Grid>
        </Grid>
      )}

      {user.role === 'client' && (
        <Grid container spacing={6}>
          <Grid item sm={6}>
            <LaporanKeluarCard
              title={'Limbah B3'}
              totalReport={49}
              data={[
                {
                  stats: '24',
                  title: 'Belum Diverifikasi',
                  color: 'primary',
                  gridSpacing: [5],
                  icon: <Icon icon='mdi:file-document-outline' />
                },
                {
                  stats: '12',
                  title: 'Terverifikasi',
                  color: 'success',
                  gridSpacing: [4],
                  icon: <Icon icon='mdi:check-all' />
                },
                {
                  stats: '13',
                  color: 'error',
                  title: 'Revisi',
                  gridSpacing: [3],
                  icon: <Icon icon='mdi:file-document-alert-outline' />
                }
              ]}
            />
          </Grid>
          <Grid item sm={6}>
            <LaporanKeluarCard
              title={'Sampah Spesifik'}
              totalReport={49}
              data={[
                {
                  stats: '24',
                  title: 'Belum Diverifikasi',
                  color: 'primary',
                  gridSpacing: [5],
                  icon: <Icon icon='mdi:file-document-outline' />
                },
                {
                  stats: '12',
                  title: 'Terverifikasi',
                  color: 'success',
                  gridSpacing: [4],
                  icon: <Icon icon='mdi:check-all' />
                },
                {
                  stats: '13',
                  color: 'error',
                  title: 'Revisi',
                  gridSpacing: [3],
                  icon: <Icon icon='mdi:file-document-alert-outline' />
                }
              ]}
            />
          </Grid>
          <Grid item sm={6}>
            <LaporanKeluarCard
              title={'Sampah Domestik'}
              totalReport={49}
              data={[
                {
                  stats: '24',
                  title: 'Belum Diverifikasi',
                  color: 'primary',
                  gridSpacing: [5],
                  icon: <Icon icon='mdi:file-document-outline' />
                },
                {
                  stats: '12',
                  title: 'Terverifikasi',
                  color: 'success',
                  gridSpacing: [4],
                  icon: <Icon icon='mdi:check-all' />
                },
                {
                  stats: '13',
                  color: 'error',
                  title: 'Revisi',
                  gridSpacing: [3],
                  icon: <Icon icon='mdi:file-document-alert-outline' />
                }
              ]}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}

HomePage.acl = {
  subject: '/home'
}

export default HomePage
