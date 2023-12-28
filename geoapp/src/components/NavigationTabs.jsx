import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faQrcode, faGear, faMapLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import ToggleButton from './ToggleButton';
import PlusMinusStepper from './PlusMinusStepper';


const Navigation = ({onChildClick }) => {

  const [toggle, setToggle] = useState(0);

  function updateToggle(id) {
    setToggle(id)
  }

  const handleSwitchClick  = () => {
    onChildClick(true);
  };

  const navItems = [
    { id: 0, text: 'Karte', icon: faMapLocationDot },
    { id: 1, text: 'Hinzufügen', icon: faPenToSquare },
    { id: 2, text: 'Scannen', icon: faQrcode },
    { id: 3, text: 'Erfolge', icon: faMedal },
    { id: 4, text: 'Einstellungen', icon: faGear },
  ];

  return (
    <div className='z-[503] fixed inset-x-0 bottom-0'>
      <div className=' h-[10vh] bg-gray-200 flex border-t-2 text-xs border-gray-500 justify-center items-center text-gray-500'>
        <ul className='flex w-full'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`flex flex-col p-1 flex-1 flex-wrap gap-2 content-center rounded-xl select-none cursor-pointer ${toggle === item.id ? 'active-tabs' : ''}`}
              onClick={()=>updateToggle(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} className='text-xl'  />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`fixed bottom-[10vh] w-full p-5 top-0 bg-gray-50 ${toggle === 0 ? 'content' : ''}`}>
        <div className={toggle === 1 ? 'show-content' : 'content'}>
          <h1 className='font-semibold text-xl py-2'>{navItems[1].text}</h1>
          <hr />
          <p className='py-2'>
          Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten Handtücher mittels Fensterreiniger auszulüften, um auch die Wanduhr als Beispiel
          </p>
        </div>
        <div className={toggle === 2 ? 'show-content' : 'content'}>
          <h1 className='font-semibold text-xl py-2'>{navItems[2].text}</h1>
          <hr />
          <p className='py-2'>
          Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten Handtücher mittels Fensterreiniger auszulüften, um auch die Wanduhr als Beispiel
          </p>
        </div>
        <div className={toggle === 3 ? 'show-content' : 'content'}>
          <h1 className='font-semibold text-xl py-2'>{navItems[3].text}</h1>
          <hr />
          <p className='py-2'>
          Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten Handtücher mittels Fensterreiniger auszulüften, um auch die Wanduhr als Beispiel
          </p>
        </div>
        <div className={toggle === 4 ? 'show-content' : 'content'}>
          <h1 className='font-semibold text-xl py-2'>{navItems[4].text}</h1>
          <hr />
        
          <div className='flex gap-4 my-4 text-lg items-center justify-between'>
            <span>Sprachausgabe</span>
            <ToggleButton onClick={handleSwitchClick} />
          </div>
          <div className='flex gap-4 text-lg items-center justify-between'>
            <span>Radius Geocache [m]</span>
            <PlusMinusStepper />
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Navigation;