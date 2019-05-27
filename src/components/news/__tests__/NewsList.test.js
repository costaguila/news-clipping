import React from 'react';
import { render, mount } from '../../../setupTests';

import NewsList from '../NewsList';

describe('<NewsList />', () => {
  it('Deve possuir um titulo # g1', () => {
    //arrange
    const hasSearchBar = true
    const component = render(<NewsList debug  searchbar={hasSearchBar}/>);
    let header = component.find('.newssourceHeader h1')
    //act
    //assert
    expect(header[0]['children'][0].data).toEqual('# g1')
    expect(component).toMatchSnapshot();
  });
  it('Ao pesquisar por wsj deve possuir um titulo # wsj', () => {
      //arrange
      const hasSearchBar = true
      const component = mount(<NewsList debug  searchbar={hasSearchBar}/>);
      let busca =  component.find('.filterItens input')
      //act
      // Mudar o estado da aplicacao
      busca.prop('onChange')( {target: {value: 'wsj'}} )
      //Renderizar a aplicacoe novamente e selecionar o campo a ser verificado
      component.update()
      let header = component.find('.newssourceHeader h1')
      //assert
      expect(header.at(0).text()).toEqual('# wsj')
  });
});
