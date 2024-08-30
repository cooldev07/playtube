import './App.css';
import { Provider } from 'react-redux'
import store from "./store/store"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import BookMark from './components/BookMark';
import History from"./components/History"
import SearchPage from './components/SearchPage';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter= createBrowserRouter([
      {
        path:"/",
        element:<Login/>
      },
      {
        path: "/body",
        element: 
        <>
         <Header />
         <Sidebar />
        <Body />
        </>
      },
      {
        path: "/Watch",
        element: 
        <>
         <Header />
         <Sidebar />
        <WatchPage />
        </>
      },
      {
        path:"/bookmark",
        element:
        <>
           <Header />
           <Sidebar />
        <BookMark/>
        </>

      },
      {
        path:"/history",
        element:
        <>
        <Header />
        <Sidebar />
        <History/>
        </>
       
      },
      {
        path:"/search",
        element:
        <>
        <Header />
        <Sidebar />
        <SearchPage/>
        </>
      }
  
])

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>

  );
}

export default App;
