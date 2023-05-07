// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Autocomplete, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, Typography } from '@mui/material'

const ModalCreateLaporan = ({ title }) => {
  const router = useRouter()

  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button onClick={handleClickOpen} sx={{ mb: 8 }} variant='contained'>
        Buat Laporan
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText sx={{ mb: 3 }}>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText> */}
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='tahun' sx={{ mb: 2, maxWidth: 'max-content' }}>
                Tahun
              </InputLabel>
              <Autocomplete
                sx={{ width: 250 }}
                options={[{ title: 2020 }, { title: 2021 }, { title: 2022 }, { title: 2023 }]}
                id='tahun'
                defaultValue={{ title: 2023 }}
                getOptionLabel={option => option.title || ''}
                renderInput={params => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor='triwulan' sx={{ mb: 2, maxWidth: 'max-content' }}>
                Triwulan
              </InputLabel>
              <RadioGroup row aria-label='uncontrolled' name='triwulan' defaultValue='1'>
                <FormControlLabel value='1' control={<Radio />} label='1' />
                <FormControlLabel value='2' control={<Radio />} label='2' />
                <FormControlLabel value='3' control={<Radio />} label='3' />
                <FormControlLabel value='4' control={<Radio />} label='4' />
              </RadioGroup>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose} color='secondary'>
            Batal
          </Button>
          <Button onClick={() => router.push('/pelaporan/limbah-b3')}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default ModalCreateLaporan
