import { useLoaderData } from '@remix-run/react'
import { app } from '~/electron.server'

export function loader () {
  return {
    userDataPath: app.getPath('userData')
  }
}

export default function Index () {
  const data = useLoaderData()
  return (
    <main>
      <div className='w-screen h-screen flex flex-col justify-center items-center bg-blue-900 text-white'>
        <h1 className='text-3xl font-bold'>
          remix-electron-demo
        </h1>
        <p className='text-xs'>{data.userDataPath}</p>
      </div>

    </main>
  )
}
