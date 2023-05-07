// ** Third Party Imports
import axios from 'axios'
import UserProfile from 'src/views/pages/profil-user/UserProfile'

// ** Demo Components Imports

const UserProfileTab = ({ tab, data }) => {
  return <UserProfile tab={tab} data={data} />
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'profil' } },
      { params: { tab: 'penanggung-jawab' } },
      { params: { tab: 'projects' } },
      { params: { tab: 'connections' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await axios.get('/pages/profile', { params: { tab: params?.tab } })
  const data = res.data

  return {
    props: {
      data,
      tab: params?.tab
    }
  }
}

UserProfileTab.acl = {
  subject: '/profil'
}

export default UserProfileTab
