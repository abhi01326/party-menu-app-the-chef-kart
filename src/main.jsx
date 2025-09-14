import { StrictMode } from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'



import './index.css'
import App from './App.jsx'
import Ingredients from './Ingredients.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ingredients/:dishId" element={<Ingredients />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
