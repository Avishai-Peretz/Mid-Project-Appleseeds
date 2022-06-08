
import HomePage from './components/screens/homePage/HomePage'
import  {MoralisProvider} from 'react-moralis'
import './assets/fonts.css';
import './assets/style.css';
import './assets/display.css';


export default function App() {
  return (
      <MoralisProvider
          appId={process.env.REACT_APP_APP_ID}
          serverUrl={process.env.REACT_APP_SERVER_URL}
      >             
          <HomePage className="column-c-c" style={{height:'1000px'}}/> 
      </MoralisProvider>
  )
}
