import React from 'react';
import './App.css';

import { 
  useInput,
  useTabs,
  useTitle,
  useClick,
  useHover,
  useConfirm,
  usePreventLeave,
  useBeforeLeave,
  useFadeIn,
  useNetwork,
  useScroll,
  useFullscreen,
  useNotification,
  useAxios,
} from './hooks';

const sections = [
  {
    tab: 'Section 1',
    content: 'Content 1',
  },
  {
    tab: 'Section 2',
    content: 'Content 2',
  }
];

function App() {
  const name = useInput("Mr.", value => value.length < 20);
  const { currentItem, changeItem } = useTabs(0, sections);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  const onClick = () => console.log("click!");
  const clickRef = useClick(onClick);

  const onHover = () => console.log("hover!")
  const hoverRef = useHover(onHover);

  const deleteWorld = () => console.log('Delete the world...');
  const abort = () => console.log('You save the world...');
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);

  const fadeInB = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  const handleNetworkChange = online => {
    console.log(online ? 'We just went online' : 'We are offline');
  }
  const online = useNetwork(handleNetworkChange);

  const { y } = useScroll();

  const onFullscreen = (isFull) => {
    console.log(isFull ? 'We are fullscreen' : 'We are small');
  }
  const { element: fulllscreenEl, triggerFullscreen, exitFullscreen } = useFullscreen(onFullscreen);

  const triggerNotification = useNotification('Wow!!!', { body: 'It is amazing!' });

  const { state: { loading, data, error }, refetch } = useAxios({ url: 'https://yts.mx/api/v2/list_movies.json' })
  console.log(`Loading: ${loading}\nData: ${JSON.stringify(data)}\nError: ${error}`);

  return (
    <div className="App" style={{ height: '1000vh' }}>
        <h1>React Hooks</h1>
      <div>
        <h2>useInput</h2>
        <input placeholder="Name" {...name} />
      </div>
      <div>
        <h2>useTitle</h2>
        The page title will be changed after 5 seconds from this page opened.
      </div>
      <div>
        <h2>useTabs</h2>
        {sections.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
        <br />
        {currentItem.content}
      </div>
      <div>
        <h2>useClick</h2>
        <span ref={clickRef}>Click here!!!</span>
      </div>
      <div>
        <h2>useHover</h2>
        <span ref={hoverRef}>Hover here!!!</span>
      </div>
      <div>
        <h2>useConfirm</h2>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
      <div>
        <h2>usePreventLeave</h2>
        <button onClick={enablePrevent}>Enable prevent</button>
        <button onClick={disablePrevent}>Disable prevent</button>
      </div>
      <div>
        <h2>useBeforeLeave</h2>
        If the mouse pointer go out through top side of page, then a message will be printed on console.
      </div>
      <div>
        <h2>useFadeIn</h2>
        <b {...fadeInB}>Fade-in animation</b>
        <p {...fadeInP}>lalalalalalalalalalalala</p>
      </div>
      <div>
        <h2>useNetwork</h2>
        <p>{online ? 'Online' : 'Offline'}</p>
      </div>
      <div>
        <h2>useScroll</h2>
        <p style={{ color: y > 100 ? 'red' : 'blue' }}>The color of this text will be changed by scrolling</p>
      </div>
      <div>
        <h2>useFullscreen</h2>
        <img ref={fulllscreenEl} onClick={exitFullscreen} src='https://i.imgur.com/0n3860Y.jpg' style={{ width: '100px' }} alt='Chuu' />
        <button onClick={triggerFullscreen}>Make fullscreen!</button>
      </div>
      <div>
        <h2>useNotification</h2>
        <button onClick={triggerNotification}>Show notification</button>
      </div>
      <div>
        <h2>useAxios</h2>
        {loading && <h4>Loading</h4>}
        {error && <h4>Error: ${error}</h4>}
        <button onClick={refetch}>Refetch</button>
        {data && <p>${JSON.stringify(data)}</p>}
      </div>
    </div>
  );
}

export default App;
