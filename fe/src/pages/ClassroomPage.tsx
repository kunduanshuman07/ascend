import React from 'react'
import WrapperComp from '../components/WrapperComp'
import ClassroomComp from '../components/ClassroomComp'

const ClassroomPage = () => {
  return (
    <WrapperComp title={'Learning Paths'}>
      <ClassroomComp />
    </WrapperComp>
  )
}

export default ClassroomPage