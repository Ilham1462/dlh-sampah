// ** MUI Components
import Grid from '@mui/material/Grid'
import InformasiUmum from './InformasiUmum'
import LokasiKegiatan from './LokasiKegiatan'
import InformasiTambahan from './InformasiTambahan'

// ** Demo Components

const InformasiUmumTab = ({ data }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item xl={4} md={6} xs={12}>
        <InformasiUmum about={data.about} contacts={data.contacts} teams={data.teams} overview={data.overview} />
      </Grid>
      <Grid item xl={8} md={6} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <LokasiKegiatan />
          </Grid>
          <Grid item xs={12}>
            <InformasiTambahan />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

export default InformasiUmumTab
