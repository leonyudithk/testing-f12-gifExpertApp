import React from 'react'
import { shallow } from "enzyme"
import { GifGrid } from '../../../components/GifGrid'


describe('pruebas al componente GifGrid', ()=>{
    test("debe mostrar todas las categorias", ()=>{
        //Arreglar
        const category  = '##11@@@'

        const wrapper = shallow( <GifGrid category={category}/>)

        //actuar
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGridItem').length).not.toBe(category.length)
        //expect(wrapper.find('GifGridItem').length).toBe(category.length)
    })
})