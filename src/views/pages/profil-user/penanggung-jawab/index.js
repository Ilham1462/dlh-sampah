// ** MUI Components
import Grid from '@mui/material/Grid'
import CardTeamMembers from './CardTeamMembers'

// ** Demo Components

const PenanggungJawabTab = ({ data }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item md={9} xs={12}>
        <CardTeamMembers />
      </Grid>
    </Grid>
  ) : null
}

export default PenanggungJawabTab
