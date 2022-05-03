import { NotFoundScreen } from './pages/NotFound';
import AppRoutes from './routes/AppRoutes';
import { Navbar } from './shared';
// import Prueba from './styled/Prueba';

function App() {
  return (
    <>
      {/* <Prueba /> */}
      {/* <AppRoutes/> */}
      <Navbar/>
      <NotFoundScreen/>
    </>
  );
}

export default App;

