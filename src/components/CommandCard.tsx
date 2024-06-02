export default function CommandCard(props:{textCommand:string}){

    const { textCommand } = props
  
    return (
      <div className='w-full border p-4 shadow rounded-lg bg-gray-100 hover:bg-gray-100 cursor-pointer mt-1 mb-1'>
      {textCommand}
      </div>
    )
  }