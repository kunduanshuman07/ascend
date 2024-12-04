import React from 'react'
import WrapperComp from '../components/WrapperComp'
import ProfileHeaderComp from '../components/ProfileHeaderComp'
import ProfileTabComp from '../components/ProfileTabComp'
import { Box } from '@mui/material'
import useFetch from '../hooks/useFetch'

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("User") || '{}')
  const { data, error, loading } = useFetch({
    url: `${process.env.REACT_APP_API_URL}/profile/fetch-profile`,
    method: 'POST',
    body: { username: user?.user }
  });
  return (
    <WrapperComp title={'Profile'} error={error} loading={loading}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ProfileHeaderComp name={data?.profile?.name} username={data?.profile?.username}/>
        <Box sx={{ display: "flex", marginTop: "10px", paddingX: "20px", width: "100%" }}>
          <ProfileTabComp data={data?.profile}/>
        </Box>
      </Box>
    </WrapperComp>
  )
}

export default ProfilePage