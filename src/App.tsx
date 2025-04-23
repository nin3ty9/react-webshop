import { useEffect, useState } from 'react'
import './App.css'
import Start from './Start';
import Products from './Products';
import About from './About';
import Admin from './Admin';
import Menu from './Menu';

function App() {
//States för att kolla om vi är admin och för vilken sida vi är på:
  const [admin, setAdmin] = useState<boolean>(false);
  const[page, setPage] = useState<string>("");

//Just nu sätts state:t admin till true när sidan laddas. I hard brackets längst ner kan vi
//lägga ett state att lyssna på så admin sätts vid ett visst state change:
  useEffect(() => {

    setAdmin(true);

  }, [])
//UseEffekt för att skapa URL (eftyersom det är en SPA-app) så att vi t.ex kan kopiera och dela länkar,
// få historik mm:
  useEffect(() => {
//Mutable variabel för att lagra URL:
    let pageUrl = page;
//Om den är tom så tar vi den från url-fältet:
    if(!pageUrl) {
      const queryParams = new URLSearchParams(window.location.search);
      const getUrl = queryParams.get("page");

      if (getUrl) {
        pageUrl = getUrl;
        setPage(getUrl);
        } else {
        pageUrl = "start"
      }
    }

    window.history.pushState(
      null, "", "?page=" + pageUrl
    )
//Denna useEffekt lyssnar på state:t page, dvs vilken sida som är laddad:
  }, [page])

  //App.tsx renderar en rubrik och vår meny:
  return (
    <>
      <h1>WebShop</h1>
      {/* Vi skickar in props:en admin och setPage så vi kan använda dem i Menu-komponenten: */}
      <Menu admin={admin} setPage={setPage} />
      <div>Page: {page}</div>

      {
        {
          "start": <Start />,
          "products": <Products />,
          "about": <About />,
          "admin": <Admin />
        } [page] || <Start /> //Default-värde för säkerhets skull
      }

    </>
  )
}

export default App;
