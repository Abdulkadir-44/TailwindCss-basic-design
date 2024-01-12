import Header from "./components/Header"
export default function App() {
  return (
    <>
      <Header/>
      <main className="flex flex-1">
        <div id="content-div" className="h-full w-1/2 flex flex-col pt-40 pl-5">
          <h1 className="text-6xl text-white mb-6">Discovering the forest</h1>
          <p className="text-white italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque assumenda magni porro dolorum dolorem quidem sit..</p>
          <button className="inline-flex ml-4 mt-4 bg-white w-20 py-1 px-20 justify-center rounded-2xl hover:bg-transparent hover:backdrop-blur-md hover:text-white border-custom">Explore...</button>
        </div>
        <div id="cards-div" className="h-full flex-1 flex items-center justify-center">
          <div id="card-item" className="w-100 h-96 bg-cover bg-center cursor-pointer 
          hover:-translate-y-3 rounded-lg transition-all">
            
          </div>
        </div>
      </main>
    </>
  )
}