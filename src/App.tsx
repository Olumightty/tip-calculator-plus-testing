import Calculator from './components/Calculator'
import Output from './components/Output'
import ValuesProvider from './components/ValuesProvider'

const App = () => {
  

  return (
    <main className='bg-(--green-400) h-[100vh] justify-end lg:justify-center flex flex-col gap-5 lg:gap-10 items-center'>
      <img src="/images/logo.svg" alt="logo" />
      <div className='bg-(--white) p-10 rounded-lg flex flex-col lg:flex-row gap-10 items-center'>
        <ValuesProvider>
          <Calculator/>
          <Output/>
        </ValuesProvider>
      </div>
      
    </main>
  )
}

export default App