import React from 'react'
import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas al Componente GitExpertApp', ()=>{

    test('Debe mostrarse correctamente la categoria', ()=>{
      
        //Arreglar- preparar mi mesa de trabajo, las declaraciones varibles y las importaciones
        const ca = ['Hola']
        const wrapper = shallow(<GifExpertApp defaultCategories = {ca}/>)

        //Actuar- voy a realizar mi test prueba unitaria

        expect(wrapper).toMatchSnapshot()

        //afirmarv- este es solo observar los resultados y analizar a
    })


    test("Mostrar una lista categorias", ()=>{
        //Arreglar
        const categoria = ['Marvel', 'flores', 'osos', 'gatos', 'perros', '##@@@']

        const wrapper = shallow( <GifExpertApp defaultCategories={categoria}/>)

        //actuar
        expect(wrapper).toMatchSnapshot()

    })
    test("debe mostrar todas las categorias", ()=>{
        //Arreglar
        const categorias = ['Dragon Ball', 'MC' ,'##11@@@']

        const wrapper = shallow( <GifExpertApp defaultCategories={categorias}/>)

        //actuar
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categorias.length)

    })


    
   
})