import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
