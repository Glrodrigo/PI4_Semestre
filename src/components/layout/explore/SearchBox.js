import React, { useState } from 'react';

//Test
const pontos = [
    'igreja',
    'lago',
    'parque',
    'eventos',
    'diversos'
]

function SearchBox(){
    const [search, setSearch] = useState('')

    const filterPoint = pontos.filter((ponto) =>
         ponto.startsWith(search))

    return (
        <div className=" w-full h-full font-serif p-12 flex justify-center">

            <form onSubmit='{handleSubmit}' className='text-white'>
                <input
                type='text'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className='bg-red-950 p-4 px-52 rounded'
                />
                <button type="submit" className='bg-red-950 p-3 px-8 ml-1 rounded hover:bg-red-600'>Buscar</button>
                <ul>
                    {filterPoint.map((ponto) => {
                        <li key={ponto}>{ponto}</li>
                    })}
                </ul>
            </form>
        </div>
    )
}
export default SearchBox