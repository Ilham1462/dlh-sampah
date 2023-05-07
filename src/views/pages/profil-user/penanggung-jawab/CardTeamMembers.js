// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Avatar from '@mui/material/Avatar'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableContainer from '@mui/material/TableContainer'
import CircularProgress from '@mui/material/CircularProgress'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { IconButton, Tooltip } from '@mui/material'
import { Icon } from '@iconify/react'

const data = [
  {
    value: 60,
    tasks: '082200000001',
    color: 'primary',
    project: 'Direktur',
    name: 'Dean Hogan',
    completedTasks: 87,
    post: 'fulan1@mail.com',
    src: '/images/avatars/1.png'
  },
  {
    value: 80,
    tasks: '082200000002',
    color: 'success',
    project: 'Wakil Direktrur',
    name: 'Hilda Rice',
    completedTasks: 340,
    post: 'fulan2@mail.com',
    src: '/images/avatars/8.png'
  },
  {
    value: 50,
    tasks: '082200000003',
    color: 'warning',
    project: 'Kepala Divisi',
    completedTasks: 50,
    name: "Andrew O'Brian",
    post: 'fulan3@mail.com',
    src: '/images/avatars/5.png'
  },
  {
    value: 70,
    tasks: '082200000004',
    color: 'warning',
    project: 'Kepala Divisi',
    completedTasks: 98,
    name: 'Elanor Price',
    post: 'fulan4@mail.com',
    src: '/images/avatars/2.png'
  },
  {
    value: 60,
    tasks: '082200000005',
    project: 'Kepala Divisi',
    color: 'warning',
    completedTasks: 12,
    name: 'Carl Oliver',
    post: 'fulan5@mail.com',
    src: '/images/avatars/3.png'
  }
]

const CardTeamMembers = () => {
  return (
    <Card>
      <CardHeader
        title='Penanggung Jawab'
        action={
          <Tooltip title='Tambah'>
            <IconButton>
              <Icon icon={'mdi:plus'}></Icon>
            </IconButton>
          </Tooltip>
        }
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ '& .MuiTableCell-root': { py: 0.75 } }}>
              <TableCell>Nama</TableCell>
              <TableCell>Jabatan</TableCell>
              <TableCell>Telepon</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child .MuiTableCell-root': { pb: theme => `${theme.spacing(4)} !important` },
                    '& .MuiTableCell-root': { border: 0, py: theme => `${theme.spacing(2.5)} !important` }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={row.src} alt={row.name} sx={{ width: '2.375rem', height: '2.375rem', mr: 3 }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                          {row.name}
                        </Typography>
                        <Typography noWrap variant='caption'>
                          {row.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <CustomChip
                      skin='light'
                      size='small'
                      color={row.color}
                      label={row.project}
                      sx={{ height: 20, fontSize: '0.75rem', fontWeight: 600 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex' }}>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        {row.tasks}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ display: 'flex', position: 'relative', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Tooltip title='Ubah' followCursor>
                        <IconButton color='info'>
                          <Icon icon='mdi:pencil-outline' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Hapus' followCursor>
                        <IconButton color='error'>
                          <Icon icon='mdi:delete-outline' />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default CardTeamMembers
