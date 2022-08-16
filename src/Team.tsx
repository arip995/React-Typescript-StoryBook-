import React, { useEffect, useMemo, useCallback } from 'react'
import {Client} from './client'

const Team = () => {
    const getData = useCallback(async ()=>{
        try {
            const response = await Client.getEntries({content_type: 'navbar'})
            console.log(response)
        }catch(err) {
            console.log(err)
        }
    },[])
    useEffect(() => {
        getData()
    }, []);
  return (
    <div>Team</div>
  )
}

export default Team