

const Logo = ({ miniSidebar }) => {
  return (
    <button className="flex items-center justify-start mx-0 h-16 cursor-pointer hover:bg-neutral-200 px-4 py-2 rounded">
      <div>
        Logo
      </div>
      <div className={`${miniSidebar ? 'hidden' : 'block'} px-4 mx-0`}>
        AppName.io
      </div>
    </button>
  )
}
export default Logo