import React from 'react'
import WrapperComp from '../components/WrapperComp'
import ProfileComp from '../components/ProfileComp'

const ProfilePage = () => {
  return (
    <WrapperComp title={'Profile'}>
      <ProfileComp />
    </WrapperComp>
  )
}

export default ProfilePage