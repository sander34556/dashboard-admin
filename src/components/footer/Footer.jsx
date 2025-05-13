import { appInfo } from '../../utils/appInfomation'


const Footer = () => {
  const { appName, copyRight, lastUpdate, version } = appInfo;
  return (
    <footer className="flex justify-between items-center bg-white px-4 py-4 text-xs">
      <p className='text-gray-600'>© Copyright {copyRight} {appName} {version}</p>
      <p className='text-blue-500 hidden sm:block'>Last Update : {lastUpdate}</p>
    </footer>
  )
}
export default Footer