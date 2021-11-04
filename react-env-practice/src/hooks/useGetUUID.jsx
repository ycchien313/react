import { useState, useEffect } from 'react';

function useGetUUID() {
  const [uuid, setUuid] = useState(null)

  // 取得UUID
  const fetchUuid = async () => {
    const url = 'http://httpbin.org/uuid'

    // fetch(url, { method: 'GET' })
    //   .then((response) => response.json())
    //   .then((result) => { setUuid(result) })

    /* async/await */
    const response = await fetch(url, { method: 'GET' })

    if (!response.ok) {
      const message = `fetch 錯誤: ${response.status}`
      throw new Error(message)
    }

    const result = await response.json()
    const uuidStr = result.uuid

    setUuid(uuidStr)
  }

  useEffect(() => {
    fetchUuid()
  }, [])

  return uuid
}

export default useGetUUID
