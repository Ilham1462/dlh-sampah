// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import { Box, Button, Card, IconButton, Link, TextField, Tooltip } from '@mui/material'
import { useMemo } from 'react'
import Chip from 'src/@core/components/mui/chip'
import AppTable from 'src/@core/components/table/AppTable'
import { pengguna } from 'src/@fake-db/table/pengguna'
import { Icon } from '@iconify/react'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { styled } from '@mui/material/styles'
import { getInitials } from 'src/@core/utils/get-initials'

const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

const renderClient = row => {
  if (row.avatar?.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 30, height: 30 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={row.avatarColor || 'primary'}
        sx={{ mr: 3, width: 30, height: 30, fontSize: '.875rem' }}
      >
        {getInitials(row.nama ? row.nama : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const PenggunaPage = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row, index) => `${index + 1}`,
        id: 'no',
        header: 'No',
        width: 10
      },
      {
        id: 'user',
        header: 'User',
        cell: ({ row: { original: data } }) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(data)}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <StyledLink href='/apps/user/view/overview/'>{data.nama}</StyledLink>
              <Typography noWrap variant='caption'>
                {`@${data.username}`}
              </Typography>
            </Box>
          </Box>
        )
      },
      {
        id: 'email',
        accessorKey: 'email',
        header: 'Email'
      },
      {
        id: 'nohp',
        accessorKey: 'nohp',
        header: 'No HP'
      },
      {
        id: 'role',
        header: 'Role',
        cell: ({ row: { original: data } }) => (
          <Chip
            skin='light'
            size='small'
            label={data.role}
            color={'warning'}
            sx={{ height: 20, mt: 0.4, fontSize: '0.75rem', fontWeight: 600 }}
          />
        )
      },
      {
        id: 'aksi',
        header: 'Aksi',
        cell: ({ row }) => (
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
        )
      }
    ],

    []
  )

  return (
    <Grid container spacing={6}>
      <PageHeader
        subtitle=''
        title={
          <Typography variant='h5'>
            <Link href='/pengguna'>Pengguna</Link>
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Card>
          <Box
            sx={{
              p: 5,
              pb: 3,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button
              sx={{ mr: 4, mb: 2 }}
              color='primary'
              variant='contained'
              startIcon={<Icon icon='mdi:plus' fontSize={20} />}
            >
              Tambah
            </Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField size='small' sx={{ mr: 4, mb: 2 }} placeholder='Cari...' onChange={() => {}} />
            </Box>
          </Box>
          <AppTable columns={columns} initialData={pengguna} disablePagination getRowCanExpand={() => true} />
        </Card>
      </Grid>
    </Grid>
  )
}

PenggunaPage.acl = {
  subject: '/pengguna'
}

export default PenggunaPage
