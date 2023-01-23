import { Route, Routes } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsSegmentedNav } from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaWpforms } from 'react-icons/fa';
import NavLink from './shared/navLink';
import { CARD } from './shared/icons';
import SectionCard from './pages/cards/sectionCard';
import Card from './pages/cards/card';
export default function Nav() {

    const linksLists = [
        {
            'to': 'effect-3d',
            'className': 'link-active',
            'children': 'Effect-3d'
        },
        {
            'to': 'effect-fill',
            'className': 'link-active',
            'children': 'Effect-fill'
        },
        {
            'to': 'social-media-1',
            'className': 'link-active',
            'children': 'Social-media-1'
        },
        {
            'to': 'social-media-2',
            'className': 'link-active',
            'children': 'Social-media-2'
        },
        {
            'to': 'social-media-3',
            'className': 'link-active',
            'children': 'Social-media-3'
        },
        {
            'to': 'rating-stars',
            'className': 'link-active',
            'children': 'Rating-Stars'
        },
    ]

    const linksLoaders = [
        {
            'to': 'loader-basic',
            'className': 'link-active',
            'children': 'Loader-Basic'
        },
        {
            'to': 'asd',
            'className': 'link-active',
            'children': 'asd'
        },
    ]

    const linksForms = [
        {
            'to': 'form-double',
            'className': 'link-active',
            'children': 'Form-Double'
        },
        {
            'to': 'asd',
            'className': 'link-active',
            'children': 'asd'
        },
    ]

    const linksCards = [
        {
            'to': 'effect-3d',
            'className': 'link-active',
            'children': 'Effect-3d'
        },
        {
            'to': 'asd',
            'className': 'link-active',
            'children': 'asd'
        },
    ]

    const ListLists = () => {
        return (
            <ul className='ul-link'>
                {linksLists.map((e, i) => (
                    <li className='li-link' key={i}>
                        <NavLink to={e.to} className={e.className} children={e.children}></NavLink>
                    </li>
                ))}
            </ul>
        )
    }

    const ListLoaders = () => {
        return (
            <ul className='ul-link'>
                {linksLoaders.map((e, i) => (
                    <li className='li-link' key={i}>
                        <NavLink to={e.to} className={e.className} children={e.children}></NavLink>
                    </li>
                ))}
            </ul>
        )
    }

    const ListForms = () => {
        return (
            <ul className='ul-link'>
                {linksForms.map((e, i) => (
                    <li className='li-link' key={i}>
                        <NavLink to={e.to} className={e.className} children={e.children}></NavLink>
                    </li>
                ))}
            </ul>
        )
    }

    const ListCards = () => {
        return (
            <ul className='ul-link'>
                {linksCards.map((e, i) => (
                    <li className='li-link' key={i}>
                        <NavLink to={e.to} className={e.className} children={e.children}></NavLink>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <nav>
            <ul className="ul-links">
                <li className="li-link">
                    <NavLink to='/' className='link-active' children={<><AiOutlineHome /><span>Home</span></>}></NavLink>
                </li>
                <li className="li-link">
                    <NavLink to='/lists' className='link-active' children={<><BsSegmentedNav /><span> Lists</span></>}></NavLink>
                    <Routes>
                        <Route path='/' element={''}></Route>
                        <Route path='/lists' element={<ListLists />}>
                            <Route path='/lists:list' element={<ListLists />}></Route>
                        </Route>
                        <Route path='/forms' element={''}></Route>
                        <Route path='/loaders' element={''}>
                            <Route path='/loaders:loader' element={''}></Route>
                        </Route>
                        <Route path='/cards' element={''}>
                            <Route path='/cards:card' element={''}></Route>
                        </Route>
                    </Routes>
                </li>
                <li className="li-link">
                    <NavLink to='/forms' className='link-active' children={<><FaWpforms /><span> Form's</span></>}></NavLink>
                    <Routes>
                        <Route path='/' element={''}></Route>
                        <Route path='/lists' element={''}>
                            <Route path='/lists:list' element={''}></Route>
                        </Route>
                        <Route path='/forms' element={<ListForms />}>
                            <Route path='/forms:form' element={<ListForms />}></Route>
                        </Route>
                        <Route path='/loaders' element={''}>
                            <Route path='/loaders:loader' element={''}></Route>
                        </Route>
                        <Route path='/cards' element={''}>
                            <Route path='/cards:card' element={''}></Route>
                        </Route>
                    </Routes>
                </li>
                <li className="li-link">
                    <NavLink to='/loaders' className='link-active' children={<><BiLoaderAlt /><span> Loaders</span></>}></NavLink>
                    <Routes>
                        <Route path='/' element={''}></Route>
                        <Route path='/lists' element={''}>
                            <Route path='/lists:list' element={''}></Route>
                        </Route>
                        <Route path='/forms' element={''}></Route>
                        <Route path='/loaders' element={<ListLoaders />}>
                            <Route path='/loaders:loader' element={<ListLoaders />}></Route>
                        </Route>
                        <Route path='/cards' element={''}>
                            <Route path='/cards:card' element={''}></Route>
                        </Route>
                    </Routes>
                </li>
                <li className="li-link">
                    <NavLink to='/cards' className='link-active' children={<><CARD /><span> Cards</span></>}></NavLink>
                    <Routes>
                        <Route path='/' element={''}></Route>
                        <Route path='/lists' element={''}>
                            <Route path='/lists:list' element={''}></Route>
                        </Route>
                        <Route path='/forms' element={''}></Route>
                        <Route path='/loaders' element={''}>
                            <Route path='/loaders:loader' element={''}></Route>
                        </Route>
                        <Route path='/cards' element={<ListCards />}>
                            <Route path='/cards:card' element={<ListCards />}></Route>
                        </Route>
                    </Routes>
                </li>
            </ul>
        </nav>

    )
}