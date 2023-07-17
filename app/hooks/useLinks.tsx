import { Categories, NavigationLinks } from "@/types/interfaces";
import { FaIcons } from "react-icons/fa";
import { GiWindmill, GiIsland, GiBoatFishing, GiCastle, GiCaveEntrance, GiForestCamp, GiCactus, GiBarn } from 'react-icons/gi'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { MdOutlineVilla } from 'react-icons/md'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'

const useLinks = () => {

    const links: NavigationLinks[] = [
      
        {
            id: 1,
            icon: FaIcons,
            name: 'Link',
            href: '/'
        }
    ]

    const menuItems = [

        {
            id: 1,
            name: 'My Reservations',
            icon: FaIcons
        },
        {
            id: 2,
            name: 'My Favorites',
            icon: FaIcons
        },
        {
            id: 3,
            name: 'My Favorites ',
            icon: FaIcons
        },
        {
            id: 4,
            name: 'My Favorites ',
            icon: FaIcons
        },
       
    ]

    const categories: Categories[] = [

    
            { 
              id: 1, 
              name: 'Beach',
              icon: TbBeach,
              description: 'This property is close to the beach!',
            },
            { 
              id: 1,
              name: 'Windmills',
              icon: GiWindmill,
              description: 'This property is has windmills!',
            },
            { 
              id: 1,
              name: 'Modern',
              icon: MdOutlineVilla,
              description: 'This property is modern!'
            },
            { 
              id: 1,
              name: 'Countryside',
              icon: TbMountain,
              description: 'This property is in the countryside!'
            },
            { 
              id: 1,
              name: 'Pools',
              icon: TbPool,
              description: 'This is property has a beautiful pool!'
            },
            { 
              id: 1,
              name: 'Islands',
              icon: GiIsland,
              description: 'This property is on an island!'
            },
            { 
              id: 1,
              name: 'Lake',
              icon: GiBoatFishing,
              description: 'This property is near a lake!'
            },
            { 
              id: 1,
              name: 'Skiing',
              icon: FaSkiing,
              description: 'This property has skiing activies!'
            },
            { 
              id: 1,
              name: 'Castles',
              icon: GiCastle,
              description: 'This property is an ancient castle!'
            },
            { 
              id: 1,
              name: 'Caves',
              icon: GiCaveEntrance,
              description: 'This property is in a spooky cave!'
            },
            { 
              id: 1,
              name: 'Camping',
              icon: GiForestCamp,
              description: 'This property offers camping activities!'
            },
            { 
              id: 1,
              name: 'Arctic',
              icon: BsSnow,
              description: 'This property is in arctic environment!'
            },
            { 
              id: 1,
              name: 'Desert',
              icon: GiCactus,
              description: 'This property is in the desert!'
            },
            { 
              id: 1,
              name: 'Barns',
              icon: GiBarn,
              description: 'This property is in a barn!'
            },
            { 
              id: 1,
              name: 'Lux',
              icon: IoDiamond,
              description: 'This property is brand new and luxurious!'
            }
          ]
  
  return { categories, links, menuItems }
};

export default useLinks;