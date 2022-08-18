import React from 'react'
import { shallow } from "enzyme"
import AppPrincipal from '../../components/CompPruebasTest/AppPrincipal';

describe('Pruebas al componente AppPrincipal', ()=>{
    test('validar el renderizados de saludos y el subtitulo', ()=>{
            //Arreglar
            const saludoEnviar = "Frontend 12 Bienvenidos"
            const subtituloEnviar = "Les quedan solo 4 clases para finalizar el Bootcamp"
            const wrapper = shallow(<AppPrincipal saludo={saludoEnviar} subtitulo={subtituloEnviar}/>)            //actuar

                //Actuar
                expect(wrapper).toMatchSnapshot()
    });
})